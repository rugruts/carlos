'use client'

import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass'
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-bg-surface border border-glass-border',
    glass: 'glass-effect',
  }

  return (
    <div className={`rounded-card p-6 shadow-card ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}