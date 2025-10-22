
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, ChevronRight, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Brand Protection Services | IntelX360',
  description: 'Detect and take down phishing sites, fraudulent mobile apps, and social media impersonations targeting your brand.',
  openGraph: {
    title: 'Brand Protection Services | IntelX360',
    description: 'Detect and take down phishing sites, fraudulent apps, and social media impersonations.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Brand Protection Services | IntelX360',
    description: 'Detect and take down phishing sites, fraudulent apps, and social media impersonations.',
    images: ['/og-image.png'],
  },
};

const approachPhases = [
    { title: 'Continuous Monitoring', description: 'Detect newly registered lookalike domains, fraudulent apps in public and private app stores, and fake social media accounts impersonating your brand.' },
    { title: 'Threat Validation', description: 'Confirm malicious intent (phishing kits, credential harvesting, malware injection, fake promotions).' },
    { title: 'Takedown Execution', description: 'Coordinate with registrars, hosting providers, app stores, and platforms to remove malicious content quickly.' },
    { title: 'Customer Protection', description: 'Provide intelligence feeds for your SOC/EDR to block malicious domains and URLs.' },
    { title: 'Reporting & Analysis', description: 'Issue clear reports with timelines, root cause analysis, and repeat offender tracking.' },
];

const benefits = [
    'Protect customer trust by stopping fraudsters from exploiting your brand.',
    'Minimize financial risk by preventing phishing-driven account compromise and fraud.',
    'Leverage our network of providers, registrars, and legal processes for fast takedowns.',
    '24/7 continuous scanning of domains, app stores, and social platforms.',
    'Receive clear evidence packages and threat actor profiling for actionable insights.',
];

const deliverables = [
    'Daily/weekly monitoring reports of detected brand abuse.',
    'Verified threat alerts (domains, apps, social impersonations).',
    'Takedown confirmation reports with remediation timelines.',
    'IOC feeds for proactive blocking (domains, URLs, file hashes).',
    'Executive summary for risk and reputation stakeholders.',
];

const faqItems = [
    { 
        question: "How quickly can you take down a phishing site?",
        answer: "Most takedowns occur within 24–72 hours, depending on the hosting provider and jurisdiction."
    },
    {
        question: "Do you monitor international domains and app stores?",
        answer: "Yes. We cover global TLDs, regional app marketplaces, and major social platforms."
    },
    {
        question: "Will we get proof of takedown for compliance?",
        answer: "Absolutely. Each takedown is documented with evidence and confirmation reports."
    }
];

export default function BrandProtectionPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Brand Protection
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          IntelX360’s Brand Protection service gives you visibility and control over digital risks tied to brand misuse. We combine advanced detection with global takedown capability to stop criminals from exploiting your name, logos, and trademarks.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Approach
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {approachPhases.map((phase) => (
                <Card key={phase.title} className="bg-card/50 text-center">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl text-accent">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg bg-card p-8 md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    Key Benefits
                </h3>
                <ul className="mt-6 space-y-4">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <FileText className="mr-3 h-6 w-6" />
                    Deliverables
                </h3>
                <ul className="mt-6 space-y-4">
                    {deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

       <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger className="text-left font-headline text-lg hover:text-accent">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mt-10 text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Don’t Let Attackers Hijack Your Brand</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get proactive brand protection to stop phishing, fraud, and impersonation. Request a demo to see our platform in action.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
