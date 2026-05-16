import { useI18n } from '@/lib/i18n';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import proactiveLogo from '@/assets/proactive-logo.jpg';

const Footer = () => {
  const { t } = useI18n();

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
            <h4 className="font-heading font-bold mb-4">{t.footer.followUs}</h4>
            <a href="https://www.instagram.com/proactive.agencyuz/" target="_blank" rel="noopener noreferrer" className="mb-6 inline-flex max-w-full items-center gap-2 text-secondary-foreground/70 transition-colors duration-300 hover:text-primary">
              <Instagram className="h-5 w-5 shrink-0" /> <span className="min-w-0 break-all">@proactive.agencyuz</span>
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/40 text-sm">© 2026 Proactive. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
