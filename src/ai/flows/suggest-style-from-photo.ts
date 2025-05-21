'use server';

/**
 * @fileOverview An AI agent that suggests hairstyles from the gallery based on a user's uploaded photo.
 *
 * - suggestStyleFromPhoto - A function that handles the hairstyle suggestion process.
 * - SuggestStyleFromPhotoInput - The input type for the suggestStyleFromPhoto function.
 * - SuggestStyleFromPhotoOutput - The return type for the suggestStyleFromPhoto function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestStyleFromPhotoInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's face, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  galleryImageUrls: z
    .array(z.string())
    .describe('An array of URLs pointing to hairstyle images in the gallery.'),
});
export type SuggestStyleFromPhotoInput = z.infer<typeof SuggestStyleFromPhotoInputSchema>;

const SuggestStyleFromPhotoOutputSchema = z.object({
  suggestedStyles: z
    .array(z.string())
    .describe('An array of URLs of suggested hairstyles from the gallery.'),
});
export type SuggestStyleFromPhotoOutput = z.infer<typeof SuggestStyleFromPhotoOutputSchema>;

export async function suggestStyleFromPhoto(
  input: SuggestStyleFromPhotoInput
): Promise<SuggestStyleFromPhotoOutput> {
  return suggestStyleFromPhotoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestStyleFromPhotoPrompt',
  input: {schema: SuggestStyleFromPhotoInputSchema},
  output: {schema: SuggestStyleFromPhotoOutputSchema},
  prompt: `You are a hairstyle expert. Given a photo of a user and a list of hairstyle images from a gallery, you will suggest hairstyles from the gallery that would suit the user's face.

  User Photo: {{media url=photoDataUri}}

  Gallery Images: {{#each galleryImageUrls}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Based on the user's photo, suggest 3 hairstyles from the gallery that would suit them best. Return the URLs of the suggested hairstyles.
  Make sure to only suggest styles that are present in the galleryImageUrls. Do not make up URLs.
  Return the suggested styles as a JSON array of strings.`,
});

const suggestStyleFromPhotoFlow = ai.defineFlow(
  {
    name: 'suggestStyleFromPhotoFlow',
    inputSchema: SuggestStyleFromPhotoInputSchema,
    outputSchema: SuggestStyleFromPhotoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
