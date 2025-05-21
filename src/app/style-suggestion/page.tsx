import { SectionWrapper } from '@/components/common/SectionWrapper';
import { StyleSuggestionForm } from '@/components/forms/StyleSuggestionForm';
import { SITE_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sugestão de Estilo IA - ${SITE_NAME}`,
  description: `Envie sua foto e deixe nossa Inteligência Artificial sugerir os melhores estilos de cabelo e barba da nossa galeria para você na ${SITE_NAME}.`,
};

export default function StyleSuggestionPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary text-secondary-foreground pt-20 md:pt-28">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary-foreground">Sugestão de Estilo com IA</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Não tem certeza de qual estilo combina com você? Envie uma foto e nossa IA te ajudará a encontrar a inspiração perfeita em nossa galeria!
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <StyleSuggestionForm />
      </SectionWrapper>
    </>
  );
}
