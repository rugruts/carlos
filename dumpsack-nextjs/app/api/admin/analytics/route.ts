import { NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    // Fetch all subscribers to debug tags
    const { data: allSubscribers } = await supabaseAdmin
      .from('subscribers')
      .select('email, tags');

    console.log('=== DEBUG: All subscribers ===');
    console.log(JSON.stringify(allSubscribers, null, 2));

    // Fetch subscriber counts
    const { count: newsletterCount, data: newsletterData } = await supabaseAdmin
      .from('subscribers')
      .select('*', { count: 'exact' })
      .contains('tags', ['newsletter']);

    console.log('Newsletter count:', newsletterCount);
    console.log('Newsletter data:', newsletterData);

    const { count: androidCount, data: androidData } = await supabaseAdmin
      .from('subscribers')
      .select('*', { count: 'exact' })
      .contains('tags', ['android-waitlist']);

    console.log('Android count:', androidCount);
    console.log('Android data:', androidData);

    const { count: iosCount } = await supabaseAdmin
      .from('subscribers')
      .select('*', { count: 'exact', head: true })
      .contains('tags', ['ios-waitlist']);

    // Fetch support message counts
    const { count: pendingSupport } = await supabaseAdmin
      .from('support_messages')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // Mock health data (replace with actual health checks if available)
    const apiHealth = {
      status: 'healthy' as const,
      uptime: 99.9,
      responseTime: 120,
    };

    const rpcHealth = {
      status: 'healthy' as const,
      uptime: 99.8,
      responseTime: 85,
    };

    return NextResponse.json({
      success: true,
      data: {
        apiHealth,
        rpcHealth,
        newsletter: {
          subscribers: newsletterCount || 0,
        },
        waitlist: {
          android: androidCount || 0,
          ios: iosCount || 0,
        },
        support: {
          pending: pendingSupport || 0,
        },
        requests24h: 0, // TODO: Implement request tracking
        errors24h: 0, // TODO: Implement error tracking
      },
    });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to fetch analytics' } },
      { status: 500 }
    );
  }
}

