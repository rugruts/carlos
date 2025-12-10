'use client';

import { useState } from 'react';
import { Code, Zap, Shield, MessageCircle, Copy, Check } from 'lucide-react';
import { sendSupportMessage } from '@/lib/api-client';

export default function DevelopersPage() {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await sendSupportMessage({
        email: formData.email,
        subject: `[Developer] ${formData.subject}`,
        message: formData.message,
      });
      setFormStatus('success');
      setFormData({ email: '', subject: '', message: '' });

      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const detectCode = `if (typeof window.dumpsack !== 'undefined') {
  console.log('DumpSack is installed!');
}`;

  const connectCode = `const connectWallet = async () => {
  try {
    const response = await window.dumpsack.connect();
    console.log('Connected:', response.publicKey);
  } catch (error) {
    console.error('Connection failed:', error);
  }
};`;

  const signTransactionCode = `const signTransaction = async (transaction) => {
  try {
    const signedTx = await window.dumpsack.signTransaction(transaction);
    return signedTx;
  } catch (error) {
    console.error('Signing failed:', error);
  }
};`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-void">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-toxic/20 to-orange/20 mb-6">
            <Code size={40} className="text-toxic" />
          </div>
          <span className="kicker mb-4 block">DEVELOPERS</span>
          <h1 className="mb-6">Build on DumpSack</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Integrate DumpSack wallet into your dApp. Simple APIs for Gorbagana and Solana.
          </p>
        </div>
      </section>

      {/* Why Integrate */}
      <section className="py-24 bg-elevated">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">WHY INTEGRATE</span>
            <h2 className="mb-4">Built for developers</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              DumpSack provides a simple, powerful API for wallet integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="mb-3">Easy Integration</h3>
                <p className="text-muted text-sm">
                  Standard wallet adapter. Works with existing Solana dApps. Drop-in replacement.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="mb-3">Secure by Default</h3>
                <p className="text-muted text-sm">
                  Non-custodial. User approval required. Transaction simulation. Phishing protection.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-toxic/10 text-toxic mb-4">
                  <Code size={24} />
                </div>
                <h3 className="mb-3">Multi-Chain Support</h3>
                <p className="text-muted text-sm">
                  Gorbagana native. Solana compatible. One API for both chains. Seamless switching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 bg-void">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">QUICK START</span>
            <h2 className="mb-4">Get started in minutes</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Integrate DumpSack wallet with just a few lines of code.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="card">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-toxic/10 text-toxic flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Detect DumpSack</h3>
                    <p className="text-muted text-sm mb-4">
                      Check if DumpSack is installed in the user's browser.
                    </p>
                    <div className="relative">
                      <pre className="bg-void p-4 rounded-lg overflow-x-auto text-sm border border-glass-border">
                        <code className="text-toxic">{detectCode}</code>
                      </pre>
                      <button
                        onClick={() => copyCode(detectCode, 'detect')}
                        className="absolute top-2 right-2 p-2 rounded-lg bg-glass hover:bg-glass-border transition-colors"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'detect' ? <Check size={16} className="text-toxic" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-toxic/10 text-toxic flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Connect Wallet</h3>
                    <p className="text-muted text-sm mb-4">
                      Request connection to the user's wallet.
                    </p>
                    <div className="relative">
                      <pre className="bg-void p-4 rounded-lg overflow-x-auto text-sm border border-glass-border">
                        <code className="text-toxic">{connectCode}</code>
                      </pre>
                      <button
                        onClick={() => copyCode(connectCode, 'connect')}
                        className="absolute top-2 right-2 p-2 rounded-lg bg-glass hover:bg-glass-border transition-colors"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'connect' ? <Check size={16} className="text-toxic" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-toxic/10 text-toxic flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Sign Transactions</h3>
                    <p className="text-muted text-sm mb-4">
                      Request the user to sign a transaction.
                    </p>
                    <div className="relative">
                      <pre className="bg-void p-4 rounded-lg overflow-x-auto text-sm border border-glass-border">
                        <code className="text-toxic">{signTransactionCode}</code>
                      </pre>
                      <button
                        onClick={() => copyCode(signTransactionCode, 'sign')}
                        className="absolute top-2 right-2 p-2 rounded-lg bg-glass hover:bg-glass-border transition-colors"
                        aria-label="Copy code"
                      >
                        {copiedCode === 'sign' ? <Check size={16} className="text-toxic" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-24 bg-elevated">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="kicker mb-4 block">API REFERENCE</span>
            <h2 className="mb-4">Available Methods</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Complete API documentation for DumpSack wallet integration.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="relative z-10">
                <h3 className="mb-2">window.dumpsack.connect()</h3>
                <p className="text-muted text-sm mb-3">
                  Requests connection to the user's wallet. Returns the public key.
                </p>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border">
                  <p className="text-muted mb-1">Returns:</p>
                  <code className="text-toxic">{'{ publicKey: string }'}</code>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="relative z-10">
                <h3 className="mb-2">window.dumpsack.disconnect()</h3>
                <p className="text-muted text-sm mb-3">
                  Disconnects the wallet from the dApp.
                </p>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border">
                  <p className="text-muted mb-1">Returns:</p>
                  <code className="text-toxic">void</code>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="relative z-10">
                <h3 className="mb-2">window.dumpsack.signTransaction(transaction)</h3>
                <p className="text-muted text-sm mb-3">
                  Signs a transaction with the user's private key.
                </p>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border mb-3">
                  <p className="text-muted mb-1">Parameters:</p>
                  <code className="text-toxic">transaction: Transaction</code>
                </div>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border">
                  <p className="text-muted mb-1">Returns:</p>
                  <code className="text-toxic">Promise&lt;Transaction&gt;</code>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="relative z-10">
                <h3 className="mb-2">window.dumpsack.signAllTransactions(transactions)</h3>
                <p className="text-muted text-sm mb-3">
                  Signs multiple transactions at once.
                </p>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border mb-3">
                  <p className="text-muted mb-1">Parameters:</p>
                  <code className="text-toxic">transactions: Transaction[]</code>
                </div>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border">
                  <p className="text-muted mb-1">Returns:</p>
                  <code className="text-toxic">Promise&lt;Transaction[]&gt;</code>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="relative z-10">
                <h3 className="mb-2">window.dumpsack.signMessage(message)</h3>
                <p className="text-muted text-sm mb-3">
                  Signs an arbitrary message for verification.
                </p>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border mb-3">
                  <p className="text-muted mb-1">Parameters:</p>
                  <code className="text-toxic">message: Uint8Array</code>
                </div>
                <div className="bg-void p-3 rounded-lg text-xs border border-glass-border">
                  <p className="text-muted mb-1">Returns:</p>
                  <code className="text-toxic">Promise&lt;Uint8Array&gt;</code>
                </div>
              </div>
            </div>
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
            <h2 className="mb-4">Need help integrating?</h2>
            <p className="text-muted">Contact our developer team for integration support and partnership opportunities.</p>
          </div>

          <form onSubmit={handleSubmit} className="card">
            <div className="relative z-10 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-void border border-glass-border focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic/20 transition-all"
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
                  className="w-full px-4 py-3 rounded-xl bg-void border border-glass-border focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic/20 transition-all"
                  placeholder="Integration support"
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
                  className="w-full px-4 py-3 rounded-xl bg-void border border-glass-border focus:border-toxic focus:outline-none focus:ring-2 focus:ring-toxic/20 transition-all resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-toxic/10 border border-toxic/20 text-toxic text-sm text-center">
                  Message sent successfully! We'll get back to you within 24-48 hours.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
                  Failed to send message. Please try again or email us directly at developers@dumpsack.xyz
                </div>
              )}
            </div>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            Or email us directly at{' '}
            <a href="mailto:developers@dumpsack.xyz" className="text-toxic hover:underline">
              developers@dumpsack.xyz
            </a>
          </p>
        </div>
      </section>
    </>
  );
}


