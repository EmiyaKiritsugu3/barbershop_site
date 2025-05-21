import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TeamMemberCard } from '@/components/common/TeamMemberCard';
import { TEAM_MEMBERS_DATA, SITE_NAME } from '@/lib/constants';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sobre Nós - ${SITE_NAME}`,
  description: `Conheça a história, filosofia e a equipe de barbeiros especialistas da ${SITE_NAME}.`,
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary text-secondary-foreground pt-20 md:pt-28">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary-foreground">Sobre a {SITE_NAME}</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Mais que uma barbearia, um refúgio para o homem moderno que valoriza tradição, qualidade e um estilo impecável.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Nossa História</h2>
            <p className="text-muted-foreground mb-4">
              Fundada em [Ano de Fundação], a {SITE_NAME} nasceu do sonho de resgatar a autêntica experiência da barbearia clássica, adaptando-a às necessidades e ao estilo do homem contemporâneo. Começamos com uma cadeira e uma visão: oferecer não apenas cortes e barbas, mas um momento de cuidado e bem-estar.
            </p>
            <p className="text-muted-foreground">
              Ao longo dos anos, crescemos e evoluímos, mas nossa essência permanece a mesma. Cada navalhada, cada corte de tesoura, é executado com a precisão e a paixão que nos definem.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
            <Image
              src="https://placehold.co/600x400.png"
              alt={`Interior da barbearia ${SITE_NAME} antigamente`}
              layout="fill"
              objectFit="cover"
              data-ai-hint="vintage barbershop"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Barbeiro aplicando espuma de barbear"
              layout="fill"
              objectFit="cover"
              data-ai-hint="barber shaving foam"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Nossa Filosofia e Valores</h2>
            <p className="text-muted-foreground mb-4">
              Acreditamos que a barbearia é um ritual, um espaço de confiança e camaradagem. Nossos valores são:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Excelência:</strong> Buscamos a perfeição em cada serviço.</li>
              <li><strong>Tradição:</strong> Honramos as técnicas clássicas da barbearia.</li>
              <li><strong>Inovação:</strong> Estamos sempre atualizados com as últimas tendências.</li>
              <li><strong>Atendimento Personalizado:</strong> Cada cliente é único e merece atenção especial.</li>
              <li><strong>Ambiente Acolhedor:</strong> Queremos que você se sinta em casa.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-primary">Nossa Equipe</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Conheça os artesãos por trás da tesoura e da navalha, dedicados a transformar seu visual.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS_DATA.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
