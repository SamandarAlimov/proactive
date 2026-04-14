import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';

const clientNames = [
  'AHMAD TEA',
  'IMPULS TIBBIYOT INSTITUTI',
  'MILESTONE IS',
  'DAMAR',
  'AURUS PHARM',
  'BEK OTA',
  'NAJOT NUR',
  'MERIT CHEMICALS',
  'ZAHRATUN',
  'AQLY',
  'DILMUSS',
  'TAXTAKON',
  'BAXTIYOR OILA',
  'ASR KIMYO',
  'MARF',
  'OXUS UNIVERSITY',
  'MOBETCO',
  'PRESIDENT GIFTS',
  'SFERA',
  'TIMA',
  "ZA'FARON",
];

const Hero = () => {
  const { lang } = useI18n();
  const currentLang = (lang in brandbookContent.hero.eyebrow ? lang : 'uz') as keyof typeof brandbookContent.hero.eyebrow;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);

  const heroCopy = brandbookContent.hero;

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ position: 'sticky', top: 0, zIndex: 1 }}
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(82,230,200,0.14) 0%, transparent 32%), radial-gradient(circle at bottom left, rgba(0,249,255,0.08) 0%, transparent 28%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.38) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.38) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
      />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/72"
        >
          <span className="font-accent text-base tracking-normal text-brand-peach">Born to be a marketer</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-primary sm:inline-flex" />
          <span className="hidden sm:inline">{heroCopy.eyebrow[currentLang]}</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-3xl font-heading font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {heroCopy.titleStart[currentLang]}{' '}
          <span className="relative inline-block text-primary">
            {heroCopy.titleHighlight[currentLang]}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-primary to-brand-cyan"
            />
          </span>{' '}
          {heroCopy.titleEnd[currentLang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg md:text-xl"
        >
          {heroCopy.description[currentLang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:px-0"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-3.5 font-semibold text-secondary transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
              boxShadow: '0 22px 60px rgba(82,230,200,0.22)',
            }}
          >
            <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">{heroCopy.primaryCta[currentLang]}</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="/about"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08] hover:scale-[1.03]"
          >
            <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            {heroCopy.secondaryCta[currentLang]}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="mt-12 md:mt-20">
          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/28">{heroCopy.trustedBy[currentLang]}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8 md:gap-y-3">
            {clientNames.map((name, index) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.03 }}
                className="cursor-default text-[10px] font-heading font-bold tracking-[0.16em] text-white/22 transition-colors duration-300 hover:text-primary/70 md:text-xs"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
