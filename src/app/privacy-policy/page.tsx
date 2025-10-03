import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'IntelX360 Privacy Policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-20">
      <article className="prose prose-invert mx-auto max-w-4xl text-muted-foreground">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="lead">Last updated: October 2, 2024</p>

        <h2 className="font-headline text-white">1. Introduction</h2>
        <p>IntelX360 (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains what personal data we collect, why we collect it, how we use it, who we share it with, and your rights.</p>

        <h2 className="font-headline text-white">2. Scope</h2>
        <p>This policy applies to personal data collected via <a href="https://www.intelx360.com">https://www.intelx360.com</a> and related services (the “Service”).</p>

        <h2 className="font-headline text-white">3. Data We Collect</h2>
        <ol className="list-[lower-alpha] space-y-2">
          <li><strong>Data you provide:</strong> name, email, job title, company, billing info (if purchasing), support tickets, messages.</li>
          <li><strong>Automatically collected data:</strong> IP address, browser type, device IDs, pages visited, referrer, cookies, analytics data.</li>
          <li><strong>Derived data:</strong> aggregated or anonymized usage statistics.</li>
          <li><strong>Third-party sources:</strong> data from social logins, payment processors, marketing platforms.</li>
        </ol>

        <h2 className="font-headline text-white">4. How We Use Your Data</h2>
        <ul className="list-disc space-y-2">
            <li>Provide, maintain, and improve the Service.</li>
            <li>Process orders, billing, subscriptions and refunds.</li>
            <li>Communicate (support, account notices, marketing — where permitted).</li>
            <li>Security, fraud detection, and legal compliance.</li>
            <li>Analytics and product improvement.</li>
        </ul>


        <h2 className="font-headline text-white">5. Legal Bases (if processing EU data)</h2>
        <ul className="list-disc space-y-2">
            <li><strong>Contract performance:</strong> to provide the service.</li>
            <li><strong>Legitimate interests:</strong> service improvement, security, fraud prevention.</li>
            <li><strong>Consent:</strong> where required — e.g., marketing emails, non-essential cookies.</li>
            <li><strong>Legal obligations:</strong> e.g., tax, law enforcement requests.</li>
        </ul>

        <h2 className="font-headline text-white">6. Cookies & Tracking</h2>
        <p>We use cookies and similar technologies for essential site functions, analytics, and (with consent) marketing. You can manage cookie preferences via our cookie banner/settings. For more details see our Cookie Policy section below.</p>

        <h2 className="font-headline text-white">7. Sharing & Disclosure</h2>
        <p>We may share data with:</p>
        <ul className="list-disc space-y-2">
            <li>Service providers (hosting, analytics, payments, CRM).</li>
            <li>Legal authorities if required by law.</li>
            <li>Business transfers (e.g., merger/acquisition) — with notice or where required by law.</li>
        </ul>
        <p>We do not sell personal data.</p>

        <h2 className="font-headline text-white">8. Third-party Services</h2>
        <p>Third-party services (e.g., Google Analytics, Stripe, PayPal, HubSpot) process data under their own policies. Links to those providers’ privacy policies are available on their sites.</p>

        <h2 className="font-headline text-white">9. Data Retention</h2>
        <p>We keep personal data as long as needed for the purposes listed (service, legal obligations, legitimate business needs). Specific retention periods: account data while account is active + 5 years for billing; logs and analytics: 24 months.</p>

        <h2 className="font-headline text-white">10. Security</h2>
        <p>We use administrative, technical, and physical measures to protect data (encryption in transit, access controls). No system is 100% secure — if a breach occurs we will comply with applicable breach-notification laws.</p>

        <h2 className="font-headline text-white">11. Your Rights (EU/UK/Other applicable regions)</h2>
        <p>Where applicable you may: access, correct, delete, restrict processing, object to processing, request portability, withdraw consent, and lodge a complaint with a supervisory authority. To exercise rights contact: info@intelx360.com.</p>

        <h2 className="font-headline text-white">12. Children</h2>
        <p>Our Service is not intended for children under 16 (or local minimum age). We do not knowingly collect personal data from children.</p>

        <h2 className="font-headline text-white">13. International Transfers</h2>
        <p>If we transfer personal data across borders (e.g., to the US), we implement safeguards (standard contractual clauses, adequacy decisions) where required.</p>

        <h2 className="font-headline text-white">14. Changes to this Policy</h2>
        <p>We may update this policy. We’ll publish the updated Privacy Policy with an updated effective date and — where required — notify users.</p>

        <h2 className="font-headline text-white">15. Contact</h2>
        <address className="not-italic">
            Privacy/Data Protection Officer<br />
            Email: <a href="mailto:info@intelx360.xom">info@intelx360.xom</a><br />
            Address: 24 Mirage City - Cairo - Egypt
        </address>

      </article>
    </div>
  );
}
