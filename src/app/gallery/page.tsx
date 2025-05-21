"use client";

import { useState } from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { GalleryImageItem } from '@/components/common/GalleryImageItem';
import { Lightbox } from '@/components/common/Lightbox';
import { GALLERY_IMAGES_DATA, SITE_NAME } from '@/lib/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GalleryImage as GalleryImageType } from '@/lib/types';
// Note: Next.js metadata must be exported from server components or page.tsx if it's a server component.
// Since this page uses client hooks, we'd set metadata in a parent layout or convert parts to server components.
// For simplicity in this static context, this is a client component.
// export const metadata: Metadata = {
// title: `Galeria - ${SITE_NAME}`,
// description: `Veja o portfólio de cortes, barbas e o ambiente da ${SITE_NAME}.`,
// };

const allCategories = ['Todos', ...new Set(GALLERY_IMAGES_DATA.map(img => img.category).filter(Boolean) as string[])];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'Todos' 
    ? GALLERY_IMAGES_DATA 
    : GALLERY_IMAGES_DATA.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  
  // Add a useEffect to set document title if not using Next.js metadata export
  // useEffect(() => {
  //   document.title = `Galeria - ${SITE_NAME}`;
  // }, []);


  return (
    <>
      <SectionWrapper className="bg-secondary text-secondary-foreground pt-20 md:pt-28">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary-foreground">Nossa Galeria</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Explore nosso trabalho, o ambiente da barbearia e a satisfação dos nossos clientes.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:w-auto lg:mx-auto">
            {allCategories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImageItem 
                key={image.id} 
                image={image} 
                onClick={() => openLightbox(index)} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">Nenhuma imagem encontrada para esta categoria.</p>
        )}
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
