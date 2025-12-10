import { CheckCircle2, Circle, Clock } from 'lucide-react';

export const metadata = {
  title: 'Roadmap — DumpSack',
  description: 'DumpSack is ready to use today. See what features are live now and what we are building next.',
};

export default function RoadmapPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 bg-void">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">ROADMAP</span>
          <h1 className="mb-6">What's Ready, What's Coming</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            DumpSack is ready to use today. Here's what we're adding next.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-elevated">
        <div className="container-custom max-w-4xl">
          {/* Available Now */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-toxic/20 flex items-center justify-center">
                <CheckCircle2 className="text-toxic" size={24} />
              </div>
              <h2>Ready to Use Today</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Browser Extension</h3>
                  <p className="text-muted text-sm mb-3">
                    Chrome, Brave, Edge, Firefox. Simple and easy to use. Install in 60 seconds.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Built for Gorbagana</h3>
                  <p className="text-muted text-sm mb-3">
                    Made specifically for Gorbagana. Lightning-fast transactions. All Gorbagana dApps supported.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">DumpSack Accounts</h3>
                  <p className="text-muted text-sm mb-3">
                    Sync wallets across devices. Access from any browser. Your keys stay on your device.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Token Discovery</h3>
                  <p className="text-muted text-sm mb-3">
                    Find trending Gorbagana tokens. New token launches. Real-time prices and charts.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Easy Swaps</h3>
                  <p className="text-muted text-sm mb-3">
                    Swap tokens instantly. Best prices automatically. Works on Gorbagana and Solana.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Multiple Wallets</h3>
                  <p className="text-muted text-sm mb-3">
                    Create unlimited wallets. Switch instantly. Organize your crypto.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Solana Support</h3>
                  <p className="text-muted text-sm mb-3">
                    Works on Solana too. All your tokens in one wallet. Connect to Solana dApps.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">NFT Support</h3>
                  <p className="text-muted text-sm mb-3">
                    View your NFT collection. Buy and list NFTs. Floor prices and rarity.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-toxic">
                    <CheckCircle2 size={14} />
                    LIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                <Clock className="text-orange" size={24} />
              </div>
              <h2>Next Quarter — Mobile & Staking</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Android App</h3>
                  <p className="text-muted text-sm mb-3 min-h-[60px]">
                    Native Android application. All desktop features. Biometric security. Push notifications. Mobile-optimized UI.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-orange mb-2">
                    <Clock size={14} />
                    Q1 2026
                  </div>
                  <p className="text-xs text-toxic">In active development</p>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">iOS App</h3>
                  <p className="text-muted text-sm mb-3 min-h-[60px]">
                    iPhone and iPad. Full feature parity. Apple ecosystem integration. Native iOS experience.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-orange mb-2">
                    <Clock size={14} />
                    Q1 2026
                  </div>
                  <p className="text-xs text-toxic">Development starting soon</p>
                </div>
              </div>
              <div className="card">
                <div className="relative z-10">
                  <h3 className="mb-2">Staking</h3>
                  <p className="text-muted text-sm mb-3 min-h-[60px]">
                    One-click staking. Validator selection. Rewards tracking. Auto-compounding.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-orange mb-2">
                    <Clock size={14} />
                    Q1 2026
                  </div>
                  <p className="text-xs text-toxic">Earn passive income</p>
                </div>
              </div>
            </div>
          </div>

          {/* Later */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-toxic/10 flex items-center justify-center">
                <Circle className="text-toxic" size={24} />
              </div>
              <h2>Planned — Based on Your Feedback</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Advanced Analytics</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Portfolio performance tracking. Profit/loss calculations. Tax reporting exports. Historical charts.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q2 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Cross-Chain Bridge</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Bridge assets between chains. Gorbagana ↔ Solana. Low fees, fast transfers.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q2 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Social Features</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Wallet chat. Airdrops. Split costs. Throne links. Portfolio sharing.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q3 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Referral Program</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Invite friends. Earn rewards. Custom referral links. Track your referrals.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q3 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75 border-2 border-toxic/30">
                <div className="relative z-10">
                  <h3 className="mb-2">$DUMP Token Ecosystem</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Native payment protocol for Gorbagana. Benefits DumpSack users and Gorbagana ecosystem.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q4 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Earn & Perps</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Perpetual futures trading. Yield farming. Liquidity provision. Passive income opportunities.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    Q4 2026
                  </div>
                </div>
              </div>
              <div className="card opacity-75">
                <div className="relative z-10">
                  <h3 className="mb-2">Company Registration</h3>
                  <p className="text-muted text-sm mb-3 min-h-[40px]">
                    Official company status. Legal compliance. Enhanced trust and security.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <Circle size={14} />
                    TBD
                  </div>
                </div>
              </div>

              {/* Community Input Card */}
              <div className="card opacity-75 border border-toxic/20">
                <div className="relative z-10">
                  <h3 className="mb-2 text-base">You Decide What's Next</h3>
                  <p className="text-muted text-xs mb-4 min-h-[40px]">
                    This roadmap changes based on what you need. We're building DumpSack for the Gorbagana community.
                  </p>
                  <div className="space-y-1.5 text-xs text-muted mb-3">
                    <p>• Tweet: <a href="https://x.com/DumpSackWallet" target="_blank" rel="noopener noreferrer" className="text-toxic hover:underline">@DumpSackWallet</a></p>
                    <p>• Instagram: <a href="https://instagram.com/DumpSackWallet" target="_blank" rel="noopener noreferrer" className="text-toxic hover:underline">@DumpSackWallet</a></p>
                    <p>• Email: <a href="mailto:features@dumpsack.xyz" className="text-toxic hover:underline">features@dumpsack.xyz</a></p>
                  </div>
                  <p className="text-xs font-medium text-toxic">
                    Most requested features get built first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

