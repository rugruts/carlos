import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !data) return null;
  return data;
}

async function getAllPublishedSlugs() {
  const { data } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published');

  return data || [];
}

// Fallback mock data for development
const blogPosts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  'introducing-dumpsack': {
    title: 'Introducing DumpSack: A new wallet for Gorbagana & Solana',
    date: '2025-12-08',
    category: 'Announcement',
    readTime: '5 min read',
    content: `
We're excited to announce DumpSack, a multi-chain cryptocurrency wallet built specifically for the Gorbagana and Solana ecosystems.

## Why DumpSack?

The crypto wallet landscape is crowded, but we saw an opportunity to build something better. DumpSack is designed from the ground up with three core principles:

### 1. Multi-chain done right

DumpSack provides native support for both Gorbagana and Solana. This isn't just about adding multiple chains to a single interface — it's about deep integration that makes managing assets across chains seamless.

- **Gorbagana native**: Built specifically for the Gorbagana ecosystem with optimized transaction flows
- **Solana ready**: Full SPL token support with lightning-fast swaps
- **Unified portfolio**: See all your assets across both chains in one place

### 2. Non-custodial security

Your keys, your crypto. DumpSack is fully non-custodial, meaning:

- We never have access to your private keys or seed phrase
- You maintain complete control over your funds
- No third-party can freeze or access your assets

### 3. Simple and fast

We believe crypto wallets should be intuitive. DumpSack focuses on:

- Clean, distraction-free interface
- Fast swaps with clear previews
- No unnecessary features or bloat

## What's available now

DumpSack is currently available as a browser extension for:

- Chrome
- Brave
- Edge
- Opera

## What's coming

We're actively working on:

- **Android app** (coming soon — join the waitlist!)
- **Discover feature** for exploring dApps and tokens
- **iOS support** (planned for future release)

## Get started

Ready to try DumpSack? [Download the extension](/download) and start managing your Gorbagana and Solana assets today.

---

Have questions? [Contact us](/support) or join our community on Twitter.
    `,
  },
  'why-non-custodial': {
    title: 'Why non-custodial wallets matter',
    date: '2025-12-07',
    category: 'Education',
    readTime: '4 min read',
    content: `
Understanding the difference between custodial and non-custodial wallets is crucial for anyone in crypto.

## What is a non-custodial wallet?

A non-custodial wallet is one where you — and only you — control your private keys. This means:

- You have complete ownership of your funds
- No third party can access, freeze, or confiscate your assets
- You're responsible for securing your seed phrase

## Why it matters

### True ownership

With a non-custodial wallet like DumpSack, you have true ownership of your cryptocurrency. Your funds are stored on the blockchain, and only you have the keys to access them.

### No counterparty risk

Custodial services can:
- Be hacked
- Go bankrupt
- Freeze your account
- Require KYC/AML compliance

With DumpSack, none of these risks apply.

### Privacy

Non-custodial wallets don't require you to provide personal information. Your financial privacy is maintained.

## The responsibility

With great power comes great responsibility. When using a non-custodial wallet:

- **Never share your seed phrase** with anyone
- **Back up your seed phrase** securely (offline, multiple locations)
- **Verify transactions** before signing
- **Be cautious** of phishing attempts

## DumpSack's approach

DumpSack is built as a non-custodial wallet because we believe in:

- User sovereignty
- Financial privacy
- Decentralization

We provide the tools and security features, but you maintain control.

---

Ready to take control? [Download DumpSack](/download) today.
    `,
  },
  'gorbagana-solana-support': {
    title: 'Multi-chain done right: Gorbagana + Solana',
    date: '2025-12-06',
    category: 'Features',
    readTime: '6 min read',
    content: `
DumpSack supports both Gorbagana and Solana. Here's how we make multi-chain management seamless.

## Why these two chains?

### Gorbagana

Gorbagana is an emerging ecosystem with unique features and growing adoption. DumpSack provides:

- Native address formats
- Optimized transaction flows
- Deep ecosystem integration

### Solana

Solana is known for speed and low fees. DumpSack offers:

- Full SPL token support
- Lightning-fast swaps
- Integration with popular Solana dApps

## Unified experience

Managing multiple chains shouldn't feel like using multiple wallets. DumpSack provides:

### Single interface

Switch between Gorbagana and Solana with one click. No need to juggle multiple apps or extensions.

### Cross-chain portfolio

See all your assets across both chains in a unified portfolio view. Track your total holdings, performance, and transaction history.

### Consistent UX

The same clean, intuitive interface works for both chains. Learn once, use everywhere.

## Technical implementation

Under the hood, DumpSack:

- Uses separate key derivation paths for each chain
- Maintains isolated transaction signing for security
- Provides chain-specific optimizations

## What's next

We're exploring:

- Cross-chain swaps
- Additional chain support
- Bridge integrations

---

Experience multi-chain done right. [Download DumpSack](/download).
    `,
  },
};

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found — DumpSack',
    };
  }

  return {
    title: `${post.title} — DumpSack Blog`,
    description: post.excerpt || post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-void">
      {/* Header */}
      <div className="border-b border-glass-border bg-elevated/50 backdrop-blur-lg sticky top-0 z-10">
        <div className="container-custom max-w-4xl py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-toxic transition-colors">
            <ArrowLeft size={16} />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="pt-12 pb-24">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-toxic/10 mb-6">
              <span className="text-xs font-semibold text-toxic uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.read_time} min read</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 border-b border-glass-border">
              <div className="w-12 h-12 rounded-full bg-toxic/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="DumpSack"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-semibold">{post.author_name || 'DumpSack Team'}</div>
                <div className="text-sm text-muted">Official updates</div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 bg-glass border border-glass-border">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.split('\n').map((paragraph: string, index: number) => {
              // Handle markdown images ![alt](url)
              const imageMatch = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
              if (imageMatch) {
                const [, alt, url] = imageMatch;
                return (
                  <div key={index} className="relative w-full h-[400px] rounded-2xl overflow-hidden my-12 bg-glass border border-glass-border">
                    <Image
                      src={url}
                      alt={alt || 'Blog image'}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              }

              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold mt-16 mb-6">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold mt-12 mb-4">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                return <li key={index} className="text-muted leading-relaxed ml-6 mb-2">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.startsWith('---')) {
                return <hr key={index} className="my-16 border-glass-border" />;
              } else if (paragraph.trim()) {
                // Handle inline markdown bold **text**
                const boldText = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
                // Handle inline markdown italic *text*
                const italicText = boldText.replace(/\*([^*]+)\*/g, '<em>$1</em>');
                return <p key={index} className="text-muted leading-relaxed mb-6 text-lg" dangerouslySetInnerHTML={{ __html: italicText }} />;
              }
              return null;
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 border-t border-glass-border bg-elevated">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Download DumpSack and start managing your crypto across Gorbagana and Solana.
          </p>
          <Link href="/download" className="btn-primary inline-flex items-center gap-2">
            Download now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

