import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { hashPassword } from '@/lib/password';

export async function POST(request: NextRequest) {
  try {
    const { newPassword } = await request.json();

    if (!newPassword || newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    const newHash = await hashPassword(newPassword);

    const { error } = await supabaseAdmin
      .from('admin_users')
      .update({ 
        password_hash: newHash, 
        updated_at: new Date().toISOString() 
      })
      .eq('email', 'rugruts@proton.me');

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json(
      { error: 'Failed to update password' },
      { status: 500 }
    );
  }
}

