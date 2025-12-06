import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/Section';
import {
  Code,
  Wallet,
  FileCode,
  Github,
  Twitter,
  Activity,
} from 'lucide-react';

export default function Developers() {
  useEffect(() => {
    document.title = 'Developers - DumpSack';
  }, []);

  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const twitterUrl = import.meta.env.VITE_TWITTER_URL;
  const statusUrl = import.meta.env.VITE_STATUS_URL;

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
          <h1 className="mb-6">Developers</h1>
          <p className="text-xl md:text-2xl text-dsMuted leading-relaxed">
            Integrate DumpSack in minutes. Keep it degen, keep it simple.
          </p>
        </motion.div>
      </Section>

      {/* DumpSack Connect */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Integration"
          title="DUMPSACK CONNECT"
          description="Add wallet connectivity to your dApp with a few lines of code."
        />

        <div className="card p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-toxic/20 to-toxic/5 border border-toxic/30 flex-shrink-0">
              <Code className="w-6 h-6 text-toxic" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-2">Quick Start</h3>
              <p className="text-sm text-dsMuted">
                Install the DumpSack SDK and start accepting wallet connections.
              </p>
            </div>
          </div>

          <div className="bg-base rounded-lg p-6 border border-stroke overflow-x-auto">
            <code className="text-sm text-toxic font-mono block">
              <div className="text-dsMuted"># Install the SDK</div>
              <div className="mt-2">npm install @dumpsack/connect</div>
              <div className="mt-4 text-dsMuted"># Or with yarn</div>
              <div className="mt-2">yarn add @dumpsack/connect</div>
            </code>
          </div>

          <div className="mt-6 bg-base rounded-lg p-6 border border-stroke overflow-x-auto">
            <code className="text-sm text-orange font-mono block">
              <div className="text-dsMuted">// Initialize in your app</div>
              <div className="mt-2">
                <span className="text-purple-400">import</span>{' '}
                {'{ DumpSackProvider }'}{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-green-400">'@dumpsack/connect'</span>;
              </div>
              <div className="mt-4">
                <span className="text-purple-400">function</span>{' '}
                <span className="text-yellow-400">App</span>() {'{'}
              </div>
              <div className="ml-4 mt-2">
                <span className="text-purple-400">return</span> (
              </div>
              <div className="ml-8">
                {'<'}
                <span className="text-blue-400">DumpSackProvider</span>
                {'>'}
              </div>
              <div className="ml-12">
                {'<'}
                <span className="text-blue-400">YourApp</span> {'/>'}
              </div>
              <div className="ml-8">
                {'</'}
                <span className="text-blue-400">DumpSackProvider</span>
                {'>'}
              </div>
              <div className="ml-4">);</div>
              <div>{'}'}</div>
            </code>
          </div>
        </div>
      </Section>

      {/* Token Listing */}
      <Section spacing="large">
        <SectionHeader
          subtitle="Token Registry"
          title="LIST YOUR TOKEN"
          description="Get your token added to the DumpSack registry in three simple steps."
        />

        <div className="card p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-toxic/20 border-2 border-toxic flex items-center justify-center font-black text-toxic">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Fork the Registry</h3>
                <p className="text-sm text-dsMuted">
                  Fork the official DumpSack token registry repository on
                  GitHub.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/20 border-2 border-orange flex items-center justify-center font-black text-orange">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Add Metadata & Icon</h3>
                <p className="text-sm text-dsMuted">
                  Create a JSON file with your token metadata and add a 256x256
                  PNG icon.
                </p>
                <div className="mt-3 bg-base rounded-lg p-4 border border-stroke overflow-x-auto">
                  <code className="text-xs text-toxic font-mono block">
                    <div>{'{'}</div>
                    <div className="ml-4">
                      <span className="text-blue-400">"name"</span>:{' '}
                      <span className="text-green-400">"Your Token"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"symbol"</span>:{' '}
                      <span className="text-green-400">"TKN"</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"decimals"</span>:{' '}
                      <span className="text-yellow-400">9</span>,
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">"address"</span>:{' '}
                      <span className="text-green-400">"0x..."</span>
                    </div>
                    <div>{'}'}</div>
                  </code>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-toxic/20 border-2 border-toxic flex items-center justify-center font-black text-toxic">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Open a Pull Request</h3>
                <p className="text-sm text-dsMuted">
                  Submit your PR with the token metadata and icon. We'll review
                  and merge within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Examples */}
      <Section background="gradient" spacing="large">
        <SectionHeader
          subtitle="Code Examples"
          title="INTEGRATION EXAMPLES"
          description="Common patterns and use cases for integrating DumpSack."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-hover p-6"
          >
            <Wallet className="w-8 h-8 text-toxic mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">Wallet Connect</h3>
            <p className="text-sm text-dsMuted mb-4">
              Connect to user wallets and request account access.
            </p>
            <div className="bg-base rounded p-3 border border-stroke">
              <code className="text-xs text-toxic font-mono">
                useDumpSack()
              </code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover p-6"
          >
            <FileCode className="w-8 h-8 text-orange mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">Signing Flow</h3>
            <p className="text-sm text-dsMuted mb-4">
              Request transaction signatures from connected wallets.
            </p>
            <div className="bg-base rounded p-3 border border-stroke">
              <code className="text-xs text-orange font-mono">
                signTransaction()
              </code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover p-6"
          >
            <Code className="w-8 h-8 text-toxic mb-4" strokeWidth={2} />
            <h3 className="text-lg font-bold mb-2">UI Kit Usage</h3>
            <p className="text-sm text-dsMuted mb-4">
              Use pre-built components for common wallet interactions.
            </p>
            <div className="bg-base rounded p-3 border border-stroke">
              <code className="text-xs text-toxic font-mono">
                {'<ConnectButton />'}
              </code>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Links Row */}
      <Section spacing="large">
        <div className="card p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-black uppercase mb-6 text-center">
            Developer Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-dsMuted hover:text-toxic transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            )}
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-dsMuted hover:text-toxic transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm font-medium">Twitter</span>
              </a>
            )}
            {statusUrl && (
              <a
                href={statusUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-dsMuted hover:text-toxic transition-colors"
              >
                <Activity className="w-5 h-5" />
                <span className="text-sm font-medium">Status</span>
              </a>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
