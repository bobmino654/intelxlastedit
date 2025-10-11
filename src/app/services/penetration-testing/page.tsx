
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Target, FileText, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Penetration Testing Services',
  description: 'Simulated cyber attacks to identify and remediate vulnerabilities. Our threat-centric approach measures real-world impact to reduce your business risk.',
};

const phases = [
  { title: 'Scoping & Intelligence Gathering', description: 'Define targets, rules of engagement, and critical assets. We collect intel to identify likely attack paths.' },
  { title: 'Discovery & Enumeration', description: 'Automated and manual discovery of services, endpoints, and misconfigurations, prioritized by exposure.' },
  { title: 'Exploitation & Post-Exploitation', description: 'Safely exploit vulnerabilities to demonstrate impact, escalate privileges, and map lateral movement within your systems.' },
  { title: 'Impact Analysis', description: 'Determine what an attacker could access: data, credentials, or cloud privileges. We model attacker objectives like espionage or financial theft.' },
  { title: 'Reporting & Remediation', description: 'A tailored report with an executive summary, risk heatmap, step-by-step reproduction, and recommended fixes.' },
  { title: 'Retest & Verify', description: 'Optional retest once fixes are applied to confirm closure and ensure no new vulnerabilities were introduced.' },
];

const benefits = [
    'Actionable results—prioritized fixes, not vague warnings.',
    'Realistic adversary simulation from initial access to impact.',
    'Reduced business risk by protecting critical assets & customer trust.',
    'Developer-friendly guidance with code and configuration remediation steps.',
    'Compliance-ready output to support for ISO, SOC2, PCI-DSS, GDPR audits.'
];

const deliverables = [
    'Executive summary for leadership',
    'Full technical report with step-by-step reproduction and PoC artifacts',
    'Risk-prioritized findings (CVSS & business-impact mapping)',
    'Remediation playbook and patch guidance',
    'Optional live walkthrough and developer workshop',
    'Retest report (if requested)'
]

const faqItems = [
    { 
        question: "How long does a typical test take?",
        answer: "Duration depends on scope—a focused web-app test is often 2–5 business days; enterprise-wide assessments can take longer. We’ll propose a timeline during scoping."
    },
    {
        question: "Will testing disrupt my systems?",
        answer: "Minimally. We follow safe exploitation practices and can perform tests in staging environments or during agreed-upon maintenance windows to avoid operational impact."
    },
    {
        question: "Do you sign NDAs and follow strict rules of engagement?",
        answer: "Absolutely. We require a signed scoping document and Rules of Engagement (RoE) to protect your environment, data, and define clear boundaries for the test."
    }
]

export default function PenetrationTestingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Penetration Testing Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Our approach is hands-on and threat-centric. We combine open-source reconnaissance, proprietary intel, and manual exploitation to validate vulnerabilities and measure their real-world impact.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Methodology
        </h2>
        <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" aria-hidden="true"></div>
            {phases.map((phase, index) => (
                <div key={index} className="relative mb-8 flex items-start md:grid md:grid-cols-2 md:gap-8">
                    <div className={`flex flex-col items-center ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <div className={`p-4 text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            <h3 className="font-headline text-xl font-bold text-accent">{phase.title}</h3>
                            <p className="mt-2 text-muted-foreground">{phase.description}</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className={`absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background ${index % 2 === 0 ? '' : 'md:left-1/2'}`}></div>
                    </div>
                     <div className={`hidden ${index % 2 === 0 ? 'md:block' : 'md:hidden'}`}></div>
                     <div className={`hidden ${index % 2 !== 0 ? 'md:block' : 'md:hidden'}`}></div>
                </div>
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
        <div className="mt-12 border-t border-border pt-8">
             <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                <Shield className="mr-3 h-6 w-6" />
                Standards & Compliance
            </h3>
            <p className="mt-4 text-muted-foreground">
                Our tests conform to industry best practices and standards such as the OWASP Top 10 and NIST SP 800-115. We provide detailed evidence and attestations suitable for audits (ISO, SOC2, PCI-DSS, GDPR), procurement processes, or board-level reporting.
            </p>
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
            <CardTitle className="font-headline text-2xl text-accent">Ready to uncover your vulnerabilities?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">See your organization through the eyes of an attacker. Request a free, no-obligation scoping call with our security experts today.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Request a Scoping Call</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
