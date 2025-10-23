
import { HeroSection } from '@/components/home/hero-section';
import { TopClients } from '@/components/home/top-clients';
import { ServicesOverview } from '@/components/home/services-overview';
import { PricingTeaser } from '@/components/home/pricing-teaser';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { Separator } from '@/components/ui/separator';
import { PartnerBanner } from '@/components/home/partner-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IntelX360 | Comprehensive Cybersecurity Solutions & Threat Intelligence',
  description: 'Protect your business with IntelX360 — offering world-class cybersecurity, penetration testing, threat intelligence, managed security (MSSP), and cloud protection. Stay ahead of cyber threats today.',
  openGraph: {
    title: 'IntelX360 | Comprehensive Cybersecurity Solutions & Threat Intelligence',
    description: 'Protect your business with world-class cybersecurity, penetration testing, threat intelligence, managed security (MSSP), and cloud protection.',
    images: ['/og-image.png'],
  },
  twitter: {
    title: 'IntelX360 | Comprehensive Cybersecurity Solutions & Threat Intelligence',
    description: 'Protect your business with world-class cybersecurity, penetration testing, threat intelligence, managed security (MSSP), and cloud protection.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopClients />
      <ServicesOverview />
      <PartnerBanner />
      <PricingTeaser />
      <TestimonialsCarousel />
      <Separator className="container my-12" />
    </>
  );
}
