/**
 * DumpSack API Client
 * Base URL: https://api.dumpsack.xyz
 * Matches backend implementation from INTEGRATION_SUMMARY.md
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.dumpsack.xyz';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: { code: string; message: string };
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    // Admin endpoints use Next.js API routes (relative paths)
    // Public endpoints use external API
    const url = endpoint.startsWith('/api/admin')
      ? endpoint
      : `${API_BASE}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      credentials: 'include', // Include cookies for admin auth
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: { code: 'NETWORK_ERROR', message: 'Network error occurred' },
    };
  }
}

// ============================================================================
// PUBLIC API - Newsletter & Waitlist
// ============================================================================

export async function subscribeNewsletter(
  email: string,
  tags: string[] = ['newsletter']
): Promise<ApiResponse> {
  return apiRequest('/api/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email, tags }),
  });
}

export async function joinAndroidWaitlist(email: string): Promise<ApiResponse> {
  return apiRequest('/api/waitlist/android', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

// ============================================================================
// PUBLIC API - Support
// ============================================================================

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

// ============================================================================
// ADMIN API - Analytics & Management
// ============================================================================

export interface AnalyticsData {
  apiHealth: {
    status: 'healthy' | 'degraded' | 'down';
    uptime: number;
    responseTime: number;
  };
  rpcHealth: {
    status: 'healthy' | 'degraded' | 'down' | 'unknown';
    uptime: number;
    responseTime: number;
  };
  newsletter: {
    subscribers: number;
  };
  waitlist: {
    android: number;
    ios: number;
  };
  support: {
    pending: number;
  };
  requests24h: number;
  errors24h: number;
}

export async function getAdminAnalytics(): Promise<ApiResponse<AnalyticsData>> {
  return apiRequest('/api/admin/analytics');
}

export interface Subscriber {
  id: string;
  email: string;
  tags: string[];
  status: 'active' | 'unsubscribed';
  subscribed_at: string;
  unsubscribed_at: string | null;
}

export interface SubscribersData {
  subscribers: Subscriber[];
  total: number;
  page: number;
  limit: number;
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

export interface SupportMessagesData {
  messages: SupportMessage[];
  total: number;
  page: number;
  limit: number;
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

// ============================================================================
// ADMIN API - Marketing Campaigns
// ============================================================================

export interface CampaignRequest {
  target: 'newsletter' | 'waitlist';
  platform?: 'android' | 'ios';
  subject: string;
  htmlContent: string;
  textContent?: string;
  preview?: string;
}

export interface CampaignResponse {
  campaignId: string;
  queued: number;
  message: string;
}

export async function sendCampaign(
  data: CampaignRequest
): Promise<ApiResponse<CampaignResponse>> {
  return apiRequest('/api/admin/campaign/send', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export interface Campaign {
  id: string;
  target: 'newsletter' | 'waitlist';
  platform: 'android' | 'ios' | null;
  subject: string;
  recipients_count: number;
  status: 'queued' | 'sending' | 'sent' | 'failed';
  created_at: string;
  sent_at: string | null;
  error: string | null;
}

export interface CampaignsData {
  campaigns: Campaign[];
  total: number;
  page: number;
  limit: number;
}

export async function getCampaigns(
  page = 1,
  limit = 20
): Promise<ApiResponse<CampaignsData>> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  return apiRequest(`/api/admin/campaigns?${params}`);
}

// ============================================================================
// UTILITY - Error Handling
// ============================================================================

export function getErrorMessage(error: ApiResponse['error'] | undefined): string {
  if (!error) return 'An unexpected error occurred';

  switch (error.code) {
    case 'RATE_LIMITED':
      return 'Too many attempts. Please wait a moment and try again.';
    case 'INVALID_EMAIL':
      return 'Please enter a valid email address.';
    case 'INVALID_PARAMS':
      return error.message || 'Please fill in all required fields.';
    case 'NETWORK_ERROR':
      return 'Network error. Please check your connection and try again.';
    default:
      return error.message || 'Something went wrong. Please try again.';
  }
}

// ============================================================================
// FUTURE - Token & Market APIs (for wallet extension)
// ============================================================================

export async function searchTokens(
  network: string,
  query: string,
  limit = 20
): Promise<ApiResponse<any[]>> {
  return apiRequest(
    `/api/tokens/search?network=${network}&query=${encodeURIComponent(query)}&limit=${limit}`
  );
}

export async function getTokenPrice(
  chain: string,
  mint: string
): Promise<ApiResponse<{ usd: number; change24h: number }>> {
  return apiRequest(`/v1/price/${chain}/token/${mint}`);
}

export async function getTrendingTokens(
  network: string,
  kind = 'gainers',
  limit = 20
): Promise<ApiResponse<any[]>> {
  return apiRequest(
    `/api/discovery/trending?network=${network}&kind=${kind}&limit=${limit}`
  );
}

export async function getNetworkMarket(network: string): Promise<
  ApiResponse<{
    tps: number;
    totalTokens: number | null;
    slot: number;
    health: string;
  }>
> {
  return apiRequest(`/api/discovery/market?network=${network}`);
}

export { API_BASE };

