
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BOOKING_EXTERNAL_URL, SITE_NAME } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/polished-blade-hero.jpg" 
        alt={`Ambiente da barbearia ${SITE_NAME}`}
        quality={90}
        fill 
        className="z-0 object-cover" 
        data-ai-hint="barbershop atmosphere"
        priority 
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay */}
      
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 shadow-text animate-fade-in-up">
          {SITE_NAME}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200 shadow-text animate-fade-in-up animation-delay-300">
          Onde a tradição encontra a modernidade. Cortes impecáveis, barbas perfeitas e um estilo que define você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
              Agende seu Horário <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <Link href="/services">
              Nossos Serviços
            </Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
