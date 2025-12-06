import React from 'react';
import ModernButton from '@/components/ModernButton';
import ModernCard from '@/components/ModernCard';
import ModernBadge from '@/components/ModernBadge';
import GlassPanel from '@/components/GlassPanel';
import { Download, Wallet, Trash2, Smartphone, Globe, Chrome, Apple, PlayCircle } from 'lucide-react';

const FigmaTemplate: React.FC = () => {
  return (
    <div className="bg-bg-base text-brand-white min-h-screen">
      {/* Hero Section */}
      <section className="container-custom pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="display-1">DumpSack Wallet</h1>
            <p className="body-l text-brand-white-65 max-w-lg">
              The ultimate crypto wallet for degens. Secure, fast, and built for the Solana ecosystem.
            </p>
            <div className="flex gap-4">
              <ModernButton variant="primary" size="lg">
                Get Started
              </ModernButton>
              <ModernButton variant="outline" size="lg">
                Learn More
              </ModernButton>
            </div>
          </div>
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img
                src="/mockups/wallet-hero.svg"
                alt="Wallet Mockup"
                className="w-full animate-mockup-float"
              />
              <div className="absolute inset-0 bg-toxic-green/10 rounded-3xl blur-3xl -z-10" style={{ boxShadow: 'var(--glow-strong)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="h1 mb-4">Built for Degens</h2>
          <p className="body-l text-brand-white-65 max-w-2xl mx-auto">
            Everything you need to manage your crypto assets with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ModernCard
            title="Secure Storage"
            description="Your assets are protected with industry-leading security and self-custody."
            icon={<Wallet className="w-6 h-6 text-toxic-green" />}
            accentColor="toxic"
          >
            <ModernButton variant="ghost" className="mt-4">
              Learn More
            </ModernButton>
          </ModernCard>

          <ModernCard
            title="Fast Transactions"
            description="Lightning-fast Solana transactions with minimal fees."
            icon={<Smartphone className="w-6 h-6 text-toxic-green" />}
            accentColor="toxic"
          >
            <ModernButton variant="ghost" className="mt-4">
              Try Now
            </ModernButton>
          </ModernCard>

          <ModernCard
            title="NFT Management"
            description="Advanced NFT tools for collectors and traders."
            icon={<Trash2 className="w-6 h-6 text-toxic-green" />}
            accentColor="toxic"
          >
            <ModernButton variant="ghost" className="mt-4">
              Explore
            </ModernButton>
          </ModernCard>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="h1 mb-4">Ecosystem Overview</h2>
          <p className="body-l text-brand-white-65 max-w-2xl mx-auto">
            Connect with the entire Solana ecosystem seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-bg-elevated p-6 rounded-[16px] border border-border-glass">
            <div className="w-12 h-12 bg-toxic-green/10 rounded-xl flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-toxic-green" />
            </div>
            <h3 className="h3 mb-2">Wallet Integration</h3>
            <p className="body-s text-brand-white-65 mb-4">
              Connect with all major Solana wallets and protocols.
            </p>
            <ModernButton variant="ghost" size="sm">
              Connect Wallet
            </ModernButton>
          </div>

          <div className="bg-bg-elevated p-6 rounded-[16px] border border-border-glass">
            <div className="w-12 h-12 bg-toxic-green/10 rounded-xl flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6 text-toxic-green" />
            </div>
            <h3 className="h3 mb-2">TrashNet</h3>
            <p className="body-s text-brand-white-65 mb-4">
              Securely dispose of unwanted tokens and NFTs.
            </p>
            <ModernButton variant="ghost" size="sm">
              Learn More
            </ModernButton>
          </div>

          <div className="bg-bg-elevated p-6 rounded-[16px] border border-border-glass">
            <div className="w-12 h-12 bg-toxic-green/10 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-toxic-green" />
            </div>
            <h3 className="h3 mb-2">Solana Integration</h3>
            <p className="body-s text-brand-white-65 mb-4">
              Full support for Solana blockchain features.
            </p>
            <ModernButton variant="ghost" size="sm">
              Explore
            </ModernButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="h1 mb-4">Get Started Today</h2>
          <p className="body-l text-brand-white-65 mb-8">
            Join thousands of users who trust DumpSack for their crypto needs.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <ModernBadge text="App Store" icon={<Apple className="w-4 h-4" />} />
            <ModernBadge text="Google Play" icon={<PlayCircle className="w-4 h-4" />} />
            <ModernBadge text="Chrome Extension" icon={<Chrome className="w-4 h-4" />} />
          </div>

          <div className="flex justify-center gap-4">
            <ModernButton variant="primary" size="lg">
              Download Now
            </ModernButton>
            <ModernButton variant="secondary" size="lg">
              View Demo
            </ModernButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-glass mt-20">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Product</h4>
              <ul className="space-y-2 body-s text-brand-white-65">
                <li><a href="#" className="hover:text-toxic-green transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">NFT Tools</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">TrashNet</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Swap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Developers</h4>
              <ul className="space-y-2 body-s text-brand-white-65">
                <li><a href="#" className="hover:text-toxic-green transition-colors">API</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">SDK</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Resources</h4>
              <ul className="space-y-2 body-s text-brand-white-65">
                <li><a href="#" className="hover:text-toxic-green transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Company</h4>
              <ul className="space-y-2 body-s text-brand-white-65">
                <li><a href="#" className="hover:text-toxic-green transition-colors">About</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Legal</h4>
              <ul className="space-y-2 body-s text-brand-white-65">
                <li><a href="#" className="hover:text-toxic-green transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-toxic-green transition-colors">Disclaimers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-glass mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="text-sm text-brand-white-45">English</span>
              <span className="text-sm text-brand-white-45">🌐 Global</span>
              <span className="text-sm text-green-400">✓ All Systems Operational</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-brand-white-45 hover:text-toxic-green transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.173 4.71-1.277 1.277-2.852 2.004-4.71 2.173-.38.035-.747.035-1.127 0-1.858-.169-3.433-.896-4.71-2.173-1.277-1.277-2.004-2.852-2.173-4.71-.035-.38-.035-.747 0-1.127.169-1.858.896-3.433 2.173-4.71 1.277-1.277 2.852-2.004 4.71-2.173.38-.035.747-.035 1.127 0 1.858.169 3.433.896 4.71 2.173 1.277 1.277 2.004 2.852 2.173 4.71.035.38.035.747 0 1.127z"/></svg>
              </a>
              <a href="#" className="text-brand-white-45 hover:text-toxic-green transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.181-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

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
    </div>
  );
};

export default FigmaTemplate;