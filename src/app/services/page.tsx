import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ServiceCard } from '@/components/common/ServiceCard';
import { SERVICES_DATA, SITE_NAME, GALLERY_IMAGES_DATA } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Serviços - ${SITE_NAME}`,
  description: `Descubra nossa gama completa de serviços de barbearia na ${SITE_NAME}, desde cortes clássicos a barbas modeladas.`,
};

export default function ServicesPage() {
  const inspirationImages = GALLERY_IMAGES_DATA.filter(img => img.category === 'Cortes' || img.category === 'Barbas').slice(0, 3);

  return (
    <>
      <SectionWrapper className="bg-secondary text-secondary-foreground pt-20 md:pt-28">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary-foreground">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Oferecemos uma gama completa de serviços para cuidar do seu visual com maestria e produtos de alta qualidade.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-primary">Pacotes Especiais</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Aproveite nossos combos e pacotes para uma experiência completa de cuidado e estilo.
          </p>
        </div>
        {/* Placeholder for package cards - example: */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-2">Combo Executivo</h3>
                <p className="text-muted-foreground mb-3">Corte Masculino Clássico + Barba Modelada</p>
                <p className="text-3xl font-bold text-accent mb-4">R$ 80</p>
                <Button asChild className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                    <Link href="/contact">Agendar Pacote</Link>
                </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-2">Dia do Noivo</h3>
                <p className="text-muted-foreground mb-3">Consulte nossos pacotes especiais para o grande dia.</p>
                <p className="text-xl font-bold text-accent mb-4">Consulte</p>
                 <Button asChild className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">
                    <Link href="/contact">Saber Mais</Link>
                </Button>
            </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-primary">Galeria de Inspiração</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Veja alguns dos estilos que criamos e inspire-se para o seu próximo visual.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {inspirationImages.map((image) => (
            <div key={image.id} className="relative h-72 w-full group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.dataAiHint || "hair style"}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold font-serif">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            <Link href="/gallery">
              Ver Galeria Completa <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
