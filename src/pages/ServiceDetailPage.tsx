import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Cog, HelpCircle, TrendingUp } from 'lucide-react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { getServiceBySlug, serviceSlugRedirects, services } from '@/data/services';
import { useI18n } from '@/lib/i18n';
import {
  createBreadcrumbSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/lib/seo';

const labels = {
  uz: {
    back: 'Barcha xizmatlar',
    when: 'Qachon kerak?',
    what: 'Nima qilamiz?',
    result: 'Siz nima olasiz?',
    value: 'Biznesga qiymati',
    cta: 'Loyiha boshlash',
    next: 'Keyingi xizmat',
    open: 'Ochish',
  },
  en: {
    back: 'All services',
    when: 'When is it needed?',
    what: 'What we do',
    result: 'What you receive',
    value: 'Value to business',
    cta: 'Start a project',
    next: 'Next service',
    open: 'Open',
  },
  ru: {
    back: 'Все услуги',
    when: 'Когда нужно?',
    what: 'Что мы делаем',
    result: 'Что вы получаете',
    value: 'Ценность для бизнеса',
    cta: 'Начать проект',
    next: 'Следующая услуга',
    open: 'Открыть',
  },
};

type DetailBackState = {
  from?: string;
  fromLabel?: string;
};

const isSafeInternalPath = (value: unknown): value is string =>
  typeof value === 'string' && value.startsWith('/') && !value.startsWith('//');

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { lang } = useI18n();
  const navigationState = location.state as DetailBackState | null;
  const L = labels[lang];
  const backPath = isSafeInternalPath(navigationState?.from) ? navigationState.from : '/services';
  const backLabel = navigationState?.fromLabel || L.back;
  const forwardedState: DetailBackState = { from: backPath, fromLabel: backLabel };
  const legacyRedirect =
    slug && Object.prototype.hasOwnProperty.call(serviceSlugRedirects, slug)
      ? serviceSlugRedirects[slug]
      : undefined;

  if (legacyRedirect) {
    return <Navigate to={`/services/${legacyRedirect}`} replace state={forwardedState} />;
  }

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <PageLayout>
        <SEO
          title="Service not found"
          description="The requested service page could not be found."
          lang={lang}
          noindex
          path={slug ? `/services/${slug}` : '/services'}
        />
        <div className="section-padding pt-40 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">404</h1>
          <Link to={backPath} className="mt-4 inline-block text-primary">
            {backLabel}
          </Link>
        </div>
      </PageLayout>
    );
  }

  const content = service.content[lang];
  const Icon = service.icon;
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  const nextContent = next.content[lang];

  const blocks = [
    { icon: HelpCircle, label: L.when, text: content.when, color: service.accent.from },
    { icon: Cog, label: L.what, text: content.what, color: service.accent.to },
    { icon: CheckCircle2, label: L.result, text: content.result, color: service.accent.from },
    { icon: TrendingUp, label: L.value, text: content.value, color: service.accent.to },
  ];

  return (
    <PageLayout>
      <SEO
        title={content.title}
        description={content.intro}
        lang={lang}
        path={`/services/${service.slug}`}
        structuredData={[
          createWebPageSchema({
            title: content.title,
            description: content.intro,
            lang,
            path: `/services/${service.slug}`,
          }),
          createServiceSchema({
            name: content.title,
            description: content.intro,
            lang,
            path: `/services/${service.slug}`,
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: L.back, path: '/services' },
            { name: content.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${service.accent.from}10 0%, transparent 70%)`,
          }}
        />
        <div className="mx-auto max-w-5xl px-6">
          <Link
            to={backPath}
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8"
          >
            <div className="flex items-center gap-5">
              <div
                className="font-heading text-6xl font-bold leading-none tabular-nums md:text-8xl"
                style={{
                  background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {service.number}
              </div>
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl md:h-20 md:w-20"
                style={{
                  background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})`,
                  boxShadow: `0 12px 32px ${service.accent.from}40`,
                }}
              >
                <Icon className="h-8 w-8 text-white md:h-10 md:w-10" />
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {content.title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {content.intro}
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2 md:gap-6">
          {blocks.map((block, blockIndex) => {
            const BlockIcon = block.icon;

            return (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blockIndex * 0.1 }}
                className="rounded-3xl p-7 transition-all duration-500 hover:shadow-xl md:p-9"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border) / 0.72)',
                  boxShadow: '0 12px 36px hsl(var(--foreground) / 0.08)',
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${block.color}, ${block.color}cc)`,
                      boxShadow: `0 6px 18px ${block.color}30`,
                    }}
                  >
                    <BlockIcon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">{block.label}</h2>
                </div>
                <p className="whitespace-pre-line text-[15px] leading-relaxed text-foreground/80 md:text-base">
                  {block.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2">
          <Link
            to="/contact"
            className="group block rounded-3xl p-8 text-white transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl md:p-10"
            style={{ background: `linear-gradient(135deg, ${service.accent.from}, ${service.accent.to})` }}
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest opacity-80">Proactive</div>
            <div
              className="mb-6 font-heading text-2xl font-bold leading-tight md:text-3xl"
              style={{ color: 'hsl(202, 100%, 11%)' }}
            >
              {L.cta}
            </div>
            <div
              className="inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-3"
              style={{ color: 'hsl(202, 100%, 11%)' }}
            >
              {L.cta} <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          <Link
            to={`/services/${next.slug}`}
            state={forwardedState}
            className="group block rounded-3xl p-8 transition-all duration-500 hover:shadow-xl md:p-10"
            style={{
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border) / 0.72)',
            }}
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{L.next}</div>
            <div className="mb-6 flex items-center gap-3">
              <span
                className="font-heading text-3xl font-bold tabular-nums"
                style={{
                  background: `linear-gradient(135deg, ${next.accent.from}, ${next.accent.to})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {next.number}
              </span>
              <div className="font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">
                {nextContent.title}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
              {L.open} <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetailPage;
