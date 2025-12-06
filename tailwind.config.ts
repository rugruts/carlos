import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#7BFF68',
          'green-dark': '#2DFF69',
        },
        fg: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.65)',
          muted: 'rgba(255, 255, 255, 0.45)',
        },
        bg: {
          base: '#000000',
          surface: '#0C0F0C',
        },
        glass: {
          surface: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        border: {
          soft: 'rgba(255, 255, 255, 0.12)',
        },
      },
      spacing: {
        'section-xxl': '160px',
        'section-xl': '140px',
        'section-lg': '120px',
        'section-md': '96px',
        'gap-xxl': '32px',
        'gap-xl': '24px',
        'gap-lg': '20px',
        'gap-md': '16px',
        'gap-sm': '12px',
        'gap-xs': '8px',
      },
      fontSize: {
        display: '64px',
        h1: '40px',
        h2: '32px',
        h3: '24px',
        'body-l': '18px',
        'body-m': '16px',
        small: '14px',
        button: '14px',
      },
      fontWeight: {
        display: '900',
        h1: '800',
        h2: '700',
        h3: '700',
        'body-l': '500',
        'body-m': '400',
        small: '400',
        button: '700',
      },
      borderRadius: {
        card: '16px',
        button: '12px',
        pill: '12px',
        input: '12px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(0, 0, 0, 0.3)',
        'glow-subtle': '0 0 80px rgba(123, 255, 104, 0.15)',
      },
      transitionProperty: {
        DEFAULT: 'all',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '120ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
    },
  },
  plugins: [],
}

export default config