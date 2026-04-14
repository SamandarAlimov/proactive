import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n, Language } from '@/lib/i18n';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import { ThemeToggle } from '@/components/ThemeToggle';

const langLabels: Record<Language, string> = { uz: "O'z", en: 'En', ru: 'Ру' };

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
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
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
    { label: t.nav.contact, href: '/contact' },
  ];

  const otherLangs = (['uz', 'en', 'ru'] as Language[]).filter(l => l !== lang);
  const showDarkNav = !scrolled && (isHome || location.pathname === '/team');

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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={proactiveLogo} alt="Proactive Logo" className="w-10 h-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
            <span className={`font-heading font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-white' : showDarkNav ? 'text-white' : 'text-secondary dark:text-secondary-foreground'
            }`}>
              Proactive
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-xs font-medium transition-colors duration-300 group ${
                  location.pathname === item.href ? 'text-primary' :
                  scrolled || showDarkNav ? 'text-white/80 hover:text-primary' : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle variant={scrolled || showDarkNav ? 'dark' : 'default'} />
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border ${
                  langOpen ? 'bg-primary text-secondary border-primary'
                    : scrolled || showDarkNav ? 'border-white/20 text-white/80 hover:border-primary hover:text-primary'
                    : 'border-border text-foreground/70 hover:border-primary hover:text-primary'
                }`}
              >
                {langLabels[lang]}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 rounded-lg overflow-hidden shadow-lg border border-border"
                    style={{
                      background: 'hsla(202, 100%, 11%, 0.95)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    {otherLangs.map((l) => (
                      <button key={l} onClick={() => { setLang(l); setLangOpen(false); }} className="block w-full px-4 py-2 text-xs font-semibold text-white/70 hover:bg-primary hover:text-secondary transition-all duration-200">
                        {langLabels[l]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${scrolled || showDarkNav ? 'text-white' : 'text-foreground'}`}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 pt-20 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col items-center gap-5 py-8">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={`text-lg font-medium transition-colors ${location.pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-4">
                {(['uz', 'en', 'ru'] as Language[]).map((l) => (
                  <button key={l} onClick={() => { setLang(l); setMobileOpen(false); }} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${lang === l ? 'bg-primary text-secondary' : 'bg-muted text-foreground/60'}`}>
                    {langLabels[l]}
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
