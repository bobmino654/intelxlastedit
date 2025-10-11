
import { pricingPlans } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { LinkComponent as Link } from '@/components/LinkComponent';

export function PricingTeaser() {
  return (
    <section className="bg-card">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Transparent Pricing for Every Need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose the plan that fits your security requirements and budget.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20 ${plan.popular ? 'border-accent' : ''}`}>
              <CardHeader>
                <CardTitle className="font-headline">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  /month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left text-muted-foreground">
                  {plan.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                   <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-accent" />
                      And more...
                    </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'secondary'}>
                  <Link href="/pricing">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-12">
            <Button size="lg" asChild>
                <Link href="/pricing">View All Plans</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
