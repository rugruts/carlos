import type { Config } from 'tailwindcss'
import { tokens } from './src/lib/tokens'

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
          green: tokens.colors.brand.green,
          'green-dark': tokens.colors.brand.greenDark,
        },
        fg: {
          primary: tokens.colors.fg.primary,
          secondary: tokens.colors.fg.secondary,
          muted: tokens.colors.fg.muted,
        },
        bg: {
          base: tokens.colors.bg.base,
          surface: tokens.colors.bg.surface,
        },
        glass: {
          surface: tokens.colors.glass.surface,
          border: tokens.colors.glass.border,
        },
        border: {
          soft: tokens.colors.border.soft,
        },
      },
      spacing: {
        ...tokens.spacing.section,
        ...tokens.spacing.gap,
      },
      fontSize: {
        display: tokens.typography.font.display.split('/')[0],
        h1: tokens.typography.font.h1.split('/')[0],
        h2: tokens.typography.font.h2.split('/')[0],
        h3: tokens.typography.font.h3.split('/')[0],
        'body-l': tokens.typography.font.bodyL.split('/')[0],
        'body-m': tokens.typography.font.bodyM.split('/')[0],
        small: tokens.typography.font.small.split('/')[0],
        button: tokens.typography.font.button.split('/')[0],
      },
      fontWeight: {
        display: tokens.typography.font.display.split('/')[1],
        h1: tokens.typography.font.h1.split('/')[1],
        h2: tokens.typography.font.h2.split('/')[1],
        h3: tokens.typography.font.h3.split('/')[1],
        'body-l': tokens.typography.font.bodyL.split('/')[1],
        'body-m': tokens.typography.font.bodyM.split('/')[1],
        small: tokens.typography.font.small.split('/')[1],
        button: tokens.typography.font.button.split('/')[1],
      },
      borderRadius: {
        card: tokens.radii.card,
        button: tokens.radii.button,
        pill: tokens.radii.pill,
        input: tokens.radii.input,
      },
      boxShadow: {
        card: tokens.shadows.card,
        'glow-subtle': tokens.shadows.glow.subtle,
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