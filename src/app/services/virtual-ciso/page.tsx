import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Users, Shield, TrendingUp, BookCopy, Goal, LifeBuoy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Virtual CISO (vCISO) Services',
  description: 'Executive-level cybersecurity leadership and strategic guidance on a flexible, scalable basis to align your security with business goals.',
};

const vCisoDeliverables = [
  { icon: Goal, title: 'Strategic Guidance', description: 'Tailored cybersecurity roadmaps that align with your unique business objectives, regulatory requirements, and risk profile.' },
  { icon: BookCopy, title: 'Policy & Compliance Management', description: 'Development and enforcement of security policies to meet frameworks such as ISO 27001, NIST, GDPR, HIPAA, and more.' },
  { icon: Shield, title: 'Risk & Gap Assessments', description: 'Comprehensive evaluations of your current security posture with prioritized recommendations for improvement.' },
  { icon: Users, title: 'Vendor & Technology Advisory', description: 'Independent guidance on security solutions, vendors, and technologies to ensure cost-effective and resilient investments.' },
  { icon: TrendingUp, title: 'Board-Level Reporting', description: 'Clear communication of cybersecurity risks and initiatives to executive leadership and stakeholders.' },
  { icon: LifeBuoy, title: 'Incident Readiness & Oversight', description: 'Ensuring your organization is fully prepared to respond to and recover from security incidents with minimal impact.' },
];

const benefits = [
    'Access executive-level expertise without the overhead of a full-time CISO.',
    'Align security strategy directly with your business goals for better ROI.',
    'Navigate complex regulatory landscapes with confidence.',
    'Make smarter, more cost-effective security investments.',
    'Build a resilient security culture from the top down.',
    'Gain continuous insight and oversight for long-term security maturity.'
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
          What Our vCISO Delivers
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

      <section className="mt-10 text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Ready for Strategic Security Leadership?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Don’t wait until a breach escalates. Contact us now to learn how our vCISO service can help you build a resilient and compliant security program.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
