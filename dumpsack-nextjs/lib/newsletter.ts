import { NewsletterInput } from './validators';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.dumpsack.xyz';

export async function subscribeToNewsletter(data: NewsletterInput) {
  const response = await fetch(`${API_BASE}/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to subscribe' }));
    throw new Error(error.message || 'Failed to subscribe');
  }

  return response.json();
}

