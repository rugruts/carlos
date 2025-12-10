import { Clock, Cloud, Compass, Repeat, Users, Image as ImageIcon, Shield, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: 'Download — DumpSack',
  description: 'Install DumpSack browser extension. Android coming Q1 2026. iOS coming Q2 2026.',
};

export default function DownloadPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 bg-void">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">DOWNLOAD</span>
          <h1 className="mb-6">Get DumpSack</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            Built for Gorbagana. Works on Solana too. All your crypto in one place.
          </p>

          {/* Ecosystem Icons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-glass border border-glass-border">
              <div className="relative w-6 h-6">
                <Image
                  src="/icons/gorbagana-icon.png"
                  alt="Gorbagana"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted">Gorbagana</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-glass border border-glass-border">
              <div className="relative w-6 h-6">
                <Image
                  src="/icons/sol-icon.png"
                  alt="Solana"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted">Solana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-24 bg-elevated">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Browser Extension */}
            <div className="card p-8 text-center">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20">
                  <Image
                    src="/icons/browser-icon.svg"
                    alt="Browser"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-3">Browser Extension</h3>
                <p className="text-muted mb-4 min-h-[48px]">
                  Chrome, Brave, Edge, Firefox. Built for Gorbagana. Works on Solana too.
                </p>
                <div className="mb-6 space-y-2 text-sm text-left min-h-[72px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-toxic flex-shrink-0" />
                    <span className="text-muted">Install in 60 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-toxic flex-shrink-0" />
                    <span className="text-muted">Sync across devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-toxic flex-shrink-0" />
                    <span className="text-muted">All features included</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="btn-primary w-full"
                  >
                    Install Extension
                  </Link>
                </div>
              </div>
            </div>

            {/* Android */}
            <div className="card p-8 text-center opacity-75">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20">
                  <Image
                    src="/icons/playstore.png"
                    alt="Google Play Store"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-3">Android</h3>
                <p className="text-muted mb-4 min-h-[48px]">
                  Native Android app. Full feature parity. Biometric security.
                </p>
                <div className="mb-6 space-y-2 text-sm text-left min-h-[72px]">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-orange flex-shrink-0" />
                    <span className="text-muted">Coming Q1 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-orange flex-shrink-0" />
                    <span className="text-muted">In active development</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="#android-waitlist" className="btn-outline w-full">
                    <Clock size={18} />
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>

            {/* iOS */}
            <div className="card p-8 text-center opacity-50">
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20">
                  <Image
                    src="/icons/appstore.png"
                    alt="Apple App Store"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-3">iOS</h3>
                <p className="text-muted mb-4 min-h-[48px]">
                  Planned for Q1 2026. Join the Android waitlist to stay updated.
                </p>
                <div className="mb-6 min-h-[72px]"></div>
                <div className="flex flex-col gap-3">
                  <Link href="#android-waitlist" className="btn-ghost w-full">
                    Get Updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-void">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHAT'S INCLUDED</span>
            <h2 className="mb-4">Everything you need. Nothing you don't.</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              DumpSack is ready to use today. Here's what you get.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* What Makes Us Special */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 min-h-[28px]">What Makes Us Special</h3>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Cloud size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium mb-1">Cloud Sync</h4>
                      <p className="text-xs text-muted">Sync across all devices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <div className="relative w-5 h-5 flex-shrink-0 mt-1">
                      <Image
                        src="/icons/gorbagana-icon.png"
                        alt="Gorbagana"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Built for Gorbagana</h4>
                      <p className="text-xs text-muted">Made for this ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 min-h-[28px]">Core Features</h3>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Repeat size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Easy Swaps</h4>
                      <p className="text-xs text-muted">Best prices automatically</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Multiple Wallets</h4>
                      <p className="text-xs text-muted">Unlimited accounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discovery */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 min-h-[28px]">Discovery</h3>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Compass size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Token Discovery</h4>
                      <p className="text-xs text-muted">Find trending tokens</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Zap size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Real-Time Prices</h4>
                      <p className="text-xs text-muted">Live charts and data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NFT Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 min-h-[28px]">NFT Features</h3>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <ImageIcon size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">NFT Gallery</h4>
                      <p className="text-xs text-muted">View your collection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4 min-h-[72px] flex items-center">
                <div className="relative z-10 w-full">
                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-toxic flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-medium mb-1">Floor Prices</h4>
                      <p className="text-xs text-muted">Rarity and value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-24 bg-elevated">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">QUICK START</span>
            <h2 className="mb-4">Get started in 3 steps</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Install DumpSack and start managing your crypto in under 2 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-toxic/10 text-toxic font-bold text-xl">
                  1
                </div>
                <h3 className="mb-3">Install Extension</h3>
                <p className="text-muted text-sm">
                  Click the install button above. Add DumpSack to your browser. Takes 60 seconds.
                </p>
              </div>
            </div>

            <div className="card p-8 text-center">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-toxic/10 text-toxic font-bold text-xl">
                  2
                </div>
                <h3 className="mb-3">Create Wallet</h3>
                <p className="text-muted text-sm">
                  Set up your first wallet. Save your seed phrase. You're in control.
                </p>
              </div>
            </div>

            <div className="card p-8 text-center">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-toxic/10 text-toxic font-bold text-xl">
                  3
                </div>
                <h3 className="mb-3">Start Using</h3>
                <p className="text-muted text-sm">
                  Send, receive, swap tokens. Discover new projects. Connect to dApps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Android Waitlist */}
      <section id="android-waitlist" className="py-24 bg-void">
        <div className="container-custom text-center">
          <div className="card max-w-2xl mx-auto p-12">
            <div className="relative z-10">
              <span className="kicker mb-4 block">ANDROID WAITLIST</span>
              <h2 className="mb-4">Be the first to know</h2>
              <p className="text-xl text-muted mb-8">
                Join the waitlist and get early access when DumpSack launches on Android.
              </p>
              <div className="flex justify-center">
                <WaitlistForm placeholder="Enter your email" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

