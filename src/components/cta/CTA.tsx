'use client'

import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'

export const CTA = () => {
  return (
    <Section padding="xl" bg="surface">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-h2 font-h2 mb-6">Ready to go clean degen?</h2>
        <p className="text-body-l text-fg-secondary mb-8">
          Install the extension or get the app. It's everything you need — without the clutter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg">
            Download DumpSack
          </Button>
          <Button variant="outline" size="lg">
            Join the updates
          </Button>
        </div>
      </div>
    </Section>
  )
}