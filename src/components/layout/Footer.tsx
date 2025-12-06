'use client'

import Link from 'next/link'
import { Container } from './Container'

export const Footer = () => {
  return (
    <footer className="bg-bg-surface border-t border-border-soft">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-h3 font-h3 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-fg-secondary hover:text-fg-primary">Features</Link></li>
              <li><Link href="/download" className="text-fg-secondary hover:text-fg-primary">Download</Link></li>
              <li><Link href="/swap" className="text-fg-secondary hover:text-fg-primary">Swap</Link></li>
              <li><Link href="/discover" className="text-fg-secondary hover:text-fg-primary">Discover</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 font-h3 mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><Link href="/developers" className="text-fg-secondary hover:text-fg-primary">Documentation</Link></li>
              <li><Link href="/developers" className="text-fg-secondary hover:text-fg-primary">API & Integrations</Link></li>
              <li><Link href="/brand-assets" className="text-fg-secondary hover:text-fg-primary">Brand Assets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 font-h3 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-fg-secondary hover:text-fg-primary">Blog</Link></li>
              <li><Link href="/support" className="text-fg-secondary hover:text-fg-primary">Support</Link></li>
              <li><Link href="/security" className="text-fg-secondary hover:text-fg-primary">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 font-h3 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-fg-secondary hover:text-fg-primary">About</Link></li>
              <li><Link href="/careers" className="text-fg-secondary hover:text-fg-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-fg-secondary hover:text-fg-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3 font-h3 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-fg-secondary hover:text-fg-primary">Terms</Link></li>
              <li><Link href="/legal/privacy" className="text-fg-secondary hover:text-fg-primary">Privacy</Link></li>
              <li><Link href="/legal/cookies" className="text-fg-secondary hover:text-fg-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-soft pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fg-muted text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DumpSack. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://x.com/dumpsackwallet" className="text-fg-secondary hover:text-fg-primary">
              X (Twitter)
            </Link>
            <Link href="https://github.com/rugruts/carlos" className="text-fg-secondary hover:text-fg-primary">
              GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}