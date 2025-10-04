
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Shield, Server, Users, BarChart, FileCode, Skull } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Enterprise & Corporate Cybersecurity Services',
  description: 'Advanced cybersecurity solutions for enterprises, including red teaming, global threat intelligence, and board-level advisory.',
};

const services = [
  { name: 'Penetration Testing & Red Teaming', oneTime: true, monthly: false, yearly: true, lifetime: true },
  { name: 'Threat Intelligence (APT, Sector-Specific)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Incident Response & Forensics', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'MSSP (Global SOC-as-a-Service)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'vCISO (Board-Level Advisory)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Cloud & Infrastructure Security (Hybrid/Multi-Cloud)', oneTime: true, monthly: false, yearly: true, lifetime: true },
  { name: 'Enterprise Awareness & Training', oneTime: true, monthly: true, yearly: true, lifetime: false },
  { name: 'Executive Identity Protection', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Business Continuity & Disaster Recovery', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Regulatory Compliance (HIPAA/SOX/NIST)', oneTime: true, monthly: false, yearly: true, lifetime: false },
  { name: 'AI & Emerging Tech Security', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Digital Risk & Brand Protection', oneTime: true, monthly: true, yearly: true, lifetime: true },
];

const trustPoints = [
    { text: 'Simulated adversary attacks expose weaknesses before threat actors can exploit them.' },
    { text: 'Access tailored insights into nation-state campaigns, ransomware operations, and industry-specific threats.' },
    { text: 'Minimize downtime and uncover root causes with our digital forensics and IR team.' },
    { text: 'Around-the-clock monitoring and SOC-as-a-Service to ensure resilience without inflating headcount.' },
    { text: 'Our vCISO service aligns IT security with board-level risk, governance, and compliance strategy.' },
    { text: 'Secure hybrid and multi-cloud environments, ensuring performance, resilience, and regulatory compliance.' },
];

const whyChooseUsPoints = [
    { icon: Skull, text: 'We emulate advanced persistent threats (APTs) and ransomware gangs so your defenses are ready for the real thing.' },
    { icon: FileCode, text: 'Real-time monitoring of emerging attacks and adversaries worldwide, delivered with sector-specific context.' },
    { icon: Server, text: 'From penetration testing and SOC operations to incident response and compliance, we cover every layer.' },
    { icon: Users, text: 'Our vCISO advisors help align cybersecurity with corporate strategy and regulatory obligations.' },
    { icon: Shield, text: 'When an incident happens, our forensic and IR teams ensure fast containment and business continuity.' },
    { icon: BarChart, text: 'We secure complex infrastructures without disrupting business operations.' },
];

export default function EnterprisePricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Enterprise & Corporate Cybersecurity Services
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            IntelX360 delivers enterprise-grade cybersecurity services that combine advanced technical expertise, global intelligence, and board-level strategic guidance.
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
                  <TableHead className="text-center">Monthly/Hourly</TableHead>
                  <TableHead className="text-center">Yearly/Retainer</TableHead>
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
                    Why Enterprises Choose IntelX360
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
                    Why Corporations Partner With Us
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
            <CardTitle className="font-headline text-2xl text-accent">Secure Your Enterprise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Contact our enterprise security team to discuss your specific requirements and receive a confidential consultation.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
