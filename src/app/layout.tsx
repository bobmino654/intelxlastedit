import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'IntelX Cybersecurity Solutions',
    template: '%s | IntelX Cybersecurity Solutions',
  },
  description: 'Protecting organizations worldwide by delivering actionable cyber intelligence and security solutions.',
  openGraph: {
    title: 'IntelX Cybersecurity Solutions',
    description: 'Protecting Your Digital Future Today.',
    url: 'https://intelx.com',
    siteName: 'IntelX Cybersecurity Solutions',
    images: [
      {
        url: '/og-image.png', // To be created
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelX Cybersecurity Solutions',
    description: 'Advanced threat intelligence and digital risk protection.',
    images: ['/og-image.png'], // To be created
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground')}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
