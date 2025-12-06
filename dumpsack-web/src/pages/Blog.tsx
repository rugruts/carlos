import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog - DumpSack';
  }, []);

  const posts = [
    {
      title: 'Introducing DumpSack: The Trashchains Wallet',
      date: '2025-01-15',
      excerpt:
        "Today we're launching DumpSack, the first wallet built exclusively for Gorbagana and Solana degens. Fast, secure, and unapologetically toxic.",
      category: 'Announcement',
      accentColor: 'toxic' as const,
    },
    {
      title: 'Gorbagana Integration Deep Dive',
      date: '2025-01-10',
      excerpt:
        'A technical look at how DumpSack provides native support for Gorbagana, including explorer integration, token registry, and RPC optimization.',
      category: 'Technical',
      accentColor: 'orange' as const,
    },
    {
      title: 'Security Best Practices for Wallet Users',
      date: '2025-01-05',
      excerpt:
        'Your keys, your crypto. Learn how to keep your seed phrase safe, recognize phishing attempts, and protect your portfolio from common threats.',
      category: 'Security',
      accentColor: 'toxic' as const,
    },
    {
      title: "Roadmap 2025: What's Next for DumpSack",
      date: '2024-12-28',
      excerpt:
        'A preview of upcoming features including multi-sig support, hardware wallet integration, and expanded chain support. The future is toxic.',
      category: 'Roadmap',
      accentColor: 'orange' as const,
    },
  ];

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
          <h1 className="mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Updates, releases, and trash-talk worth reading.
          </p>
        </motion.div>
      </Section>

      {/* Categories */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3">
          {['All', 'Announcement', 'Technical', 'Security', 'Roadmap'].map(
            (category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-lg text-sm font-bold uppercase transition-colors ${
                  category === 'All'
                    ? 'bg-toxic/20 text-toxic border border-toxic/30'
                    : 'bg-card text-dsMuted border border-stroke hover:border-toxic/30 hover:text-toxic'
                }`}
              >
                {category}
              </motion.button>
            )
          )}
        </div>
      </Section>

      {/* Post Cards */}
      <Section background="gradient" spacing="large">
        <div className="space-y-6 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      post.accentColor === 'toxic'
                        ? 'bg-toxic/20 text-toxic border border-toxic/30'
                        : 'bg-orange/20 text-orange border border-orange/30'
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <time
                  dateTime={post.date}
                  className="flex items-center gap-2 text-sm text-dsMuted"
                >
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <h2 className="text-2xl font-black uppercase mb-3 group-hover:text-toxic transition-colors">
                {post.title}
              </h2>

              <p className="text-dsMuted leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-bold uppercase ${
                  post.accentColor === 'toxic' ? 'text-toxic' : 'text-orange'
                } hover:underline transition-colors`}
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section spacing="large">
        <div className="card toxic-ring p-12 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-6">Stay Updated</h2>
          <p className="text-xl text-dsMuted mb-8 max-w-2xl mx-auto">
            Get the latest DumpSack news, feature releases, and degen insights
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-base border border-stroke text-white placeholder:text-dsMuted focus:outline-none focus:border-toxic transition-colors"
              aria-label="Email address"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </Section>
    </>
  );
}
