import DiagonalHero from '@/components/DiagonalHero';
import NewsletterInline from '@/components/NewsletterInline';
import { ArrowRight, Zap, Shield, Wallet, Cloud, Compass, Repeat, Users, Image as ImageIcon, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Diagonal Hero */}
      <DiagonalHero
        kicker="YOUR CRYPTO WALLET FOR GORBAGANA"
        title="Send, swap, and discover tokens. Sync across all your devices."
        subtitle="Built specifically for Gorbagana. Also works on Solana. Everything you need in one simple wallet."
        primaryAction={
          <Link href="/download" className="btn-primary">
            Install Extension
            <ArrowRight size={20} />
          </Link>
        }
        secondaryAction={
          <Link href="#features" className="btn-outline">
            See What's Inside
          </Link>
        }
        mockupSrc="/mockups/wallet-hero.svg"
        mockupAlt="DumpSack Wallet Dashboard"
      />

      {/* Proof Row */}
      <section className="py-12 border-y border-glass-border bg-elevated">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <div className="relative w-5 h-5">
                <Image
                  src="/icons/gorbagana-icon.png"
                  alt="Gorbagana"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              Built for Gorbagana
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Cloud size={16} className="text-toxic" />
              Sync Across Devices
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Compass size={16} className="text-toxic" />
              Discover New Tokens
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Lock size={16} className="text-toxic" />
              You Hold the Keys
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-24 bg-void">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHAT'S INSIDE</span>
            <h2 className="mb-4">Everything you need. Nothing you don't.</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              DumpSack is ready to use today. Here's what you get.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. DumpSack Accounts */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Cloud size={24} />
                </div>
                <h3 className="mb-3">DumpSack Accounts</h3>
                <p className="text-muted text-sm">
                  Sync wallets across all your devices. Access from any browser. Your keys stay on your device.
                </p>
              </div>
            </div>

            {/* 2. Built for Gorbagana */}
            <div className="card">
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

            {/* 3. Token Discovery */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Compass size={24} />
                </div>
                <h3 className="mb-3">Token Discovery</h3>
                <p className="text-muted text-sm">
                  Find trending Gorbagana tokens. New token launches. Real-time prices and charts.
                </p>
              </div>
            </div>

            {/* 4. Easy Swaps */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Repeat size={24} />
                </div>
                <h3 className="mb-3">Easy Swaps</h3>
                <p className="text-muted text-sm">
                  Swap tokens instantly. Best prices automatically. Works on Gorbagana and Solana.
                </p>
              </div>
            </div>

            {/* 5. Multiple Wallets */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Users size={24} />
                </div>
                <h3 className="mb-3">Multiple Wallets</h3>
                <p className="text-muted text-sm">
                  Create unlimited wallets. Switch instantly. Organize your crypto.
                </p>
              </div>
            </div>

            {/* 6. Works on Solana Too */}
            <div className="card">
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

            {/* 7. NFT Support */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <ImageIcon size={24} />
                </div>
                <h3 className="mb-3">NFT Support</h3>
                <p className="text-muted text-sm">
                  View your NFT collection. Buy and list NFTs. Floor prices and rarity.
                </p>
              </div>
            </div>

            {/* 8. Your Keys, Your Crypto */}
            <div className="card">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Shield size={24} />
                </div>
                <h3 className="mb-3">Your Keys, Your Crypto</h3>
                <p className="text-muted text-sm">
                  Non-custodial. You control everything. Clear transaction previews. Simple settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DumpSack */}
      <section className="py-24 bg-elevated">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHY DUMPSACK</span>
            <h2 className="mb-4">Why users choose DumpSack</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Simple, secure, and built for the Gorbagana community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Zap size={24} />
                </div>
                <h3 className="mb-3">Simple to Use</h3>
                <p className="text-muted text-sm">
                  Install in 60 seconds. Send tokens in 3 clicks. No complicated menus or confusing settings.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic">
                  <Shield size={24} />
                </div>
                <h3 className="mb-3">Secure by Default</h3>
                <p className="text-muted text-sm">
                  Your keys never leave your device. Clear transaction previews. No hidden permissions.
                </p>
              </div>
            </div>

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
                <h3 className="mb-3">Made for Gorbagana</h3>
                <p className="text-muted text-sm">
                  Built by the community, for the community. Optimized for Gorbagana from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Chain Showcase */}
      <section className="py-24 bg-gradient-to-b from-void to-elevated">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">MULTI-CHAIN</span>
            <h2 className="mb-4">Gorbagana first. Solana too.</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Built for Gorbagana. Also works on Solana. All your tokens in one wallet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Gorbagana Card - Larger/More Prominent */}
            <div className="card p-10 bg-gradient-to-br from-toxic/10 to-transparent border-2 border-toxic/20">
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/icons/gorbagana-icon.png"
                      alt="Gorbagana"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 text-2xl">Gorbagana</h3>
                    <span className="text-sm text-toxic font-medium">Built For This</span>
                  </div>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-toxic/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-toxic" />
                    </div>
                    <span className="text-muted">Made specifically for Gorbagana ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-toxic/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-toxic" />
                    </div>
                    <span className="text-muted">Lightning-fast transactions and swaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-toxic/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-toxic" />
                    </div>
                    <span className="text-muted">All Gorbagana dApps supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-toxic/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-toxic" />
                    </div>
                    <span className="text-muted">Discover trending Gorbagana tokens</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solana Card */}
            <div className="card p-8 bg-gradient-to-br from-orange/5 to-transparent">
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/icons/sol-icon.png"
                      alt="Solana"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1">Solana</h3>
                    <span className="text-sm text-orange font-medium">Also Supported</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                    </div>
                    <span className="text-muted">Full SPL token support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                    </div>
                    <span className="text-muted">Connect to Solana dApps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 w-4 h-4 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                    </div>
                    <span className="text-muted">Unified portfolio view</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Band */}
      <section id="newsletter" className="py-24 bg-elevated">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">STAY UPDATED</span>
          <h2 className="mb-4">Join the community</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Get updates on Android release, new features, and multi-chain ecosystem news.
          </p>
          <div className="flex justify-center">
            <NewsletterInline placeholder="Enter your email" />
          </div>
        </div>
      </section>

      {/* Android Teaser */}
      <section className="py-24 bg-elevated">
        <div className="container-custom text-center">
          <div className="card max-w-3xl mx-auto p-12">
            <div className="relative z-10">
              <span className="kicker mb-4 block">COMING SOON</span>
              <h2 className="mb-4">Android is almost here</h2>
              <p className="text-xl text-muted mb-8">
                Be the first to know when DumpSack launches on Android. Join the waitlist.
              </p>
              <NewsletterInline tags={['android-waitlist']} placeholder="Get notified" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 border-t border-glass-border bg-void">
        <div className="container-custom">
          <p className="text-sm text-muted text-center max-w-3xl mx-auto">
            <strong className="text-orange">Disclaimer:</strong> Cryptocurrency is volatile and experimental.
            Use DumpSack at your own risk. Never share your seed phrase with anyone.
          </p>
        </div>
      </section>
    </>
  );
}
