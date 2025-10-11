
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, ChevronRight, Shield, Link2, Search, BarChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Supply Chain Threat Intelligence',
  description: 'Monitor your third-party ecosystem for risks and vulnerabilities that could impact your organization.',
};

const methodology = [
    { title: 'Ecosystem Mapping', description: 'Identify key vendors, service providers, and software dependencies critical to your business operations.' },
    { title: 'Threat Surface Monitoring', description: 'Track vulnerabilities, misconfigurations, leaked credentials, and shadow IT related to your partners and suppliers.' },
    { title: 'Threat Actor Tracking', description: 'Monitor dark web forums, marketplaces, and malware distribution channels for chatter or tools targeting your supply chain.' },
    { title: 'Risk Scoring & Prioritization', description: 'Assess the likelihood and potential impact of each vendor-related issue, allowing for evidence-based decision making.' },
    { title: 'Reporting & Guidance', description: 'Provide actionable recommendations and vendor security benchmarks aligned with NIST and ISO frameworks.' },
];

const benefits = [
    'Visibility beyond the perimeter with continuous oversight of vendor risks.',
    'Proactive defense with early warnings before third-party issues become your incident.',
    'Tailored intelligence with context specific to your industry and vendor ecosystem.',
    'Vendor risk prioritization to focus on critical suppliers that matter most.',
    'Audit-ready evidence to support compliance with NIST, ISO, and other regulations.',
];

const deliverables = [
    'Vendor risk assessment reports with scoring and trends.',
    'Alerts on compromised credentials, leaked data, and vulnerable software components.',
    'Threat actor profiles targeting your supply chain.',
    'Executive-level dashboards summarizing ecosystem risk.',
    'Technical IOCs and intelligence feeds for SOC/SIEM integration.',
    'Remediation guidance for vendor and internal teams.',
];

const faqItems = [
    { 
        question: "How is this different from vendor risk assessments?",
        answer: "Traditional assessments are periodic and static. Our service provides continuous, real-time monitoring with threat intelligence context, identifying risks as they emerge."
    },
    {
        question: "Do you monitor both direct vendors and their subcontractors?",
        answer: "Yes, where visibility is possible, we extend monitoring into the broader ecosystem (Tier-2, Tier-3 suppliers) to provide a more comprehensive risk picture."
    },
    {
        question: "Can this integrate with our GRC or vendor management tools?",
        answer: "Absolutely. We provide structured feeds (JSON, CSV, API, STIX/TAXII) designed for seamless integration into GRC, vendor management, and risk platforms."
    }
];

export default function SupplyChainThreatIntelligencePage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Supply Chain Threat Intelligence
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Our service blends continuous monitoring, threat actor tracking, and risk scoring to help you defend against attacks that originate beyond your direct perimeter.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Methodology
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {methodology.map((phase) => (
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
            <CardTitle className="font-headline text-2xl text-accent">Your defenses are only as strong as your weakest link</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get continuous supply chain threat intelligence to secure your entire digital ecosystem.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Get Continuous Intelligence</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
