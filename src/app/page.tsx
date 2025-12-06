import Hero from '@/components/hero'
import Features from '@/components/features'
import Ecosystem from '@/components/ecosystem'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Ecosystem />
      <CTA />
    </main>
  )
}