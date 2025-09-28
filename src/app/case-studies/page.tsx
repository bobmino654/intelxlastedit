import Image from 'next/image';
import { Metadata } from 'next';
import { caseStudies } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Read real-world examples of how IntelX360 helps organizations defend against cyber threats and reduce risk.',
};

export default function CaseStudiesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Customer Success Stories
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Discover how we partner with organizations across industries to solve their toughest security challenges and deliver measurable results.
        </p>
      </section>

      <section className="mt-20 space-y-12">
        {caseStudies.map((study, index) => {
          const image = placeholderImages.find(p => p.id === study.imageId);
          return (
            <Card key={index} className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">
              {image && (
                <div className="aspect-video relative lg:order-last">
                    <Image src={image.imageUrl} alt={study.title} fill className="object-cover" data-ai-hint={image.imageHint} />
                </div>
              )}
              <div className="p-8">
                <Badge variant="secondary">{study.clientIndustry}</Badge>
                <h2 className="mt-4 font-headline text-2xl font-bold">{study.title}</h2>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-accent">Challenge</h3>
                    <p className="mt-1 text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Solution</h3>
                    <p className="mt-1 text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Outcome</h3>
                    <p className="mt-1 text-muted-foreground">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
