
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
    url: 'https://your-thaynan-barber-url.com', // Replace with actual URL
    siteName: SITE_NAME,
    // images: [ // Add a good default image for sharing
    //   {
    //     url: 'https://your-thaynan-barber-url.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: SITE_NAME,
    //   },
    // ],
  },
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
