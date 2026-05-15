import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { services, type ServiceSlug } from '@/data/services';
import { useI18n } from '@/lib/i18n';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

const sectionLabels = {
  uz: {
    eyebrow: 'Xizmatlar',
    title: 'Marketingni tizimga aylantiramiz',
    intro:
      'Marketing faqat reklama, kontent yoki kampaniya bilan cheklanmaydi. U mahsulot, bozor, brend, jamoa va qarorlar tizimi bilan bog‘liq. Proactive biznesga shu tizimni bosqichma-bosqich qurishda yordam beradi.',
    cta: 'Batafsil',
    less: 'Kamroq',
    sections: {
      when: 'Qachon kerak?',
      what: 'Nima qilamiz?',
      result: 'Siz nima olasiz?',
      value: 'Biznesga qiymati',
    },
  },
  en: {
    eyebrow: 'Services',
    title: 'We turn marketing into a system',
    intro:
      'Marketing is not limited to ads, content or campaigns. It is connected to product, market, brand, team and a system of decisions. Proactive helps build this system step by step.',
    cta: 'Read more',
    less: 'Show less',
    sections: {
      when: 'When is it needed?',
      what: 'What we do',
      result: 'What you receive',
      value: 'Value to business',
    },
  },
  ru: {
    eyebrow: 'Услуги',
    title: 'Превращаем маркетинг в систему',
    intro:
      'Маркетинг не ограничивается рекламой, контентом или кампаниями. Он связан с продуктом, рынком, брендом, командой и системой решений. Proactive помогает выстраивать эту систему шаг за шагом.',
    cta: 'Подробнее',
    less: 'Свернуть',
    sections: {
      when: 'Когда нужно?',
      what: 'Что мы делаем',
      result: 'Что вы получаете',
      value: 'Ценность для бизнеса',
    },
  },
};

const getPreviewSentence = (text: string) => text.match(/^[^.!?]+[.!?]/)?.[0] ?? text;

const ServicesPage = () => {
  const { lang } = useI18n();
  const labels = sectionLabels[lang];
  const [expandedService, setExpandedService] = useState<ServiceSlug | null>(null);

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
            const isOpen = expandedService === service.slug;
            const previewSentence = getPreviewSentence(content.intro);
            const detailBlocks = [
              { title: labels.sections.when, text: content.when },
              { title: labels.sections.what, text: content.what },
              { title: labels.sections.result, text: content.result },
              { title: labels.sections.value, text: content.value },
            ];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl md:p-10"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border) / 0.72)',
                    boxShadow: '0 12px 36px hsl(var(--foreground) / 0.08)',
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
                      style={{ color: isOpen ? service.accent.from : 'hsl(var(--foreground) / 0.12)' }}
                    >
                      {service.number}
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
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-[15px]">
                        {previewSentence}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`service-panel-${service.slug}`}
                      onClick={() => setExpandedService(isOpen ? null : service.slug)}
                      className="flex items-center gap-2 whitespace-nowrap rounded-full px-1 text-sm font-semibold transition-all duration-300 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      style={{ color: 'hsl(166, 75%, 40%)' }}
                    >
                      {isOpen ? labels.less : labels.cta}
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="relative flex h-9 w-9 items-center justify-center rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${service.accent.from}15, ${service.accent.to}10)`,
                          border: `1px solid ${service.accent.from}25`,
                        }}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {isOpen ? (
                            <motion.span
                              key="minus"
                              initial={{ opacity: 0, scale: 0.65, rotate: -90 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.65, rotate: 90 }}
                              transition={{ duration: 0.18 }}
                            >
                              <Minus className="h-4 w-4" />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="plus"
                              initial={{ opacity: 0, scale: 0.65, rotate: 90 }}
                              animate={{ opacity: 1, scale: 1, rotate: 0 }}
                              exit={{ opacity: 0, scale: 0.65, rotate: -90 }}
                              transition={{ duration: 0.18 }}
                            >
                              <Plus className="h-4 w-4" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.span>
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`service-panel-${service.slug}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden"
                      >
                        <div className="mt-8 grid gap-6 border-t border-secondary/10 pt-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                          <div
                            className="rounded-2xl p-5"
                            style={{
                              background: `linear-gradient(135deg, ${service.accent.from}10, ${service.accent.to}06)`,
                              border: `1px solid ${service.accent.from}18`,
                            }}
                          >
                            <p className="text-[15px] leading-relaxed text-foreground/80 md:text-base">
                              {content.intro}
                            </p>
                          </div>

                          <div className="grid gap-4">
                            {detailBlocks.map((block, blockIndex) => (
                              <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.06 * blockIndex }}
                                className="rounded-2xl bg-background/70 p-5"
                                style={{
                                  border: '1px solid hsl(var(--border) / 0.68)',
                                  boxShadow: '0 8px 24px hsl(var(--foreground) / 0.06)',
                                }}
                              >
                                <h4 className="font-heading text-base font-bold text-foreground md:text-lg">
                                  {block.title}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                                  {block.text}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setExpandedService(null)}
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                            style={{
                              color: 'hsl(166, 75%, 40%)',
                              background: `linear-gradient(135deg, ${service.accent.from}12, ${service.accent.to}08)`,
                              border: `1px solid ${service.accent.from}20`,
                            }}
                          >
                            {labels.less}
                            <motion.span
                              initial={false}
                              animate={{ rotate: 180 }}
                              className="flex h-6 w-6 items-center justify-center rounded-full"
                              style={{ background: `${service.accent.from}18` }}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </motion.span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
