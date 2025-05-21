import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BOOKING_EXTERNAL_URL } from '@/lib/constants';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="p-6">
        <div className="flex items-center gap-4 mb-3">
          {service.icon && <service.icon className="h-10 w-10 text-accent" />}
          <CardTitle className="text-2xl font-serif text-primary">{service.name}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-sm min-h-[40px]">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-3xl font-bold text-accent mb-6">{service.price}</p>
        </div>
        <Button asChild className="w-full mt-auto bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors">
          <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
            Agendar Serviço
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
