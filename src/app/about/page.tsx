import Image from 'next/image';
import { Metadata } from 'next';
import { teamMembers } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'About IntelX360 | 20+ Years of Cybersecurity Expertise',
  description: 'IntelX360 delivers cutting-edge threat intelligence and managed cybersecurity services, led by 20+ years of global cyber defense expertise.',
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          About IntelX360
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          We are a team of passionate cybersecurity experts dedicated to providing cutting-edge solutions to protect your digital assets.
        </p>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-accent">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Protecting organizations worldwide by delivering actionable cyber intelligence and security solutions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-accent">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the most trusted global partner for digital risk protection and threat intelligence.
            </p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline text-accent">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="grid grid-cols-2 gap-4 text-muted-foreground">
                    <li><strong>Trust:</strong> Building lasting relationships on integrity.</li>
                    <li><strong>Innovation:</strong> Constantly evolving to defeat new threats.</li>
                    <li><strong>Excellence:</strong> Delivering superior quality in all we do.</li>
                    <li><strong>Client Success:</strong> Your security is our ultimate goal.</li>
                </ul>
            </CardContent>
        </Card>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Meet Our Leadership
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const image = placeholderImages.find(p => p.id === member.imageId);
            return (
                <Card key={member.name} className="text-center">
                    <CardContent className="flex flex-col items-center p-6">
                    {image && (
                         <Avatar className="h-32 w-32 border-4 border-accent">
                            <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    )}
                    <h3 className="mt-4 font-headline text-xl font-bold">{member.name}</h3>
                    <p className="text-accent">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
