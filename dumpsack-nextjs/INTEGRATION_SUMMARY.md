# DumpSack Marketing Website - Frontend Implementation Guide

**API Base URL:** `https://api.dumpsack.xyz`  
**Date:** 2025-12-08

---

## Table of Contents

1. [API Client Setup](#api-client-setup)
2. [Newsletter Subscription](#newsletter-subscription)
3. [Android Waitlist](#android-waitlist)
4. [Support Contact Form](#support-contact-form)
5. [Admin Dashboard](#admin-dashboard)
6. [Error Handling](#error-handling)
7. [Rate Limits](#rate-limits)

---

## API Client Setup

### Base Configuration

```typescript
// lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.dumpsack.xyz';

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
  };
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();
  
  if (!response.ok) {
    return {
      success: false,
      error: data.error || {
        code: 'UNKNOWN_ERROR',
        message: data.message || 'Something went wrong',
      },
    };
  }

  return data;
}

export { apiRequest, API_BASE };
export type { ApiResponse };
```

---

## Newsletter Subscription

### Endpoint

```
POST /api/newsletter/subscribe
```

### Request

```typescript
interface SubscribeRequest {
  email: string;
  tags?: string[];  // Default: ['website']
}

// Common tags:
// - 'website'         - General newsletter
// - 'android_waitlist' - Android app waitlist
// - 'ios_waitlist'     - iOS app waitlist
```

### Response

```typescript
// Success
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}

// Error - Invalid email
{
  "success": false,
  "error": {
    "code": "INVALID_EMAIL",
    "message": "Please provide a valid email address"
  }
}

// Error - Rate limited
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later."
  }
}
```

### Implementation

```typescript
// lib/api.ts
export async function subscribeNewsletter(
  email: string,
  tags: string[] = ['website']
): Promise<ApiResponse> {
  return apiRequest('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email, tags }),
  });
}
```

### React Component Example

```tsx
// components/NewsletterForm.tsx
'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '@/lib/api';

interface Props {
  tags?: string[];
  buttonText?: string;
  successMessage?: string;
}

export function NewsletterForm({
  tags = ['website'],
  buttonText = 'Subscribe',
  successMessage = 'Thanks for subscribing!',
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const result = await subscribeNewsletter(email, tags);

    if (result.success) {
      setStatus('success');
      setMessage(result.message || successMessage);
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.error?.message || 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl
                     text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl
                     hover:bg-green-400 disabled:opacity-50 transition-colors"
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-green-500 text-sm">{message}</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">{message}</p>
      )}
    </form>
  );
}
```

### Usage Examples

```tsx
// Homepage - General newsletter
<NewsletterForm />

// Download page - Android waitlist
<NewsletterForm
  tags={['android_waitlist']}
  buttonText="Join Waitlist"
  successMessage="You're on the list! We'll notify you when Android launches."
/>

// Both newsletter + waitlist
<NewsletterForm
  tags={['website', 'android_waitlist']}
  buttonText="Subscribe & Join Waitlist"
/>
```

---

## Android Waitlist

Dedicated endpoint for Android waitlist (simpler than newsletter with tags).

### Endpoint

```
POST /api/waitlist/android
```

### Request

```typescript
interface WaitlistRequest {
  email: string;
}
```

### Response

```typescript
// Success
{
  "success": true,
  "message": "You're on the Android waitlist! We'll notify you when it launches."
}
```

### Implementation

```typescript
// lib/api.ts
export async function joinAndroidWaitlist(email: string): Promise<ApiResponse> {
  return apiRequest('/api/waitlist/android', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
```

---

## Support Contact Form

### Endpoint

```
POST /api/support/message
```

### Request

```typescript
interface SupportMessageRequest {
  email: string;
  subject: string;   // max 200 chars
  message: string;   // max 5000 chars
}
```

### Response

```typescript
// Success
{
  "success": true,
  "message": "Message sent successfully. We'll respond within 24-48 hours."
}

// Error - Missing fields
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMS",
    "message": "Email, subject, and message are required"
  }
}
```

### Implementation

```typescript
// lib/api.ts
export async function sendSupportMessage(
  email: string,
  subject: string,
  message: string
): Promise<ApiResponse> {
  return apiRequest('/api/support/message', {
    method: 'POST',
    body: JSON.stringify({ email, subject, message }),
  });
}
```

### React Component Example

```tsx
// components/SupportForm.tsx
'use client';

import { useState } from 'react';
import { sendSupportMessage } from '@/lib/api';

export function SupportForm() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const result = await sendSupportMessage(form.email, form.subject, form.message);

    if (result.success) {
      setStatus('success');
      setStatusMessage(result.message || 'Message sent!');
      setForm({ email: '', subject: '', message: '' });
    } else {
      setStatus('error');
      setStatusMessage(result.error?.message || 'Failed to send message');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-green-500 mb-2">Message Sent</h3>
        <p className="text-neutral-400">{statusMessage}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-green-500 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
        className="px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl
                   text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500"
      />

      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        maxLength={200}
        required
        className="px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl
                   text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message..."
        rows={6}
        maxLength={5000}
        required
        className="px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl
                   text-white placeholder:text-neutral-500 focus:outline-none focus:border-green-500 resize-none"
      />

      {status === 'error' && (
        <p className="text-red-500 text-sm">{statusMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl
                   hover:bg-green-400 disabled:opacity-50 transition-colors"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

---

## Admin Dashboard

### Analytics Endpoint

```
GET /api/admin/analytics
```

### Response

```typescript
interface AnalyticsResponse {
  success: true;
  data: {
    apiHealth: {
      status: 'healthy' | 'degraded' | 'down';
      uptime: number;      // percentage
      responseTime: number; // ms
    };
    rpcHealth: {
      status: 'healthy' | 'degraded' | 'down' | 'unknown';
      uptime: number;
      responseTime: number;
    };
    subscribers: {
      total: number;
      androidWaitlist: number;
    };
    support: {
      pending: number;
    };
    requests24h: number;
    errors24h: number;
  };
}
```

### List Subscribers

```
GET /api/admin/subscribers?page=1&limit=50&tag=android_waitlist
```

### Response

```typescript
interface SubscribersResponse {
  success: true;
  data: {
    subscribers: Array<{
      id: string;
      email: string;
      tags: string[];
      status: 'active' | 'unsubscribed';
      subscribed_at: string;
      unsubscribed_at: string | null;
    }>;
    total: number;
    page: number;
    limit: number;
  };
}
```

### List Support Messages

```
GET /api/admin/support?page=1&limit=50&status=pending
```

### Response

```typescript
interface SupportMessagesResponse {
  success: true;
  data: {
    messages: Array<{
      id: string;
      email: string;
      subject: string;
      message: string;
      status: 'pending' | 'replied' | 'resolved';
      reply: string | null;
      replied_at: string | null;
      created_at: string;
    }>;
    total: number;
    page: number;
    limit: number;
  };
}
```

### Implementation

```typescript
// lib/api.ts
export async function getAdminAnalytics(): Promise<ApiResponse<AnalyticsData>> {
  return apiRequest('/api/admin/analytics');
}

export async function getSubscribers(
  page = 1,
  limit = 50,
  tag?: string
): Promise<ApiResponse<SubscribersData>> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (tag) params.set('tag', tag);
  return apiRequest(`/api/admin/subscribers?${params}`);
}

export async function getSupportMessages(
  page = 1,
  limit = 50,
  status?: string
): Promise<ApiResponse<SupportMessagesData>> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (status) params.set('status', status);
  return apiRequest(`/api/admin/support?${params}`);
}
```

---

## Error Handling

### Error Response Format

All API errors follow this structure:

```typescript
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_EMAIL` | 400 | Email format is invalid |
| `INVALID_PARAMS` | 400 | Required parameters missing |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

### Global Error Handler

```typescript
// lib/api.ts
export function getErrorMessage(error: ApiError['error'] | undefined): string {
  if (!error) return 'An unexpected error occurred';

  switch (error.code) {
    case 'RATE_LIMITED':
      return 'Too many attempts. Please wait a moment and try again.';
    case 'INVALID_EMAIL':
      return 'Please enter a valid email address.';
    case 'INVALID_PARAMS':
      return error.message || 'Please fill in all required fields.';
    default:
      return error.message || 'Something went wrong. Please try again.';
  }
}
```

---

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| `POST /api/newsletter/subscribe` | 5 requests / IP / hour |
| `POST /api/waitlist/android` | 5 requests / IP / hour |
| `POST /api/support/message` | 3 requests / IP / hour |
| `GET /api/admin/*` | No limit |

### Handling Rate Limits

```typescript
// Example with exponential backoff
async function subscribeWithRetry(email: string, retries = 3): Promise<ApiResponse> {
  for (let i = 0; i < retries; i++) {
    const result = await subscribeNewsletter(email);

    if (result.success || result.error?.code !== 'RATE_LIMITED') {
      return result;
    }

    // Wait before retry (1s, 2s, 4s)
    await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
  }

  return { success: false, error: { code: 'RATE_LIMITED', message: 'Please try again later' } };
}
```

---

## Complete API Client

```typescript
// lib/api.ts - Complete implementation
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.dumpsack.xyz';

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: { code: string; message: string };
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });
    return await response.json();
  } catch (error) {
    return { success: false, error: { code: 'NETWORK_ERROR', message: 'Network error' } };
  }
}

// Newsletter
export const subscribeNewsletter = (email: string, tags = ['website']) =>
  apiRequest('/api/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email, tags }) });

// Android Waitlist
export const joinAndroidWaitlist = (email: string) =>
  apiRequest('/api/waitlist/android', { method: 'POST', body: JSON.stringify({ email }) });

// Support
export const sendSupportMessage = (email: string, subject: string, message: string) =>
  apiRequest('/api/support/message', { method: 'POST', body: JSON.stringify({ email, subject, message }) });

// Admin
export const getAdminAnalytics = () => apiRequest('/api/admin/analytics');
export const getSubscribers = (page = 1, limit = 50, tag?: string) => {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (tag) params.set('tag', tag);
  return apiRequest(`/api/admin/subscribers?${params}`);
};
export const getSupportMessages = (page = 1, limit = 50, status?: string) => {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (status) params.set('status', status);
  return apiRequest(`/api/admin/support?${params}`);
};

export { API_BASE };
export type { ApiResponse };
```

