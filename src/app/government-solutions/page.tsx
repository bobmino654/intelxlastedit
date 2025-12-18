
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LinkComponent as Link } from '@/components/LinkComponent';
import { Shield, Eye, Users } from 'lucide-react';
import { ParticleCanvas } from '@/components/home/particle-canvas';

export const metadata: Metadata = {
  title: 'Government Solutions | IntelX360 Strategic Intelligence',
  description: 'IntelX360 delivers mission-ready intelligence software systems for digital surveillance, behavioral analysis, and early threat detection to governmental and security entities.',
  keywords: 'government intelligence, strategic intelligence, digital surveillance, early warning system, national security, behavioral analysis',
  openGraph: {
    title: 'Government Solutions | IntelX360 Strategic Intelligence',
    description: 'Mission-ready intelligence software for governmental, security, and strategic decision-making environments.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Solutions | IntelX360 Strategic Intelligence',
    description: 'Mission-ready intelligence software for governmental, security, and strategic decision-making environments.',
    images: ['/og-image.png'],
  },
};

const capabilities = [
    {
        title: 'AnubisX',
        subtitle: 'Digital Identity & Behavioral Intelligence Platform',
        description: 'AnubisX is a strategic intelligence platform designed to uncover hidden digital identities, analyze behavioral patterns, and detect coordinated influence activities across public digital environments. The system supports investigative workflows and intelligence assessments by transforming fragmented digital signals into structured, actionable insights.',
        icon: Users
    },
    {
        title: 'Anubis ARGUS',
        subtitle: 'Strategic Digital Surveillance & Early Warning Intelligence System',
        description: 'Anubis ARGUS is a mission-oriented early warning system focused on detecting rapidly emerging visual media threats across public digital platforms. The system provides real-time situational awareness by identifying abnormal content propagation patterns and delivering early alerts before widespread digital impact occurs.',
        icon: Eye
    }
];

export default function GovernmentSolutionsPage() {
  return (
    <>
      <section className="relative h-[calc(70vh-4rem)] min-h-[450px] w-full">
        <ParticleCanvas />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Government Solutions for Digital Intelligence & Early Warning
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
               IntelX360 delivers mission-ready intelligence software systems designed for governmental, security, and strategic decision-making environments.
            </p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Strategic Capabilities
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
                IntelX360 specializes in the development of advanced intelligence software systems that support digital surveillance, behavioral analysis, and early threat detection. Our solutions are designed to operate as decision-support platforms for governmental and security entities, enabling proactive response, situational awareness, and strategic foresight.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
                We focus on building sovereign-capable systems that can operate locally, independently, and securely, while addressing complex digital environments and large-scale open-source data ecosystems.
            </p>
        </div>
      </section>

      <section className="bg-card">
        <div className="container">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Intelligence Systems
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {capabilities.map((capability) => (
                    <Card key={capability.title} className="bg-background/50 border border-border/50">
                        <CardHeader>
                             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <capability.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-2xl text-accent">{capability.title}</CardTitle>
                            <p className="pt-2 text-sm font-semibold text-muted-foreground">{capability.subtitle}</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{capability.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="container text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Confidential Engagements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">For confidential briefings, government-grade demonstrations, or strategic discussions, please contact IntelX360 through official communication channels.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Request a Confidential Briefing</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
