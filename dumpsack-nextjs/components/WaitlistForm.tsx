'use client';

import React from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { joinAndroidWaitlist } from '@/lib/api-client';

interface WaitlistFormProps {
  placeholder?: string;
}

export default function WaitlistForm({ placeholder = 'Enter your email' }: WaitlistFormProps) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    const result = await joinAndroidWaitlist(email);

    if (result.success) {
      setStatus('success');
      setSuccessMessage(result.message || "You're on the waitlist!");
      setEmail('');

      // Track event
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('waitlist_join', {
          props: { platform: 'android' }
        });
      }
    } else {
      setStatus('error');
      setErrorMessage(result.error?.message || 'Failed to join waitlist. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-toxic" size={32} />
        <h4 className="mb-2">You're on the list!</h4>
        <p className="text-sm text-muted mb-4">
          {successMessage}
        </p>
        <p className="text-xs text-muted mb-4">
          Check your email for confirmation.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs text-toxic hover:underline"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-glass-border bg-glass px-10 py-3 text-white placeholder:text-muted focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic focus:ring-offset-2 focus:ring-offset-void disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <div className="mt-2 flex items-center gap-2 text-sm text-orange">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}

