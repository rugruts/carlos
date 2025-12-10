import { Zap, Shield, Wallet, ArrowRight, Sparkles, Lock, Gauge, Cloud, Compass, ImageIcon, Repeat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Why DumpSack — DumpSack',
  description: 'Learn why DumpSack is the best wallet for Gorbagana and Solana. Native integration, fast swaps, and complete control.',
};

export default function WhyPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 bg-void">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">WHY DUMPSACK</span>
          <h1 className="mb-6">The Wallet Built for Gorbagana</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Simple, secure, and made for the Gorbagana community. Also works on Solana. Everything you need in one wallet.
          </p>
        </div>
      </section>

      {/* Why Users Choose DumpSack */}
      <section className="py-24 bg-elevated">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHY USERS CHOOSE DUMPSACK</span>
            <h2 className="mb-4">What makes DumpSack different</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Built by the community, for the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Sync Across Devices */}
            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Cloud size={24} />
                </div>
                <h3 className="mb-3">Sync Across Devices</h3>
                <p className="text-muted text-sm">
                  DumpSack Accounts let you access your wallets from any browser. Your keys stay on your device.
                </p>
              </div>
            </div>

            {/* Built for Gorbagana */}
            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/icons/gorbagana-icon.png"
                      alt="Gorbagana"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mb-3">Built for Gorbagana</h3>
                <p className="text-muted text-sm">
                  Made specifically for Gorbagana. Lightning-fast transactions. All Gorbagana dApps supported.
                </p>
              </div>
            </div>

            {/* Works on Solana Too */}
            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/icons/sol-icon.png"
                      alt="Solana"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mb-3">Works on Solana Too</h3>
                <p className="text-muted text-sm">
                  Full Solana support. All your tokens in one wallet. Connect to Solana dApps.
                </p>
              </div>
            </div>

            {/* NFTs Included */}
            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <ImageIcon size={24} />
                </div>
                <h3 className="mb-3">NFTs Included</h3>
                <p className="text-muted text-sm">
                  View your NFT collection. Buy and list NFTs. Floor prices and rarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-24 bg-void">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHAT YOU CAN DO</span>
            <h2 className="mb-4">Everything you need. Nothing you don't.</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              DumpSack is ready to use today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <Repeat size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Swap Tokens Instantly</h3>
                      <p className="text-muted text-sm">
                        Best prices automatically. Works on Gorbagana and Solana. No complicated settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <Compass size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Discover New Tokens</h3>
                      <p className="text-muted text-sm">
                        Find trending Gorbagana tokens. New token launches. Real-time prices and charts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <ImageIcon size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Manage Your NFTs</h3>
                      <p className="text-muted text-sm">
                        View your collection. Buy and list NFTs. Floor prices and rarity data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <Wallet size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Multiple Wallets</h3>
                      <p className="text-muted text-sm">
                        Create unlimited wallets. Switch instantly. Organize your crypto however you want.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Stay in Control</h3>
                      <p className="text-muted text-sm">
                        Non-custodial. Your keys, your crypto. Clear transaction previews. Simple settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-toxic/10 text-toxic flex-shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2">Connect to dApps</h3>
                      <p className="text-muted text-sm">
                        All Gorbagana dApps supported. Solana dApps too. One-click connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-elevated">
        <div className="container-custom text-center">
          <div className="card max-w-3xl mx-auto p-12">
            <div className="relative z-10">
              <h2 className="mb-6">Ready to get started?</h2>
              <p className="text-xl text-muted mb-8">
                Install DumpSack and experience the wallet built for Gorbagana.
              </p>
              <Link href="/download" className="btn-primary inline-flex items-center gap-2">
                Install Extension
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

