import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: keyof JSX.IntrinsicElements; // Allows specifying the HTML tag, defaults to section
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Element = 'section',
  ...props
}: SectionWrapperProps) {
  return (
    <Element className={cn('py-12 md:py-20', className)} {...props}>
      <div className={cn('container mx-auto px-4', containerClassName)}>
        {children}
      </div>
    </Element>
  );
}
