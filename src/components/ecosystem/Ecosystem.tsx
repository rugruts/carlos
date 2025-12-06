'use client'

import { Section } from '@/components/layout/Section'
import { Grid, GridItem } from '@/components/layout/Grid'

export const Ecosystem = () => {
  return (
    <Section padding="lg">
      <Grid cols={2} gap="xl">
        <GridItem span={1}>
          <h2 className="text-h2 font-h2 mb-6">Built for the Trashchains</h2>
          <p className="text-body-l text-fg-secondary mb-8">
            Tuned for Gorbagana with polished Solana support, so you get real speed where it matters.
          </p>
        </GridItem>
        <GridItem span={1}>
          <h2 className="text-h2 font-h2 mb-6">Your keys. Your crypto.</h2>
          <p className="text-body-l text-fg-secondary mb-8">
            DumpSack never holds your assets. You control your seed, devices, and backups.
          </p>
        </GridItem>
      </Grid>
    </Section>
  )
}