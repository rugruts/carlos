'use client'

import React from 'react'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  bg?: 'base' | 'surface' | 'transparent'
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  padding = 'lg',
  bg = 'transparent',
}) => {
  // Convert padding to Tailwind classes
  const paddingClasses = {
    sm: 'py-16 md:py-24',
    md: 'py-24 md:py-32',
    lg: 'py-32 md:py-40',
    xl: 'py-40 md:py-48',
    none: '',
  }

  // Convert bg to Tailwind classes
  const bgClasses = {
    base: 'bg-bg-base',
    surface: 'bg-bg-surface',
    transparent: '',
  }

  return (
    <section className={`${paddingClasses[padding]} ${bgClasses[bg]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  )
}