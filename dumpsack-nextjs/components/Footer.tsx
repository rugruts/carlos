import Link from 'next/link';
import Image from 'next/image';
import NewsletterInline from './NewsletterInline';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-glass-border bg-elevated">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 font-bold text-xl mb-4 group w-fit">
              <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="DumpSack Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="transition-colors group-hover:text-toxic">DumpSack</span>
            </Link>
            <p className="text-sm text-muted mb-4">
              Multi-chain wallet for Gorbagana & Solana. Simple, fast, and secure.
            </p>
            <div className="flex gap-3">
              <a
                href="https://gorbagana.wtf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-glass-border hover:border-toxic transition-colors"
                aria-label="Gorbagana"
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image
                    src="/icons/gorbagana-icon.png"
                    alt="Gorbagana"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-glass-border hover:border-toxic transition-colors"
                aria-label="Solana"
              >
                <div className="relative w-[18px] h-[18px]">
                  <Image
                    src="/icons/sol-icon.png"
                    alt="Solana"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </a>
              <a
                href="https://x.com/DumpSackWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-glass-border hover:border-toxic transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/DumpSackWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-glass border border-glass-border hover:border-toxic transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/why" className="text-muted hover:text-toxic transition-colors">
                  Why DumpSack
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-muted hover:text-toxic transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-muted hover:text-toxic transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-muted hover:text-toxic transition-colors">
                  Developers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted hover:text-toxic transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted hover:text-toxic transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-muted hover:text-toxic transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted hover:text-toxic transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted mb-4">
              Get the latest updates on Android, new features, and more.
            </p>
            <NewsletterInline placeholder="Your email" />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-glass-border text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} DumpSack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

