'use client';

import React from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { subscribeNewsletter } from '@/lib/api-client';

interface NewsletterInlineProps {
  placeholder?: string;
  tags?: string[];
}

export default function NewsletterInline({ placeholder = 'Enter your email', tags = ['newsletter'] }: NewsletterInlineProps) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    const result = await subscribeNewsletter(email, tags);

    if (result.success) {
      setStatus('success');
      setEmail('');

      // Track event
      if (typeof window !== 'undefined' && (window as any).plausible) {
        const eventName = tags.includes('android-waitlist') ? 'android_waitlist_signup'
          : tags.includes('ios-waitlist') ? 'ios_waitlist_signup'
          : 'newsletter_subscribe';
        (window as any).plausible(eventName);
      }
    } else {
      setStatus('error');
      setErrorMessage(result.error?.message || 'Failed to subscribe. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="card p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-toxic" size={32} />
        <h4 className="mb-2">Check your email!</h4>
        <p className="text-sm text-muted mb-4">
          We sent a confirmation link to verify your subscription.
        </p>
        <p className="text-xs text-muted mb-4">
          Click the link in the email to complete your subscription.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs text-toxic hover:underline"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            disabled={status === 'loading'}
            className="w-full h-12 rounded-xl border border-glass-border bg-glass/50 pl-12 pr-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic/20 focus:bg-glass transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary h-12 px-6 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-sm text-orange">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}

