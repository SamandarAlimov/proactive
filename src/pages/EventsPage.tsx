import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { useI18n } from '@/lib/i18n';
import { revealViewport } from '@/lib/motion';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

const emptyCopy = {
  uz: {
    title: "Hozircha ochiq tadbirlar e’lon qilinmagan",
    description:
      "Yangi seminar, masterclass yoki uchrashuvlar tasdiqlanganda shu sahifada e’lon qilamiz. Hozircha loyiha yoki hamkorlik bo‘yicha bog‘lanishingiz mumkin.",
    cta: "Bog‘lanish",
  },
  en: {
    title: 'No public events are currently announced',
    description:
      'When new seminars, masterclasses, or meetups are confirmed, we will publish them here. For now, you can contact us about a project or collaboration.',
    cta: 'Contact us',
  },
  ru: {
    title: 'Сейчас публичные события не анонсированы',
    description:
      'Когда будут подтверждены новые семинары, мастер-классы или встречи, мы опубликуем их здесь. Пока вы можете связаться с нами по проекту или сотрудничеству.',
    cta: 'Связаться',
  },
} as const;

const EventsPage = () => {
  const { t, lang } = useI18n();
  const seoDescription = t.events.description;
  const copy = emptyCopy[lang];

  return (
    <PageLayout>
      <SEO
        title={t.events.title}
        description={seoDescription}
        lang={lang}
        path="/events"
        structuredData={[
          createWebPageSchema({
            title: t.events.title,
            description: seoDescription,
            lang,
            path: '/events',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.events.title, path: '/events' },
          ]),
        ]}
      />

      <section className="section-padding relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t.events.subtitle}</span>
            <h1 className="mb-6 mt-4 text-4xl font-heading font-bold md:text-6xl">{t.events.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 md:text-xl">{t.events.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            className="glass-card-light rounded-3xl p-8 text-center md:p-12"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground md:text-3xl">{copy.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">{copy.description}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              {copy.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;
