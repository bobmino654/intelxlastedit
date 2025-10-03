
import { Metadata } from 'next';
import { allServices } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive suite of cybersecurity services, from penetration testing to managed security.',
};

const serviceLinks: Record<string, string> = {
    'Penetration Testing': '/services/penetration-testing',
    'Threat Intelligence': '/services/threat-intelligence',
    'Incident Response': '/services/incident-response',
    'Managed Security (MSSP)': '/services/managed-security',
    'Virtual CISO (vCISO)': '/services/virtual-ciso',
    'Cloud Security': '/services/cloud-security',
    'Attack Surface Management (ASM)': '/services/attack-surface-management',
    'Brand Protection': '/services/brand-protection',
};


export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          IntelX360 provides a full spectrum of cybersecurity services to identify, protect, detect, respond, and recover from threats.
        </p>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <Card key={service.title} className="group flex transform flex-col text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline group-hover:text-accent">{service.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                 <Button variant="link" asChild className="p-0 text-accent">
                    <Link href={serviceLinks[service.title] || '/contact'}>Learn More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
