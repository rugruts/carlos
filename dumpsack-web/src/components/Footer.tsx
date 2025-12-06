import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Trash2,
  Globe,
  ShieldCheck,
  Lock,
  GitFork,
  Radio,
  ExternalLink,
  Mail,
  Moon,
  Sun,
  MessageCircle,
} from 'lucide-react';

// Optional: if your project already exposes these, they'll override the fallbacks.
import { iconSizes as _iconSizes, iconStroke as _iconStroke } from '@/lib/iconConfig';

// Fallbacks to keep the component drop-in friendly
const iconSizes = _iconSizes ?? { xs: 14, sm: 16, md: 18, lg: 22, xl: 28 };
const iconStroke = _iconStroke ?? { default: 1.8, bold: 2.2 };

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const statusUrl = import.meta.env.VITE_STATUS_URL || '#';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || '#';
  const twitterUrl = import.meta.env.VITE_TWITTER_URL || '#';
  const discordUrl = import.meta.env.VITE_DISCORD_URL || '#';
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@dumpsack.xyz';

  const nav = {
    product: [
      { label: 'Features', to: '/features' },
      { label: 'Download', to: '/download' },
      { label: 'Swap', to: '/swap' },
      { label: 'Discovery', to: '/discover' },
      { label: 'Gorbagana', to: '/gorbagana' },
      { label: 'Solana', to: '/solana' },
    ],
    developers: [
      { label: 'Documentation', to: '/developers' },
      { label: 'API & Integrations', to: '/integrations' },
      { label: 'Brand Assets', to: '/brand-assets' },
      { label: 'GitHub', href: githubUrl },
      { label: 'Changelog', to: '/changelog' },
    ],
    resources: [
      { label: 'Blog', to: '/blog' },
      { label: 'Support', to: '/support' },
      { label: 'Status', href: statusUrl },
      { label: 'Security', to: '/security' },
      { label: 'Roadmap', to: '/roadmap' },
      { label: 'FAQ', to: '/faq' },
    ],
    company: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
      { label: 'Press Kit', to: '/press' },
      { label: 'Community', href: discordUrl },
    ],
    legal: [
      { label: 'Terms', to: '/legal/terms' },
      { label: 'Privacy', to: '/legal/privacy' },
      { label: 'Cookies', to: '/legal/cookies' },
      { label: 'Disclosures', to: '/legal/disclosures' },
      { label: 'Licenses', to: '/legal/licenses' },
    ],
  };

  // simple theme toggle stub (replace with your real theme system)
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    root.classList.toggle('dark', !isDark);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    if (!email) return;
    // replace with your newsletter backend / webhook
    window.alert(`Subscribed: ${email}`);
    form.reset();
  };

  return (
    <footer className="relative bg-gradient-to-b from-void to-elevated border-t border-glass-border py-12 backdrop-blur-sm">
      <div className="container-custom">
        {/* BRAND + DESCRIPTION Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Trash2
              size={iconSizes.xl}
              strokeWidth={iconStroke.bold}
              className="text-toxic"
              aria-hidden="true"
            />
            <div className="text-2xl font-black tracking-tight">
              <span className="text-toxic">Dump</span>
              <span className="text-white">Sack</span>
            </div>
          </div>
          <p className="text-dsMuted text-sm leading-relaxed max-w-[360px]">
            The degen wallet for <span className="text-white/90">Gorbagana</span> and{' '}
            <span className="text-white/90">Solana</span>. Fast, non-custodial, and
            unapologetically focused on execution.
          </p>
        </div>

        {/* TRUST BADGES Section */}
        <div className="flex flex-wrap gap-2 mb-12">
          <li className="inline-flex items-center gap-2 rounded-full border border-glass-border px-3 py-1.5 text-xs text-dsMuted">
            <Lock size={iconSizes.sm} strokeWidth={iconStroke.default} aria-hidden="true" />
            Non-custodial
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-glass-border px-3 py-1.5 text-xs text-dsMuted">
            <GitFork size={iconSizes.sm} strokeWidth={iconStroke.default} aria-hidden="true" />
            Open-source
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-glass-border px-3 py-1.5 text-xs text-dsMuted">
            <ShieldCheck size={iconSizes.sm} strokeWidth={iconStroke.default} aria-hidden="true" />
            Auditable
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-glass-border px-3 py-1.5 text-xs text-dsMuted">
            <Radio size={iconSizes.sm} strokeWidth={iconStroke.default} aria-hidden="true" />
            <a
              href={statusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-toxic transition-colors"
            >
              Status <ExternalLink size={12} aria-hidden="true" />
            </a>
          </li>
        </div>

        {/* NEWSLETTER Section */}
        <div className="rounded-2xl border border-glass-border p-5 md:p-6 bg-white/0 mb-12 max-w-[420px]">
          <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
            <div>
              <p className="text-white font-semibold">Alpha & updates</p>
              <p className="text-dsMuted text-sm">
                Ship notes, feature drops, and early betas. No spam, ever.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="you@degens.wtf"
              className="w-full rounded-xl bg-black/30 border border-glass-border text-white placeholder:text-dsMuted px-4 py-3 outline-none focus:border-toxic/70"
            />
            <button
              type="submit"
              className="rounded-xl bg-toxic text-black font-semibold px-5 py-3 hover:opacity-90 active:opacity-80 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* PRODUCT | DEV | RESOURCES | COMPANY | LEGAL Grid */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-10 mb-12">
          <FooterColumn heading="Product" items={nav.product} />
          <FooterColumn heading="Developers" items={nav.developers} />
          <FooterColumn heading="Resources" items={nav.resources} />
          <FooterColumn heading="Company" items={nav.company} />
          <FooterColumn heading="Legal" items={nav.legal} />
        </div>

        {/* LANGUAGE | REGION | CONTACT | STATUS | GITHUB | X Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="relative">
            <Globe
              size={iconSizes.sm}
              strokeWidth={iconStroke.default}
              className="text-dsMuted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <select
              aria-label="Select language"
              className="appearance-none bg-transparent border border-glass-border rounded-xl pl-9 pr-8 py-2 text-sm text-white focus:outline-none focus:border-toxic/70"
              defaultValue="en"
            >
              <option className="bg-void" value="en">English</option>
              <option className="bg-void" value="el">Ελληνικά</option>
              <option className="bg-void" value="de">Deutsch</option>
            </select>
          </div>

          <select
            aria-label="Select region"
            className="appearance-none bg-transparent border border-glass-border rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-toxic/70"
            defaultValue="global"
          >
            <option className="bg-void" value="global">Global</option>
            <option className="bg-void" value="ch">Switzerland</option>
            <option className="bg-void" value="eu">EU</option>
          </select>

          <InlineLink href={`mailto:${contactEmail}`} label="Contact" />
          <InlineLink href={statusUrl} label="Status" />
          <InlineLink href={githubUrl} label="GitHub" />
          <InlineLink href={twitterUrl} label="X" />
        </div>

        {/* DISCLAIMERS Section */}
        <div className="border-t border-glass-border pt-6 mb-6">
          <p className="text-dsMuted text-xs leading-relaxed max-w-[740px]" style={{lineHeight: '1.6'}}>
            <strong className="text-white/90">Non-custodial:</strong> DumpSack never holds your keys or assets. You are fully responsible for key management.
            <br className="hidden md:block" />
            <strong className="text-white/90">Risk disclosure:</strong> Crypto assets are volatile and experimental. Swaps and on-chain transactions are final and may incur protocol,
            network, and wallet fees. Nothing on this site is financial advice.
          </p>
        </div>

        {/* COPYRIGHT Section */}
        <div className="border-t border-glass-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-dsMuted text-sm">© {currentYear} DumpSack. All rights reserved.</p>
            <div className="flex gap-6">
              {nav.legal.map((l) =>
                l.to ? (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-dsMuted hover:text-toxic transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dsMuted hover:text-toxic transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

type Item = { label: string; to?: string; href?: string };

function FooterColumn({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div>
      <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{heading}</h4>
      <ul className="flex flex-col gap-3">
        {items.map((item) =>
          item.to ? (
            <li key={item.label}>
              <Link
                to={item.to}
                className="text-dsMuted hover:text-toxic transition-transform text-sm inline-block hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-toxic/60 rounded"
              >
                {item.label}
              </Link>
            </li>
          ) : (
            <li key={item.label}>
              <a
                href={item.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dsMuted hover:text-toxic transition-transform text-sm inline-flex items-center gap-1 hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-toxic/60 rounded"
              >
                {item.label}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function InlineLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-dsMuted hover:text-toxic transition-colors text-sm inline-flex items-center gap-1"
    >
      {label}
      {href?.startsWith('http') && <ExternalLink size={12} aria-hidden="true" />}
    </a>
  );
}
