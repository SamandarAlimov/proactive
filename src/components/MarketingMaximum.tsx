import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, BookOpen, Clock3, GraduationCap, LayoutGrid, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import academySpeaker from '@/assets/academy-speaker.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useI18n, type Language } from '@/lib/i18n';

const copy = {
  uz: {
    eyebrow: 'Marketing Maximum',
    title: 'Marketingni amaliy tizim sifatida o‘rgatadigan 2.5 oylik oflayn kurs',
    description:
      'Kurs marketingni faqat reklama yoki kontent sifatida emas, balki tahlil, strategiya, reja, ijro va nazoratdan iborat boshqaruv tizimi sifatida o‘rgatadi.',
    primary: 'Kurs haqida',
    secondary: 'Kursga yozilish',
    imageAlt: "Marketing Maximum kursi spikeri",
  },
  en: {
    eyebrow: 'Marketing Maximum',
    title: 'A 2.5-month offline course for learning marketing as a practical system',
    description:
      'The course teaches marketing not as ads or content alone, but as a management system built from analysis, strategy, planning, execution and control.',
    primary: 'About the course',
    secondary: 'Apply for the course',
    imageAlt: 'Marketing Maximum course speaker',
  },
  ru: {
    eyebrow: 'Marketing Maximum',
    title: 'Офлайн-курс на 2,5 месяца, где маркетинг изучается как практическая система',
    description:
      'Курс показывает маркетинг не только как рекламу или контент, а как систему управления: анализ, стратегия, планирование, исполнение и контроль.',
    primary: 'О курсе',
    secondary: 'Записаться',
    imageAlt: 'Спикер курса Marketing Maximum',
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

  return (
    <section id="marketing-maximum" className="section-deferred relative overflow-hidden bg-secondary py-24 text-secondary-foreground md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 10%, hsla(166, 75%, 61%, 0.16) 0%, transparent 68%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)]">
        <motion.div {...getMotionProps({ distance: 32, duration: 0.6 })}>
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
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            {text.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title[lang]} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{item.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text[lang]}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/academy"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                color: 'hsl(202, 100%, 11%)',
              }}
            >
              {text.primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition-all duration-300 hover:border-primary/60 hover:text-primary"
            >
              {text.secondary}
            </Link>
          </div>
        </motion.div>

        <motion.div {...getMotionProps({ axis: 'x', distance: 32, duration: 0.7, delay: 0.15 })} className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
            <img src={academySpeaker} alt={text.imageAlt} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.value} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="font-heading text-2xl font-bold">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/56">{item.label[lang]}</div>
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
