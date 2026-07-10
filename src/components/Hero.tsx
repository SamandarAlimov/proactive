import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { heroClientLogos } from '@/lib/client-logos';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.45,
  });
  const backgroundY = useTransform(smoothScroll, [0, 1], shouldReduceMotion ? [0, 0] : [0, 72]);
  const backgroundScale = useTransform(smoothScroll, [0, 1], shouldReduceMotion ? [1, 1] : [1.04, 1.1]);
  const contentY = useTransform(smoothScroll, [0, 1], shouldReduceMotion ? [0, 0] : [0, -24]);
  const contentOpacity = useTransform(smoothScroll, [0, 0.72], [1, 0.88]);
  const heroLogoCopies = [0, 1, 2];
  const renderHeroLogo = (client: (typeof heroClientLogos)[number], copyIndex: number) => (
    <div
      key={`${client.name}-${copyIndex}`}
      className={cn(
        'hero-logo-item flex h-14 w-[168px] shrink-0 items-center justify-center px-4 sm:h-16 sm:w-[188px] sm:px-5 md:h-[72px] md:w-[208px]',
        client.heroTone === 'dark' ? 'hero-logo-item-dark' : 'hero-logo-item-light',
      )}
    >
      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        decoding="async"
        className={cn(
          'hero-logo-image h-auto w-auto max-h-[40px] max-w-[140px] origin-center object-contain opacity-100 sm:max-h-[44px] sm:max-w-[160px] md:max-h-[50px] md:max-w-[188px]',
          client.heroVisualClassName,
        )}
      />
    </div>
  );

  return (
    <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: backgroundY, scale: backgroundScale }}>
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
      </motion.div>

      <div className="absolute inset-0" style={{
        background: `linear-gradient(160deg, hsla(259, 43%, 51%, 0.85) 0%, hsla(202, 100%, 11%, 0.92) 40%, hsla(204, 47%, 28%, 0.95) 70%, hsla(202, 100%, 11%, 0.98) 100%)`,
      }} />

      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-80"
        animate={shouldReduceMotion ? undefined : { x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.14) 0%, transparent 62%)',
          willChange: shouldReduceMotion ? undefined : 'transform',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] opacity-75"
        animate={shouldReduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, hsla(181, 100%, 50%, 0.08) 0%, transparent 60%)',
          willChange: shouldReduceMotion ? undefined : 'transform',
        }}
      />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsla(0,0%,100%,0.4) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.4) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div
        style={{
          minHeight: '100svh',
          paddingTop: 'calc(var(--site-header-offset) + clamp(1.25rem, 2.8vw, 2.75rem))',
        }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pb-8 text-center sm:pb-10 lg:pb-12"
      >
        <motion.div className="hero-stage" style={{ y: contentY, opacity: contentOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mx-auto mb-5 max-w-5xl font-heading text-[clamp(2.45rem,5vw,5.35rem)] font-bold leading-[1.04] tracking-tight text-white md:mb-8"
          >
            {t.hero.title}{' '}
            <span className="relative inline-block">
              <span className="text-primary">{t.hero.titleHighlight}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.42, delay: 0.42, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full origin-left"
                style={{ background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))' }}
              />
            </span>
            {t.hero.titleEnd ? ` ${t.hero.titleEnd}` : ''}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.28 }}
            className="mx-auto mb-8 max-w-2xl text-balance text-sm font-medium leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)] sm:text-base md:mb-12 md:text-lg xl:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.36 }}
            className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_hsla(166,75%,61%,0.28)] sm:px-8 sm:py-4 sm:text-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                color: 'hsl(202, 100%, 11%)',
              }}
            >
              <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative">{t.hero.cta}</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#about" className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.08] px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.12] sm:px-8 sm:py-4 sm:text-lg">
              <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.36, delay: 0.5 }} className="mt-8 md:mt-10 lg:mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 md:mb-5">{t.hero.trustedBy}</p>
            <div className="hero-logo-rail relative mx-auto w-full max-w-6xl overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:py-4">
              {shouldReduceMotion ? (
                <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
                  {heroClientLogos.map((client) => renderHeroLogo(client, 0))}
                </div>
              ) : (
                <div
                  className="hero-logo-marquee-track flex w-max items-center will-change-transform"
                  style={
                    {
                      '--hero-logo-marquee-duration': '88s',
                    } as CSSProperties
                  }
                >
                  {heroLogoCopies.map((copyIndex) => (
                    <div
                      key={copyIndex}
                      aria-hidden={copyIndex > 0}
                      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8 md:gap-10 md:pr-10 lg:gap-12 lg:pr-12"
                    >
                      {heroClientLogos.map((client) => renderHeroLogo(client, copyIndex))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <motion.div
            className="h-1 w-1 rounded-full bg-primary"
            animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
