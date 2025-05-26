
# Thaynan Barber - Barbearia Premium

This is a Next.js project for "Thaynan Barber", a premium barbershop website. It's built with modern web technologies to provide a great user experience and showcase the barbershop's services, team, and atmosphere. The project also includes an AI-powered style suggestion feature.

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **AI Features**: [Genkit (Google AI - Gemini)](https://firebase.google.com/docs/genkit)
*   **Linting/Formatting**: ESLint, Prettier (assumed, standard for Next.js)

## Features

*   Responsive design for all devices.
*   Pages: Home, About Us, Services, Gallery, AI Style Suggestion, Contact.
*   Dynamic content driven by constants for easy updates (services, team members, testimonials).
*   Integration with Calendly for online bookings.
*   WhatsApp "Click to Chat" integration.
*   Interactive Google Maps for location.
*   AI-powered style suggestion using user-uploaded photos and Genkit.
*   Image gallery with lightbox functionality.

## Project Structure

*   `src/app`: Contains all the pages and layouts (Next.js App Router).
*   `src/components`: Reusable UI components, categorized into `ui`, `common`, `layout`, `sections`, `forms`.
*   `src/lib`: Utility functions (`utils.ts`), type definitions (`types.ts`), and site-wide constants (`constants.ts`).
*   `src/ai`: Genkit flows and configuration for AI features.
*   `public`: Static assets like images and fonts.

## Getting Started

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm, yarn, or pnpm

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of the project. This file is used for environment-specific variables, especially API keys.
    ```env
    # .env

    # Required for the AI Style Suggestion feature
    # Get your API key from Google Cloud Console (Vertex AI or Generative Language API)
    GOOGLE_API_KEY=YOUR_GOOGLE_AI_API_KEY
    ```
    **Note:** The `.env` file is listed in `.gitignore` and should NOT be committed to your repository.

### Running the Development Server

1.  **Start the Genkit development server (for AI features):**
    Open a terminal and run:
    ```bash
    npm run genkit:dev
    # or for auto-reloading on AI file changes:
    # npm run genkit:watch
    ```
    This will typically start the Genkit server on port `3400`.

2.  **Start the Next.js development server:**
    Open another terminal and run:
    ```bash
    npm run dev
    ```
    This will start the Next.js application, usually on `http://localhost:9002` (as per your `package.json`).

Open [http://localhost:9002](http://localhost:9002) (or your configured port) in your browser to see the application.

## Building for Production

```bash
npm run build
```
This command builds the application for production usage. The optimized static assets and build output will be in the `.next` folder.

## Deployment

This Next.js application is well-suited for deployment on platforms like:

*   **Vercel**: (Recommended) Vercel is made by the creators of Next.js and offers seamless deployment, automatic builds, global CDN, and serverless functions.
*   **Netlify**: Another popular choice for Jamstack applications.
*   Other platforms supporting Node.js applications.

Refer to the specific platform's documentation for deployment instructions. Generally, you'll connect your GitHub repository, and the platform will handle the build and deployment process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

(Add more specific contribution guidelines if needed)
```
</content>
  </change>
  <change>
    <file>/src/app/layout.tsx</file>
    <content><![CDATA[
import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME } from '@/lib/constants';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', // Serif for headings
  weight: ['400', '700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans', // Sans-serif for body
  weight: ['400', '600', '700'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thaynanbarber.com'; // Replace with actual URL or use env var

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Barbearia Premium`,
    template: `%s - ${SITE_NAME}`,
  },
  description: `Serviços de barbearia premium na ${SITE_NAME}. Cortes clássicos, barbas afiadas e estilo excepcional.`,
  openGraph: {
    title: `${SITE_NAME} - Barbearia Premium`,
    description: `Serviços de barbearia premium na ${SITE_NAME}. Cortes clássicos, barbas afiadas e estilo excepcional.`,
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Replace with your actual OG image URL or path to a static image in /public
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Barbearia Premium`,
      },
    ],
  },
  // twitter: { // Optional: Add Twitter specific card data if desired
  //   card: 'summary_large_image',
  //   title: `${SITE_NAME} - Barbearia Premium`,
  //   description: `Serviços de barbearia premium na ${SITE_NAME}.`,
  //   images: [`${siteUrl}/twitter-image.png`], // Replace with your actual Twitter image URL
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lora.variable} ${openSans.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
