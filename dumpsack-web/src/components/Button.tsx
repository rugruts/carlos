import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

interface ButtonAsButton
  extends BaseButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLink
  extends BaseButtonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    full = false,
    leadingIcon,
    trailingIcon,
    children,
    className = '',
    as = 'button',
    ...restProps
  } = props;

  const disabled = 'disabled' in props ? props.disabled : undefined;
  // Base classes
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-bold uppercase transition-all';

  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl',
  };

  // Width classes
  const widthClasses = full ? 'w-full' : '';

  // Disabled classes
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'active:scale-95';

  // Combine all classes
  const combinedClasses =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} ${className}`.trim();

  // Content wrapper
  const content = (
    <>
      {leadingIcon && <span className="flex-shrink-0">{leadingIcon}</span>}
      {children && <span>{children}</span>}
      {trailingIcon && <span className="flex-shrink-0">{trailingIcon}</span>}
    </>
  );

  // Render as link
  if (as === 'a') {
    const { href, target, rel, ...anchorProps } = restProps as ButtonAsLink;

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={disabled ? undefined : href}
        target={target}
        rel={target === '_blank' ? 'noreferrer noopener' : rel}
        className={combinedClasses}
        role="button"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={
          disabled ? (e) => e.preventDefault() : (anchorProps as any).onClick
        }
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Render as button (motion applied via CSS active:scale-95 in disabledClasses)
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      disabled={disabled}
      className={combinedClasses}
      aria-disabled={disabled}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
