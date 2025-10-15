
import { BitdefenderLogo } from '../logos/bitdefender';
import { AcronisLogo } from '../logos/acronis';
import { ElasticLogo } from '../logos/elastic';
import { LevelBlueLogo } from '../logos/levelblue';
import Image from 'next/image';
import { AwsLogo } from '../logos/aws';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SophosLogo } from '../logos/sophos';

const partners = [
  { name: 'Bitdefender', logo: BitdefenderLogo },
  { name: 'Acronis', logo: AcronisLogo },
  { name: 'Elastic', logo: ElasticLogo },
  { name: 'LevelBlue', logo: LevelBlueLogo },
  { name: 'AWS', logo: AwsLogo },
  { name: 'Sophos', logo: SophosLogo },
];

export function PartnerBanner() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Trusted Partners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          We collaborate with global technology leaders to deliver best-in-class solutions.
        </p>
        <div className="relative mt-12 w-full overflow-hidden">
          <div className="animate-scroll-infinite flex w-max items-center gap-16">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex-shrink-0"
              >
                <partner.logo className="h-16 w-auto object-contain transition-all duration-300 filter grayscale group-hover:filter-none group-hover:scale-110" />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
