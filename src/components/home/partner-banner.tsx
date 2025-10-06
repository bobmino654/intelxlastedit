import { BitdefenderLogo } from '../logos/bitdefender';
import { AcronisLogo } from '../logos/acronis';
import { ElasticLogo } from '../logos/elastic';
import { LevelBlueLogo } from '../logos/levelblue';
import Image from 'next/image';
import { AwsLogo } from '../logos/aws';

const partners = [
  { name: 'Bitdefender', logo: BitdefenderLogo },
  { name: 'Acronis', logo: AcronisLogo },
  { name: 'Elastic', logo: ElasticLogo },
  { name: 'LevelBlue', logo: LevelBlueLogo },
  { name: 'AWS', logo: AwsLogo },
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
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-16 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <partner.logo className="h-16 w-auto" />
            </div>
          ))}
          <div
              key="Sophos"
              className="flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-110"
            >
             <Image src="/assets/sophos.png" alt="Sophos Silver Partner" width={180} height={48} className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
