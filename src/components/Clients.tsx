import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clients = [
  'AHMAD TEA',
  'IMPULS TIBBIYOT INSTITUTI',
  'MILESTONE IS',
  'DAMAR',
  'AURUS PHARM',
  'BEK OTA',
  'NAJOT NUR NOTIQLIK MAKTABI',
  'MERIT CHEMICALS',
  'ZAHRATUN SUPERMARKET',
  'AQLY',
];

const Clients = () => {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, hsla(166, 75%, 61%, 0.02) 0%, transparent 40%, hsla(259, 43%, 51%, 0.02) 100%)',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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

        {/* Marquee-style infinite scroll row */}
        <div className="relative overflow-hidden mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6 w-max"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-8 py-5 rounded-2xl glass-card-light flex items-center justify-center min-w-[200px] group hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-sm font-heading font-bold text-foreground/60 group-hover:text-primary transition-colors duration-300 text-center whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid below */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-card-light rounded-2xl p-5 flex items-center justify-center min-h-[80px] group hover:border-primary/20 transition-all duration-500 cursor-default"
            >
              <span className="text-xs font-heading font-bold text-foreground/50 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
