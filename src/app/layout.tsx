import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DumpSack - Premium Wallet for Gorbagana & Solana',
  description: 'Non-custodial wallet with fast swaps, clean analytics, and premium UX. Chrome & Firefox extensions. Android & iOS coming up.',
  keywords: 'dumpsack, gorbagana, solana wallet, non-custodial, swap, degen, extension',
  openGraph: {
    title: 'DumpSack - Premium Wallet for Gorbagana & Solana',
    description: 'Non-custodial wallet with fast swaps, clean analytics, and premium UX.',
    url: 'https://dumpsack.xyz',
    siteName: 'DumpSack',
    images: [
      {
        url: '/og-template.png',
        width: 1200,
        height: 630,
        alt: 'DumpSack Wallet',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DumpSack - Premium Wallet for Gorbagana & Solana',
    description: 'Non-custodial wallet with fast swaps, clean analytics, and premium UX.',
    images: ['/og-template.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}