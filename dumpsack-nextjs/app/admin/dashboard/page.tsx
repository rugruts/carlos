'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FileText,
  Mail,
  MessageSquare,
  Users,
  TrendingUp,
  Activity,
  Server
} from 'lucide-react';
import { getAdminAnalytics } from '@/lib/api-client';
import AdminHeader from '@/components/AdminHeader';


interface Analytics {
  api: {
    status: string;
    health: any;
    analytics: any;
  };
  rpc: {
    status: string;
    health: any;
  };
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState([
    { label: 'Newsletter Subscribers', value: '0', icon: Users, color: 'toxic' },
    { label: 'Android Waitlist', value: '0', icon: Users, color: 'orange' },
    { label: 'Support Messages', value: '0', icon: MessageSquare, color: 'toxic' },
    { label: 'Requests (24h)', value: '0', icon: TrendingUp, color: 'orange' },
  ]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {


    const fetchAnalytics = async () => {
      try {
        const result = await getAdminAnalytics();

        if (result.success && result.data) {
          // Update stats cards with real data
          setStats([
            { label: 'Newsletter Subscribers', value: result.data.newsletter.subscribers.toString(), icon: Users, color: 'toxic' },
            { label: 'Android Waitlist', value: result.data.waitlist.android.toString(), icon: Users, color: 'orange' },
            { label: 'Support Messages', value: result.data.support.pending.toString(), icon: MessageSquare, color: 'toxic' },
            { label: 'Requests (24h)', value: result.data.requests24h.toLocaleString(), icon: TrendingUp, color: 'orange' },
          ]);

          setAnalytics({
            api: {
              status: result.data.apiHealth.status,
              health: {
                uptime: result.data.apiHealth.uptime,
                responseTime: result.data.apiHealth.responseTime,
              },
              analytics: {
                requests24h: result.data.requests24h,
                errors24h: result.data.errors24h,
              },
            },
            rpc: {
              status: result.data.rpcHealth.status,
              health: {
                uptime: result.data.rpcHealth.uptime,
                responseTime: result.data.rpcHealth.responseTime,
              },
            },
          });
        } else {
          console.error('Failed to fetch analytics:', result.error);
        }
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      }
    };

    fetchAnalytics();

    // Refresh analytics every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    { label: 'Marketing Hub', href: '/admin/campaigns', icon: Mail },
    { label: 'View Subscribers', href: '/admin/subscribers', icon: Users },
    { label: 'Support Messages', href: '/admin/support', icon: MessageSquare },
    { label: 'View Posts', href: '/admin/blog', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-void">
      <AdminHeader />

      {/* Main Content */}
      <main className="container-custom py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                    <stat.icon size={24} className={`text-${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Analytics */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Backend Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* API Status */}
            <div className="card p-6">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-toxic/10 flex items-center justify-center">
                      <Server size={24} className="text-toxic" />
                    </div>
                    <div>
                      <h3 className="font-bold">API Server</h3>
                      <p className="text-xs text-muted">api.dumpsack.xyz</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                    analytics?.api.status === 'online'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-red-500/10 text-red-500'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      analytics?.api.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    {analytics?.api.status || 'checking...'}
                  </div>
                </div>
                {analytics?.api.analytics && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted mb-1">Total Requests</p>
                        <p className="font-bold">{analytics.api.analytics.totalRequests || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-muted mb-1">Uptime</p>
                        <p className="font-bold">{analytics.api.analytics.uptime || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RPC Status */}
            <div className="card p-6">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                      <Activity size={24} className="text-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold">RPC Server</h3>
                      <p className="text-xs text-muted">rpc.dumpsack.xyz</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                    analytics?.rpc.status === 'online'
                      ? 'bg-green-500/10 text-green-500'
                      : 'bg-red-500/10 text-red-500'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      analytics?.rpc.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    {analytics?.rpc.status || 'checking...'}
                  </div>
                </div>
                {analytics?.rpc.health && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <div className="text-sm">
                      <p className="text-muted mb-1">Health Check</p>
                      <p className="font-bold text-green-500">Operational</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="card p-6 hover:border-toxic/30 transition-colors group"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-toxic/10 flex items-center justify-center group-hover:bg-toxic/20 transition-colors">
                      <action.icon size={24} className="text-toxic" />
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="card p-6">
              <div className="relative z-10">
                <p className="text-sm text-muted text-center py-8">
                  Activity tracking coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

