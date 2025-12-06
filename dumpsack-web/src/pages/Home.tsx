import { useEffect } from 'react';
import PhantomHero from '@/components/PhantomHero';
import PhantomFeatureSection from '@/components/PhantomFeatureSection';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = 'DumpSack - The Crypto Wallet';
  }, []);

  return (
    <>
      <PhantomHero />

      {/* Keep everything in one place */}
      <PhantomFeatureSection
        title={
          <>
            Keep everything<br />
            in <span className="text-toxic">one place</span>
          </>
        }
        imageSrc="/screens/wallet-dashboard.svg"
        imageAlt="Wallet Dashboard"
        imagePosition="center"
      />

      {/* Do more with NFTs */}
      <PhantomFeatureSection
        title={
          <>
            Do more with NFTs —<br />
            pin, hide, burn, and list.
          </>
        }
        imageSrc="/illustrations/chain-integration.svg"
        imageAlt="NFT Features"
        imagePosition="center"
        backgroundColor="bg-white/5"
      />

      {/* Self-custodial */}
      <PhantomFeatureSection
        title={
          <>
            Self-custodial means<br />
            you control your funds.<br />
            We never have access.
          </>
        }
        imageSrc="/illustrations/network-nodes.svg"
        imageAlt="Self Custody"
        imagePosition="center"
      />

      {/* Bottom CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-toxic/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12 leading-tight">
            Download <span className="text-toxic inline-block transform rotate-2">DumpSack</span><br />
            to get started
          </h2>
          
          <Link
            to="/download"
            className="btn-primary text-lg px-8 py-4 rounded-full shadow-[0_0_40px_rgba(142,255,96,0.3)] hover:shadow-[0_0_60px_rgba(142,255,96,0.5)] transition-all duration-300 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download DumpSack
          </Link>
        </div>
      </section>
    </>
  );
}
