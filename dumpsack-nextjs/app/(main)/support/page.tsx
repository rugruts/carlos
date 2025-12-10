'use client';

import { useState } from 'react';
import { Mail, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';
import NewsletterInline from '@/components/NewsletterInline';
import { sendSupportMessage } from '@/lib/api-client';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const faqs = [
    {
      question: 'Is DumpSack safe to use?',
      answer: 'Yes. DumpSack uses industry-standard encryption to protect your wallet. With Cloud Sync, your encrypted wallet data is securely stored and synced across devices. You control your private keys and funds. Always keep your seed phrase secure and never share it with anyone.',
    },
    {
      question: 'Which chains does DumpSack support?',
      answer: 'DumpSack currently supports Gorbagana (native) and Solana. We provide full integration for both chains including native token support, SPL tokens, NFTs, and cross-chain portfolio management in one unified wallet.',
    },
    {
      question: 'How do I install DumpSack?',
      answer: 'DumpSack is available as a browser extension for Chrome, Brave, Edge, Firefox, and Opera. Visit the Download page to get the extension for your browser. Android and iOS apps are coming in Q1 2026.',
    },
    {
      question: 'Can I recover my wallet if I lose my seed phrase?',
      answer: 'If you have Cloud Sync enabled, you can recover your wallet by logging into your DumpSack account on any device. Without Cloud Sync, DumpSack is non-custodial and we do not store your seed phrase or private keys. Always keep a backup of your seed phrase in a safe place.',
    },
    {
      question: 'Does DumpSack charge fees?',
      answer: 'DumpSack charges a 0.5% fee on token swaps and NFT buys/sells. You also pay standard blockchain network fees (gas fees) when making transactions. Gorbagana network offers extra low gas fees compared to Solana, making it more cost-effective for trading. A complete fee schedule will be published when the Android app launches in Q1 2026.',
    },
    {
      question: 'When will mobile apps be available?',
      answer: 'Both Android and iOS apps are currently in active development and planned for Q1 2026. Join our waitlist to be notified when they launch and get early access.',
    },
    {
      question: 'What is the $DUMP token?',
      answer: 'The $DUMP token is the x402 protocol equivalent for Gorbagana, launching in Q4 2026. It will be the native payment standard for the Gorbagana network, providing benefits to both DumpSack users and the broader Gorbagana ecosystem, including reduced fees, governance rights, and exclusive features.',
    },
    {
      question: 'What features are coming next?',
      answer: 'We have an exciting roadmap! Q1 2026: Android/iOS apps and Staking. Q2 2026: Advanced analytics and Cross-chain bridge. Q3-Q4 2026: Social features (chat, airdrops, split costs, throne links), Referral program, Earn & Perps trading, and the $DUMP token ecosystem.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach us via the contact form on this page or email us directly at contact@dumpsack.xyz. We typically respond within 24-48 hours.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    const result = await sendSupportMessage(
      formData.email,
      formData.subject,
      formData.message
    );

    if (result.success) {
      setFormStatus('success');
      setFormData({ email: '', subject: '', message: '' });

      // Track event
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('support_message_sent');
      }

      setTimeout(() => setFormStatus('idle'), 5000);
    } else {
      console.error('Failed to send message:', result.error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-void">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">SUPPORT</span>
          <h1 className="mb-6">How can we help?</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-elevated">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-toxic/10 text-toxic mb-4">
              <HelpCircle size={32} />
            </div>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted">Quick answers to common questions about DumpSack.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-glass/50 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-toxic flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-void">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-orange/10 text-orange mb-4">
              <MessageCircle size={32} />
            </div>
            <h2 className="mb-4">Still need help?</h2>
            <p className="text-muted">Send us a message and we&apos;ll get back to you within 24-48 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="card p-8">
            <div className="relative z-10 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-elevated border border-glass-border text-white placeholder-muted focus:outline-none focus:border-toxic transition-colors resize-none"
                  placeholder="Tell us more about your question or issue..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  '✓ Message sent!'
                ) : (
                  <>
                    <Mail size={20} />
                    Send message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <p className="text-sm text-toxic text-center">
                  Thanks! We&apos;ll get back to you soon.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="text-sm text-orange text-center">
                  Something went wrong. Please try again or email us directly at contact@dumpsack.xyz
                </p>
              )}
            </div>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            Or email us directly at{' '}
            <a href="mailto:contact@dumpsack.xyz" className="text-toxic hover:underline">
              contact@dumpsack.xyz
            </a>
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-elevated border-t border-glass-border">
        <div className="container-custom text-center">
          <span className="kicker mb-4 block">STAY UPDATED</span>
          <h2 className="mb-4">Get the latest updates</h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for product updates, tips, and ecosystem news.
          </p>
          <div className="flex justify-center">
            <NewsletterInline placeholder="Enter your email" />
          </div>
        </div>
      </section>
    </>
  );
}

