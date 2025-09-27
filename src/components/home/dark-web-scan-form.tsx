'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const formSchema = z.object({
  query: z.string().min(1, 'Domain or email is required.'),
});

type ScanResult = {
  status: 'clean' | 'breached';
  breaches: number;
} | null;

export function DarkWebScanForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { query: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    // Simulate API call to Firestore/backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate result
    const isBreached = Math.random() > 0.5;
    if (isBreached) {
      setResult({ status: 'breached', breaches: Math.floor(Math.random() * 5) + 1 });
    } else {
      setResult({ status: 'clean', breaches: 0 });
    }

    toast({
      title: 'Scan Request Submitted',
      description: `Simulating scan for: ${values.query}`,
    });
    setIsLoading(false);
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
        Get a Free Dark Web Scan
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Enter your email or domain to see if your credentials have been exposed in known data breaches.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Enter your email or domain" {...field} className="text-center sm:text-left h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto h-12">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Search className="mr-2 h-4 w-4" />
            )}
            Scan Now
          </Button>
        </form>
      </Form>
      {result && (
        <div className="mt-8">
            {result.status === 'breached' ? (
                 <Alert variant="destructive">
                    <AlertTitle className="font-headline">Potential Exposure Found!</AlertTitle>
                    <AlertDescription>
                        Our scan found your information in {result.breaches} known breach(es). We recommend taking immediate action to secure your accounts.
                    </AlertDescription>
                </Alert>
            ) : (
                <Alert variant="default" className="border-green-500/50 text-green-500">
                    <AlertTitle className="font-headline text-green-400">Looking Good!</AlertTitle>
                    <AlertDescription className="text-green-500/80">
                        Our scan did not find your information in any of the known data breaches we checked against.
                    </AlertDescription>
                </Alert>
            )}
        </div>
      )}
    </div>
  );
}
