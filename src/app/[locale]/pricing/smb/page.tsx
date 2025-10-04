import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Shield, TrendingUp, Users, Scale } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Small Business Cybersecurity Packages',
  description: 'Enterprise-grade security solutions for small and medium-sized businesses. Protect your web apps, cloud infrastructure, and employees.',
};

const services = [
  { name: 'Penetration Testing (Web/App)', oneTime: true, monthly: false, yearly: false, lifetime: false },
  { name: 'Threat Intelligence (SMB Sector)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Incident Response (Per Breach / Retainer)', oneTime: true, monthly: false, yearly: true, lifetime: false },
  { name: 'MSSP (SOC-as-a-Service, 24/7)', oneTime: false, monthly: true, yearly: true, lifetime: true },
  { name: 'vCISO (Fractional CISO)', oneTime: false, monthly: true, yearly: true, lifetime: true },
  { name: 'Cloud Security Audit', oneTime: true, monthly: false, yearly: true, lifetime: false },
  { name: 'Staff Awareness Training (20 users)', oneTime: true, monthly: true, yearly: true, lifetime: false },
  { name: 'Identity Monitoring (per 20 employees)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Backup & Continuity Setup', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Compliance Audit (ISO/GDPR/PCI)', oneTime: true, monthly: false, yearly: true, lifetime: false },
  { name: 'AI Security Solutions', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Digital Brand & Social Media Protection', oneTime: true, monthly: true, yearly: true, lifetime: true },
];

const trustPoints = [
    { text: 'Gain access to the same technology and expertise trusted by large corporations, without the prohibitive costs.' },
    { text: 'Meet ISO, GDPR, or PCI-DSS requirements with professional audits and compliance-ready reports.' },
    { text: 'Our awareness training helps employees spot phishing, ransomware, and insider threats — the leading cause of breaches.' },
    { text: 'Safeguard your websites, mobile apps, cloud accounts, and business email against attackers.' },
    { text: 'Choose from one-time audits, monthly protection, or fully managed 24/7 coverage.' },
    { text: 'Start small, then expand security services as your business and regulatory requirements grow.' },
];

const whyChooseUsPoints = [
    { icon: Shield, text: 'Big-company protection, SMB pricing – we make advanced cybersecurity accessible.' },
    { icon: TrendingUp, text: 'Win client trust – show customers and partners that you take security seriously.' },
    { icon: Users, text: 'Reduce staff-related risks – human error is a top cause of incidents. Our training helps.' },
    { icon: Scale, text: 'Adaptable packages – from one-time fixes to managed SOC services, we adjust to your needs.' },
];

export default function SmbPricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Small Business Cybersecurity Packages
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Cybercriminals target small businesses. We bring enterprise-grade protection to the SMB sector with flexible packages that fit your budget and growth stage.
        </p>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead className="text-center">One-Time</TableHead>
                  <TableHead className="text-center">Monthly</TableHead>
                  <TableHead className="text-center">Yearly</TableHead>
                  <TableHead className="text-center">Lifetime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-center">{service.oneTime ? <Check className="mx-auto h-5 w-5 text-accent" /> : '–'}</TableCell>
                    <TableCell className="text-center">{service.monthly ? <Check className="mx-auto h-5 w-5 text-accent" /> : '–'}</TableCell>
                    <TableCell className="text-center">{service.yearly ? <Check className="mx-auto h-5 w-5 text-accent" /> : '–'}</TableCell>
                    <TableCell className="text-center">{service.lifetime ? <Check className="mx-auto h-5 w-5 text-accent" /> : '–'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-card p-8">
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    Why Businesses Choose IntelX360
                </h3>
                <ul className="mt-6 space-y-4">
                    {trustPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                            <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-lg bg-card p-8">
                 <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    Why Partner With Us?
                </h3>
                 <ul className="mt-6 space-y-4">
                    {whyChooseUsPoints.map((point, i) => (
                        <li key={i} className="flex items-start">
                             <point.icon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{point.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      <section className="text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Ready to Secure Your Business?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get a personalized quote or ask our experts which plan is right for you. Secure your business today.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
