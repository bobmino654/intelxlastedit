
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, ChevronRight, Users, Target, BarChart, ShieldAlert } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Threat Intelligence Services | IntelX360',
  description: 'Actionable, validated, and timely threat intelligence to help you stay ahead of adversaries. We deliver insights security teams can trust.',
  openGraph: {
    title: 'Threat Intelligence Services | IntelX360',
    description: 'Actionable, validated, and timely threat intelligence to help you stay ahead of adversaries.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Threat Intelligence Services | IntelX360',
    description: 'Actionable, validated, and timely threat intelligence to help you stay ahead of adversaries.',
    images: ['/og-image.png'],
  },
};

const methodology = [
  { title: 'Collection', description: 'Harvest data from open sources, underground marketplaces, closed forums, malware repositories, and C2 infrastructure.' },
  { title: 'Analysis & Correlation', description: 'Apply context to raw data—mapping attacker TTPs to frameworks like MITRE ATT&CK, linking IOCs across campaigns, and filtering out noise.' },
  { title: 'Attribution & Profiling', description: 'Build profiles of adversaries—from state-sponsored groups to financially motivated gangs—and assess their capabilities, motives, and likely targets.' },
  { title: 'Delivery & Integration', description: 'Provide intelligence via direct API integration (SIEM, SOAR, TIP) and through our analyst-led reports and briefings.' },
];

const benefits = [
    'Relevant intelligence tailored to your industry and threat landscape.',
    'Early warnings to detect campaigns before they become mainstream.',
    'Proactive defense to shift from reactive alerts to anticipatory security.',
    'Operational efficiency by reducing false positives and focusing resources.',
    'Decision support with intelligence formatted for all levels of your organization.'
];

const deliverables = [
    'Weekly or monthly intelligence reports customized to your sector.',
    'Tactical IOCs and signatures (STIX/TAXII, JSON, CSV).',
    'Adversary profiles and campaign summaries.',
    'Vulnerability risk advisories with exploit likelihood scoring.',
    'Executive briefings for board or leadership teams.',
    '24/7 alerts for high-priority threats.'
];

const useCases = [
    { icon: Target, title: 'Threat Hunting', description: 'Empower your SOC with high-fidelity indicators and TTPs to hunt for adversaries in your network.' },
    { icon: ShieldAlert, title: 'Vulnerability Prioritization', description: 'Go beyond CVSS. Use real-world exploit data to prioritize patching for the most critical threats.' },
    { icon: Users, title: 'Executive Briefings', description: 'Communicate cyber risk effectively to the board with strategic intelligence on industry-specific threats.' },
    { icon: BarChart, title: 'Security Strategy', description: 'Inform your security strategy, investments, and control validation with a clear view of the threat landscape.' },
];


const faqItems = [
    {
        question: "How is your intelligence different from free feeds?",
        answer: "We focus on quality over quantity. Our intelligence is analyst-vetted, enriched with context, and tailored to your specific environment. We filter out the noise so your team can focus on real, validated threats, not just raw IPs or hashes."
    },
    {
        question: "Can threat intelligence integrate with our SIEM/SOAR?",
        answer: "Yes. Integration is a core part of our service. We provide structured feeds via STIX/TAXII, a robust API, and pre-built connectors for major platforms to ensure intelligence flows seamlessly into your existing security tools."
    },
    {
        question: "Do you monitor the dark web?",
        answer: "Absolutely. Our collection methodology includes continuous monitoring of underground forums, illicit marketplaces, and private channels where threat actors coordinate, trade stolen data, and plan attacks."
    }
]

export default function ThreatIntelligencePage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Threat Intelligence Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Know your adversary before they know you. Our intelligence is specific, validated, and timely, delivering insights security teams can trust and act on.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Methodology
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {methodology.map((phase) => (
                <Card key={phase.title} className="bg-card/50">
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

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Actionable Use Cases
        </h2>
         <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="group flex transform flex-col text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline group-hover:text-accent">{useCase.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{useCase.description}</p>
              </CardHeader>
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
            <CardTitle className="font-headline text-2xl text-accent">Get a Demo of Our Intel Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Request a demo or a sample threat report to see how our intelligence can empower your security operations.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
