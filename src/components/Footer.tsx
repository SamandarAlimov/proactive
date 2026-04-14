import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMark from '@/components/BrandMark';
import { brandbookContent, siteContact } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { t, lang } = useI18n();
  const currentLang = (lang in brandbookContent.footer.description ? lang : 'uz') as keyof typeof brandbookContent.footer.description;
  const footerDescription = brandbookContent.footer.description[currentLang];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const menuLinks = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.team, href: '/team' },
  ];

  const moreLinks = [
    { label: t.nav.academy, href: '/academy' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.careers, href: '/careers' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 inline-flex">
              <BrandMark tone="light" size="md" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-secondary-foreground/60">{footerDescription}</p>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`tel:${siteContact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-secondary-foreground/72 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {siteContact.phone}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className="flex items-center gap-2 text-secondary-foreground/72 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {siteContact.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold">Menu</h4>
            <div className="space-y-2">
              {menuLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold">{t.common.learnMore}</h4>
            <div className="space-y-2">
              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold">{t.footer.followUs}</h4>
            <a
              href={siteContact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex items-center gap-2 text-secondary-foreground/70 transition-colors duration-300 hover:text-primary"
            >
              <Instagram className="w-5 h-5" /> @proactive.agencyuz
            </a>
            <div className="mt-4">
              <button
                onClick={scrollToTop}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary transition-transform duration-300 hover:scale-110"
              >
                <ArrowUp className="w-5 h-5 text-secondary" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/40">© 2026 Proactive. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
