import { BitdefenderLogo } from '../logos/bitdefender';
import { AcronisLogo } from '../logos/acronis';
import { ElasticLogo } from '../logos/elastic';
import { LevelBlueLogo } from '../logos/levelblue';
import { SophosLogo } from '../logos/sophos';

const partners = [
  { name: 'Bitdefender', logo: BitdefenderLogo },
  { name: 'Acronis', logo: AcronisLogo },
  { name: 'Elastic', logo: ElasticLogo },
  { name: 'LevelBlue', logo: LevelBlueLogo },
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
        <div className="mt-12 grid grid-cols-1 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <partner.logo className="h-16 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
