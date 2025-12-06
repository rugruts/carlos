import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import {
  HelpCircle,
  Shield,
  Key,
  AlertTriangle,
  RefreshCw,
  Twitter,
  MessageCircle,
  HardDrive,
} from 'lucide-react';

export default function Support() {
  useEffect(() => {
    document.title = 'Support - DumpSack';
  }, []);

  const twitterUrl = import.meta.env.VITE_TWITTER_URL;

  const faqs = [
    {
      icon: Key,
      question: 'I lost my seed phrase. Can you recover my wallet?',
      answer:
        'No. DumpSack is non-custodial, which means we never have access to your seed phrase or private keys. If you lose your seed phrase, your funds cannot be recovered. This is a fundamental security feature, not a bug. Always write down your seed phrase and store it securely offline.',
      accentColor: 'toxic' as const,
    },
    {
      icon: AlertTriangle,
      question: 'My tokens are missing. What should I do?',
      answer:
        "First, check if the token is in the official registry. If not, you can manually import it by adding the token mint address in Settings > Manage Tokens. Some tokens require manual metadata import. If the token still doesn't appear, verify the transaction on the block explorer to confirm it was sent to the correct address.",
      accentColor: 'orange' as const,
    },
    {
      icon: RefreshCw,
      question: 'My transaction is stuck. How do I fix it?',
      answer:
        'On Gorbagana, transactions typically confirm in seconds. If your transaction is pending for more than a minute, it may have failed due to network congestion or insufficient fees. You can try increasing the priority fee in Settings > Advanced, or wait for the network to clear. Failed transactions will automatically be dropped after a timeout period.',
      accentColor: 'toxic' as const,
    },
    {
      icon: HardDrive,
      question: 'How do I backup and restore my wallet?',
      answer:
        'Your seed phrase IS your backup. Write it down on paper and store it in a secure location. Never store it digitally or share it with anyone. To restore your wallet on a new device, simply download DumpSack and select "Import Wallet" during setup. Enter your seed phrase and your wallet will be fully restored with all assets intact.',
      accentColor: 'orange' as const,
    },
    {
      icon: Shield,
      question: 'How can I keep my wallet secure?',
      answer:
        'Never share your seed phrase or private keys with anyone. Enable biometric authentication on mobile. Only download DumpSack from official sources. Be cautious of phishing attempts—we will never ask for your seed phrase. Use a hardware wallet for large amounts. Keep your device and app updated to the latest version.',
      accentColor: 'toxic' as const,
    },
    {
      icon: HelpCircle,
      question: 'How do I add a custom token?',
      answer:
        'Go to Settings > Manage Tokens > Add Custom Token. Enter the token mint address and the metadata will be fetched automatically if available. If metadata is not available, you can manually enter the token name, symbol, and decimals. The token will then appear in your wallet balance.',
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
          <h1 className="mb-6">Support / FAQ</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Quick answers to the things that matter.
          </p>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Help Center"
          title="FREQUENTLY ASKED QUESTIONS"
          description="Common questions and solutions for DumpSack users."
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card p-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${
                    faq.accentColor === 'toxic'
                      ? 'from-toxic/20 to-toxic/5 border border-toxic/30'
                      : 'from-orange/20 to-orange/5 border border-orange/30'
                  } flex items-center justify-center`}
                >
                  <faq.icon
                    className={`w-6 h-6 ${faq.accentColor === 'toxic' ? 'text-toxic' : 'text-orange'}`}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-sm text-dsMuted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section spacing="large">
        <div className="card toxic-ring p-12 md:p-16 text-center max-w-3xl mx-auto">
          <MessageCircle
            className="w-16 h-16 text-toxic mx-auto mb-6"
            strokeWidth={2}
          />
          <h2 className="mb-6">Still Need Help?</h2>
          <p className="text-xl text-dsMuted mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Reach out to the community on
            Twitter or Discord for support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                <Twitter className="w-5 h-5" />
                Twitter / X
              </a>
            )}
            <a href="#" className="btn-secondary">
              <MessageCircle className="w-5 h-5" />
              Discord
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
