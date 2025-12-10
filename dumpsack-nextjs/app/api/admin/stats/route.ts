import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    // Get subscriber count
    const { count: subscriberCount } = await supabaseAdmin
      .from('subscribers')
      .select('*', { count: 'exact', head: true });

    // Get blog post count
    const { count: blogCount } = await supabaseAdmin
      .from('blog_posts')
      .select('*', { count: 'exact', head: true });

    // Get pending support messages count
    const { count: supportCount } = await supabaseAdmin
      .from('support_messages')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // Get total views from blog posts
    const { data: posts } = await supabaseAdmin
      .from('blog_posts')
      .select('views');

    const totalViews = posts?.reduce((sum, post) => sum + (post.views || 0), 0) || 0;

    return NextResponse.json({
      subscribers: subscriberCount || 0,
      blogPosts: blogCount || 0,
      supportMessages: supportCount || 0,
      pageViews: totalViews,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}

