
import type { Metadata } from 'next';
import { PricingCard } from '@/components/pricing-card';
import { pricingPlans } from '@/lib/data';
import { Check, ShieldCheck, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'IntelX360 Pricing | Transparent Cybersecurity Packages for All Businesses',
  description: 'Discover IntelX360’s flexible cybersecurity pricing. Choose the right plan for your organization’s size and needs — from MSSP to advanced threat intelligence and cloud protection.',
  keywords: 'cybersecurity pricing, MSSP packages, threat intelligence plans, penetration testing cost, managed security service cost, cybersecurity plans',
};

const whyChooseUs = [
    { text: 'Scalable protection – From personal identity security to enterprise SOC-level monitoring.' },
    { text: 'Proactive threat intelligence – Stay ahead of attackers with data-driven insights.' },
    { text: 'Rapid response capability – Minimize business impact with expert incident handling.' },
    { text: 'Proven expertise – 20+ years of experience in threat intelligence and cybersecurity.' },
    { text: 'Transparent pricing – Clear, predictable costs with no hidden fees.' },
];

const flexibleOptions = [
    { text: 'Monthly, yearly, or custom contracts available.' },
    { text: 'Add-ons such as vCISO services, executive protection, or cloud security can be included.' },
    { text: 'Tailored enterprise packages available upon request.' },
];

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Flexible Pricing for Every Scale
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Choose a plan that aligns with your security goals and budget. We offer solutions for individuals, small businesses, and large enterprises.
        </p>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
         <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Why Choose IntelX360?</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="space-y-4">
                    {whyChooseUs.map((point, i) => (
                        <li key={i} className="flex items-start">
                            <ShieldCheck className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
         </Card>
         <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Flexible Options</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="space-y-4">
                    {flexibleOptions.map((point, i) => (
                        <li key={i} className="flex items-start">
                            <Zap className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
         </Card>
      </section>
    </div>
  );
}
