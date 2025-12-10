import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    // Get JWT token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('session')?.value;

    const { target, platform, subject, htmlContent, preview } = await request.json();

    if (!subject || !htmlContent) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_INPUT', message: 'Subject and content are required' } },
        { status: 400 }
      );
    }

    // Determine tags based on target and platform
    let tags: string[] = [];
    if (target === 'newsletter') {
      tags = ['newsletter'];
    } else if (target === 'waitlist') {
      if (platform === 'android') {
        tags = ['android-waitlist'];
      } else if (platform === 'ios') {
        tags = ['ios-waitlist'];
      }
    }

    // Get subscribers based on tags
    let query = supabaseAdmin.from('subscribers').select('email').eq('status', 'active');

    if (tags.length > 0) {
      query = query.overlaps('tags', tags);
    }

    const { data: subscribers, error: subscribersError } = await query;

    if (subscribersError) {
      console.error('Failed to fetch subscribers:', subscribersError);
      return NextResponse.json(
        { success: false, error: { code: 'DATABASE_ERROR', message: 'Failed to fetch subscribers' } },
        { status: 500 }
      );
    }

    // Create campaign record
    const { data: campaign, error: campaignError } = await supabaseAdmin
      .from('campaigns')
      .insert({
        target,
        platform: platform || null,
        subject,
        html_content: htmlContent,
        preview_text: preview || null,
        recipients_count: subscribers?.length || 0,
        status: 'queued',
        sent_at: null,
      })
      .select()
      .single();

    if (campaignError) {
      console.error('Failed to create campaign:', campaignError);
      return NextResponse.json(
        { success: false, error: { code: 'DATABASE_ERROR', message: 'Failed to create campaign' } },
        { status: 500 }
      );
    }

    // Call backend API to send campaign emails
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE || 'https://api.dumpsack.xyz';

    try {
      const sendResponse = await fetch(`${apiUrl}/api/campaigns/${campaign.id}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const sendResult = await sendResponse.json();

      if (!sendResponse.ok) {
        console.error('Backend failed to send campaign:', sendResult);
        // Update campaign status to failed
        await supabaseAdmin
          .from('campaigns')
          .update({
            status: 'failed',
            error: sendResult.error?.message || 'Failed to send emails'
          })
          .eq('id', campaign.id);

        return NextResponse.json(
          { success: false, error: { code: 'SEND_FAILED', message: 'Failed to send campaign emails' } },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          campaignId: campaign.id,
          recipientsCount: subscribers?.length || 0,
          emailsSent: sendResult.data?.emailsSent || 0,
          status: sendResult.data?.status || 'sent',
        },
      });
    } catch (backendError) {
      console.error('Failed to call backend send API:', backendError);

      // Update campaign status to failed
      await supabaseAdmin
        .from('campaigns')
        .update({
          status: 'failed',
          error: 'Backend API unavailable'
        })
        .eq('id', campaign.id);

      return NextResponse.json(
        { success: false, error: { code: 'BACKEND_ERROR', message: 'Backend email service unavailable' } },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Send campaign error:', error);
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Internal server error' } },
      { status: 500 }
    );
  }
}

