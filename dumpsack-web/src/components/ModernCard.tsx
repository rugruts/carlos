import { motion } from 'framer-motion';
import React from 'react';
import { variants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ModernCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: 'toxic' | 'orange' | 'blue' | 'purple';
  hoverEffect?: 'glow' | 'lift' | 'scale';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  title,
  description,
  icon,
  accentColor = 'toxic',
  hoverEffect = 'lift',
  children,
  className = '',
  onClick,
  href,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isInteractive = !!(onClick || href);

  const colorClasses = {
    toxic: {
      bg: 'bg-toxic/10',
      border: 'border-toxic/20',
      text: 'text-toxic',
      hoverBg: 'hover:bg-toxic/15',
      glow: 'hover:shadow-glow',
    },
    orange: {
      bg: 'bg-orange/10',
      border: 'border-orange/20',
      text: 'text-orange',
      hoverBg: 'hover:bg-orange/15',
      glow: 'hover:shadow-glow-orange',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      hoverBg: 'hover:bg-blue-500/15',
      glow: 'hover:shadow-blue-500/20',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      hoverBg: 'hover:bg-purple-500/15',
      glow: 'hover:shadow-purple-500/20',
    },
  };

  const colors = colorClasses[accentColor];

  const hoverEffects = {
    glow: `${colors.glow} ${colors.hoverBg}`,
    lift: 'hover:-translate-y-1',
    scale: 'hover:scale-[1.02]',
  };

  const cardContent = (
    <>
      {/* Icon with modern glow effect */}
      {icon && (
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border-2`}>
            <div className={`w-7 h-7 ${colors.text}`} aria-hidden="true">
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Title with modern typography */}
      <h3 className="text-2xl font-black uppercase mb-4 text-white tracking-tight">
        {title}
      </h3>

      {/* Description with modern spacing */}
      <p className="text-dsMuted leading-relaxed mb-6">
        {description}
      </p>

      {/* Children content */}
      {children && <div className="mt-4">{children}</div>}
    </>
  );

  const baseClasses = `card-hover p-7 h-full rounded-[16px] border border-border-glass bg-bg-elevated transition-all duration-300 ${hoverEffects[hoverEffect]} ${className}`;

  const motionProps = shouldReduceMotion
    ? { className: 'group h-full' }
    : {
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, margin: '-100px' },
        variants: variants.fadeUp(20),
        transition: { delay: 0 },
        className: 'group h-full',
      };

  // Render as link
  if (href) {
    return (
      <motion.a
        href={href}
        {...motionProps}
      >
        <div className={baseClasses}>{cardContent}</div>
      </motion.a>
    );
  }

  // Render as button
  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        {...motionProps}
      >
        <div className={baseClasses}>{cardContent}</div>
      </motion.button>
    );
  }

  // Render as static div
  return (
    <motion.div {...motionProps}>
      <div className={baseClasses}>{cardContent}</div>
    </motion.div>
  );
};

export default ModernCard;