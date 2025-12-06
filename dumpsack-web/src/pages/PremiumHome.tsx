import React from 'react';
import { motion } from 'framer-motion';
import ModernButton from '@/components/ModernButton';
import ModernCard from '@/components/ModernCard';
import ModernBadge from '@/components/ModernBadge';
import { Download, Wallet, Trash2, Smartphone, Globe, Chrome, Apple, PlayCircle, ChevronDown, Search, Menu, X } from 'lucide-react';

// Type definitions
interface FeatureItem {
  title: string;
  description: string;
}

interface PremiumFeatureSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
  reverse?: boolean;
}

interface FooterSection {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
}

// Premium Navbar Component
const PremiumNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/wallet', label: 'Wallet' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/developers', label: 'Developers' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-xl border-b border-border-glass">
        <div className="max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo Block */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-toxic-green rounded-xl flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tight">DumpSack</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-white-65 hover:text-toxic-green transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-toxic-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <ModernButton variant="primary" size="md" className="px-6 py-3">
              <Download className="w-4 h-4 mr-2" />
              Download
            </ModernButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-brand-white-65 hover:text-toxic-green"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-bg-base pt-20 px-6 overflow-y-auto lg:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-bold text-brand-white hover:text-toxic-green transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-border-glass my-4" />
            <ModernButton variant="primary" size="lg" className="w-full justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download DumpSack
            </ModernButton>
          </div>
        </motion.div>
      )}
    </>
  );
};

// Premium Hero Section
const PremiumHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-toxic-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-bg-base pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="display-1 mb-6">
              Your <span className="text-toxic-green">Trusted</span><br />
              Crypto Companion
            </h1>
            <p className="body-l text-brand-white-65 mb-8 max-w-lg">
              DumpSack is the ultimate wallet for Solana degens. Secure, fast, and packed with powerful features to manage your crypto assets.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <ModernButton variant="primary" size="lg" className="px-8 py-4">
                Get Started
              </ModernButton>
              <ModernButton variant="outline" size="lg" className="px-8 py-4">
                Learn More
              </ModernButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-toxic-green rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-brand-white-65">Trusted by 100K+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-toxic-green rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <span className="text-sm text-brand-white-65">Audited & Secure</span>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-16, 0, -16] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              className="relative"
            >
              <div className="w-full max-w-sm mx-auto">
                <img
                  src="/mockups/wallet-hero.svg"
                  alt="DumpSack Wallet Interface"
                  className="w-full rounded-3xl border-2 border-toxic-green/20 shadow-[0_0_80px_rgba(0,255,98,0.25)]"
                />
                <div className="absolute inset-0 bg-toxic-green/10 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Premium Feature Section
const PremiumFeatureSection = ({ title, description, features, reverse = false }: PremiumFeatureSectionProps) => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div>
            <h2 className="h1 mb-4">{title}</h2>
            <p className="body-l text-brand-white-65 mb-8">{description}</p>

            <div className="space-y-4">
              {features.map((feature: FeatureItem, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-toxic-green/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-toxic-green text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="h3 mb-1">{feature.title}</h3>
                    <p className="body-s text-brand-white-65">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={reverse ? "/illustrations/network-nodes.svg" : "/illustrations/chain-integration.svg"}
              alt="Feature illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Premium CTA Section
const PremiumCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-toxic-green/5 to-transparent"></div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="h1 mb-4">Get Started with DumpSack</h2>
        <p className="body-l text-brand-white-65 mb-8 max-w-2xl mx-auto">
          Join the growing community of Solana users who trust DumpSack for their crypto needs.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <ModernBadge text="App Store" icon={<Apple className="w-4 h-4" />} variant="trust" />
          <ModernBadge text="Google Play" icon={<PlayCircle className="w-4 h-4" />} variant="trust" />
          <ModernBadge text="Chrome Extension" icon={<Chrome className="w-4 h-4" />} variant="trust" />
        </div>

        <div className="flex justify-center gap-4">
          <ModernButton variant="primary" size="lg" className="px-8 py-4">
            Download Now
          </ModernButton>
          <ModernButton variant="secondary" size="lg" className="px-8 py-4">
            View Demo
          </ModernButton>
        </div>
      </div>
    </section>
  );
};

// Premium Footer
const PremiumFooter = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Product",
      items: [
        { name: "Wallet", href: "#" },
        { name: "NFT Tools", href: "#" },
        { name: "TrashNet", href: "#" },
        { name: "Swap", href: "#" },
      ]
    },
    {
      title: "Developers",
      items: [
        { name: "API", href: "#" },
        { name: "Docs", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "SDK", href: "#" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Community", href: "#" },
        { name: "Support", href: "#" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" },
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "Disclaimers", href: "#" },
      ]
    }
  ];

  return (
    <footer className="border-t border-border-glass mt-20">
      <div className="container-custom py-16">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section: FooterSection, index: number) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-brand-white h3">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex: number) => (
                  <li key={itemIndex}>
                    <a href={item.href} className="body-s text-brand-white-65 hover:text-toxic-green transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Utility Row */}
        <div className="border-t border-border-glass pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-white-45" />
              <span className="text-sm text-brand-white-45">English</span>
              <ChevronDown className="w-3 h-3 text-brand-white-45" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-400">✓</span>
              <span className="text-sm text-brand-white-45">All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-white-45 hover:text-toxic-green transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.173 4.71-1.277 1.277-2.852 2.004-4.71 2.173-.38.035-.747.035-1.127 0-1.858-.169-3.433-.896-4.71-2.173-1.277-1.277-2.004-2.852-2.173-4.71-.035-.38-.035-.747 0-1.127.169-1.858.896-3.433 2.173-4.71 1.277-1.277 2.852-2.004 4.71-2.173.38-.035.747-.035 1.127 0 1.858.169 3.433.896 4.71 2.173 1.277 1.277 2.004 2.852 2.173 4.71.035.38.035.747 0 1.127z"/>
              </svg>
            </a>
            <a href="#" className="text-brand-white-45 hover:text-toxic-green transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.181-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-brand-white-45">
            © {new Date().getFullYear()} DumpSack. All rights reserved.
          </p>
          <p className="text-xs text-brand-white-45 mt-2">
            DumpSack is not affiliated with or endorsed by Solana Foundation or any other blockchain entity.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Premium Home Page
const PremiumHome: React.FC = () => {
  return (
    <div className="bg-bg-base text-brand-white min-h-screen">
      <PremiumNavbar />

      <main className="pt-20">
        <PremiumHero />

        {/* Keep Everything Section */}
        <section className="py-20">
          <div className="container-custom text-center">
            <h2 className="h1 mb-4">Keep everything in one place</h2>
            <p className="body-l text-brand-white-65 mb-12 max-w-2xl mx-auto">
              Manage all your Solana assets, NFTs, and tokens in a single, secure wallet.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <img
                src="/screens/wallet-dashboard.svg"
                alt="Wallet Dashboard"
                className="w-full rounded-2xl border-2 border-toxic-green/20 shadow-[0_0_60px_rgba(0,255,98,0.2)]"
              />
              <div className="absolute inset-0 bg-toxic-green/5 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* NFT Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="h1 mb-4">Do more with NFTs</h2>
                <p className="body-l text-brand-white-65 mb-8">
                  Pin, hide, burn, and list your NFTs with powerful management tools.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-bg-elevated p-4 rounded-xl border border-border-glass">
                    <img src="/assets/nft-placeholder.svg" alt="NFT" className="w-full rounded-lg mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pin</span>
                      <span className="text-sm">Hide</span>
                      <span className="text-sm">Burn</span>
                    </div>
                  </div>
                  <div className="bg-bg-elevated p-4 rounded-xl border border-border-glass">
                    <img src="/assets/nft-placeholder.svg" alt="NFT" className="w-full rounded-lg mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pin</span>
                      <span className="text-sm">Hide</span>
                      <span className="text-sm">Burn</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/illustrations/chain-integration.svg"
                  alt="NFT Features"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Self-Custodial Section */}
        <section className="py-20">
          <div className="container-custom text-center">
            <h2 className="h1 mb-4">Self-custodial means you control your funds</h2>
            <p className="body-l text-brand-white-65 mb-12 max-w-2xl mx-auto">
              We never have access to your funds. You maintain complete control with industry-leading security.
            </p>

            <div className="relative max-w-xl mx-auto">
              <img
                src="/illustrations/network-nodes.svg"
                alt="Self Custody"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <PremiumFeatureSection
          title="Built for Solana"
          description="Optimized for the Solana blockchain with lightning-fast transactions and minimal fees."
          features={[
            { title: "Instant Transactions", description: "Experience near-instant transaction confirmation." },
            { title: "Low Fees", description: "Enjoy minimal transaction costs on the Solana network." },
            { title: "Scalable", description: "Built to handle high transaction volumes effortlessly." },
          ]}
        />

        <PremiumFeatureSection
          title="Advanced Security"
          description="Your assets are protected with military-grade encryption and security protocols."
          features={[
            { title: "Biometric Authentication", description: "Secure access with fingerprint or face recognition." },
            { title: "Hardware Wallet Support", description: "Connect Ledger and other hardware wallets." },
            { title: "Phishing Protection", description: "Advanced detection of malicious sites and transactions." },
          ]}
          reverse={true}
        />

        <PremiumCTA />
        <PremiumFooter />
      </main>
    </div>
  );
};

export default PremiumHome;