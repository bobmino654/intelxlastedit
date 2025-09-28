'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactDetails } from '@/lib/data';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  organization: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate server action to save to Firestore
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    setIsLoading(false);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    form.reset();
  }
  
  const mapImage = placeholderImages.find(p => p.id === 'map');

  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Have a question or need a custom quote? Our team is ready to help you secure your organization.
        </p>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold">Contact Us</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company, Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How can we help you?" {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-8">
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
