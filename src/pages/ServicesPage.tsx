import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { services } from '@/data/services';
import { useI18n } from '@/lib/i18n';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

const sectionLabels = {
  uz: {
    eyebrow: 'Xizmatlar',
    title: 'Marketingni tizimga aylantiramiz',
    intro:
      'Marketing faqat reklama, kontent yoki kampaniya bilan cheklanmaydi. U mahsulot, bozor, brend, jamoa va qarorlar tizimi bilan bog‘liq. Proactive biznesga shu tizimni bosqichma-bosqich qurishda yordam beradi.',
    cta: 'Batafsil',
  },
  en: {
    eyebrow: 'Services',
    title: 'We turn marketing into a system',
    intro:
      'Marketing is not limited to ads, content or campaigns. It is connected to product, market, brand, team and a system of decisions. Proactive helps build this system step by step.',
    cta: 'Read more',
  },
  ru: {
    eyebrow: 'Услуги',
    title: 'Превращаем маркетинг в систему',
    intro:
      'Маркетинг не ограничивается рекламой, контентом или кампаниями. Он связан с продуктом, рынком, брендом, командой и системой решений. Proactive помогает выстраивать эту систему шаг за шагом.',
    cta: 'Подробнее',
  },
};

const ServicesPage = () => {
  const { lang } = useI18n();
  const labels = sectionLabels[lang];

  return (
    <PageLayout>
      <SEO
        title={labels.eyebrow}
        description={labels.intro}
        lang={lang}
        path="/services"
        structuredData={[
          createWebPageSchema({
            title: labels.eyebrow,
            description: labels.intro,
            lang,
            path: '/services',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: labels.eyebrow, path: '/services' },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, hsla(166, 75%, 61%, 0.08) 0%, transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsla(166, 75%, 61%, 0.1)',
              color: 'hsl(166, 75%, 40%)',
              border: '1px solid hsla(166, 75%, 61%, 0.2)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {labels.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {labels.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {labels.intro}
          </motion.p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl space-y-5 px-6">
          {services.map((service, index) => {
            const content = service.content[lang];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/services/${service.slug}`} className="group block">
                  <div
                    className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl md:p-10"
                    style={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsla(202, 100%, 11%, 0.08)',
                      boxShadow: '0 4px 24px hsla(202, 100%, 11%, 0.04)',
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(120deg, ${service.accent.from}06 0%, ${service.accent.to}03 100%)`,
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                      style={{
                        background: `linear-gradient(180deg, ${service.accent.from}, ${service.accent.to})`,
                      }}
                    />

                    <div className="relative grid items-start gap-6 md:grid-cols-[auto_auto_1fr_auto] md:items-center md:gap-8">
                      <div
                        className="font-heading text-5xl font-bold leading-none tabular-nums transition-colors duration-500 md:text-7xl"
                        style={{ color: 'hsla(202, 100%, 11%, 0.08)' }}
                      >
                        <span className="group-hover:hidden">{service.number}</span>
                        <span
                          className="hidden group-hover:inline"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {service.number}
                        </span>
                      </div>

                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 md:h-16 md:w-16"
                        style={{
                          background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                          boxShadow: `0 8px 24px ${service.accent.from}30`,
                        }}
                      >
                        <Icon className="h-7 w-7 text-white md:h-8 md:w-8" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl lg:text-3xl">
                          {content.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                          {content.shortDescription}
                        </p>
                      </div>

                      <div
                        className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                        style={{ color: 'hsl(166, 75%, 40%)' }}
                      >
                        {labels.cta}
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent.from}15, ${service.accent.to}10)`,
                            border: `1px solid ${service.accent.from}25`,
                          }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
