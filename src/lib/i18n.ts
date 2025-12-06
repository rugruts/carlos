// Basic i18n structure for DumpSack
// English as default, with stubs for Greek and German

export type Locale = 'en' | 'el' | 'de'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'el', 'de']

// Translation keys
export const translations = {
  en: {
    // Common
    download: 'Download',
    learnMore: 'Learn More',
    connectWallet: 'Connect Wallet',

    // Navigation
    nav: {
      features: 'Features',
      discover: 'Discover',
      swap: 'Swap',
      download: 'Download',
      developers: 'Developers',
      support: 'Support',
      blog: 'Blog',
    },

    // Hero
    hero: {
      title: 'The premium wallet for Gorbagana & Solana',
      subtitle: 'Non-custodial. Fast swaps. Clear analytics. A clean, modern wallet built for people who actually trade.',
      ctaPrimary: 'Download DumpSack',
      ctaSecondary: 'See all features',
    },

    // Features
    features: {
      title: 'Built for traders',
      smartSwap: 'Smart Swap',
      smartSwapDesc: 'Best route via TrashDAQ aggregator, transparent fees.',
      riskSignals: 'Risk Signals',
      riskSignalsDesc: 'Simulated transactions, warnings on suspicious tokens.',
      clearAnalytics: 'Clear Analytics',
      clearAnalyticsDesc: 'Price, 24h change, OHLC candles, volume & TVL.',
      multiChain: 'Multi-Chain',
      multiChainDesc: 'Gorbagana first, Solana support included.',
      privacyFirst: 'Privacy First',
      privacyFirstDesc: 'No tracking, local key storage.',
      snappyUI: 'Snappy UI',
      snappyUIDesc: 'Low-latency, modern interactions, keyboard shortcuts.',
    },

    // Footer
    footer: {
      product: 'Product',
      developers: 'Developers',
      resources: 'Resources',
      company: 'Company',
      legal: 'Legal',
      copyright: '© {year} DumpSack. All rights reserved.',
    },
  },

  // Greek stubs
  el: {
    download: 'Λήψη',
    learnMore: 'Μάθετε περισσότερα',
    // ... other translations would go here
  },

  // German stubs
  de: {
    download: 'Herunterladen',
    learnMore: 'Mehr erfahren',
    // ... other translations would go here
  },
} as const

export type Translations = typeof translations

// Simple translation function
export function t(key: string, locale: Locale = defaultLocale): string {
  const keys = key.split('.')
  let current: any = translations[locale]

  for (const k of keys) {
    if (current && current[k]) {
      current = current[k]
    } else {
      // Fallback to English if translation not found
      current = translations.en
      for (const k of keys) {
        if (current && current[k]) {
          current = current[k]
        } else {
          return key // Return key if not found in English either
        }
      }
    }
  }

  return typeof current === 'string' ? current : key
}