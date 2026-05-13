import { motion, useReducedMotion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const clientNames = [
  'AHMAD TEA', 'IMPULS', 'MILESTONE IS', 'DAMAR', 'AURUS PHARM',
  'BEK OTA', 'NAJOT NUR', 'MERIT CHEMICALS', 'ZAHRATUN', 'AQLY',
  'DILMUSS', 'TAXTAKON', 'BAXTIYOR OILA', 'ASR KIMYO', 'MARF',
  'OXUS UNIVERSITY', 'MOBETCO', 'PRESIDENT GIFTS', 'SFERA', 'TIMA',
  "ZA'FARON",
];

const Hero = () => {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0" style={{
        background: `linear-gradient(160deg, hsla(259, 43%, 51%, 0.85) 0%, hsla(202, 100%, 11%, 0.92) 40%, hsla(204, 47%, 28%, 0.95) 70%, hsla(202, 100%, 11%, 0.98) 100%)`,
      }} />

      <div className="absolute -top-24 -right-24 h-[520px] w-[520px] pointer-events-none opacity-80" style={{
        background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.14) 0%, transparent 62%)',
      }} />

      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] pointer-events-none opacity-75" style={{
        background: 'radial-gradient(circle, hsla(181, 100%, 50%, 0.08) 0%, transparent 60%)',
      }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsla(0,0%,100%,0.4) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.4) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div
        style={{
          minHeight: '100svh',
          paddingTop: 'calc(var(--site-header-offset) + clamp(1.25rem, 2.8vw, 2.75rem))',
        }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-6 pb-8 text-center sm:pb-10 lg:pb-12"
      >
        <div className="hero-stage">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 font-heading text-[clamp(2.7rem,5.9vw,6.15rem)] font-bold leading-[1.04] tracking-tight text-white md:mb-8"
        >
          {t.hero.title}{' '}
          <span className="relative inline-block">
            <span className="text-primary">{t.hero.titleHighlight}</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full origin-left"
              style={{ background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))' }}
            />
          </span>
          {' '}{t.hero.titleEnd}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mb-8 max-w-2xl text-balance text-sm font-normal leading-relaxed text-white/56 sm:text-base md:mb-12 md:text-lg xl:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-400 hover:scale-[1.03] hover:shadow-[0_0_50px_hsla(166,75%,61%,0.35)]"
            style={{ background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))', color: 'hsl(202, 100%, 11%)' }}
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative">{t.hero.cta}</span>
            <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#about" className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/12 bg-white/[0.04] backdrop-blur-sm text-white font-semibold text-base sm:text-lg transition-all duration-400 hover:border-primary/40 hover:bg-white/[0.08] hover:scale-[1.03]">
            <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.1 }} className="mt-10 md:mt-14 lg:mt-16">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/38 md:mb-5">{t.hero.trustedBy}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3">
            {clientNames.map((name) => (
              <span
                key={name}
                className="cursor-default text-[10px] font-heading font-bold tracking-wider text-white/48 transition-colors duration-300 hover:text-primary/75 md:text-xs"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
            }
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
