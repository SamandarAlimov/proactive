import { motion, useReducedMotion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { clientLogos } from '@/lib/client-logos';
import { cn } from '@/lib/utils';

const Clients = () => {
  const { t } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();
  const logoItems = shouldReduceMotion ? clientLogos : [...clientLogos, ...clientLogos];
  const getLogoCardTone = (tone = 'light') => {
    if (tone === 'dark') {
      return 'border-white/10 bg-secondary/90 shadow-[0_14px_34px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-secondary/90';
    }

    return 'border-border/70 bg-white shadow-[0_10px_28px_rgba(38,79,107,0.07)] dark:border-white/10 dark:bg-white';
  };

  return (
    <section id="clients" className="section-deferred relative overflow-hidden py-24 md:py-32" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, hsla(166, 75%, 61%, 0.02) 0%, transparent 40%, hsla(259, 43%, 51%, 0.02) 100%)',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          {...getMotionProps({ distance: 30, duration: 0.6 })}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsla(166, 75%, 61%, 0.08)',
              color: 'hsl(166, 75%, 50%)',
              border: '1px solid hsla(166, 75%, 61%, 0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.clients.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-6 tracking-tight">{t.clients.title}</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />
          <div
            className={shouldReduceMotion ? 'flex flex-wrap justify-center gap-4' : 'brand-marquee-track flex w-max gap-5 will-change-transform'}
          >
            {logoItems.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                aria-hidden={!shouldReduceMotion && i >= clientLogos.length}
                className={cn(
                  'group flex h-24 min-w-[218px] flex-shrink-0 items-center justify-center rounded-2xl border px-7 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_42px_rgba(38,79,107,0.12)]',
                  getLogoCardTone(client.heroTone),
                )}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'h-full w-full object-contain opacity-85 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100',
                    client.marqueeImageClassName,
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
