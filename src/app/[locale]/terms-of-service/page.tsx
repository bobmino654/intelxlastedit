import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'IntelX360 Terms of Service. By using our services, you agree to these terms.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-20">
      <article className="prose prose-invert mx-auto max-w-4xl text-muted-foreground">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="lead">Last updated: October 2, 2024</p>

        <h2 className="font-headline text-white">1. Agreement to Terms</h2>
        <p>These Terms of Service (“Terms”) govern your access to and use of the products, services, and website provided by IntelX360 (“we”, “our”, “us”). By accessing or using our Service you agree to these Terms.</p>

        <h2 className="font-headline text-white">2. Services</h2>
        <p>IntelX360 provides a threat intelligence platform, security consulting, and managed security services. Detailed service descriptions, pricing, and SLAs are available on the website or in separate Order Forms/Contracts.</p>

        <h2 className="font-headline text-white">3. Account Registration & Security</h2>
        <p>You must provide accurate registration info and keep it up to date. You’re responsible for account credentials and activity. Notify us immediately of unauthorized use.</p>

        <h2 className="font-headline text-white">4. Acceptable Use & User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2">
            <li>Use the Service to violate laws, infringe IP, distribute malware, send spam, or commit fraud.</li>
            <li>Reverse-engineer, copy, or modify the Service except as permitted.</li>
            <li>Interfere with security or performance.</li>
        </ul>
        <p>We may suspend or terminate accounts for violations.</p>

        <h2 className="font-headline text-white">5. User Content</h2>
        <p>Users may submit content (feedback, data, uploads). You grant IntelX360 a worldwide, royalty-free license to use, reproduce, and operate on such content to provide and improve the Service. Do not submit content that you do not have the right to share.</p>

        <h2 className="font-headline text-white">6. Intellectual Property</h2>
        <p>All IntelX360 intellectual property (software, documentation, trademarks, logos) is our exclusive property. You receive only the rights expressly granted in these Terms or a signed agreement.</p>

        <h2 className="font-headline text-white">7. Subscriptions, Billing & Refunds</h2>
        <p>Paid services are billed as described on order forms. You must provide valid billing info. Fees are non-refundable unless otherwise stated in your specific service agreement.</p>

        <h2 className="font-headline text-white">8. Third-party Services</h2>
        <p>We may integrate third-party services; use of those services is subject to their terms and privacy policies.</p>

        <h2 className="font-headline text-white">9. Confidentiality</h2>
        <p>Each party will keep confidential the other’s confidential information and not disclose except as permitted. Confidential info excludes publicly available info and information required to be disclosed by law.</p>

        <h2 className="font-headline text-white">10. Warranties & Disclaimers</h2>
        <p>We provide the Service “as is” and “as available”. We disclaim all implied warranties (merchantability, fitness for a particular purpose, non-infringement) to the fullest extent permitted by law.</p>

        <h2 className="font-headline text-white">11. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, IntelX360’s total liability to you for any claim arising out of or relating to these Terms will not exceed the fees paid by you to IntelX360 in the 12 months preceding the claim. We are not liable for indirect, consequential, special, or punitive damages.</p>

        <h2 className="font-headline text-white">12. Indemnification</h2>
        <p>You agree to indemnify, defend and hold harmless IntelX360, its officers, employees, and agents from claims, liabilities, damages, losses arising from your use of the Service or violation of these Terms.</p>

        <h2 className="font-headline text-white">13. Termination</h2>
        <p>We may suspend or terminate your access for violations or inactivity. Upon termination, outstanding fees remain due. Some provisions (IP, indemnity, limitation of liability, confidentiality) survive termination.</p>

        <h2 className="font-headline text-white">14. Governing Law & Dispute Resolution</h2>
        <p>These Terms are governed by the laws of the Arab Republic of Egypt. Disputes will be resolved via arbitration in Cairo, Egypt.</p>

        <h2 className="font-headline text-white">15. Export Controls</h2>
        <p>You agree to comply with applicable export laws and will not export or re-export the Service in violation of such laws.</p>

        <h2 className="font-headline text-white">16. Changes to Terms</h2>
        <p>We may modify Terms; changes take effect on the “Last updated” date noted above or as otherwise communicated. Continued use after changes constitutes acceptance.</p>

        <h2 className="font-headline text-white">17. Miscellaneous</h2>
        <p><strong>Entire agreement:</strong> these Terms plus order forms constitute the entire agreement. <strong>Severability:</strong> if a provision is invalid, the other provisions remain in effect. <strong>Assignment:</strong> you may not assign these Terms without our consent.</p>

        <h2 className="font-headline text-white">18. Contact</h2>
        <address className="not-italic">
            For legal, billing, or support matters:<br />
            Email: <a href="mailto:info@intelx360.com">info@intelx360.com</a><br />
            Address: 24 Mirage City - Cairo - Egypt<br />
            Phone: +20 1558107744
        </address>
      </article>
    </div>
  );
}
