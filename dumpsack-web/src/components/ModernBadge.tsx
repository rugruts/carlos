import React from 'react';

interface ModernBadgeProps {
  text: string;
  icon?: React.ReactNode;
  variant?: 'trust' | 'info' | 'success' | 'warning';
  className?: string;
}

const ModernBadge: React.FC<ModernBadgeProps> = ({
  text,
  icon,
  variant = 'trust',
  className = '',
}) => {
  const variantClasses = {
    trust: {
      bg: 'bg-toxic-green/10',
      border: 'border-toxic-green/20',
      text: 'text-toxic-green',
    },
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      text: 'text-green-400',
    },
    warning: {
      bg: 'bg-orange/10',
      border: 'border-orange/20',
      text: 'text-orange',
    },
  };

  const classes = variantClasses[variant];

  return (
    <div className={`inline-flex items-center justify-center h-7 px-3 rounded-[12px] border ${classes.bg} ${classes.border} ${className}`}>
      {icon && (
        <span className="mr-2 text-sm">
          {icon}
        </span>
      )}
      <span className={`text-xs font-semibold uppercase tracking-wide ${classes.text}`}>
        {text}
      </span>
    </div>
  );
};

export default ModernBadge;