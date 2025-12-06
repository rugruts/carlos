// Design Tokens for DumpSack
// Brand colors, spacing, typography, radii, shadows

export const tokens = {
  // Colors
  colors: {
    brand: {
      green: '#7BFF68',
      greenDark: '#2DFF69',
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

  // Typography
  typography: {
    font: {
      display: '64px/900', // size/weight
      h1: '40px/800',
      h2: '32px/700',
      h3: '24px/700',
      bodyL: '18px/500',
      bodyM: '16px/400',
      small: '14px/400',
      button: '14px/700',
    },
    lineHeight: {
      body: '150%',
      small: '160%',
    },
    tracking: {
      button: '0.5px',
    },
  },

  // Spacing (vertical rhythm)
  spacing: {
    section: {
      xxl: '160px',
      xl: '140px',
      lg: '120px',
      md: '96px',
    },
    gap: {
      xxl: '32px',
      xl: '24px',
      lg: '20px',
      md: '16px',
      sm: '12px',
      xs: '8px',
    },
  },

  // Grid system
  grid: {
    columns: 12,
    gutter: '24px',
    pageMargins: '120px',
    maxContentWidth: '1200px',
  },

  // Radii
  radii: {
    card: '16px',
    button: '12px',
    pill: '12px',
    input: '12px',
  },

  // Shadows
  shadows: {
    card: '0 8px 24px rgba(0, 0, 0, 0.3)',
    glow: {
      subtle: '0 0 80px rgba(123, 255, 104, 0.15)',
    },
  },

  // Iconography
  icons: {
    stroke: {
      default: '1.75',
      bold: '2.0',
    },
    sizes: {
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
    },
  },

  // Motion
  motion: {
    transition: {
      default: 'all 200ms ease-out',
      fast: 'all 120ms ease-out',
    },
    hover: {
      lift: 'translateY(-2px)',
      brighten: 'brightness(1.05)',
    },
    parallax: {
      float: '3s ease-in-out',
      range: '16px',
    },
    fadeIn: {
      distance: '40px',
      duration: '250ms',
    },
  },
} as const

// Type-safe access to tokens
export type Tokens = typeof tokens