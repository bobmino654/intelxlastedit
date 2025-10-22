
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, TrendingUp, Clock, Zap, CheckCircle, Scale } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ParticleCanvas } from '@/components/home/particle-canvas';
import { LinkComponent as Link } from '@/components/LinkComponent';

export const metadata: Metadata = {
  title: 'Cybersecurity Outsourcing | IntelX360',
  description: 'Outsource your cybersecurity operations with IntelX360. Gain access to expert SOC monitoring, threat hunting, and compliance management — all at reduced cost and maximum efficiency.',
  keywords: 'cybersecurity outsourcing, managed security, SOC services, security operations outsourcing, cyber risk management, remote security monitoring',
  openGraph: {
    title: 'Cybersecurity Outsourcing | IntelX360',
    description: 'Gain 24/7 expert protection with our flexible and scalable security operations.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'Cybersecurity Outsourcing | IntelX360',
    description: 'Gain 24/7 expert protection with our flexible and scalable security operations.',
    images: ['/og-image.png'],
  },
};

const coreOfferings = [
    'Managed SOC Operations',
    'Incident Response & Digital Forensics',
    'Threat Intelligence Integration',
    'Vulnerability Management',
    'Compliance & Governance',
    'CISO-as-a-Service',
];

const benefits = [
    {
        icon: Scale,
        title: 'Cost-Efficient',
        description: 'Get enterprise-grade security expertise and technology at a fraction of the cost of an in-house team.'
    },
    {
        icon: Clock,
        title: 'Always-On Monitoring',
        description: 'Our 24/7/365 Security Operations Center ensures threats are detected and handled around the clock.'
    },
    {
        icon: TrendingUp,
        title: 'Enterprise-Grade Expertise',
        description: 'Access a team of certified analysts, threat hunters, and incident responders with deep industry knowledge.'
    },
    {
        icon: Zap,
        title: 'Real-Time Threat Response',
        description: 'Benefit from rapid containment and remediation, minimizing the impact of any potential security incident.'
    },
    {
        icon: CheckCircle,
        title: 'Compliance Assurance',
        description: 'Leverage our expertise to meet and maintain compliance with regulations like GDPR, HIPAA, and PCI-DSS.'
    }
];

export default function CybersecurityOutsourcingPage() {
  return (
    <>
      <section className="relative h-[calc(70vh-4rem)] min-h-[450px] w-full">
        <ParticleCanvas />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Cybersecurity Outsourcing
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
               Outsource your cybersecurity operations to IntelX360 and gain 24/7 expert protection. Your Trusted Security Team — Without the Overhead.
            </p>
            <div className="mt-10">
                <Button size="lg" asChild>
                    <Link href="/contact">Get Protected</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Why Outsource Your Cybersecurity?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
                In today's complex threat landscape, maintaining an effective in-house security team is challenging and expensive. Outsourcing to a trusted partner like IntelX360 allows you to reduce costs, access certified experts, ensure 24/7 coverage, achieve faster threat detection, and scale your security operations on demand.
            </p>
        </div>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-card p-8">
                <h3 className="font-headline text-2xl font-bold text-accent">Core Offerings</h3>
                <ul className="mt-6 grid grid-cols-1 gap-4 text-muted-foreground sm:grid-cols-2">
                    {coreOfferings.map((offering) => (
                        <li key={offering} className="flex items-start">
                            <ShieldCheck className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>{offering}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-lg bg-card p-8">
                <h3 className="font-headline text-2xl font-bold text-accent">Key Benefits</h3>
                 <div className="mt-6 grid grid-cols-1 gap-6">
                    {benefits.slice(0,3).map((benefit) => (
                        <div key={benefit.title} className="flex items-start">
                             <benefit.icon className="mr-4 h-6 w-6 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-semibold">{benefit.title}</h4>
                                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </section>

       <section className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-card/50 text-center">
                    <CardHeader>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <benefit.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="font-headline text-xl text-accent">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Outsource Your Cybersecurity?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Let IntelX360 become your dedicated security partner. Focus on your business while we handle the threats.
            </p>
            <div className="mt-8">
                <Button size="lg" asChild>
                    <Link href="/contact">Get Protected</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
