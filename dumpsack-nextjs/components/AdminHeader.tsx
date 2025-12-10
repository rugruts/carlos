'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Eye, LogOut, LayoutDashboard, Mail, Users, MessageSquare, FileText } from 'lucide-react';

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
    router.refresh();
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Marketing Hub', href: '/admin/campaigns', icon: Mail },
    { label: 'Subscribers', href: '/admin/subscribers', icon: Users },
    { label: 'Support', href: '/admin/support', icon: MessageSquare },
    { label: 'Blog', href: '/admin/blog', icon: FileText },
  ];

  return (
    <header className="border-b border-glass-border bg-elevated/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/admin/dashboard" className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="DumpSack"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <p className="text-sm text-muted">Manage your DumpSack website</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="btn-outline text-sm px-4 py-2"
            >
              <Eye size={16} />
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="btn-outline text-sm px-4 py-2 hover:border-orange hover:text-orange"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-toxic/10 text-toxic border border-toxic/20'
                    : 'text-muted hover:text-white hover:bg-glass'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

