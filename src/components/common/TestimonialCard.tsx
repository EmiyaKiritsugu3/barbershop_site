import type { Testimonial } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 h-full flex flex-col">
      <CardContent className="flex flex-col items-center text-center flex-grow">
        {testimonial.avatarUrl && (
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={80}
            height={80}
            className="rounded-full mb-4 border-2 border-accent"
            data-ai-hint={testimonial.dataAiHint || "person avatar"}
          />
        )}
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
          ))}
        </div>
        <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
        <p className="font-semibold font-serif text-primary">{testimonial.name}</p>
      </CardContent>
    </Card>
  );
}
