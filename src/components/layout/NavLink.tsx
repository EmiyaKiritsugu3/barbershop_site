"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/types';

interface NavLinkProps {
  item: NavItem;
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavLink({ item, isMobile = false, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-foreground hover:text-primary-foreground",
        isMobile ? "w-full justify-start text-base" : "text-sm"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.icon && <item.icon className={cn("h-5 w-5", isMobile ? "mr-2" : "")} />}
      {item.label}
    </Link>
  );
}
