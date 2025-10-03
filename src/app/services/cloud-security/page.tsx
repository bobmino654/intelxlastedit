import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Shield, Server, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Cloud Security Services',
  description: 'Safeguard your infrastructure, applications, and data across AWS, Azure, and Google Cloud with our comprehensive cloud security services.',
};

const servicePillars = [
  { icon: FileText, title: 'Compliance Assurance', description: 'Maintain alignment with frameworks such as ISO 27001, NIST, and GDPR.' },
  { icon: Server, title: 'Configuration Hardening', description: 'Prevent misconfigurations that expose critical data and systems.' },
  { icon: Users, title: 'Identity & Access Controls', description: 'Enforce least-privilege access and safeguard authentication.' },
  { icon: Shield, title: 'Threat Monitoring & Response', description: 'Detect and respond to suspicious activity in real time.' },
];

export default function CloudSecurityPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Cloud Security
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          As organizations shift critical workloads and sensitive data into the cloud, ensuring robust security across multi-cloud environments has never been more essential. Our services safeguard your infrastructure, applications, and data across AWS, Microsoft Azure, and Google Cloud (GCP).
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Cloud Security Services
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
        <div className="grid grid-cols-1 gap-12">
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    End-to-End Cloud Protection
                </h3>
                <p className="mt-4 text-muted-foreground">
                  We go beyond basic configurations by providing end-to-end visibility, proactive threat detection, and compliance-driven controls. Our team ensures that identity and access management (IAM), encryption, and network segmentation are properly implemented to minimize risk. Through continuous monitoring, misconfiguration detection, and automated policy enforcement, we help eliminate common vulnerabilities that attackers often exploit in cloud environments.
                </p>
            </div>
        </div>
      </section>

      <section className="mt-10 text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Secure Your Cloud with Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Leverage the power and scalability of the cloud while knowing your digital assets are protected, compliant, and resilient.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
