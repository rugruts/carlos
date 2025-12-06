'use client'

import React from 'react'
import { tokens } from '@/lib/tokens'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: `bg-brand-green text-black hover:bg-brand-green-dark`,
    outline: `border border-glass-border hover:bg-glass-surface`,
    ghost: `hover:bg-glass-surface`,
  }

  // Size styles
  const sizeStyles = {
    sm: `px-4 py-2 text-small`,
    md: `px-6 py-3 text-button`,
    lg: `px-8 py-4 text-body-m`,
  }

  return (
    <button
      className={`rounded-button font-button uppercase tracking-button transition-default hover:brighten hover:lift focus-visible ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}