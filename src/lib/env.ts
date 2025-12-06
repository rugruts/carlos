// Environment variables configuration and validation

export const env = {
  // API Endpoints
  statusUrl: process.env.NEXT_PUBLIC_STATUS_URL,
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/dumpsackwallet',
  discordUrl: process.env.NEXT_PUBLIC_DISCORD_URL,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@dumpsack.xyz',
  feeVault: process.env.NEXT_PUBLIC_FEE_VAULT,
  priceApi: process.env.NEXT_PUBLIC_PRICE_API || 'https://api.dumpsack.xyz/price',
  candlesApi: process.env.NEXT_PUBLIC_CANDLES_API || 'https://api.dumpsack.xyz/candles',
  poolsApi: process.env.NEXT_PUBLIC_POOLS_API || 'https://api.dumpsack.xyz/pools',

  // Platform Links
  chromeExtensionUrl: process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL,
  firefoxExtensionUrl: process.env.NEXT_PUBLIC_FIREFOX_EXTENSION_URL,
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL,
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL,

  // App Configuration
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'DumpSack',
  appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Premium non-custodial wallet for Gorbagana and Solana',
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',

  // Analytics
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
} as const

// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_STATUS_URL',
  'NEXT_PUBLIC_GITHUB_URL',
  'NEXT_PUBLIC_DISCORD_URL',
  'NEXT_PUBLIC_FEE_VAULT',
]

if (typeof window === 'undefined') {
  // Server-side validation
  requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      console.warn(`⚠️ Missing required environment variable: ${varName}`)
    }
  })
}

export type Env = typeof env