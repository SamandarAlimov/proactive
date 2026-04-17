import { motion, useReducedMotion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { clientList } from '@/lib/client-list';

const Clients = () => {
  const { t } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

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
            className={shouldReduceMotion ? 'flex flex-wrap justify-center gap-4' : 'brand-marquee-track flex w-max gap-6 will-change-transform'}
          >
            {[...clientList, ...clientList].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="group flex min-w-[220px] flex-shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/88 px-8 py-5 shadow-[0_6px_18px_rgba(38,79,107,0.05)] transition-colors duration-300 hover:border-primary/20"
              >
                <span className="text-center font-heading text-sm font-bold whitespace-nowrap text-foreground/60 transition-colors duration-300 group-hover:text-primary">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
