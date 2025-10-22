
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Shield, TrendingUp, BookCopy, Goal, LifeBuoy } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Virtual CISO (vCISO) Services | IntelX360',
  description: 'Executive-level cybersecurity leadership and strategic guidance on a flexible, scalable basis to align your security with business goals.',
  openGraph: {
    title: 'Virtual CISO (vCISO) Services | IntelX360',
    description: 'Get executive-level cybersecurity leadership and strategic guidance on a flexible, scalable basis.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Virtual CISO (vCISO) Services | IntelX360',
    description: 'Get executive-level cybersecurity leadership and strategic guidance on a flexible, scalable basis.',
    images: ['/og-image.png'],
  },
};

const vCisoDeliverables = [
  { icon: Goal, title: 'Governance & Strategy', description: 'Define security objectives, build a multi-year roadmap, and ensure alignment with business priorities.' },
  { icon: BookCopy, title: 'Risk & Compliance Management', description: 'Oversee regulatory requirements (ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS), conduct gap assessments, and support audit readiness.' },
  { icon: Shield, title: 'Policy & Framework Development', description: 'Create and enforce security policies, standards, and incident response playbooks tailored to your organization.' },
  { icon: LifeBuoy, title: 'Threat & Vulnerability Oversight', description: 'Review penetration test findings, vulnerability scans, and threat intelligence to guide proactive defenses.' },
  { icon: TrendingUp, title: 'Board & Executive Reporting', description: 'Translate technical risks into business language, prepare executive dashboards, and present to leadership.' },
  { icon: Users, title: 'Third-party & Vendor Risk', description: 'Assess supply chain risks, review contracts, and manage due diligence for vendors and partners.' },
];

const benefits = [
    'Access executive-level expertise without the overhead of a full-time CISO.',
    'Align security strategy directly with your business goals for better ROI.',
    'Navigate complex regulatory landscapes with confidence.',
    'Make smarter, more cost-effective security investments.',
    'Build a resilient security culture from the top down.',
    'Gain continuous insight and oversight for long-term security maturity.'
];

const faqItems = [
    {
        question: "How is a vCISO different from a consultant?",
        answer: "A consultant typically handles a single project; a vCISO is embedded in your leadership structure, guiding long-term strategy and governance."
    },
    {
        question: "Can a vCISO present to our board or investors?",
        answer: "Yes. Our vCISO advisors are experienced in executive communication and can translate technical risk into business context."
    },
    {
        question: "How flexible is the engagement model?",
        answer: "Very — you can choose retainer hours, fractional leadership, or project-specific engagements."
    }
];


export default function VirtualCisoPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Virtual CISO (vCISO)
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
         Executive-level cybersecurity leadership at a fraction of the cost. Our vCISO program provides your organization with direct access to experienced cybersecurity executives who bring decades of leadership in risk management, regulatory compliance, and strategic security planning.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Key Areas of Engagement
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vCisoDeliverables.map((pillar) => (
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
        <div className="grid grid-cols-1 gap-12">
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    Why Choose IntelX360 vCISO?
                </h3>
                <p className="mt-4 text-muted-foreground">Our vCISO offering goes beyond basic consulting. We become an extension of your leadership team, providing continuous insight, oversight, and decision-making support. Whether you need ongoing security governance, guidance during compliance audits, or leadership in building a long-term security culture, our experts bring the vision and authority required to drive results.</p>
                <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
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
            <CardTitle className="font-headline text-2xl text-accent">Get Enterprise-Grade Security Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Don’t wait until a breach escalates. Schedule a vCISO consultation today to see how our experts can help you build a resilient and compliant security program.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
