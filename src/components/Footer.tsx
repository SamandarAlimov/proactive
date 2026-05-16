import { useI18n } from '@/lib/i18n';
import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import {
  contactEmail,
  contactInstagram,
  contactInstagramHandle,
  contactPhone,
  contactSecondaryPhone,
} from '@/lib/contact-details';

const Footer = () => {
  const { t, lang } = useI18n();
  const madeByText =
    lang === 'uz'
      ? 'Sayt Alsamos tomonidan qilindi'
      : lang === 'ru'
        ? 'Сайт разработан Alsamos'
        : 'Website by Alsamos';
  const contactLinks = [
    { label: contactPhone, href: `tel:${contactPhone.replace(/\s/g, '')}`, icon: Phone },
    { label: contactSecondaryPhone, href: `tel:${contactSecondaryPhone.replace(/\s/g, '')}`, icon: Phone },
    { label: contactEmail, href: `mailto:${contactEmail}`, icon: Mail },
  ];

  const menuLinks = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.team, href: '/team' },
  ];

  const moreLinks = [
    { label: t.nav.academy, href: '/academy' },
    { label: t.nav.careers, href: '/careers' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="min-w-0">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={proactiveLogo} alt="Proactive Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="font-heading font-bold text-xl">Proactive</span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">Marketing • Brending • Strategy</p>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading font-bold mb-4">Menu</h4>
            <div className="space-y-2">
              {menuLinks.map(item => (
                <Link key={item.href} to={item.href} className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading font-bold mb-4">{t.common.learnMore}</h4>
            <div className="space-y-2">
              {moreLinks.map(item => (
                <Link key={item.href} to={item.href} className="block text-secondary-foreground/60 hover:text-primary transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="mb-4 font-heading font-bold">{t.nav.contact}</h4>
            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group inline-flex max-w-full items-center gap-2 text-sm text-secondary-foreground/70 transition-colors duration-300 hover:text-primary"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary/80 transition-transform duration-300 group-hover:scale-105" />
                    <span className="min-w-0 break-all">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <h4 className="mb-4 mt-7 font-heading font-bold">{t.footer.followUs}</h4>
            <a href={contactInstagram} target="_blank" rel="noopener noreferrer" className="mb-6 inline-flex max-w-full items-center gap-2 text-secondary-foreground/70 transition-colors duration-300 hover:text-primary">
              <Instagram className="h-5 w-5 shrink-0" /> <span className="min-w-0 break-all">{contactInstagramHandle}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-secondary-foreground/10 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-secondary-foreground/40">© 2026 Proactive. {t.footer.rights}.</p>
          <a
            href="https://alsamos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-secondary-foreground/50 transition-colors duration-300 hover:text-primary sm:justify-end"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-secondary-foreground/10 bg-white/[0.08]">
              <img
                src="/alsamos-favicon.ico"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain"
              />
            </span>
            {madeByText}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
