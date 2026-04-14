import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ position: 'sticky', top: 0, zIndex: 1 }}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0" style={{
        background: `linear-gradient(160deg, hsla(259, 43%, 51%, 0.85) 0%, hsla(202, 100%, 11%, 0.92) 40%, hsla(204, 47%, 28%, 0.95) 70%, hsla(202, 100%, 11%, 0.98) 100%)`,
      }} />

      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none" style={{
        background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] pointer-events-none" style={{
        background: 'radial-gradient(circle, hsla(181, 100%, 50%, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsla(0,0%,100%,0.4) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.4) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.12] mb-5 md:mb-8 tracking-tight"
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
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-8 md:mb-14 text-balance font-normal leading-relaxed"
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

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className="mt-12 md:mt-24">
          <p className="text-white/25 text-xs mb-4 md:mb-6 uppercase tracking-[0.2em]">{t.hero.trustedBy}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3">
            {clientNames.map((name, i) => (
              <motion.span key={name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 + i * 0.03 }}
                className="text-white/20 text-[10px] md:text-xs font-heading font-bold tracking-wider hover:text-primary/50 transition-colors duration-300 cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-1 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
