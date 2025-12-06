/**
 * Hook to detect if user prefers reduced motion.
 * Returns true if animations should be disabled for accessibility.
 */

import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}

/**
 * Helper to get motion props that respect reduced motion preference.
 * If reduced motion is enabled, returns props that disable animations.
 */
export function useMotionProps(shouldReduceMotion: boolean) {
  if (shouldReduceMotion) {
    return {
      initial: false,
      animate: false,
      exit: false,
      transition: { duration: 0 },
    };
  }

  return {};
}
