import { motion } from 'framer-motion';
import React from 'react';
import { modernVariants } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'right',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isInteractive = !!(onClick || href);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10', // 40px height
    md: 'px-7 py-3 text-base h-12', // 48px height
    lg: 'px-8 py-4 text-lg h-14', // 56px height
  };

  const variantClasses = {
    primary: {
      base: 'bg-toxic-green text-black border-2 border-toxic-green',
      hover: 'hover:bg-toxic-green hover:shadow-[var(--glow-soft)]',
      active: 'active:scale-95',
    },
    secondary: {
      base: 'bg-transparent text-toxic-green border border-border-glass',
      hover: 'hover:bg-toxic-green/10 hover:shadow-[var(--glow-soft)]',
      active: 'active:scale-95',
    },
    outline: {
      base: 'bg-transparent text-toxic-green border border-border-glass',
      hover: 'hover:border-toxic-green/30 hover:text-toxic-green hover:shadow-[var(--glow-soft)]',
      active: 'active:scale-95',
    },
    ghost: {
      base: 'bg-transparent text-brand-white-65 border-transparent',
      hover: 'hover:text-toxic-green hover:bg-toxic-green/5',
      active: 'active:scale-95',
    },
  };

  const classes = variantClasses[variant];
  const buttonClasses = `inline-flex items-center justify-center gap-2 button-label rounded-[12px] transition-all duration-300 ${sizeClasses[size]} ${classes.base} ${className}`;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: isInteractive ? 'hover' : undefined,
        whileTap: isInteractive ? 'press' : undefined,
        variants: modernVariants.modernButtonPress,
        initial: 'rest',
      };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default ModernButton;