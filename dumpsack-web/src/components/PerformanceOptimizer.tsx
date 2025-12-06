import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Optimize animations for performance
    const optimizeAnimations = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
      }
    };

    // Initialize performance optimizations
    optimizeAnimations();

    // Cleanup
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;