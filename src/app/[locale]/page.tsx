import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { PricingTeaser } from '@/components/home/pricing-teaser';
import { DarkWebScanForm } from '@/components/home/dark-web-scan-form';
import { TestimonialsCarousel } from '@/components/home/testimonials-carousel';
import { Separator } from '@/components/ui/separator';
import { PartnerBanner } from '@/components/home/partner-banner';
import { getTranslator } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: Props): Promise<Metadata> {
  const t = await getTranslator(locale, 'HomePage');
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
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
