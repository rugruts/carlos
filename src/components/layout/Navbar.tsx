'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from './Container'

export const Navbar = () => {
  return (
    <nav className="bg-bg-base/80 backdrop-blur-sm border-b border-border-soft sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            DumpSack
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/features" className="text-fg-secondary hover:text-fg-primary transition-colors">
              Features
            </Link>
            <Link href="/discover" className="text-fg-secondary hover:text-fg-primary transition-colors">
              Discover
            </Link>
            <Link href="/swap" className="text-fg-secondary hover:text-fg-primary transition-colors">
              Swap
            </Link>
            <Link href="/download" className="text-fg-secondary hover:text-fg-primary transition-colors">
              Download
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Connect Wallet
          </Button>
        </div>
      </Container>
    </nav>
  )
}