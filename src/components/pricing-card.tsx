import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PricingCardProps = {
  name: string;
  price: number;
  features: string[];
  cta: string;
  popular?: boolean;
};

export function PricingCard({ name, price, features, cta, popular = false }: PricingCardProps) {
  return (
    <Card className={cn(
      'transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20',
      popular ? 'border-2 border-accent shadow-lg shadow-accent/10 lg:scale-105' : 'border-border'
    )}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
          Most Popular
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        <CardDescription>
          <span className="text-5xl font-bold text-white">${price}</span>
          /month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-muted-foreground">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="lg" variant={popular ? 'default' : 'secondary'}>
          <Link href="/contact">{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
