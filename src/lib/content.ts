// Content and copy for DumpSack application
// Based on the ULTRA PROMPT specifications

export const content = {
  // Brand one-liner
  brandOneLiner: 'DumpSack is the premium non-custodial wallet for Gorbagana and Solana — fast, clean, and built for traders.',

  // Taglines
  taglines: {
    primary: 'Clean speed. Degen power.',
    alternates: [
      'Swap faster. See clearer. Own everything.',
      'Premium wallet. Zero compromises.',
      'Your assets. Your keys. Your edge.',
    ],
  },

  // Hero section
  hero: {
    title: 'The premium wallet for Gorbagana & Solana',
    body: 'Non-custodial. Fast swaps. Clear analytics. A clean, modern wallet built for people who actually trade.',
    ctaPrimary: 'Download DumpSack',
    ctaSecondary: 'See all features',
  },

  // Platform badges
  platforms: {
    available: [
      { name: 'Chrome Extension', url: '#' },
      { name: 'Firefox Extension', url: '#' },
    ],
    comingUp: [
      { name: 'Android', url: '#' },
      { name: 'iOS', url: '#' },
    ],
  },

  // Trust badges
  trustBadges: [
    'Non-custodial',
    'Open source',
    'Auditable',
    'Live Status',
  ],

  // Features section
  features: {
    title: 'Built for traders',
    items: [
      {
        title: 'Smart Swap',
        description: 'Best route via TrashDAQ aggregator, transparent fees.',
        icon: '🔄',
      },
      {
        title: 'Risk Signals',
        description: 'Simulated transactions, warnings on suspicious tokens.',
        icon: '⚠️',
      },
      {
        title: 'Clear Analytics',
        description: 'Price, 24h change, OHLC candles, volume & TVL.',
        icon: '📊',
      },
      {
        title: 'Multi-Chain Ready',
        description: 'Gorbagana first, Solana support included.',
        icon: '🔗',
      },
      {
        title: 'Privacy First',
        description: 'No tracking, local key storage.',
        icon: '🔒',
      },
      {
        title: 'Snappy UI',
        description: 'Low-latency, modern interactions, keyboard shortcuts.',
        icon: '⚡',
      },
    ],
  },

  // Swap section
  swap: {
    title: 'Swap with confidence',
    body: 'Best route selection, clear slippage, and full fee disclosure. See price impact and net received before you confirm.',
  },

  // Token detail section
  tokenDetail: {
    title: 'Know your token',
    body: 'Readable data without the noise. Price, volume, liquidity, and recent swaps — the essentials, presented clean.',
  },

  // Self-custody section
  selfCustody: {
    title: 'Your keys. Your crypto.',
    body: 'DumpSack never holds your assets. You control your seed, devices, and backups.',
  },

  // Ecosystem section
  ecosystem: {
    title: 'Built for the Trashchains',
    body: 'Tuned for Gorbagana with polished Solana support, so you get real speed where it matters.',
  },

  // CTA section
  cta: {
    title: 'Ready to go clean degen?',
    body: 'Install the extension or get the app. It’s everything you need — without the clutter.',
    buttons: [
      'Download DumpSack',
      'Join the updates',
    ],
  },

  // Footer
  footer: {
    description: 'DumpSack is a premium, non-custodial wallet for Gorbagana and Solana. Built for speed, clarity, and control.',
    nav: {
      product: [
        { name: 'Features', url: '/features' },
        { name: 'Download', url: '/download' },
        { name: 'Swap', url: '/swap' },
        { name: 'Discover', url: '/discover' },
        { name: 'Gorbagana', url: '/gorbagana' },
        { name: 'Solana', url: '/solana' },
      ],
      developers: [
        { name: 'Documentation', url: '/developers' },
        { name: 'API & Integrations', url: '/developers' },
        { name: 'Brand Assets', url: '/brand-assets' },
        { name: 'GitHub', url: 'https://github.com/rugruts/carlos' },
        { name: 'Changelog', url: '/changelog' },
      ],
      resources: [
        { name: 'Blog', url: '/blog' },
        { name: 'Support', url: '/support' },
        { name: 'Status', url: 'https://status.dumpsack.xyz' },
        { name: 'Security', url: '/security' },
        { name: 'Roadmap', url: '/roadmap' },
        { name: 'FAQ', url: '/faq' },
      ],
      company: [
        { name: 'About', url: '/about' },
        { name: 'Careers', url: '/careers' },
        { name: 'Contact', url: '/contact' },
        { name: 'Press Kit', url: '/press' },
        { name: 'Community', url: '/community' },
      ],
      legal: [
        { name: 'Terms', url: '/legal/terms' },
        { name: 'Privacy', url: '/legal/privacy' },
        { name: 'Cookies', url: '/legal/cookies' },
        { name: 'Disclosures', url: '/legal/disclosures' },
        { name: 'Licenses', url: '/legal/licenses' },
      ],
    },
    socials: [
      { name: 'X (Twitter)', url: 'https://x.com/dumpsackwallet' },
      { name: 'GitHub', url: 'https://github.com/rugruts/carlos' },
      { name: 'Discord', url: 'https://discord.gg/dumpsack' },
    ],
    copyright: `© ${new Date().getFullYear()} DumpSack. All rights reserved.`,
  },

  // Legal disclaimers
  legal: {
    nonCustodial: 'Non-custodial: “DumpSack never holds your keys or assets.”',
    risk: 'Risk: “Crypto is volatile and experimental. Nothing here is financial advice.”',
    fees: 'Fees: “Swaps may include protocol, network, and wallet fees; all fees are disclosed before confirm.”',
  },

  // Meta/SEO
  meta: {
    title: 'DumpSack — Premium Wallet for Gorbagana & Solana',
    description: 'Non-custodial wallet with fast swaps, clean analytics, and premium UX. Chrome & Firefox extensions. Android & iOS coming up.',
    keywords: 'dumpsack, gorbagana, solana wallet, non-custodial, swap, degen, extension',
  },
} as const

export type Content = typeof content