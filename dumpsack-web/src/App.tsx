import { Outlet, useLocation } from 'react-router-dom';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import ModernNavbar from '@/components/ModernNavbar';
import PhantomFooter from '@/components/PhantomFooter';
import SkipLink from '@/components/SkipLink';
import FocusRestore from '@/components/FocusRestore';
import { defaultTransition, variants, dur, ease } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function App() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig
      transition={defaultTransition}
      reducedMotion={shouldReduceMotion ? 'always' : 'never'}
    >
      <div className="min-h-screen bg-black text-white">
        <SkipLink href="#main" />

        <header>
          <ModernNavbar />
        </header>

        <main
          id="main"
          tabIndex={-1}
          className="min-h-screen focus:outline-none"
        >
          <FocusRestore />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={shouldReduceMotion ? undefined : 'hidden'}
              animate={shouldReduceMotion ? undefined : 'show'}
              exit={shouldReduceMotion ? undefined : 'hidden'}
              variants={variants.fadeUp(10)}
              transition={{ duration: dur.sm, ease: ease.out }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <footer>
          <PhantomFooter />
        </footer>
      </div>
    </MotionConfig>
  );
}
