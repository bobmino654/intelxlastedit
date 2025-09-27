import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function TestimonialsCarousel() {
  return (
    <section className="container">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
        Trusted by Industry Leaders
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        See what our clients have to say about our partnership and impact.
      </p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto mt-12 w-full max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const image = placeholderImages.find(p => p.id === testimonial.imageId);
            return (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-lg italic text-white">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                            {image && (
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div className="ml-4 text-left">
                            <div className="font-bold">{testimonial.name}</div>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
