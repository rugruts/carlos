'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Mail, Users, CheckCircle2, AlertCircle, Clock, Smartphone } from 'lucide-react';
import { sendCampaign, getAdminAnalytics, getCampaigns, type AnalyticsData, type Campaign } from '@/lib/api-client';
import AdminHeader from '@/components/AdminHeader';

export default function CampaignsPage() {
  const router = useRouter();
  const [target, setTarget] = useState<'newsletter' | 'waitlist'>('newsletter');
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [subject, setSubject] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [stats, setStats] = useState<AnalyticsData | null>(null);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    // Check if user is authenticated by trying to fetch data
    // If unauthorized, the API will return 401 and we redirect
    fetchStats();
    fetchCampaigns();
  }, []);

  const fetchStats = async () => {
    const result = await getAdminAnalytics();
    if (result.success && result.data) {
      setStats(result.data);
    } else if (result.error?.code === 'UNAUTHORIZED') {
      router.push('/admin/login');
    }
  };

  const fetchCampaigns = async () => {
    const result = await getCampaigns(1, 10);
    if (result.success && result.data) {
      setCampaigns(result.data.campaigns);
    }
  };

  const handleSend = async () => {
    if (!subject.trim() || !htmlContent.trim()) {
      setStatus('error');
      setMessage('Subject and content are required');
      return;
    }

    setStatus('loading');

    const result = await sendCampaign({
      target,
      platform: target === 'waitlist' ? platform : undefined,
      subject,
      htmlContent,
      preview: preview || undefined,
    });

    if (result.success) {
      setStatus('success');
      setMessage(result.data?.message || 'Campaign sent!');
      setSubject('');
      setHtmlContent('');
      setPreview('');
      fetchCampaigns(); // Refresh history
    } else {
      setStatus('error');
      setMessage(result.error?.message || 'Failed to send campaign');
    }
  };

  const recipientCount =
    target === 'newsletter'
      ? stats?.newsletter?.subscribers || 0
      : target === 'waitlist' && platform === 'android'
        ? stats?.waitlist?.android || 0
        : stats?.waitlist?.ios || 0;

  return (
    <div className="min-h-screen bg-void">
      <AdminHeader />
      <div className="container-custom max-w-5xl py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketing Hub</h1>
          <p className="text-muted">Send campaigns to newsletter subscribers or waitlist users</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-toxic" size={20} />
              <span className="text-sm text-muted">Newsletter</span>
            </div>
            <p className="text-2xl font-bold">{stats?.newsletter?.subscribers || 0}</p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="text-orange" size={20} />
              <span className="text-sm text-muted">Android Waitlist</span>
            </div>
            <p className="text-2xl font-bold">{stats?.waitlist?.android || 0}</p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="text-orange" size={20} />
              <span className="text-sm text-muted">iOS Waitlist</span>
            </div>
            <p className="text-2xl font-bold">{stats?.waitlist?.ios || 0}</p>
          </div>
        </div>

        {/* Campaign Form */}
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Create Campaign</h2>

          <div className="space-y-6">
            {/* Target Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Target Audience</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="target"
                    value="newsletter"
                    checked={target === 'newsletter'}
                    onChange={() => setTarget('newsletter')}
                    className="accent-toxic"
                  />
                  <span>Newsletter ({stats?.newsletter?.subscribers || 0} subscribers)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="target"
                    value="waitlist"
                    checked={target === 'waitlist'}
                    onChange={() => setTarget('waitlist')}
                    className="accent-toxic"
                  />
                  <span>Waitlist</span>
                </label>
              </div>
            </div>

            {/* Platform for waitlist */}
            {target === 'waitlist' && (
              <div>
                <label className="block text-sm font-medium mb-3">Platform</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="platform"
                      value="android"
                      checked={platform === 'android'}
                      onChange={() => setPlatform('android')}
                      className="accent-toxic"
                    />
                    <span>Android ({stats?.waitlist?.android || 0})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="platform"
                      value="ios"
                      checked={platform === 'ios'}
                      onChange={() => setPlatform('ios')}
                      className="accent-toxic"
                    />
                    <span>iOS ({stats?.waitlist?.ios || 0})</span>
                  </label>
                </div>
              </div>
            )}

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Email Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g., DumpSack 2.0 is here!"
                maxLength={200}
                className="w-full px-4 py-3 rounded-lg border border-glass-border bg-glass text-white placeholder:text-muted focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic focus:ring-offset-2 focus:ring-offset-void"
              />
              <p className="text-xs text-muted mt-1">{subject.length}/200 characters</p>
            </div>

            {/* Preview */}
            <div>
              <label htmlFor="preview" className="block text-sm font-medium mb-2">
                Preview Text <span className="text-muted">(optional)</span>
              </label>
              <input
                id="preview"
                type="text"
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
                placeholder="Short preview text shown in email clients"
                maxLength={200}
                className="w-full px-4 py-3 rounded-lg border border-glass-border bg-glass text-white placeholder:text-muted focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic focus:ring-offset-2 focus:ring-offset-void"
              />
              <p className="text-xs text-muted mt-1">{preview.length}/200 characters</p>
            </div>

            {/* HTML Content */}
            <div>
              <label htmlFor="htmlContent" className="block text-sm font-medium mb-2">
                HTML Content
              </label>
              <textarea
                id="htmlContent"
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                placeholder="<h2 style='color: #8EFF60;'>Big News!</h2>&#10;<p style='color: #CCCCCC;'>We're excited to announce...</p>"
                rows={12}
                className="w-full px-4 py-3 rounded-lg border border-glass-border bg-glass text-white placeholder:text-muted focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic focus:ring-offset-2 focus:ring-offset-void font-mono text-sm resize-none"
              />
              <p className="text-xs text-muted mt-1">
                Use basic HTML: &lt;h2&gt;, &lt;p&gt;, &lt;a&gt;, &lt;ul&gt;, &lt;li&gt;. Template adds header, footer, and unsubscribe link.
              </p>
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-toxic/10 border border-toxic/20">
                <CheckCircle2 className="text-toxic" size={20} />
                <span className="text-toxic">{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-orange/10 border border-orange/20">
                <AlertCircle className="text-orange" size={20} />
                <span className="text-orange">{message}</span>
              </div>
            )}

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={status === 'loading' || recipientCount === 0}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              {status === 'loading'
                ? 'Sending...'
                : `Send to ${recipientCount} ${target === 'newsletter' ? 'subscribers' : 'waitlist users'}`}
            </button>
          </div>
        </div>

        {/* Campaign History */}
        <div className="card p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Campaigns</h2>
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="text-sm text-toxic hover:underline"
            >
              {showHistory ? 'Hide' : 'Show'} History
            </button>
          </div>

          {showHistory && (
            <div className="space-y-3">
              {campaigns.length === 0 ? (
                <p className="text-muted text-center py-8">No campaigns sent yet</p>
              ) : (
                campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 rounded-lg bg-glass border border-glass-border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{campaign.subject}</h3>
                        <p className="text-sm text-muted">
                          {campaign.target === 'newsletter' ? 'Newsletter' : `${campaign.platform} Waitlist`} • {campaign.recipients_count} recipients
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {campaign.status === 'sent' && <CheckCircle2 className="text-toxic" size={16} />}
                        {campaign.status === 'sending' && <Clock className="text-orange" size={16} />}
                        {campaign.status === 'failed' && <AlertCircle className="text-orange" size={16} />}
                        <span className={`text-xs px-2 py-1 rounded ${
                          campaign.status === 'sent' ? 'bg-toxic/10 text-toxic' :
                          campaign.status === 'sending' ? 'bg-orange/10 text-orange' :
                          'bg-orange/10 text-orange'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted">
                      {new Date(campaign.created_at).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

