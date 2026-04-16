import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n, Language } from '@/lib/i18n';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import { ThemeToggle } from '@/components/ThemeToggle';
import { contactEmail, contactPhone } from '@/lib/contact-details';

const langLabels: Record<Language, string> = { uz: "O'z", en: 'En', ru: 'Ru' };
const headerPhone = contactPhone;
const headerEmail = contactEmail;

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.team, href: '/team' },
    { label: t.nav.academy, href: '/academy' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.careers, href: '/careers' },
  ];

  const otherLangs = (['uz', 'en', 'ru'] as Language[]).filter((currentLang) => currentLang !== lang);
  const showDarkNav = !scrolled && (isHome || location.pathname === '/team');
  const navTextClass = scrolled || showDarkNav ? 'text-white/80 hover:text-primary' : 'text-foreground/80 hover:text-primary';
  const brandTextClass = scrolled || showDarkNav ? 'text-white' : 'text-secondary dark:text-secondary-foreground';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 shadow-lg backdrop-blur-xl'
            : showDarkNav
              ? 'py-5 backdrop-blur-md'
              : 'py-5 bg-background/80 backdrop-blur-md'
        }`}
        style={
          scrolled
            ? {
                background: 'linear-gradient(135deg, hsla(202, 100%, 11%, 0.92) 0%, hsla(204, 47%, 28%, 0.88) 100%)',
                borderBottom: '1px solid hsla(166, 75%, 61%, 0.1)',
              }
            : showDarkNav
              ? {
                  background: 'linear-gradient(135deg, hsla(202, 100%, 11%, 0.4) 0%, hsla(204, 47%, 28%, 0.3) 100%)',
                }
              : undefined
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={proactiveLogo}
              alt="Proactive Logo"
              className="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className={`font-heading text-xl font-bold transition-colors duration-300 ${brandTextClass}`}>
              Proactive
            </span>
          </Link>

          <div className="hidden items-center gap-4 xl:gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`group relative text-xs font-medium transition-colors duration-300 ${
                  location.pathname === item.href ? 'text-primary' : navTextClass
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <div
              className="hidden items-center gap-3 rounded-2xl border px-4 py-2.5 xl:flex"
              style={{
                borderColor: scrolled || showDarkNav ? 'hsla(0, 0%, 100%, 0.14)' : 'hsla(204, 47%, 28%, 0.12)',
                background: scrolled || showDarkNav ? 'hsla(202, 100%, 11%, 0.22)' : 'hsla(0, 0%, 100%, 0.74)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <div className="space-y-1 text-right leading-none">
                <a
                  href={`tel:${headerPhone.replace(/\s+/g, '')}`}
                  className={`block text-sm font-semibold transition-colors duration-300 ${
                    scrolled || showDarkNav ? 'text-white hover:text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {headerPhone}
                </a>
                <a
                  href={`mailto:${headerEmail}`}
                  className={`block text-xs transition-colors duration-300 ${
                    scrolled || showDarkNav ? 'text-white/65 hover:text-white' : 'text-foreground/60 hover:text-secondary'
                  }`}
                >
                  {headerEmail}
                </a>
              </div>

              <div className={`h-9 w-px ${scrolled || showDarkNav ? 'bg-white/10' : 'bg-secondary/10'}`} />

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-heading text-sm font-semibold tracking-[0.02em] text-secondary transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #52E6C8 0%, #79f5e2 100%)',
                  boxShadow: '0 16px 36px rgba(82, 230, 200, 0.24)',
                }}
              >
                {t.nav.contact}
              </Link>
            </div>

            <ThemeToggle variant={scrolled || showDarkNav ? 'dark' : 'default'} />

            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  langOpen
                    ? 'border-primary bg-primary text-secondary'
                    : scrolled || showDarkNav
                      ? 'border-white/20 text-white/80 hover:border-primary hover:text-primary'
                      : 'border-border text-foreground/70 hover:border-primary hover:text-primary'
                }`}
              >
                {langLabels[lang]}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 overflow-hidden rounded-lg border border-border shadow-lg"
                    style={{
                      background: 'hsla(202, 100%, 11%, 0.95)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {otherLangs.map((currentLang) => (
                      <button
                        key={currentLang}
                        onClick={() => {
                          setLang(currentLang);
                          setLangOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-xs font-semibold text-white/70 transition-all duration-200 hover:bg-primary hover:text-secondary"
                      >
                        {langLabels[currentLang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 lg:hidden ${scrolled || showDarkNav ? 'text-white' : 'text-foreground'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 pt-20 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-5 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 w-full max-w-sm rounded-2xl border border-border bg-background px-5 py-4 text-center shadow-sm">
                <a
                  href={`tel:${headerPhone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {headerPhone}
                </a>
                <a
                  href={`mailto:${headerEmail}`}
                  className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {headerEmail}
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-heading text-sm font-semibold tracking-[0.02em] text-secondary transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #52E6C8 0%, #79f5e2 100%)',
                    boxShadow: '0 16px 36px rgba(82, 230, 200, 0.2)',
                  }}
                >
                  {t.nav.contact}
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-2">
                {(['uz', 'en', 'ru'] as Language[]).map((currentLang) => (
                  <button
                    key={currentLang}
                    onClick={() => {
                      setLang(currentLang);
                      setMobileOpen(false);
                    }}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      lang === currentLang ? 'bg-primary text-secondary' : 'bg-muted text-foreground/60'
                    }`}
                  >
                    {langLabels[currentLang]}
                  </button>
                ))}
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
