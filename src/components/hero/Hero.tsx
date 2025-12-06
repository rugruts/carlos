'use client'

import { Button } from '@/components/ui/Button'
import { Section } from '@/components/layout/Section'
import { Grid, GridItem } from '@/components/layout/Grid'

export const Hero = () => {
  return (
    <Section padding="xl" className="text-center">
      <Grid cols={1} gap="xl">
        <GridItem span={1}>
          <h1 className="text-display font-display mb-6">
            The premium wallet for<br />
            Gorbagana & Solana
          </h1>
          <p className="text-body-l text-fg-secondary mb-8 max-w-2xl mx-auto">
            Non-custodial. Fast swaps. Clear analytics. A clean, modern wallet built for people who actually trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Download DumpSack
            </Button>
            <Button variant="outline" size="lg">
              See all features
            </Button>
          </div>
        </GridItem>
      </Grid>
    </Section>
  )
}