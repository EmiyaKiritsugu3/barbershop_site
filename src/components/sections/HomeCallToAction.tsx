import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BOOKING_EXTERNAL_URL } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export function HomeCallToAction() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <div className="text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">Pronto para Transformar seu Estilo?</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Nossos especialistas estão prontos para oferecer a você uma experiência de barbearia incomparável.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-background hover:text-primary transition-colors duration-300 transform hover:scale-105 shadow-lg">
          <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
            Agende seu Horário Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
