import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // DumpSack Brand Colors (ported from Phase 11-14)
        void: '#040604',
        elevated: '#060a06',
        card: '#0a120a',
        
        // Gorbagana Primary
        primary: '#1F2E1F',
        
        // Accents
        toxic: '#8EFF60', // Phase 11-14 toxic green
        orange: '#FF6A00', // GOR orange
        gor: '#39C072', // Accent-2 toxic green
        
        // Toxic variants (Phase 11-14)
        'toxic-soft': 'rgba(142, 255, 96, 0.85)',
        'toxic-subtle': 'rgba(142, 255, 96, 0.45)',
        'toxic-faint': 'rgba(142, 255, 96, 0.15)',
        'toxic-border': 'rgba(142, 255, 96, 0.12)',
        
        // Glass & Borders
        glass: 'rgba(255, 255, 255, 0.02)',
        'glass-border': 'rgba(142, 255, 96, 0.12)',
        stroke: 'rgba(142, 255, 96, 0.08)',
        
        // Text
        muted: 'rgba(150, 160, 151, 0.8)',
        
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      borderRadius: {
        lg: '1.75rem',
        md: '1.25rem',
        sm: '0.75rem',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow': '0 0 32px rgba(142, 255, 96, 0.2)',
        'glow-strong': '0 0 48px rgba(142, 255, 96, 0.35)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 1px rgba(142, 255, 96, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;

