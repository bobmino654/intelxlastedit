
'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { countries } from '@/lib/countries';
import { allServices } from '@/lib/data';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  location: z.string().min(1, 'Please select a location.'),
  phone: z.string().min(1, 'Mobile phone number is required.'),
  message: z.string().optional(),
  service: z.string().min(1, 'Please select a service.'),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to the marketing terms.',
  }),
  company: z.string().optional(),
});

const assistanceOptions = [...allServices.map(service => service.title), 'Other'];

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      location: '',
      phone: '',
      message: '',
      service: '',
      consent: false,
      company: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      
      toast({
        title: 'Form Submitted Successfully!',
        description: 'Thank you for reaching out. We will get back to you shortly.',
      });
      form.reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-lg bg-card p-8 shadow-lg">
      <h3 className="font-headline text-2xl font-bold">Contact Form</h3>
      <p className="mt-2 text-muted-foreground">Fill out the form below to get in touch with us.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name*</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business/Company Email Address*</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile phone number*</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
           <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Location*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country.value} value={country.value}>{country.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What do you need assistance with?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {assistanceOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  <Textarea placeholder="Tell us about your project or inquiry..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs text-muted-foreground">
                    By submitting this form, you consent to us using your contact information for marketing purposes. You can unsubscribe at any time. For details, please review our Privacy Policy.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
