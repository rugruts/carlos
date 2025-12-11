import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Public client for client-side operations (not used in blog pages anymore)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client with service role key for server-side admin operations
// This should only be used in server-side code (API routes, server components, server actions)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'draft' | 'published';
  author_name: string;
  author_email: string | null;
  read_time: number;
  views: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  tags: string[];
  status: 'active' | 'unsubscribed';
  subscribed_at: string;
  unsubscribed_at: string | null;
}

export interface SupportMessage {
  id: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'replied' | 'resolved';
  reply: string | null;
  replied_at: string | null;
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
}

