/**
 * Motion tokens and variants for consistent, accessible animations.
 * All animations respect prefers-reduced-motion.
 */

import type { Transition, Variants } from 'framer-motion';

// Easing curves
export const ease = {
  standard: [0.2, 0.8, 0.2, 1],
  out: [0.16, 1, 0.3, 1],
  in: [0.32, 0, 0.67, 0],
} as const;

// Duration tokens (in seconds)
export const dur = {
  xs: 0.15,
  sm: 0.25,
  md: 0.4,
  lg: 0.6,
} as const;

// Spring presets
export const spring = {
  soft: { type: 'spring' as const, stiffness: 140, damping: 18 },
  snappy: { type: 'spring' as const, stiffness: 220, damping: 22 },
} as const;

// Common animation variants
export const variants = {
  // Fade up from below
  fadeUp: (y = 8): Variants => ({
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: dur.sm, ease: ease.out },
    },
  }),

  // Simple fade
  fade: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: dur.sm, ease: ease.out },
    },
  } as Variants,

  // Grow from center
  grow: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur.sm, ease: ease.out },
    },
  } as Variants,

  // Hover lift
  hover: {
    rest: { y: 0 },
    hover: {
      y: -2,
      transition: { duration: dur.xs, ease: ease.out },
    },
  } as Variants,

  // Icon nudge on hover
  nudge: {
    rest: { x: 0 },
    hover: {
      x: 2,
      transition: { duration: dur.xs, ease: ease.out },
    },
  } as Variants,

  // Mobile menu slide
  mobileMenu: {
    hidden: { opacity: 0, scaleY: 0.95, originY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: dur.sm, ease: ease.out },
    },
    exit: {
      opacity: 0,
      scaleY: 0.95,
      transition: { duration: dur.xs, ease: ease.in },
    },
  } as Variants,
} as const;

// Stagger container config
export const stagger = {
  fast: {
    staggerChildren: 0.05,
    delayChildren: 0.05,
  },
  medium: {
    staggerChildren: 0.08,
    delayChildren: 0.1,
  },
  slow: {
    staggerChildren: 0.12,
    delayChildren: 0.15,
  },
} as const;

// Default transition for MotionConfig
export const defaultTransition: Transition = {
  duration: dur.sm,
  ease: ease.standard,
};

// FIGMA PROTOTYPING ANIMATIONS
export const figmaAnimations = {
  // Button Hover: Glow increases by +8px blur, Scale: 1.02, Time: 0.15s
  buttonHover: {
    rest: { scale: 1, boxShadow: '0 0 24px rgba(0, 255, 98, 0.15)' },
    hover: {
      scale: 1.02,
      boxShadow: '0 0 32px rgba(0, 255, 98, 0.18)',
      transition: {
        duration: 0.15,
        ease: ease.out,
      },
    },
  },

  // Card Hover: Lift up: Y = -6px, Glow activates (soft green), Time: 0.25s
  cardHover: {
    rest: { y: 0, boxShadow: '0 0 24px rgba(0, 255, 98, 0.12)' },
    hover: {
      y: -6,
      boxShadow: '0 0 60px rgba(0, 255, 98, 0.18)',
      transition: {
        duration: 0.25,
        ease: ease.out,
      },
    },
  },

  // Mockup Float Animation: Y position oscillates by 16px, Duration: 3 seconds, Easing: ease-in-out
  mockupFloat: {
    float: {
      y: [0, -16, 0],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },
} as const;

// Enhanced modern animation variants
export const modernVariants = {
  // Modern fade with scale effect
  modernFade: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: dur.md, ease: ease.out },
    },
  },

  // Modern slide up with bounce
  modernSlideUp: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: dur.md,
        ease: [0.22, 1, 0.36, 1],
        bounce: 0.2,
      },
    },
  },

  // Modern card hover with 3D effect
  modernCardHover: {
    rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      y: -5,
      scale: 1.02,
      rotateX: 2,
      rotateY: -2,
      transition: {
        duration: dur.sm,
        ease: ease.out,
      },
    },
  },

  // Modern button press effect
  modernButtonPress: {
    rest: { scale: 1 },
    press: {
      scale: 0.95,
      transition: {
        duration: dur.xs,
        ease: ease.in,
      },
    },
    release: {
      scale: 1,
      transition: {
        duration: dur.sm,
        ease: ease.out,
      },
    },
  },

  // Modern mobile menu with enhanced animation
  modernMobileMenu: {
    hidden: { opacity: 0, scaleY: 0.9, originY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: dur.md,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0.9,
      transition: {
        duration: dur.xs,
        ease: [0.32, 0, 0.67, 0],
      },
    },
  },
} as const;

// Enhanced stagger effects for modern UI
export const modernStagger = {
  fast: {
    staggerChildren: 0.05,
    delayChildren: 0.05,
  },
  medium: {
    staggerChildren: 0.08,
    delayChildren: 0.1,
  },
  slow: {
    staggerChildren: 0.12,
    delayChildren: 0.15,
  },
  cascading: {
    staggerChildren: 0.15,
    delayChildren: 0.2,
  },
} as const;
