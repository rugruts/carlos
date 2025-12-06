'use client'

import { Section } from '@/components/layout/Section'
import { Grid, GridItem } from '@/components/layout/Grid'
import { Card } from '@/components/ui/Card'

const features = [
  {
    title: 'Smart Swap',
    description: 'Best route via TrashDAQ aggregator, transparent fees.',
    icon: '🔄',
  },
  {
    title: 'Risk Signals',
    description: 'Simulated transactions, warnings on suspicious tokens.',
    icon: '⚠️',
  },
  {
    title: 'Clear Analytics',
    description: 'Price, 24h change, OHLC candles, volume & TVL.',
    icon: '📊',
  },
  {
    title: 'Multi-Chain',
    description: 'Gorbagana first, Solana support included.',
    icon: '🔗',
  },
  {
    title: 'Privacy First',
    description: 'No tracking, local key storage.',
    icon: '🔒',
  },
  {
    title: 'Snappy UI',
    description: 'Low-latency, modern interactions, keyboard shortcuts.',
    icon: '⚡',
  },
]

export const Features = () => {
  return (
    <Section padding="lg" bg="surface">
      <h2 className="text-h2 font-h2 text-center mb-16">Built for traders</h2>
      <Grid cols={3} gap="lg">
        {features.map((feature, index) => (
          <GridItem key={index} span={1}>
            <Card className="h-full p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-h3 font-h3 mb-2">{feature.title}</h3>
              <p className="text-body-m text-fg-secondary">{feature.description}</p>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Section>
  )
}