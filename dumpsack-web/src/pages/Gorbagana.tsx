import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import EcosystemBlock from '@/components/EcosystemBlock';
import { Globe, Coins, Droplet, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gorbagana() {
  useEffect(() => {
    document.title = 'Gorbagana - DumpSack';
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
          <h1 className="mb-6">
            Gorbagana <span className="text-toxic">Chain</span>
          </h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            A degen-first L1 with near-instant confirmations and tiny fees.
          </p>
        </motion.div>
      </Section>

      {/* What is Gorbagana */}
      <Section background="gradient" spacing="large">
        <div className="card p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase mb-6 text-center">
            What is Gorbagana?
          </h2>
          <div className="space-y-4 text-dsMuted leading-relaxed">
            <p>
              Gorbagana (also known as Trashnet) is a high-performance Layer 1
              blockchain designed for speed, low costs, and maximum degen
              energy. Built from the ground up to handle high-frequency trading
              and rapid token movements, Gorbagana offers a unique ecosystem for
              crypto natives who demand more from their infrastructure.
            </p>
            <p>
              Unlike traditional chains that prioritize enterprise use cases,
              Gorbagana embraces the chaos of decentralized finance. With
              near-instant block times and minimal transaction fees, it's the
              perfect playground for traders, builders, and degens who refuse to
              compromise on speed or cost.
            </p>
            <p>
              DumpSack provides native, first-class support for Gorbagana,
              making it the easiest way to manage your Trashnet assets, interact
              with dApps, and stay connected to the ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Ecosystem Blocks */}
      <Section spacing="large">
        <SectionHeader
          subtitle="Ecosystem"
          title="GORBAGANA TOOLS"
          description="Essential tools and services for navigating the Trashnet ecosystem."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <EcosystemBlock
            icon={Globe}
            title="Block Explorer"
            description="Track transactions, view wallet balances, and explore the Gorbagana blockchain in real-time."
            link={{
              label: 'View Explorer',
              href: '#',
            }}
            accentColor="toxic"
            delay={0}
          />

          <EcosystemBlock
            icon={Coins}
            title="DEX Integration"
            description="Swap tokens instantly with integrated decentralized exchange support. Low slippage, high speed."
            link={{
              label: 'Start Trading',
              href: '#',
            }}
            accentColor="orange"
            delay={0.1}
          />

          <EcosystemBlock
            icon={Code}
            title="Token Registry"
            description="Browse verified tokens, view metadata, and discover new projects building on Gorbagana."
            link={{
              label: 'Browse Tokens',
              href: '#',
            }}
            accentColor="toxic"
            delay={0.2}
          />

          <EcosystemBlock
            icon={Droplet}
            title="Faucet & RPC"
            description="Get testnet tokens for development and access reliable RPC endpoints for your applications."
            link={{
              label: 'Get Started',
              href: '/developers',
            }}
            accentColor="orange"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Stats */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Performance"
          title="BUILT FOR SPEED"
          description="Gorbagana delivers the performance degens demand."
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
            <Zap
              className="w-12 h-12 text-toxic mx-auto mb-4"
              strokeWidth={2}
            />
            <h3 className="text-lg font-bold mb-2">Fast Confirmations</h3>
            <p className="text-sm text-dsMuted">
              Near-instant block times mean your transactions confirm in
              seconds, not minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8 text-center"
          >
            <Coins
              className="w-12 h-12 text-orange mx-auto mb-4"
              strokeWidth={2}
            />
            <h3 className="text-lg font-bold mb-2">Low Fees</h3>
            <p className="text-sm text-dsMuted">
              Minimal transaction costs keep more value in your pocket, not the
              network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 text-center"
          >
            <Shield
              className="w-12 h-12 text-toxic mx-auto mb-4"
              strokeWidth={2}
            />
            <h3 className="text-lg font-bold mb-2">Secure & Reliable</h3>
            <p className="text-sm text-dsMuted">
              Battle-tested consensus and robust validator network ensure your
              assets stay safe.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* For Builders */}
      <Section spacing="large">
        <div className="card toxic-ring p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="mb-6">Building on Gorbagana?</h2>
          <p className="text-xl text-dsMuted mb-8 max-w-2xl mx-auto">
            Integrate DumpSack into your dApp and give your users the best
            wallet experience on Trashnet. Simple APIs, comprehensive docs, and
            full ecosystem support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/developers" className="btn-primary">
              Developer Docs
            </Link>
            <Link to="/download" className="btn-secondary">
              Get DumpSack
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
