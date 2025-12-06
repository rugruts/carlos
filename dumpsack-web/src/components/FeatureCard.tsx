import { motion } from 'framer-motion';
import React from 'react';
import { variants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  accentColor?: 'toxic' | 'orange';
  delay?: number;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
  onClick,
  accentColor = 'toxic',
  delay = 0,
  children,
}) => {
  const descriptionId = React.useId();
  const isInteractive = !!(href || onClick);
  const shouldReduceMotion = useReducedMotion();

  const colorClasses = {
    toxic: {
      border: 'border-l-toxic',
      icon: 'text-toxic',
      glow: 'group-hover:shadow-glow',
    },
    orange: {
      border: 'border-l-orange',
      icon: 'text-orange',
      glow: 'group-hover:shadow-glow-orange',
    },
  };

  const colors = colorClasses[accentColor];

  const cardContent = (
    <>
      {/* Icon */}
      {icon && (
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${
              accentColor === 'toxic'
                ? 'from-toxic/20 to-toxic/5 border border-toxic/30'
                : 'from-orange/20 to-orange/5 border border-orange/30'
            }`}
          >
            <div className={`w-7 h-7 ${colors.icon}`} aria-hidden="true">
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-black uppercase mb-4 text-white tracking-tight">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p id={descriptionId} className="text-dsMuted leading-relaxed mb-4">
          {description}
        </p>
      )}

      {/* Optional Children */}
      {children && <div className="mt-6">{children}</div>}
    </>
  );

  const cardClasses = `card-hover p-8 h-full border-l-4 ${colors.border} ${
    isInteractive ? colors.glow : ''
  } transition-all duration-300`;

  const motionProps = shouldReduceMotion
    ? { className: 'group h-full' }
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, margin: '-100px' },
        variants: variants.fadeUp(20),
        transition: { delay },
        className: 'group h-full',
      };

  const hoverProps =
    isInteractive && !shouldReduceMotion
      ? {
          initial: 'rest',
          whileHover: 'hover',
          animate: 'rest',
          variants: variants.hover,
        }
      : {};

  // Render as link
  if (href) {
    return (
      <motion.a
        href={href}
        aria-describedby={description ? descriptionId : undefined}
        {...motionProps}
        {...hoverProps}
      >
        <div className={cardClasses}>{cardContent}</div>
      </motion.a>
    );
  }

  // Render as button
  if (onClick) {
    const buttonMotionProps = {
      ...motionProps,
      ...hoverProps,
      className: `${motionProps.className} text-left w-full`,
    };

    return (
      <motion.button
        onClick={onClick}
        aria-describedby={description ? descriptionId : undefined}
        {...buttonMotionProps}
      >
        <div className={cardClasses}>{cardContent}</div>
      </motion.button>
    );
  }

  // Render as static div
  return (
    <motion.div {...motionProps}>
      <div className={cardClasses}>{cardContent}</div>
    </motion.div>
  );
};

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
