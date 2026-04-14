import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Target, TrendingUp, Users, Award, Send, Instagram } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import founderHabibullo from '@/assets/founder-habibullo.png';

const AboutPage = () => {
  const { t, lang } = useI18n();

  const stats = [
    { number: '50+', label: t.about.stats.projects, icon: Target },
    { number: '30+', label: t.about.stats.clients, icon: Users },
    { number: '5+', label: t.about.stats.experience, icon: TrendingUp },
    { number: '15+', label: t.about.stats.team, icon: Award },
  ];

  const founderRole = lang === 'uz' ? 'Asoschi & CEO' : lang === 'ru' ? 'Основатель & CEO' : 'Founder & CEO';
  const founderIntro = lang === 'uz'
    ? 'Asoschi haqida'
    : lang === 'ru'
      ? 'Об основателе'
      : 'About the founder';
  const founderSummary = lang === 'uz'
    ? "Habibullo Sadulloyev Proactive agentligining strategik yo'nalishini boshqaradi. U marketing, tahlil va ta'lim yondashuvlarini birlashtirib, brendlar uchun amaliy o'sish tizimlarini qurishga e'tibor qaratadi."
    : lang === 'ru'
      ? 'Хабибулло Садуллоев задает стратегическое направление агентства Proactive. Он объединяет маркетинг, аналитику и образовательный подход, чтобы выстраивать для брендов практичные системы роста.'
      : 'Habibullo Sadulloyev leads Proactive with a strategy-first perspective. He combines marketing, analytics, and education to build practical growth systems for brands.';
  const founderTags = lang === 'uz'
    ? ['Marketolog', 'Analitik', 'Trener']
    : lang === 'ru'
      ? ['Маркетолог', 'Аналитик', 'Тренер']
      : ['Marketer', 'Analyst', 'Trainer'];

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-primary uppercase tracking-widest">
            {t.about.subtitle}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-bold mt-4">
            {t.about.title}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.about.description}</p>
              <div className="glass-card-light rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Mission</h3>
                <p className="text-muted-foreground">{t.about.mission}</p>
              </div>
              <div className="glass-card-light rounded-2xl p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">Vision</h3>
                <p className="text-muted-foreground">{t.about.vision}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
              <div className="rounded-3xl overflow-hidden glass-card-light p-8 flex items-center justify-center aspect-square">
                <div className="text-center">
                  <img src={proactiveLogo} alt="Proactive Logo" className="w-32 h-32 rounded-2xl mx-auto mb-6 object-cover shadow-lg" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Proactive</h3>
                  <p className="text-muted-foreground">Marketing • Brending • Strategy</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary opacity-20 -z-10" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-20 overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-[#f3efe9] dark:bg-[#141414]">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/[0.03]" />
                <img
                  src={founderHabibullo}
                  alt="Habibullo Sadulloyev"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {founderIntro}
                </span>
                <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                      Habibullo Sadulloyev
                    </h2>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      {founderRole}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founderTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderSummary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://t.me/habibullo_sadulloyev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    t.me/habibullo_sadulloyev
                  </a>
                  <a
                    href="https://www.instagram.com/habibullo_sadulloyev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    @habibullo_sadulloyev
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card-light rounded-2xl p-6 text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-heading font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
