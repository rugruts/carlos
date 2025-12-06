'use client'

import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}