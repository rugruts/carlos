'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Calendar, CheckCircle, Clock, AlertCircle, MessageSquare, Filter } from 'lucide-react';
import { getSupportMessages, type SupportMessage } from '@/lib/api-client';
import AdminHeader from '@/components/AdminHeader';

export default function AdminSupportPage() {
  const router = useRouter();
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(50);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState('');
  const [sending, setSending] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const result = await getSupportMessages(page, limit, filterStatus || undefined);
      if (result.success && result.data) {
        setMessages(result.data.messages);
        setTotal(result.data.total);
      } else if (result.error?.code === 'UNAUTHORIZED') {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Failed to fetch support messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filterStatus]);

  const handleSendReply = async () => {
    if (!selectedMessage || !replyText.trim()) return;

    setSending(true);
    try {
      // Call backend API to send email and update database
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE || 'https://api.dumpsack.xyz';
      const response = await fetch(`${apiUrl}/api/support/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          messageId: selectedMessage,
          reply: replyText
        }),
      });

      const result = await response.json();

      if (result.success) {
        setReplyText('');
        fetchMessages(); // Refresh to show updated status and reply
        alert('Reply sent successfully! The user will receive an email.');
      } else {
        alert(`Failed to send reply: ${result.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to send reply:', error);
      alert('Failed to send reply. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleMarkResolved = async () => {
    if (!selectedMessage) return;

    setSending(true);
    try {
      // Call backend API to mark as resolved
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE || 'https://api.dumpsack.xyz';
      const response = await fetch(`${apiUrl}/api/support/${selectedMessage}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const result = await response.json();

      if (result.success) {
        fetchMessages(); // Refresh to show updated status
        alert('Message marked as resolved!');
      } else {
        alert(`Failed to mark as resolved: ${result.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to mark as resolved:', error);
      alert('Failed to mark as resolved. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} className="text-orange" />;
      case 'replied':
        return <CheckCircle size={16} className="text-green-500" />;
      default:
        return <AlertCircle size={16} className="text-muted" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange/10 text-orange';
      case 'replied':
        return 'bg-green-500/10 text-green-500';
      default:
        return 'bg-glass text-muted';
    }
  };

  const selected = messages.find((m) => m.id === selectedMessage);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-void">
      <AdminHeader />

      {/* Page Header */}
      <div className="border-b border-glass-border bg-elevated/50">
        <div className="container-custom py-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Support Messages</h1>
            <p className="text-sm text-muted">{total} total messages</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-custom py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Clock className="text-orange" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Pending</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-toxic/10 flex items-center justify-center">
                <CheckCircle className="text-toxic" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Replied</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.status === 'replied').length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted/10 flex items-center justify-center">
                <MessageSquare className="text-muted" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Total</p>
                <p className="text-2xl font-bold">{total}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="card p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter size={18} className="text-muted" />
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 bg-elevated border border-glass-border rounded-lg text-white focus:outline-none focus:border-toxic"
            >
              <option value="">All Messages</option>
              <option value="pending">Pending</option>
              <option value="replied">Replied</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="card p-4 space-y-2">
              {loading ? (
                <div className="p-12 text-center text-muted">
                  Loading messages...
                </div>
              ) : messages.length === 0 ? (
                <div className="p-12 text-center text-muted">
                  <MessageSquare size={48} className="mx-auto mb-4" />
                  <p>No messages found</p>
                </div>
              ) : (
                messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => setSelectedMessage(message.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedMessage === message.id
                      ? 'bg-toxic/10 border-toxic'
                      : 'bg-glass/30 border-glass-border hover:border-toxic/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Mail size={14} />
                      {message.email}
                    </div>
                    {getStatusIcon(message.status)}
                  </div>
                  <div className="font-medium mb-1 truncate">{message.subject}</div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar size={12} />
                    {new Date(message.created_at).toLocaleDateString()}
                  </div>
                </button>
              ))
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pt-4 border-t border-glass-border flex items-center justify-between">
                  <p className="text-xs text-muted">
                    Page {page} of {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="btn-ghost text-sm disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="btn-ghost text-sm disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="card p-8">
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6 pb-6 border-b border-glass-border">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-2xl font-bold">{selected.subject}</h2>
                      <span className={`text-xs px-3 py-1 rounded ${getStatusColor(selected.status)}`}>
                        {selected.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Mail size={14} />
                        {selected.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {new Date(selected.created_at).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-muted mb-3">Message</h3>
                    <p className="text-muted leading-relaxed">{selected.message}</p>
                  </div>

                  {/* Existing Reply (if any) */}
                  {selected.reply && (
                    <div className="mb-8 p-4 rounded-lg bg-toxic/5 border border-toxic/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare size={16} className="text-toxic" />
                        <h3 className="text-sm font-medium text-toxic">Your Reply</h3>
                        {selected.replied_at && (
                          <span className="text-xs text-muted ml-auto">
                            {new Date(selected.replied_at).toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-muted leading-relaxed">{selected.reply}</p>
                    </div>
                  )}

                  {/* Reply Form */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">
                      {selected.reply ? 'Update Reply' : 'Reply'}
                    </h3>
                    <textarea
                      rows={6}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors resize-none mb-4"
                      placeholder="Type your reply..."
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={handleSendReply}
                        disabled={sending || !replyText.trim()}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sending ? 'Sending...' : selected.reply ? 'Update Reply' : 'Send Reply'}
                      </button>
                      <button
                        onClick={handleMarkResolved}
                        disabled={sending}
                        className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Mark as Resolved
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-12 text-center">
                <div className="relative z-10">
                  <Mail size={48} className="text-muted mx-auto mb-4" />
                  <h3 className="mb-3">Select a message</h3>
                  <p className="text-muted">
                    Choose a message from the list to view and reply.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

