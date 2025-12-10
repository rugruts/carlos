'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Download, Search, Filter, Calendar, Tag, Users, Mail } from 'lucide-react';
import { getSubscribers, type Subscriber } from '@/lib/api-client';
import AdminHeader from '@/components/AdminHeader';

export default function AdminSubscribersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(50);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page, filterTag]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getSubscribers(page, limit, filterTag || undefined);
      if (result.success && result.data) {
        setSubscribers(result.data.subscribers);
        setTotal(result.data.total);
      } else if (result.error?.code === 'UNAUTHORIZED') {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubscribers = subscribers.filter((sub) => {
    const matchesSearch = sub.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(total / limit);

  const exportCSV = () => {
    const csv = [
      ['Email', 'Tags', 'Subscribed At', 'Status'],
      ...filteredSubscribers.map((sub) => [
        sub.email,
        sub.tags?.join('; ') || '',
        new Date(sub.subscribed_at).toLocaleString(),
        sub.status,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-void">
      <AdminHeader />

      {/* Page Header */}
      <div className="border-b border-glass-border bg-elevated/50">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Subscribers</h1>
              <p className="text-sm text-muted">{total} total subscribers</p>
            </div>

            <button onClick={exportCSV} className="btn-primary text-sm px-4 py-2">
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-custom py-12">
        {/* Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
            />
          </div>

          {/* Tag Filter */}
          <div className="relative">
            <Filter size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <select
              value={filterTag}
              onChange={(e) => {
                setFilterTag(e.target.value);
                setPage(1);
              }}
              className="pl-12 pr-8 py-3 rounded-lg bg-elevated border border-glass-border text-white focus:outline-none focus:border-toxic transition-colors appearance-none cursor-pointer"
            >
              <option value="">All Tags</option>
              <option value="newsletter">Newsletter</option>
              <option value="android-waitlist">Android Waitlist</option>
              <option value="ios-waitlist">iOS Waitlist</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-toxic/10 flex items-center justify-center">
                <Users className="text-toxic" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Total Subscribers</p>
                <p className="text-2xl font-bold">{total}</p>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                <Tag className="text-orange" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Android Waitlist</p>
                <p className="text-2xl font-bold">
                  {subscribers.filter(s => s.tags.includes('android-waitlist')).length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-toxic/10 flex items-center justify-center">
                <Mail className="text-toxic" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted">Active</p>
                <p className="text-2xl font-bold">
                  {subscribers.filter(s => s.status === 'active').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribers Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left p-4 text-sm font-medium text-muted">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-muted">Tags</th>
                  <th className="text-left p-4 text-sm font-medium text-muted">Subscribed</th>
                  <th className="text-left p-4 text-sm font-medium text-muted">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-muted">
                      Loading subscribers...
                    </td>
                  </tr>
                ) : filteredSubscribers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-muted">
                      <Search size={48} className="text-muted mx-auto mb-4" />
                      <h3 className="mb-3">No subscribers found</h3>
                      <p className="text-muted">
                        Try adjusting your search or filter criteria.
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredSubscribers.map((subscriber) => (
                    <tr key={subscriber.id} className="border-b border-glass-border last:border-0 hover:bg-glass/30">
                      <td className="p-4">
                        <div className="font-medium">{subscriber.email}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {subscriber.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded bg-toxic/10 text-toxic flex items-center gap-1"
                            >
                              <Tag size={12} />
                              {tag.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Calendar size={14} />
                          {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`text-sm px-2 py-1 rounded ${
                          subscriber.status === 'active'
                            ? 'bg-toxic/10 text-toxic'
                            : 'bg-muted/10 text-muted'
                        }`}>
                          {subscriber.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-glass-border flex items-center justify-between">
              <p className="text-sm text-muted">
                Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total} subscribers
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="btn-ghost disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="btn-ghost disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

