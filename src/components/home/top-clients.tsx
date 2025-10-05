'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const clients = [
  { name: 'Microsoft', logoUrl: '/assets/microsoft.png' },
  { name: 'Palo Alto Networks', logoUrl: '/assets/paloalto.png' },
  { name: 'Fortinet', logoUrl: '/assets/fortinet.png' },
  { name: 'Cisco', logoUrl: '/assets/cisco.png' },
  { name: 'IBM', logoUrl: '/assets/ibm.png' },
  { name: 'Kaspersky', logoUrl: '/assets/kaspersky.png' },
];

export function TopClients() {
  // Repeat the clients array to ensure a smooth scrolling effect
  const repeatedClients = Array(Math.ceil(14 / clients.length)).fill(clients).flat();

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by Leading Organizations Worldwide
        </h2>
        <div
          className="relative mt-12 w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll">
            {repeatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 w-64 items-center justify-center px-8"
              >
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain text-gray-400 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Join Our Clients</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${50 * (clients.length / (repeatedClients.length / 2))}%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </section>
  );
}
