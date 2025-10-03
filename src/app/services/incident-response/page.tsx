import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, FileText, ChevronRight, Shield, BellRing, Search, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Incident Response Services',
  description: 'Rapidly respond to, investigate, and recover from security incidents with our expert forensics and response team.',
};

const processPhases = [
  { title: 'Preparation & Triage', description: 'Establish rules of engagement, communication protocols, and immediate containment steps.' },
  { title: 'Detection & Containment', description: 'Isolate compromised hosts, disable malicious accounts, and block attacker infrastructure to stop spread.' },
  { title: 'Investigation & Forensics', description: 'Perform log analysis, memory capture, and network traffic review to identify the attacker’s entry point and TTPs.' },
  { title: 'Eradication & Recovery', description: 'Remove malicious artifacts, patch vulnerabilities, restore systems from trusted backups, and validate recovery.' },
  { title: 'Post-Incident Review', description: 'Provide a detailed report with timelines, root cause, and prioritized recommendations to strengthen resilience.' },
];

const benefits = [
    'Rapid response to contain damage and minimize downtime.',
    'Forensic clarity with detailed analysis of attack vectors and tools.',
    'Regulatory support with compliance-ready reports for GDPR, HIPAA, etc.',
    'Business continuity by restoring operations quickly and safely.',
    'Strengthened resilience with actionable lessons learned.'
];

const deliverables = [
    '24/7 on-demand response team access (retainer option available).',
    'Forensic investigation report with root-cause findings.',
    'Attacker TTP mapping against MITRE ATT&CK.',
    'Evidence packages for legal or regulatory use.',
    'Step-by-step remediation and hardening recommendations.',
    'Post-incident executive briefing and workshop.'
];

const faqItems = [
    { 
        question: "Do you offer 24/7 emergency response?",
        answer: "Yes, we provide both on-demand emergency services and pre-arranged retainer agreements to ensure rapid deployment when you need it most."
    },
    {
        question: "Can you work remotely, or do you need on-site access?",
        answer: "Our team is equipped for both remote and on-site response. The approach depends on the incident's severity, your environment, and specific requirements."
    },
    {
        question: "Will your reports hold up in legal or compliance audits?",
        answer: "Absolutely. Our forensic process follows strict chain-of-custody standards, producing evidence and reports that are admissible and suitable for legal and regulatory contexts."
    }
];

export default function IncidentResponsePage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Incident Response Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          IntelX360 provides speed, precision, and resilience in a crisis. We integrate digital forensics, threat intelligence, and hands-on remediation to bring you clarity.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Response Process
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processPhases.map((phase) => (
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
         <p className="mt-8 text-center text-muted-foreground">
            Our methodology is aligned with NIST SP 800-61, SANS Incident Handling, and ISO 27035.
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
        <Card className="mx-auto max-w-2xl bg-destructive/5 border-destructive/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-destructive">Experiencing an Incident?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Don’t wait until a breach escalates. Contact our incident response team for immediate assistance.</p>
            <Button size="lg" asChild className="mt-6" variant="destructive">
              <Link href="/contact">Request Immediate Support</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
