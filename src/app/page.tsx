import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { PricingTeaser } from '@/components/home/pricing-teaser';
import { DarkWebScanForm } from '@/components/home/dark-web-scan-form';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { Separator } from '@/components/ui/separator';
import { PartnerBanner } from '@/components/home/partner-banner';
import type { Metadata } from 'next';
import { TopClients } from '@/components/home/top-clients';

export const metadata: Metadata = {
  title: 'IntelX360 | Cybersecurity, Threat Intelligence & Managed Security',
  description: 'IntelX360 helps organizations stay ahead of cyber threats with penetration testing, SOC-as-a-Service, incident response, threat intelligence, and vCISO services. Trusted cybersecurity partner for SMBs and enterprises.'
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
