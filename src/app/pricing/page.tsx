import { Metadata } from 'next';
import { PricingCard } from '@/components/pricing-card';
import { pricingPlans } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Find the right IntelX360 cybersecurity plan for your needs, from personal protection to enterprise-grade solutions.',
};

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
    </div>
  );
}
