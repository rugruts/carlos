import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ModernGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  animate?: 'fade' | 'slide' | 'scale' | 'none';
}

const ModernGrid: React.FC<ModernGridProps> = ({
  children,
  className = '',
  columns = 3,
  gap = 'md',
  responsive = true,
  animate = 'fade',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const columnClasses = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6' : 'grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const animationProps = shouldReduceMotion || animate === 'none'
    ? {}
    : {
        initial: 'hidden',
        animate: 'show',
        variants: {
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        },
      };

  const getItemAnimation = () => {
    switch (animate) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -20 },
          show: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          show: { opacity: 1, scale: 1 },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}
      {...animationProps}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = child.props || {};
          return React.cloneElement(child, {
            ...childProps,
            ...(shouldReduceMotion || animate === 'none' ? {} : {
              variants: getItemAnimation(),
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }),
          });
        }
        return child;
      })}
    </motion.div>
  );
};

export default ModernGrid;