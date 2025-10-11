
import { Button } from '@/components/ui/button';
import { ParticleCanvas } from './particle-canvas';
import { Typewriter } from './typewriter';
import { LinkComponent as Link } from '@/components/LinkComponent';

export function HeroSection() {
  const taglines = [
    'Protecting Your Digital Future Today.',
    'IntelX360: Intelligence that Protects.',
    'Stay Ahead of Threats.',
  ];

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full">
      <ParticleCanvas />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <Typewriter texts={taglines} />
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We provide cutting-edge cybersecurity solutions to safeguard your digital assets. From threat intelligence to incident response, we are your trusted partner in digital risk protection.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Get Protected</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/resources#free-tools">Request Free Scan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
