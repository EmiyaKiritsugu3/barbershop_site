"use client";

import type { GalleryImage } from '@/lib/types';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryImageItemProps {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
}

export function GalleryImageItem({ image, onClick, className }: GalleryImageItemProps) {
  return (
    <div
      className={cn("relative aspect-square group overflow-hidden rounded-lg shadow-md cursor-pointer", className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        className="transform group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        data-ai-hint={image.dataAiHint || "barbershop work"}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-center p-2 bg-black/50 rounded text-sm font-semibold">{image.alt}</p>
      </div>
    </div>
  );
}
