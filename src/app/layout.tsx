import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
  title: 'The Polished Blade Barbershop',
  description: 'Premium barber services for the modern gentleman. Classic cuts, sharp shaves, and exceptional style.',
  openGraph: {
    title: 'The Polished Blade Barbershop',
    description: 'Premium barber services for the modern gentleman. Classic cuts, sharp shaves, and exceptional style.',
    type: 'website',
    locale: 'pt_BR', // Assuming Brazilian Portuguese as per user prompt context
    url: 'https://your-polished-blade-url.com', // Replace with actual URL
    siteName: 'The Polished Blade',
    // images: [ // Add a good default image for sharing
    //   {
    //     url: 'https://your-polished-blade-url.com/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'The Polished Blade Barbershop',
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
