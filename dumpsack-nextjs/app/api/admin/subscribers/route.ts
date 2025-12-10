import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const session = await verifySession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const tag = searchParams.get('tag');
    const offset = (page - 1) * limit;

    let query = supabaseAdmin
      .from('subscribers')
      .select('*', { count: 'exact' })
      .order('subscribed_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (tag) {
      query = query.contains('tags', [tag]);
    }

    const { data: subscribers, error, count } = await query;

    if (error) {
      console.error('Failed to fetch subscribers:', error);
      return NextResponse.json(
        { success: false, error: { code: 'DATABASE_ERROR', message: 'Failed to fetch subscribers' } },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        subscribers: subscribers || [],
        total: count || 0,
        page,
        limit,
      },
    });
  } catch (error) {
    console.error('Subscribers error:', error);
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Internal server error' } },
      { status: 500 }
    );
  }
}

