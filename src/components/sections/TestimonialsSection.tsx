import { SectionWrapper } from '@/components/common/SectionWrapper';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { TESTIMONIALS_DATA } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold mb-4 text-primary">O Que Nossos Clientes Dizem</h2>
        <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
          A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionWrapper>
  );
}
