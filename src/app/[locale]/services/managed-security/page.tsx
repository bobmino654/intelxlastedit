import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, FileText, ChevronRight, Shield, BellRing, Search, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Managed Security Services (MSSP)',
  description: '24/7 security monitoring, threat hunting, and incident response from our expert SOC team to protect your infrastructure.',
};

const servicePillars = [
  { icon: BellRing, title: 'Security Monitoring & Detection', description: 'Real-time monitoring of logs, events, and alerts from endpoints, networks, and cloud environments, with full SIEM and EDR/XDR integration.' },
  { icon: Zap, title: 'Incident Response & Containment', description: 'Rapid triage, investigation, and containment of suspicious activity, leveraging proven playbooks and automation for swift resolution.' },
  { icon: Search, title: 'Threat Hunting & Intelligence', description: 'Proactive hunts for hidden adversaries, informed by IntelX360’s proprietary threat intelligence and mapped to the MITRE ATT&CK framework.' },
  { icon: Shield, title: 'Vulnerability & Patch Management', description: 'Continuous scanning, risk-based prioritization, and actionable guidance to help you remediate critical weaknesses before they are exploited.' },
];

const benefits = [
    '24/7 protection with always-on monitoring by skilled analysts.',
    'Cost efficiency by gaining an enterprise-grade SOC without the in-house expense.',
    'Faster response times with immediate containment and clear remediation guidance.',
    'Scalable coverage across cloud, hybrid, and on-premise infrastructure.',
    'Regulatory confidence with compliance-ready logs, reports, and evidence.',
    'Continuous improvement through proactive threat hunting and security advisory.'
];

const deliverables = [
    '24/7 SOC monitoring and incident response coverage.',
    'Access to SIEM/SOAR dashboards with customized alerts.',
    'Weekly and monthly threat & incident summary reports.',
    'Vulnerability scan reports with prioritized remediation.',
    'Compliance documentation for audits (PCI DSS, HIPAA, ISO 27001).',
    'Quarterly executive briefings and strategic security reviews.'
];

const faqItems = [
    { 
        question: "How quickly do you respond to incidents?",
        answer: "Our SOC analysts triage critical alerts immediately upon detection. Confirmed incidents are escalated in real-time with clear, actionable steps for containment and remediation, guided by our agreed-upon playbooks."
    },
    {
        question: "Can you integrate with our existing security tools?",
        answer: "Yes, our platform is designed for flexibility. We work with leading SIEM, EDR, and SOAR platforms. If you don't have a stack, we can deploy our own fully managed solution."
    },
    {
        question: "Do you offer compliance reporting?",
        answer: "Absolutely. We generate audit-ready reports mapped to common frameworks like PCI DSS, HIPAA, GDPR, SOC 2, and ISO 27001, providing the evidence you need for regulators and auditors."
    }
];

export default function ManagedSecurityPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Managed Security Services (MSSP)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Extend your security capability without the overhead. Our 24/7 SOC works as a seamless extension of your team to safeguard your infrastructure against advanced threats.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Core Services
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicePillars.map((pillar) => (
            <Card key={pillar.title} className="group flex transform flex-col text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline group-hover:text-accent">{pillar.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{pillar.description}</p>
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
            <CardTitle className="font-headline text-2xl text-accent">Ready for 24/7 Protection?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get enterprise-grade SOC protection without building one yourself. Book a consultation with our MSSP team to learn more.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
