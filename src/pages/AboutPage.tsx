import { motion } from 'framer-motion';
import { Award, Instagram, Send, Target, TrendingUp, Users } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import founderHabibullo from '@/assets/founder-habibullo.png';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import { useI18n } from '@/lib/i18n';

const AboutPage = () => {
  const { t, lang } = useI18n();
  const founderLang = (lang in founderProfile.intro ? lang : 'uz') as FounderLang;

  const stats = [
    { number: '50+', label: t.about.stats.projects, icon: Target },
    { number: '30+', label: t.about.stats.clients, icon: Users },
    { number: '5+', label: t.about.stats.experience, icon: TrendingUp },
    { number: '15+', label: t.about.stats.team, icon: Award },
  ];

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t.about.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-heading font-bold md:text-6xl"
          >
            {t.about.title}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{t.about.description}</p>
              <div className="glass-card-light mb-6 rounded-2xl p-6">
                <h3 className="mb-2 text-lg font-heading font-bold text-foreground">Mission</h3>
                <p className="text-muted-foreground">{t.about.mission}</p>
              </div>
              <div className="glass-card-light rounded-2xl p-6">
                <h3 className="mb-2 text-lg font-heading font-bold text-foreground">Vision</h3>
                <p className="text-muted-foreground">{t.about.vision}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
              <div className="glass-card-light aspect-square overflow-hidden rounded-3xl p-8">
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <img src={proactiveLogo} alt="Proactive Logo" className="mx-auto mb-6 h-32 w-32 rounded-2xl object-cover shadow-lg" />
                    <h3 className="mb-2 text-2xl font-heading font-bold text-foreground">Proactive</h3>
                    <p className="text-muted-foreground">Marketing strategiyasi • Brend platformasi • Konsultatsiya</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-2xl bg-primary opacity-20" />
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
                <img src={founderHabibullo} alt={founderProfile.name} className="h-full w-full object-cover object-center" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {founderProfile.intro[founderLang]}
                </span>
                <div className="mt-5">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {founderProfile.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {founderProfile.role[founderLang]}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founderProfile.tags[founderLang].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderProfile.summary[founderLang]}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={founderProfile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    t.me/habibullo_sadulloyev
                  </a>
                  <a
                    href={founderProfile.instagram}
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
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card-light group rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-xl"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-heading font-bold text-foreground">{stat.number}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
