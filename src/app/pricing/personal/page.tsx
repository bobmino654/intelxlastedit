
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Check, Shield, HeartHandshake, Lock, Users, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Personal & Family Cybersecurity Protection',
  description: 'Flexible and affordable security solutions for your home, family, and digital life. Protect your Wi-Fi, devices, and personal data.',
};

const services = [
  { name: 'Penetration Testing (Home Wi-Fi & Devices)', oneTime: true, monthly: false, yearly: false, lifetime: false },
  { name: 'Threat Intelligence (Dark Web Scan)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Incident Response (Hacked Accounts Recovery)', oneTime: true, monthly: false, yearly: false, lifetime: false },
  { name: 'Managed Protection (Devices, VPN, AV)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Digital Safety Coaching / vCISO Lite', oneTime: false, monthly: true, yearly: true, lifetime: true },
  { name: 'Cloud Storage Security (Google/Apple/Microsoft)', oneTime: true, monthly: false, yearly: false, lifetime: true },
  { name: 'Family Awareness Training', oneTime: true, monthly: false, yearly: true, lifetime: false },
  { name: 'Identity Theft Protection', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Backup Setup (per family)', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Privacy & Safety Consultation', oneTime: true, monthly: false, yearly: false, lifetime: true },
  { name: 'AI Scam & Deepfake Protection', oneTime: true, monthly: true, yearly: true, lifetime: true },
  { name: 'Social Media Protection (per account)', oneTime: true, monthly: true, yearly: true, lifetime: true },
];

const trustPoints = [
    { text: 'Secure your Wi-Fi, smart TVs, cameras, and laptops against cyber intruders.' },
    { text: 'Dark web monitoring ensures your personal information doesn’t fall into the wrong hands.' },
    { text: 'Parental controls, safe browsing, and monitoring tools protect children from cyberbullying and harmful content.' },
    { text: 'Choose a one-time investment for lasting peace of mind.' },
    { text: 'From hacked social media recovery to device cleanups, we resolve urgent issues without forcing long contracts.' },
];

const whyChooseUsPoints = [
    { icon: Lock, text: 'We protect what matters most – your family, your privacy, and your digital life.' },
    { icon: Users, text: 'Family-focused solutions – designed to safeguard every member of your household.' },
    { icon: HeartHandshake, text: 'Flexible and affordable – one-time services, monthly subscriptions, or lifetime packages.' },
    { icon: Shield, text: 'Proactive protection – we track threats like stolen credentials and online scams before they cause damage.' },
    { icon: Zap, text: 'Fast, friendly support – expert guidance without technical jargon.' },
];

export default function PersonalPricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Personal & Family Cybersecurity Protection
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Protecting your loved ones and digital lifestyle has never been more important. We offer flexible security solutions designed for households of every size, starting from just $79.
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
                    Why Families Trust IntelX360
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
                    Why Choose Us?
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
            <CardTitle className="font-headline text-2xl text-accent">Ready to Secure Your Family?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Get a personalized quote or ask our experts which plan is right for you. Secure your digital life today.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
