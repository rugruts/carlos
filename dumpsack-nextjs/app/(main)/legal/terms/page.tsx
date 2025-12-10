import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use — DumpSack',
  description: 'DumpSack Terms of Use. Read the terms and conditions for using the DumpSack website.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-custom max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-sm text-toxic hover:underline mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="mb-4">Terms of Use</h1>
          <p className="text-muted">Last updated: December 8, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted leading-relaxed mb-4">
              These Terms regulate your access to the DumpSack marketing website (&ldquo;Site&rdquo;).
              By using the Site, you agree to these Terms.
            </p>
            <p className="text-muted leading-relaxed">
              If you do not agree, do not use the Site.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Who we are</h2>
            <p className="text-muted leading-relaxed mb-4">
              DumpSack is an independent software project developing a non-custodial wallet for Gorbagana and Solana.
            </p>
            <p className="text-muted leading-relaxed">
              A formal legal entity will be registered soon. These Terms will be updated accordingly at that time.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. What the Site provides</h2>
            <p className="text-muted leading-relaxed mb-4">
              The Site provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Information about the DumpSack wallet</li>
              <li>Download links to supported platforms</li>
              <li>Newsletter/waitlist signup</li>
              <li>Blog/news posts</li>
            </ul>
            
            <p className="text-muted leading-relaxed mb-4 mt-6">
              The Site does <strong>not</strong> provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Financial advice</li>
              <li>Brokerage or exchange services</li>
              <li>Custodial wallet services</li>
              <li>Investment recommendations</li>
            </ul>
            
            <p className="text-muted leading-relaxed mt-4">
              All content is informational only.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Non-custodial wallet disclaimer</h2>
            <div className="p-4 rounded-lg bg-orange/10 border border-orange/20 mb-4">
              <p className="text-sm text-orange mb-2">
                <strong>The DumpSack wallet is fully non-custodial.</strong>
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              We cannot:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Access your private keys</li>
              <li>Recover your seed phrase</li>
              <li>Reverse blockchain transactions</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              <strong>You are solely responsible for your wallet security.</strong>
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Acceptable use</h2>
            <p className="text-muted leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Break any laws</li>
              <li>Attempt to compromise or attack the Site</li>
              <li>Use automated bots that degrade performance</li>
              <li>Upload malicious or harmful content</li>
              <li>Attempt to gain unauthorized access</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              We may restrict or suspend access to protect the Site.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Blockchain risks</h2>
            <p className="text-muted leading-relaxed mb-4">
              By interacting with any blockchain ecosystem (including Gorbagana and Solana), you acknowledge the following risks:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Extreme asset volatility</li>
              <li>Network outages or instability</li>
              <li>Irreversible transactions</li>
              <li>Smart contract bugs</li>
              <li>Loss of private keys resulting in permanent asset loss</li>
              <li>Use of third-party protocols at your own risk</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              <strong>DumpSack is not responsible for losses arising from blockchain interactions.</strong>
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. External links</h2>
            <p className="text-muted leading-relaxed">
              Links to external services (e.g., extension stores, analytics, social profiles) are provided for convenience.
              We do not control or endorse third-party services.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Intellectual property</h2>
            <p className="text-muted leading-relaxed mb-4">
              All content on the Site (name, branding, graphics, text, code) is owned by the project or its contributors.
            </p>
            <p className="text-muted leading-relaxed">
              You may not use or reproduce it without permission.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
            <div className="p-4 rounded-lg bg-orange/10 border border-orange/20 mb-4">
              <p className="text-sm text-orange uppercase font-bold">
                THE SITE IS PROVIDED &ldquo;AS IS,&rdquo; WITHOUT WARRANTIES OF ANY KIND.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE PROJECT AND ITS CONTRIBUTORS DISCLAIM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>IMPLIED WARRANTIES</li>
              <li>AVAILABILITY GUARANTEES</li>
              <li>LIABILITY FOR ERRORS, INTERRUPTIONS, OR INACCURACIES</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4 mb-4">
              We do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>The Site will always be available</li>
              <li>The content is free of errors</li>
              <li>The Site is suitable for your intended use</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Limitation of liability</h2>
            <p className="text-muted leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <p className="text-muted leading-relaxed mb-4">
              DumpSack project contributors are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Indirect or consequential damages</li>
              <li>Loss of funds or assets</li>
              <li>Loss of profits or business</li>
              <li>Errors, bugs, downtime, or data loss</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Maximum total liability is USD 50 or the minimum required by applicable law.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p className="text-muted leading-relaxed mb-4">
              You agree to indemnify and hold harmless the DumpSack contributors from any claims arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of applicable laws</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-muted leading-relaxed">
              We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date will reflect the latest revision.
              When the formal company becomes registered, these Terms will be updated with the official entity details.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Governing law</h2>
            <p className="text-muted leading-relaxed mb-4">
              Until the legal entity is formed, these Terms are governed by general principles of contract law in the user&apos;s jurisdiction.
            </p>
            <p className="text-muted leading-relaxed">
              Once a legal entity exists, the Terms will adopt that entity&apos;s governing law and jurisdiction.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
            <p className="text-muted leading-relaxed">
              For questions or concerns: <a href="mailto:contact@dumpsack.xyz" className="text-toxic hover:underline">contact@dumpsack.xyz</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

