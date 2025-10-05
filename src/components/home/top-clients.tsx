'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MicrosoftLogo } from '@/components/logos/clients/microsoft';
import { IbmLogo } from '@/components/logos/clients/ibm';
import { CiscoLogo } from '@/components/logos/clients/cisco';
import { KasperskyLogo } from '@/components/logos/clients/kaspersky';
import { FortinetLogo } from '@/components/logos/clients/fortinet';
import { PaloAltoLogo } from '@/components/logos/clients/paloalto';

const clients = [
  { name: 'Microsoft', logo: MicrosoftLogo },
  { name: 'IBM', logo: IbmLogo },
  { name: 'Cisco', logo: CiscoLogo },
  { name: 'Kaspersky', logo: KasperskyLogo },
  { name: 'Fortinet', logo: FortinetLogo },
  { name: 'Palo Alto Networks', logo: PaloAltoLogo },
];

export function TopClients() {
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
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 w-64 items-center justify-center px-8"
              >
                <client.logo className="h-10 w-auto transform text-gray-400 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]" />
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
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
