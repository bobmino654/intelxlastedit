
import { HeroSection } from '@/components/home/hero-section';
import { TopClients } from '@/components/home/top-clients';
import { ServicesOverview } from '@/components/home/services-overview';
import { PricingTeaser } from '@/components/home/pricing-teaser';
import { DarkWebScanForm } from '@/components/home/dark-web-scan-form';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { Separator } from '@/components/ui/separator';
import { PartnerBanner } from '@/components/home/partner-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IntelX360 | Comprehensive Cybersecurity Solutions & Threat Intelligence',
  description: 'Protect your business with IntelX360 — offering world-class cybersecurity, penetration testing, threat intelligence, managed security (MSSP), and cloud protection. Stay ahead of cyber threats today.',
  keywords: 'cybersecurity services, managed security, penetration testing, threat intelligence, MSSP, cloud security, cyber defense company, IntelX360',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopClients />
      <ServicesOverview />
      <PartnerBanner />
      <PricingTeaser />
      <section className="bg-card py-20 sm:py-24">
        <div className="container">
          <DarkWebScanForm />
        </div>
      </section>
      <TestimonialsCarousel />
      <Separator className="container my-12" />
    </>
  );
}
