"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_LINKS, SITE_NAME, BOOKING_EXTERNAL_URL } from '@/lib/constants';
import { NavLink } from './NavLink';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-primary hover:text-accent transition-colors">
          <Scissors className="h-8 w-8 text-primary" />
          {SITE_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-2 md:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          <Button asChild variant="default" className="ml-4 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors shadow-md hover:shadow-lg">
            <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
              Agende Agora
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-7 w-7 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-serif font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                  <Scissors className="h-7 w-7 text-primary" />
                  {SITE_NAME}
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Fechar menu">
                    <X className="h-7 w-7 text-primary" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-3">
                {NAV_LINKS.map((item) => (
                  <NavLink key={item.href} item={item} isMobile onClick={() => setIsSheetOpen(false)} />
                ))}
                <Button asChild variant="default" size="lg" className="mt-6 w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors shadow-md">
                  <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
                    Agende Agora
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
