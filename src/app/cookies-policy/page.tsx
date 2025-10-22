
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | IntelX360',
  description: 'Learn how IntelX360 uses cookies to improve your experience, analyze site performance, and deliver relevant advertising. Manage your cookie preferences.',
  openGraph: {
    title: 'Cookie Policy | IntelX360',
    description: 'Learn how we use cookies to improve your experience and analyze site performance.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Cookie Policy | IntelX360',
    description: 'Learn how we use cookies to improve your experience and analyze site performance.',
    images: ['/og-image.png'],
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 md:py-20">
      <article className="prose prose-invert mx-auto max-w-4xl text-muted-foreground">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Cookie Policy
        </h1>
        <p className="lead">Last Updated: October 2, 2024</p>

        <p>At IntelX360, we are committed to protecting your privacy and ensuring transparency in how we collect and use data. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences when visiting intelx360.com.</p>

        <h2 className="font-headline text-white">1. What Are Cookies?</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website. They help the site recognize your device and remember certain information about your visit—such as preferences, login details, and analytics data.</p>
        <p>Cookies can be:</p>
        <ul className="list-disc space-y-2">
            <li><strong>Session Cookies:</strong> Automatically deleted when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device until they expire or are deleted manually.</li>
            <li><strong>First-party Cookies:</strong> Set by IntelX360.</li>
            <li><strong>Third-party Cookies:</strong> Set by trusted external partners (e.g., analytics or advertising providers).</li>
        </ul>

        <h2 className="font-headline text-white">2. How We Use Cookies</h2>
        <p>IntelX360 uses cookies for several important purposes:</p>
        <h3 className="font-headline text-white">a. Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure login, and access to protected areas.</p>
        <h3 className="font-headline text-white">b. Performance & Analytics Cookies</h3>
        <p>These cookies help us understand how visitors use our site, identify errors, and improve the user experience. We use tools like Google Analytics and Microsoft Clarity for this purpose.</p>
        <h3 className="font-headline text-white">c. Functionality Cookies</h3>
        <p>These cookies remember your preferences (such as language or region) to provide a more personalized experience.</p>
        <h3 className="font-headline text-white">d. Advertising & Marketing Cookies</h3>
        <p>These cookies are used to deliver relevant ads and measure the effectiveness of marketing campaigns. They may be set through our site by advertising partners such as Google, Meta, or LinkedIn.</p>

        <h2 className="font-headline text-white">3. Third-Party Cookies</h2>
        <p>We may allow trusted third-party partners to place cookies on your device for analytics, advertising, and social media integration. Each partner operates under its own privacy policy. You can learn more about how these partners handle data by visiting their respective privacy policies.</p>

        <h2 className="font-headline text-white">4. Managing Cookie Preferences</h2>
        <p>You have the right to choose whether or not to accept cookies. Here are your options:</p>
        <ul className="list-disc space-y-2">
            <li>Adjust your browser settings to refuse or delete cookies.</li>
            <li>Use our on-site Cookie Settings tool to manage consent preferences.</li>
            <li>Opt out of targeted advertising via Your Online Choices or Network Advertising Initiative.</li>
        </ul>
        <p>Please note that disabling certain cookies may impact the functionality or performance of our website.</p>

        <h2 className="font-headline text-white">5. Updates to This Policy</h2>
        <p>We may update this Cookie Policy periodically to reflect changes in technology, regulations, or our practices. All updates will be posted on this page with a revised “Last Updated” date.</p>

        <h2 className="font-headline text-white">6. Contact Us</h2>
        <p>If you have any questions or concerns about our use of cookies, please contact us:</p>
        <address className="not-italic">
            IntelX360 Cybersecurity Solutions<br />
            Email: <a href="mailto:info@intelx360.com">info@intelx360.com</a><br />
            Website: <a href="https://intelx360.com">https://intelx360.com</a>
        </address>
      </article>
    </div>
  );
}
