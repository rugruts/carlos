import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      /* ========================================
         PREMIUM NEON COLOR SYSTEM
         ======================================== */
      colors: {
        // Primary Brand Colors (Figma Tokens)
        'toxic-green': '#8AFF56',
        'toxic-green-glow': '#00FF62',
        'brand-white': '#FFFFFF',
        'brand-white-65': 'rgba(255, 255, 255, 0.65)',
        'brand-white-45': 'rgba(255, 255, 255, 0.45)',

        // Background System
        'bg-base': '#000000',
        'bg-elevated': '#0B0F0B',
        'bg-glass': 'rgba(255, 255, 255, 0.06)',
        'border-glass': 'rgba(255, 255, 255, 0.08)',

        // Legacy colors for compatibility
        toxic: '#8EFF60',
        'toxic-soft': 'rgba(142, 255, 96, 0.85)',
        'toxic-subtle': 'rgba(142, 255, 96, 0.45)',
        'toxic-faint': 'rgba(142, 255, 96, 0.15)',
        orange: '#FF7A1A',
        void: '#040604',
        elevated: '#060A06',
        base: '#040604',
        card: '#0A120A',
        glass: 'rgba(255, 255, 255, 0.02)',
        'glass-border': 'rgba(142, 255, 96, 0.12)',
        stroke: 'rgba(142, 255, 96, 0.08)',
        dsText: '#FFFFFF',
        'dsText-soft': 'rgba(255, 255, 255, 0.9)',
        dsMuted: 'rgba(150, 160, 151, 0.8)',
        kicker: '#8EFF60',
      },

      /* ========================================
         BORDER RADIUS (SOFTER, MORE PREMIUM)
         ======================================== */
      borderRadius: {
        ds: '1.25rem',
        'ds-sm': '0.75rem',
        'ds-lg': '1.75rem',
      },

      /* ========================================
         BOX SHADOWS & EFFECTS
         ======================================== */
      boxShadow: {
        glow: '0 0 24px rgba(142, 255, 96, 0.25)',
        'glow-orange': '0 0 24px rgba(255, 122, 26, 0.25)',
        ring: '0 0 0 1px rgba(142, 255, 96, 0.12), inset 0 0 16px rgba(142, 255, 96, 0.08)',
      },

      /* ========================================
         FIGMA TYPOGRAPHY SYSTEM
         ======================================== */
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Display
        'display-1': 'clamp(3.5rem, 8vw, 4rem)',

        // Headings
        'h1': 'clamp(2.5rem, 6vw, 3rem)',
        'h2': 'clamp(1.75rem, 4vw, 2rem)',
        'h3': 'clamp(1.25rem, 3vw, 1.5rem)',

        // Body
        'body-l': '1.125rem',
        'body-m': '1rem',
        'body-s': '0.875rem',

        // Button
        'button-label': '0.875rem',

        // Kicker
        'kicker': '0.75rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
      },

      /* ========================================
         SPACING & LAYOUT
         ======================================== */
      maxWidth: {
        'ds-container': '72rem',
      },
      spacing: {
        'ds-section': 'var(--ds-section-y)',
      },

      /* ========================================
         ANIMATIONS
         ======================================== */
      animation: {
        'glow': 'ds-glow 2s ease-in-out infinite',
        'rotate': 'ds-rotate 4s linear infinite',
        'pulse-slow': 'ds-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'ds-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 8px rgba(142, 255, 96, 0.4))',
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 16px rgba(142, 255, 96, 0.6))',
          },
        },
        'ds-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ds-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

