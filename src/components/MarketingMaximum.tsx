import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BookOpen, Clock3, GraduationCap, LayoutGrid, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import marketingMaximumLogo from '@/assets/marketing-maximum-logo.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n, type Language } from '@/lib/i18n';
import { createMainSectionState } from '@/lib/source-navigation';

const marketingMaximumTelegram = 'https://t.me/marketingmaximum_rasmiy';

const copy = {
  uz: {
    eyebrow: 'Marketing Maximum',
    title: 'Marketingni amaliy tizim sifatida o‘rgatadigan 2.5 oylik oflayn kurs',
    description:
      'Kurs marketingni faqat reklama yoki kontent sifatida emas, balki tahlil, strategiya, reja, ijro va nazoratdan iborat boshqaruv tizimi sifatida o‘rgatadi.',
    primary: 'Kurs haqida',
    secondary: 'Kursga yozilish',
    imageAlt: 'Marketing Maximum kursi logosi',
  },
  en: {
    eyebrow: 'Marketing Maximum',
    title: 'A 2.5-month offline course for learning marketing as a practical system',
    description:
      'The course teaches marketing not as ads or content alone, but as a management system built from analysis, strategy, planning, execution and control.',
    primary: 'About the course',
    secondary: 'Apply for the course',
    imageAlt: 'Marketing Maximum course logo',
  },
  ru: {
    eyebrow: 'Marketing Maximum',
    title: 'Офлайн-курс на 2,5 месяца, где маркетинг изучается как практическая система',
    description:
      'Курс показывает маркетинг не только как рекламу или контент, а как систему управления: анализ, стратегия, планирование, исполнение и контроль.',
    primary: 'О курсе',
    secondary: 'Записаться',
    imageAlt: 'Логотип курса Marketing Maximum',
  },
} satisfies Record<Language, Record<string, string>>;

const stats = [
  { value: '2.5', label: { uz: 'oy', en: 'months', ru: 'месяца' }, icon: Clock3 },
  { value: '9', label: { uz: 'modul', en: 'modules', ru: 'модулей' }, icon: LayoutGrid },
  { value: '16', label: { uz: 'dars', en: 'lessons', ru: 'занятий' }, icon: BookOpen },
  { value: 'Offline', label: { uz: 'format', en: 'format', ru: 'формат' }, icon: Users },
];

const highlights = [
  {
    icon: GraduationCap,
    title: { uz: 'Tizimli fikrlash', en: 'System thinking', ru: 'Системное мышление' },
    text: {
      uz: 'Marketingni biznes maqsadi, mahsulot va mijoz qarori bilan bog‘lab ko‘rish.',
      en: 'Connecting marketing to business goals, product value and customer decisions.',
      ru: 'Связь маркетинга с бизнес-целью, ценностью продукта и решением клиента.',
    },
  },
  {
    icon: BadgeCheck,
    title: { uz: 'Amaliy frameworklar', en: 'Practical frameworks', ru: 'Практические фреймворки' },
    text: {
      uz: 'Tahlil, strategiya, KPI, byudjet va kampaniyalarni real vazifalarda ishlatish.',
      en: 'Using analysis, strategy, KPI, budget and campaigns on real tasks.',
      ru: 'Применение анализа, стратегии, KPI, бюджета и кампаний на реальных задачах.',
    },
  },
];

const MarketingMaximum = () => {
  const { lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const text = copy[lang];
  const academyPageState = createMainSectionState('marketing-maximum', lang);

  return (
    <section id="marketing-maximum" className="section-deferred relative overflow-hidden bg-secondary py-24 text-secondary-foreground md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 10%, hsla(166, 75%, 61%, 0.16) 0%, transparent 68%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:gap-12">
        <motion.div {...getMotionProps({ distance: 24, duration: 0.45 })} className="min-w-0">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsla(166, 75%, 61%, 0.12)',
              color: 'hsl(166, 75%, 61%)',
              border: '1px solid hsla(166, 75%, 61%, 0.22)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {text.eyebrow}
          </span>

          <h2 className="mt-6 max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {text.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {text.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title[lang]} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{item.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text[lang]}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/academy"
              state={academyPageState}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                color: 'hsl(202, 100%, 11%)',
              }}
            >
              {text.primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={marketingMaximumTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition-all duration-300 hover:border-primary/60 hover:text-primary"
            >
              {text.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div {...getMotionProps({ axis: 'x', distance: 22, duration: 0.45, delay: 0.12 })} className="relative min-w-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(185,255,245,0.76))] p-7 shadow-2xl shadow-black/20 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.22),transparent_45%)]" />
            <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded-[1.5rem] border border-[#00364a]/10 bg-white/45 p-6">
              <img
                src={marketingMaximumLogo}
                alt={text.imageAlt}
                className="max-h-[72%] w-full object-contain drop-shadow-[0_16px_34px_rgba(0,37,58,0.18)]"
              />
            </div>
            <div className="relative mt-5 text-center">
              <p className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-[#00364a]/70">
                Marketing Maximum
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.value} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="break-words font-heading text-xl font-bold leading-tight sm:text-2xl">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{item.label[lang]}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingMaximum;
