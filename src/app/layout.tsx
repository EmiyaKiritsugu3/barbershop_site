import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, OG_IMAGE_URL } from '@/lib/constants'; // Import OG_IMAGE_URL

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
        url: `${siteUrl}${OG_IMAGE_URL}`, // Usa a constante OG_IMAGE_URL
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
