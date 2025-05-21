import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ServiceCard } from '@/components/common/ServiceCard';
import { SERVICES_DATA } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesHighlight() {
  const highlightedServices = SERVICES_DATA.slice(0, 3); // Show first 3 services

  return (
    <SectionWrapper className="bg-secondary text-secondary-foreground">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4 text-primary-foreground">Nossos Serviços em Destaque</h2>
        <p className="text-lg max-w-2xl mx-auto text-primary-foreground/80">
          Descubra alguns dos nossos serviços mais procurados, criados para realçar seu estilo e confiança.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="/services">
            Ver Todos os Serviços <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
