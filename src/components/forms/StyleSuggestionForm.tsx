"use client";

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, UploadCloud, Wand2, Image as ImageIcon } from 'lucide-react';
import { suggestStyleFromPhoto, type SuggestStyleFromPhotoInput } from '@/ai/flows/suggest-style-from-photo';
import { STYLE_SUGGESTION_GALLERY_URLS, GALLERY_IMAGES_DATA } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function StyleSuggestionForm() {
  const [uploadedPhotoUri, setUploadedPhotoUri] = useState<string | null>(null);
  const [suggestedStyles, setSuggestedStyles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type and size if necessary
      // For example:
      // if (!file.type.startsWith('image/')) {
      //   setError('Por favor, envie um arquivo de imagem (JPEG, PNG, etc.).');
      //   return;
      // }
      // if (file.size > 5 * 1024 * 1024) { // 5MB limit
      //  setError('O arquivo é muito grande. Máximo de 5MB.');
      //  return;
      // }

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setUploadedPhotoUri(loadEvent.target?.result as string);
        setFileName(file.name);
        setError(null); // Clear previous errors
      };
      reader.onerror = () => {
        setError("Falha ao ler o arquivo.");
        setUploadedPhotoUri(null);
        setFileName(null);
      }
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!uploadedPhotoUri) {
      setError('Por favor, envie uma foto primeiro.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestedStyles([]);

    try {
      const input: SuggestStyleFromPhotoInput = {
        photoDataUri: uploadedPhotoUri,
        galleryImageUrls: STYLE_SUGGESTION_GALLERY_URLS, // Using predefined gallery URLs
      };
      const result = await suggestStyleFromPhoto(input);
      if (result.suggestedStyles && result.suggestedStyles.length > 0) {
        setSuggestedStyles(result.suggestedStyles);
      } else {
        setError('Nenhuma sugestão encontrada. Tente outra foto ou verifique nossa galeria.');
      }
    } catch (err) {
      console.error("AI suggestion error:", err);
      setError('Ocorreu um erro ao sugerir estilos. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const getGalleryImageAlt = (src: string) => {
    const foundImage = GALLERY_IMAGES_DATA.find(img => img.src === src);
    return foundImage ? foundImage.alt : "Estilo sugerido";
  };


  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary flex items-center gap-2">
              <UploadCloud className="h-7 w-7 text-accent" />
              Envie sua Foto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="photo-upload" className="block text-sm font-medium text-muted-foreground mb-2">
                Escolha uma foto nítida do seu rosto para melhores resultados.
              </Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-border rounded-md hover:border-accent transition-colors">
                <div className="space-y-1 text-center">
                  {uploadedPhotoUri ? (
                    <div className="relative w-48 h-48 mx-auto mb-2">
                       <Image src={uploadedPhotoUri} alt="Foto enviada" fill className="rounded-md shadow-md object-cover" />
                    </div>
                  ) : (
                    <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground" />
                  )}
                  <div className="flex text-sm text-muted-foreground justify-center">
                    <Label
                      htmlFor="photo-upload"
                      className="relative cursor-pointer rounded-md font-medium text-accent hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring"
                    >
                      <span>{uploadedPhotoUri ? "Trocar foto" : "Carregar um arquivo"}</span>
                      <Input id="photo-upload" name="photo-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                    </Label>
                  </div>
                  {fileName && !uploadedPhotoUri && <p className="text-xs text-muted-foreground">Arquivo selecionado: {fileName}</p>}
                  {!uploadedPhotoUri && <p className="text-xs text-muted-foreground">PNG, JPG, GIF até 5MB</p>}
                </div>
              </div>
            </div>
            {fileName && uploadedPhotoUri && (
              <Alert variant="default" className="bg-secondary/30">
                <AlertDescription>
                  Arquivo carregado: <strong>{fileName}</strong>
                </AlertDescription>
              </Alert>
            )}
            <Button type="submit" disabled={isLoading || !uploadedPhotoUri} className="w-full text-lg py-3 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-5 w-5" />
              )}
              Sugerir Estilos
            </Button>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </form>

      {suggestedStyles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">Estilos Sugeridos para Você</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suggestedStyles.map((styleUrl, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-square w-full">
                  <Image src={styleUrl} alt={getGalleryImageAlt(styleUrl) || `Estilo sugerido ${index + 1}`} fill className="object-cover" data-ai-hint="hairstyle suggestion"/>
                </div>
                <CardContent className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">{getGalleryImageAlt(styleUrl) || `Sugestão ${index + 1}`}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
