
'use client';

import { Button } from '@/components/ui/button';
import { ParticleCanvas } from './particle-canvas';
import { Typewriter } from './typewriter';
import { LinkComponent as Link } from '@/components/LinkComponent';
import { useEffect, useState } from 'react';
import { AnubisXLogo } from '../logos/anubis-x';
import { AnubisArgusLogo } from '../logos/anubis-argus';

export function HeroSection() {
  const taglines = [
    'Protecting Your Digital Future Today.',
    'IntelX360: Intelligence that Protects.',
    'Stay Ahead of Threats.',
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full">
      <ParticleCanvas />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {isMounted ? <Typewriter texts={taglines} /> : <span className="animate-ping">|</span>}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          We provide cutting-edge cybersecurity and intelligence solutions for government and enterprise sectors.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Get Protected</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/resources#free-tools">Request Free Scan</Link>
          </Button>
        </div>
        <div className="mt-16 w-full max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Our Strategic Intelligence Platforms
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <AnubisXLogo className="h-12 w-auto text-gray-400 hover:text-white transition-colors" />
            <AnubisArgusLogo className="h-12 w-auto text-gray-400 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
