'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Key, Mail, Globe, AlertCircle, CheckCircle } from 'lucide-react';


export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        throw new Error('New passwords do not match');
      }

      if (passwordData.newPassword.length < 8) {
        throw new Error('Password must be at least 8 characters');
      }

      const res = await fetch('/api/admin/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: passwordData.newPassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to update password');
      }

      setMessage({ type: 'success', text: 'Password updated successfully' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: unknown) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to update password'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-void">
      <header className="border-b border-glass-border bg-elevated/50 backdrop-blur-lg sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="text-toxic hover:underline">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Settings</h1>
              <p className="text-sm text-muted">Manage your admin account and site settings</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {message && (
            <div className={`p-4 rounded-lg border flex items-start gap-3 ${
              message.type === 'success' 
                ? 'bg-green-500/10 border-green-500/20' 
                : 'bg-orange/10 border-orange/20'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle size={20} className="text-orange flex-shrink-0 mt-0.5" />
              )}
              <p className={`text-sm ${message.type === 'success' ? 'text-green-500' : 'text-orange'}`}>
                {message.text}
              </p>
            </div>
          )}

          {/* Account Settings */}
          <div className="card p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-toxic/10 flex items-center justify-center">
                  <Key size={24} className="text-toxic" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Account Security</h2>
                  <p className="text-sm text-muted">Update your password</p>
                </div>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Password</label>
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    required
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                    placeholder="Enter new password (min 8 characters)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    required
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                    placeholder="Confirm new password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={16} />
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </div>
          </div>

          {/* Site Information */}
          <div className="card p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                  <Globe size={24} className="text-orange" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Site Information</h2>
                  <p className="text-sm text-muted">Current configuration</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-glass/30 border border-glass-border">
                  <div className="text-sm text-muted mb-1">Admin Email</div>
                  <div className="font-medium">rugruts@proton.me</div>
                </div>

                <div className="p-4 rounded-lg bg-glass/30 border border-glass-border">
                  <div className="text-sm text-muted mb-1">Contact Email</div>
                  <div className="font-medium">contact@dumpsack.xyz</div>
                </div>

                <div className="p-4 rounded-lg bg-glass/30 border border-glass-border">
                  <div className="text-sm text-muted mb-1">Supabase Project</div>
                  <div className="font-medium">xfspvrmwvzjsqcopkwci</div>
                </div>

                <div className="p-4 rounded-lg bg-glass/30 border border-glass-border">
                  <div className="text-sm text-muted mb-1">Database Region</div>
                  <div className="font-medium">eu-west-1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

