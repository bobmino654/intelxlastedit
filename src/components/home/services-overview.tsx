
import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LinkComponent as Link } from '@/components/LinkComponent';

export function ServicesOverview() {
  return (
    <section className="container text-center">
      <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
        Comprehensive Cybersecurity Solutions
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        We offer a full suite of services to protect your organization from every angle.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="group transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline group-hover:text-accent">{service.title}</CardTitle>
              <CardDescription className="mt-2 h-20">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <Button asChild size="lg" variant="outline">
          <Link href="/services">
            Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
