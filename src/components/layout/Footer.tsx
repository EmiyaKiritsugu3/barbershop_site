import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-primary-foreground hover:text-accent transition-colors">
              <Scissors className="h-8 w-8" />
              {SITE_NAME}
            </Link>
            <p className="text-sm">
              Sua barbearia de confiança para cortes clássicos e modernos, com atendimento de excelência.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Links Rápidos</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0,4).map((item) => ( // Show first 4 links
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Contato</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>{CONTACT_INFO.address}</p>
              <p>
                <Link href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </Link>
              </p>
              <p>
                <Link href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </Link>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-serif">Redes Sociais</h3>
            <div className="flex space-x-4">
              {CONTACT_INFO.socialMedia.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="hover:text-accent transition-colors">
                  {social.icon && <social.icon className="h-6 w-6" />}
                </Link>
              ))}
            </div>
            <p className="text-sm">{CONTACT_INFO.workingHours}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} {SITE_NAME}. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido com <span className="text-accent">&hearts;</span> por Firebase Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
