import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import FeatureGrid from '@/components/FeatureGrid';
import StripeCTA from '@/components/StripeCTA';
import {
  Wallet,
  Zap,
  Shield,
  Users,
  HardDrive,
  Palette,
  Bell,
  Globe,
  Gauge,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  useEffect(() => {
    document.title = 'Features - DumpSack';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <Section spacing="large">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="mb-6">All Features</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Everything you need to move fast on Trashchains and Solana.
          </p>
        </motion.div>
      </Section>

      {/* Feature Grid */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="CAPABILITIES"
          title="Built for Speed & Chaos"
          description="A complete toolkit for managing your degen portfolio across chains."
        />

        <FeatureGrid
          columns={3}
          features={[
            {
              icon: Wallet,
              title: 'Gorbagana Native',
              description:
                'Trashnet-first with ecosystem tools built-in. Explorer links, faucet helpers, token registry on tap.',
            },
            {
              icon: Zap,
              title: 'Solana Support',
              description:
                'SPL balances, token metadata, swaps, optional NFTs. Lightning-fast transactions with full compatibility.',
            },
            {
              icon: Shield,
              title: 'Non-Custodial Security',
              description:
                'Your keys, your crypto. Private keys never leave your device. Full control, zero trust required.',
            },
            {
              icon: Users,
              title: 'Multi-Wallet Profiles',
              description:
                'Manage multiple wallets seamlessly. Switch between accounts with a single tap. Perfect for portfolio separation.',
            },
            {
              icon: HardDrive,
              title: 'Local Storage',
              description:
                'All data stored locally on your device. No cloud sync, no tracking, no third-party servers. Pure privacy.',
            },
            {
              icon: Palette,
              title: 'Custom Themes',
              description:
                'Personalize your wallet with custom color schemes. Dark mode, light mode, or create your own toxic aesthetic.',
            },
            {
              icon: Bell,
              title: 'Transaction Alerts',
              description:
                'Real-time notifications for incoming and outgoing transactions. Never miss a transfer or swap confirmation.',
            },
            {
              icon: Globe,
              title: 'Multi-Language',
              description:
                'Available in 12+ languages. Localized for global degens. Community translations welcome.',
            },
            {
              icon: Gauge,
              title: 'Performance Optimized',
              description:
                'Lightning-fast load times, minimal resource usage. Runs smoothly even on older devices.',
            },
          ]}
        />

      </Section>

      {/* Mini Comparisons */}
      <Section spacing="large">
        <SectionHeader
          subtitle="WHY DUMPSACK"
          title="What Makes Us Different"
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-black text-toxic mb-4">0.3s</div>
            <h3 className="text-lg font-bold mb-2">Lightning Speed</h3>
            <p className="text-sm text-dsMuted">
              Average transaction confirmation time. Built for the fast lane.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-black text-orange mb-4">100%</div>
            <h3 className="text-lg font-bold mb-2">Degen Focus</h3>
            <p className="text-sm text-dsMuted">
              No compromises. Built exclusively for trashchain degens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-black text-toxic mb-4">$0.0001</div>
            <h3 className="text-lg font-bold mb-2">Minimal Fees</h3>
            <p className="text-sm text-dsMuted">
              Average transaction cost. Keep more of your gains.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA Strip */}
      <StripeCTA
        title="Ready to experience the difference?"
        description="Download DumpSack and start managing your portfolio with the fastest wallet on Trashchains."
        variant="gradient"
        actions={
          <Link to="/download" className="btn-primary">
            Download DumpSack
          </Link>
        }
      />
    </>
  );
}
