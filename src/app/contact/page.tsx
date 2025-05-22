
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CONTACT_INFO, SITE_NAME, BOOKING_WHATSAPP_URL, BOOKING_EXTERNAL_URL } from '@/lib/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contato - ${SITE_NAME}`,
  description: `Entre em contato com a ${SITE_NAME}. Encontre nosso endereço, telefone, e-mail e horários. Agende seu horário!`,
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="bg-secondary text-secondary-foreground pt-20 md:pt-28">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary-foreground">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Estamos ansiosos para ouvir de você! Agende seu horário ou tire suas dúvidas.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Nossas Informações</h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <CONTACT_INFO.mapPinIcon className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <p>{CONTACT_INFO.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CONTACT_INFO.phoneIcon className="h-6 w-6 text-accent shrink-0" />
                  <Link href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-accent transition-colors">
                    {CONTACT_INFO.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <CONTACT_INFO.mailIcon className="h-6 w-6 text-accent shrink-0" />
                  <Link href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">
                    {CONTACT_INFO.email}
                  </Link>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Horário de Funcionamento</h3>
              <p className="text-muted-foreground">{CONTACT_INFO.workingHours}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Siga-nos</h3>
              <div className="flex space-x-4">
                {CONTACT_INFO.socialMedia.map((social) => (
                  <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-primary hover:text-accent transition-colors">
                    {social.icon && <social.icon className="h-8 w-8" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Map and Booking */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Nossa Localização</h2>
              <div className="relative aspect-video w-full rounded-lg shadow-lg overflow-hidden border-2 border-accent">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(`${SITE_NAME}, ${CONTACT_INFO.address}`)}&hl=pt-BR&z=18&ie=UTF8&iwloc=B&output=embed`}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border:0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da localização da ${SITE_NAME}`}
                ></iframe>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Agende seu Horário</h2>
              <p className="text-muted-foreground mb-6">
                Escolha a forma mais conveniente para você agendar seu próximo corte ou barba.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors">
                  <Link href={BOOKING_EXTERNAL_URL} target="_blank" rel="noopener noreferrer">
                    Agendar Online
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Link href={BOOKING_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Agendar via WhatsApp
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                <strong>Nota:</strong> Para formulários de contato, devido à natureza estática do site, priorizamos o contato direto via WhatsApp ou plataforma de agendamento.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
