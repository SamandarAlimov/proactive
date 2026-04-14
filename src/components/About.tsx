import { motion } from 'framer-motion';
import { Instagram, Send, Target, TrendingUp, Users, Workflow } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';
import { founderMilestones, brandbookContent } from '@/lib/brandbook-content';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import founderPhoto from '@/assets/founder-photo.jpg';

const About = () => {
  const { lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = (lang in brandbookContent.homeAbout.title ? lang : 'uz') as FounderLang;

  const stats = [
    { number: '50+', label: { uz: 'Loyihalar', en: 'Projects', ru: 'Проекты' }, icon: Target },
    { number: '30+', label: { uz: 'Hamkorlar', en: 'Partners', ru: 'Партнеры' }, icon: Users },
    { number: '12+', label: { uz: 'Yillik tajriba', en: 'Years of experience', ru: 'Лет опыта' }, icon: TrendingUp },
    { number: '1', label: { uz: 'Strategik platforma', en: 'Strategic platform', ru: 'Стратегическая платформа' }, icon: Workflow },
  ];

  const sectionCopy = brandbookContent.homeAbout;

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px]"
        style={{
          background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.07) 0%, transparent 72%)',
          filter: 'blur(74px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="brand-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {sectionCopy.eyebrow[currentLang]}
          </span>
          <h2 className="mt-6 text-3xl font-heading font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {sectionCopy.title[currentLang]}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {sectionCopy.description[currentLang]}
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="grid gap-0 md:grid-cols-[0.86fr_1.14fr]">
              <div className="relative min-h-[340px] overflow-hidden bg-[#f3efe9] dark:bg-[#141414]">
                <img src={founderPhoto} alt={founderProfile.name} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                  {founderProfile.intro[currentLang]}
                </span>
                <h3 className="mt-4 text-3xl font-heading font-bold tracking-tight text-foreground">
                  {founderProfile.name}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  {founderProfile.role[currentLang]}
                </p>

                <FounderSpecialtyChips tags={founderProfile.tags[currentLang]} className="mt-5" />

                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderProfile.summary[currentLang]}
                </p>

                <div className="mt-7 grid gap-3">
                  {founderMilestones.map((item) => (
                    <div key={item.label[currentLang]} className="rounded-[1.25rem] border border-border/70 bg-background px-4 py-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
                        {item.label[currentLang]}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/84">{item.text[currentLang]}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={founderProfile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:bg-secondary/92"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                  <a
                    href={founderProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-6"
          >
            <div className="brand-surface overflow-hidden rounded-[2rem] border border-white/10 p-8 text-white shadow-[0_28px_84px_rgba(0,0,0,0.18)]">
              <BrandMark tone="light" size="lg" />
              <p className="mt-8 max-w-md text-xl leading-relaxed text-white/80">
                {sectionCopy.brandCardText[currentLang]}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/56">{sectionCopy.brandCardTitle[currentLang]}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.number + stat.label[currentLang]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.32 + index * 0.08 }}
                  className="glass-card-light rounded-[1.5rem] p-6"
                >
                  <stat.icon className="h-6 w-6 text-primary" />
                  <div className="mt-5 text-3xl font-heading font-bold text-foreground">{stat.number}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label[currentLang]}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
