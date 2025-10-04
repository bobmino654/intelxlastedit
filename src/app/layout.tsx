
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.intelx360.com'),
  title: {
    default: 'IntelX360 | Cybersecurity, Threat Intelligence & Managed Security',
    template: '%s | IntelX360',
  },
  description: 'IntelX360 helps organizations stay ahead of cyber threats with penetration testing, SOC-as-a-Service, incident response, threat intelligence, and vCISO services. Trusted cybersecurity partner for SMBs and enterprises.',
  keywords: 'cybersecurity services, threat intelligence, SOC as a Service, penetration testing, incident response, dark web monitoring, vCISO, compliance audits, digital risk protection, enterprise cybersecurity',
  openGraph: {
    title: 'IntelX360 | Cybersecurity, Threat Intelligence & Managed Security',
    description: 'Protecting Your Digital Future Today.',
    url: 'https://intelx360.com',
    siteName: 'IntelX360 Cybersecurity Solutions',
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
    title: 'IntelX360 | Cybersecurity, Threat Intelligence & Managed Security',
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
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHGJMMJ9');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JDP1B0H86Y"></Script>
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDP1B0H86Y');
          `}
        </Script>
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHGJMMJ9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
