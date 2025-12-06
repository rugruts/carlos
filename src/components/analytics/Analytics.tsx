'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export const Analytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}${searchParams.toString()}`
    console.log('Page view:', url)

    // In a real implementation, you would send this to your analytics service
    // For example: plausible('pageview') or posthog.capture('$pageview')
  }, [pathname, searchParams])

  return null
}