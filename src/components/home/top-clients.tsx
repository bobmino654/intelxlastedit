'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const clients = [
  { name: 'Etisalat', logoUrl: '/assets/etisalat.png' },
  { name: 'Evergreen', logoUrl: '/assets/evergreen.png' },
  { name: 'Orange', logoUrl: '/assets/orange.png' },
  { name: 'VFSGlobal', logoUrl: '/assets/vfsglobal.png' },
  { name: 'Vodafone', logoUrl: '/assets/vodafone.png' },
  { name: 'Coca-Cola', logoUrl: '/assets/cocacola.png' },
  { name: 'Ghibli', logoUrl: '/assets/ghibli.png' },
  { name: 'HSBC', logoUrl: '/assets/hsbc.png' },
  { name: 'NBK', logoUrl: '/assets/nbk.png' },
  { name: 'XDEGEMAC', logoUrl: '/assets/xdegemac.png' },
];

export function TopClients() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by Leading Organizations Worldwide
        </h2>
        <div className="mt-12 relative overflow-hidden">
          <div className="animate-scroll-infinite flex w-max gap-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex-shrink-0"
              >
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  width={140}
                  height={60}
                  className="h-14 w-auto object-contain transition-all duration-300 filter grayscale group-hover:filter-none group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>
        <div className="mt-16">
          <Button size="lg" asChild variant="outline">
            <Link href="/contact">Join Our Clients</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
