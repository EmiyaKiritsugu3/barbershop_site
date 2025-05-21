import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { ServicesHighlight } from '@/components/sections/ServicesHighlight';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { HomeCallToAction } from '@/components/sections/HomeCallToAction';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServicesHighlight />
      <TestimonialsSection />
      <HomeCallToAction />
    </>
  );
}
