
import { SectionWrapper } from '@/components/common/SectionWrapper';
import Image from 'next/image';
import { SITE_NAME } from '@/lib/constants';

export function WelcomeSection() {
  return (
    <SectionWrapper className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Bem-vindo à {SITE_NAME}</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Na {SITE_NAME}, combinamos a arte tradicional da barbearia com um toque moderno e sofisticado. Nossa paixão é realçar a individualidade de cada cliente, oferecendo cortes precisos, barbas impecáveis e um atendimento que excede expectativas.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Entre em nosso espaço, relaxe e deixe que nossos barbeiros experientes cuidem do seu estilo. Aqui, cada detalhe é pensado para proporcionar uma experiência única e revigorante.
          </p>
           <Image
            src="https://placehold.co/500x300.png"
            alt="Detalhe da barbearia"
            width={500}
            height={300}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="barbershop detail"
          />
        </div>
        <div className="relative h-[400px] md:h-[500px] group overflow-hidden rounded-lg shadow-2xl">
           <Image
            src="https://placehold.co/600x750.png"
            alt="Barbeiro habilidoso em ação"
            fill
            className="rounded-lg object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint="skilled barber"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
