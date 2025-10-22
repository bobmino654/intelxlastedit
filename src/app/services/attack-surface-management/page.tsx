
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Attack Surface Management (ASM) | IntelX360',
  description: 'Gain full visibility into your external digital footprint and reduce your attack surface with IntelX360’s ASM service.',
  openGraph: {
    title: 'Attack Surface Management (ASM) | IntelX360',
    description: 'Gain full visibility into your external digital footprint and reduce your attack surface.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Attack Surface Management (ASM) | IntelX360',
    description: 'Gain full visibility into your external digital footprint and reduce your attack surface.',
    images: ['/og-image.png'],
  },
};

const benefits = [
    'Complete visibility—uncover assets you didn’t know existed.',
    'Reduced exposure—shrink your attack surface before it’s exploited.',
    'Continuous monitoring—not just point-in-time scans.',
    'Business-context prioritization—focus on what matters most.',
    'Compliance-ready reporting—support for ISO 27001, SOC2, PCI-DSS, and other frameworks.',
];

const deliverables = [
    'Comprehensive asset inventory & classification report.',
    'Continuous monitoring dashboard with risk alerts.',
    'Vulnerability & misconfiguration findings with proof-of-concept.',
    'Risk-prioritized remediation roadmap.',
    'Executive summary for leadership and board reporting.',
    'Optional integration into SIEM/SOAR platforms.',
];

const faqItems = [
    { 
        question: "How is ASM different from vulnerability scanning?",
        answer: "ASM is continuous and focuses on asset discovery and monitoring, not just point-in-time vulnerability checks. It provides a holistic view of your external footprint."
    },
    {
        question: "Will you monitor cloud assets too?",
        answer: "Yes, we integrate with AWS, Azure, GCP, and major SaaS platforms to identify exposures and misconfigurations in your complete cloud footprint."
    },
    {
        question: "Can ASM integrate into our SOC workflow?",
        answer: "Absolutely. We provide APIs, threat intelligence feeds, and custom alerting that plug directly into SIEM, SOAR, and ticketing systems to streamline your operations."
    }
];

export default function AttackSurfaceManagementPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Attack Surface Management (ASM)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          IntelX360’s ASM service is designed to give organizations full visibility into their external footprint. Attackers constantly scan the internet for exposed assets — we do the same, but with defensive intent and context.
        </p>
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
            <CardTitle className="font-headline text-2xl text-accent">You Can’t Defend What You Can’t See</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Ready to eliminate your blind spots? Request a free, no-obligation ASM assessment with our security experts today.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Request an Assessment</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
