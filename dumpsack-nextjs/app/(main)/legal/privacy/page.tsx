import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — DumpSack',
  description: 'DumpSack Privacy Policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="container-custom max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-sm text-toxic hover:underline mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-muted">Last updated: December 8, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Who we are</h2>
            <p className="text-muted leading-relaxed mb-4">
              DumpSack is an independent software project developing a non-custodial cryptocurrency wallet.
              The DumpSack website (&ldquo;Site&rdquo;) is operated by the project&apos;s contributors (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              A formal legal entity will be established soon. When that occurs, this Privacy Policy will be updated with the proper legal name and address.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Contact:</strong> <a href="mailto:contact@dumpsack.xyz" className="text-toxic hover:underline">contact@dumpsack.xyz</a>
            </p>
            <div className="p-4 rounded-lg bg-orange/10 border border-orange/20">
              <p className="text-sm text-orange">
                <strong>Important note:</strong> The DumpSack wallet is non-custodial. We do not store your private keys or seed phrase. 
                Never share your seed phrase with anyone — including us.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information we collect</h2>
            <p className="text-muted leading-relaxed mb-4">
              We collect minimal information necessary to operate a marketing website:
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">2.1 Newsletter & Waitlist</h3>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Email address</li>
              <li>Timestamp</li>
              <li>IP + user agent (for anti-abuse and compliance)</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">2.2 Support messages</h3>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Email</li>
              <li>Message contents</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">2.3 Analytics (privacy-focused)</h3>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Page views</li>
              <li>Device type</li>
              <li>Region (country-level)</li>
              <li>Referrers</li>
            </ul>
            <p className="text-muted leading-relaxed mt-2">
              We do not collect personal identifiers or tracking profiles.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">2.4 Server logs</h3>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>IP address</li>
              <li>Browser details</li>
              <li>Pages visited</li>
              <li>Error logs</li>
            </ul>
            <p className="text-muted leading-relaxed mt-2">
              Used for security, debugging, and performance.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. How we use information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Provide newsletters and updates</li>
              <li>Maintain waitlists (e.g., Android release notifications)</li>
              <li>Respond to support messages</li>
              <li>Improve website performance and security</li>
              <li>Prevent abuse or spam</li>
              <li>Comply with future legal obligations when an entity is formed</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              <strong>We do not sell or rent your personal information.</strong>
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Legal basis (international)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Until the company is formally registered, our data processing is based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Consent (newsletter, waitlists)</li>
              <li>Legitimate interests (security, analytics, site functionality)</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              When the legal entity is formed, this section will be updated accordingly.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data retention</h2>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Newsletter/waitlist data: until you unsubscribe</li>
              <li>Support messages: up to 24 months</li>
              <li>Server logs: 30–90 days</li>
              <li>Analytics: aggregated or anonymized</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted leading-relaxed">
              The Site aims to operate with no cookies except strictly necessary ones.
              Analytics tools (e.g., Plausible) run without personal identifiers or tracking cookies.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Third-party services</h2>
            <p className="text-muted leading-relaxed mb-4">
              We use trusted processors that may handle your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Hosting/CDN (e.g., Vercel)</li>
              <li>Email (Resend / SMTP)</li>
              <li>Newsletter/inbox processing</li>
              <li>Basic analytics (Plausible)</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Each service processes only what is required for the Site.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. International transfers</h2>
            <p className="text-muted leading-relaxed">
              If your data is processed outside your region, we rely on standard safeguards (e.g., GDPR SCCs where applicable).
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Your rights</h2>
            <p className="text-muted leading-relaxed mb-4">
              Depending on your region, you may request:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted ml-4">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Unsubscription</li>
              <li>Objection to processing</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Email <a href="mailto:contact@dumpsack.xyz" className="text-toxic hover:underline">contact@dumpsack.xyz</a> to make such a request.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Security</h2>
            <p className="text-muted leading-relaxed">
              We use industry-standard security measures for data in transit and at rest.
              However, no digital service is completely risk-free.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Children</h2>
            <p className="text-muted leading-relaxed">
              This Site is not intended for anyone under 18.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Policy changes</h2>
            <p className="text-muted leading-relaxed">
              We may update this Privacy Policy as the project evolves. When a legal entity is officially formed,
              we will update the document with the entity name, address, and representative details.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
            <p className="text-muted leading-relaxed">
              For any questions: <a href="mailto:contact@dumpsack.xyz" className="text-toxic hover:underline">contact@dumpsack.xyz</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

