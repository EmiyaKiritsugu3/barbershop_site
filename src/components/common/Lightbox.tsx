"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/lib/types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Visualizador de Imagem">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-20"
        aria-label="Fechar"
      >
        <X size={32} />
      </button>

      {images.length > 1 && (
         <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50 z-20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Anterior"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={32} />
        </button>
      )}
     
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center">
        {currentImage && (
           <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1600} 
            height={1200} 
            className="rounded-lg shadow-2xl object-contain"
            data-ai-hint={currentImage.dataAiHint || "gallery image"}
          />
        )}
      </div>

      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50 z-20 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Próxima"
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight size={32} />
        </button>
      )}
      {currentImage && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center text-sm bg-black/50 px-3 py-1 rounded">
          {currentImage.alt} ({currentIndex + 1} de {images.length})
        </p>
      )}
    </div>
  );
}
