'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/why', label: 'Why DumpSack' },
    { href: '/download', label: 'Download' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border bg-void/80 backdrop-blur-lg">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="DumpSack Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="transition-colors group-hover:text-toxic">DumpSack</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-toxic transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/download" className="btn-primary text-sm px-6 py-2.5">
              <Download size={16} />
              Install Extension
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-toxic transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-glass-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-toxic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/download"
                className="btn-primary text-sm px-6 py-2.5 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} />
                Install Extension
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

