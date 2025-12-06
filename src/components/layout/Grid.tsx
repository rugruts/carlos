'use client'

import React from 'react'

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 12,
  gap = 'md',
}) => {
  // Convert cols to Tailwind grid classes
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  }

  // Convert gap to Tailwind gap classes
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  }

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

interface GridItemProps {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 6 | 12
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className = '',
  span = 1,
}) => {
  // Convert span to Tailwind col-span classes
  const spanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    12: 'col-span-12',
  }

  return (
    <div className={`${spanClasses[span]} ${className}`}>
      {children}
    </div>
  )
}