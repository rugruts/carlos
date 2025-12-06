import { Container } from '@/components/layout/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Container className="py-16 md:py-24 lg:py-32">{children}</Container>
      </main>
      <Footer />
    </div>
  )
}