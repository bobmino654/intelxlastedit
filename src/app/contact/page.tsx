import { contactDetails } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact IntelX360 | Cybersecurity Consultation & Support',
  description: 'Get in touch with IntelX360 for cybersecurity consulting, incident response, penetration testing, and managed security solutions. Serving clients worldwide with 24/7 support.',
  keywords: 'contact IntelX360, cybersecurity support, incident response contact, SOC services contact, threat intelligence consulting, cybersecurity company Egypt, global cybersecurity contact',
};

export default function ContactPage() {
  const mapImage = placeholderImages.find(p => p.id === 'map');

  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Our team is ready to help you secure your organization. Contact us through the details below.
        </p>
      </section>

      <section className="mt-20 flex justify-center">
        <div className="w-full max-w-lg space-y-8">
          <div>
            <h3 className="font-headline text-2xl font-bold">Our Office</h3>
            <div className="mt-4 space-y-3 text-muted-foreground">
              <p className="flex items-center"><MapPin className="mr-3 h-5 w-5 text-accent" /> {contactDetails.address}</p>
              <p className="flex items-center"><Phone className="mr-3 h-5 w-5 text-accent" /> {contactDetails.phone}</p>
              <p className="flex items-center"><Mail className="mr-3 h-5 w-5 text-accent" /> {contactDetails.email}</p>
            </div>
          </div>
          {mapImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <Image src={mapImage.imageUrl} alt="Map to IntelX360 office" fill className="object-cover" data-ai-hint={mapImage.imageHint} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
