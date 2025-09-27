import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { PricingTeaser } from '@/components/home/pricing-teaser';
import { DarkWebScanForm } from '@/components/home/dark-web-scan-form';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
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
