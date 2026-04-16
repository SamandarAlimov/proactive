import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Instagram,
  Send,
} from 'lucide-react';

import PageLayout from '@/components/PageLayout';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';
import founderHabibullo from '@/assets/founder-habibullo.png';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import { useI18n } from '@/lib/i18n';
import { premiumRevealTransition, revealViewport } from '@/lib/motion';

type PageLang = 'uz' | 'en' | 'ru';

type FactItem = {
  label: string;
  value: string;
  icon: typeof CalendarDays;
};

const aboutPageContent: Record<
  PageLang,
  {
    eyebrow: string;
    heroStatement: string;
    heroDescription: string;
    foundedLabel: string;
    foundedValue: string;
    approachLabel: string;
    approachValue: string;
    partnerLabel: string;
    partnerValue: string;
    founderLabel: string;
    missionTitle: string;
    missionText: string;
    outlookTitle: string;
    outlookText: string;
    audienceTitle: string;
    audienceLead: string;
    audienceItems: string[];
  }
> = {
  uz: {
    eyebrow: 'Strategik marketing agentligi',
    heroStatement:
      "Proactive O'zbekistondagi bizneslar uchun uzoq muddatli strategik marketing tizimlarini quradigan hamkor.",
    heroDescription:
      "Biz marketingni alohida kampaniyalar yig'indisi sifatida emas, biznesning o'sishiga xizmat qiladigan boshqaruv tizimi sifatida ko'ramiz. Shu sababli Proactive mijozlar bilan qisqa muddatli ijrochi emas, uzoq muddatli strategik hamkor sifatida ishlaydi.",
    foundedLabel: 'Asos solingan',
    foundedValue: '12.12.2022',
    approachLabel: 'Yondashuv',
    approachValue: 'Strategiya, tahlil va tizim',
    partnerLabel: 'Rolimiz',
    partnerValue: 'Uzoq muddatli strategik hamkor',
    founderLabel: 'Asoschi',
    missionTitle: 'Bizning missiya',
    missionText:
      "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'shish. O'zbekistonda xalqaro standartlar bilan ishlaydigan marketing bo'limlarini tuzishga yordam berish, andozalarini qo'yish.",
    outlookTitle: 'Istiqbol rejamiz',
    outlookText:
      "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'sha olishimiz uchun jamoamizning har bir a'zosi shu standartlarni bilishi, hamkorlar bilan ishlash jarayonida direktorlar kengashida bemalol o'z fikrini bildira oladigan darajada ilmga ega bo'lishi zarur. Bir so'z bilan aytganda, xalqaro darajadagi mutaxassislar jamoasiga aylanish.",
    audienceTitle: 'Maqsadli auditoriya',
    audienceLead: "Biz bilan ishlashga tayyor bizneslarda quyidagi asoslar bo'lishi kerak:",
    audienceItems: [
      "Mijozda qisqa performance vazifalar emas, uzoq muddatli strategik vazifalar bo'lishi kerak.",
      "Mijoz uzoq muddatli vazifalarni ham muhim deb bilishi kerak.",
      "Har qanday ishni o'z mutaxassislariga topshirish kerak degan fikr bo'lishi zarur.",
      "Mijozda missiya bo'lishi kerak.",
      "Kamida bir yildan ortiq muddatga mo'ljallangan maqsadlari bo'lishi kerak.",
      "O'sishga va rivojlanishga tayyor bo'lishi kerak.",
      "Sherikchilikdagi biznes bo'lmasligi yoki bo'lsa ham masalalari aniq belgilangan bo'lishi kerak.",
      "Tovlamachilik, zararli yoki harom qilingan yo'nalishlar bilan shug'ullanmasligi kerak.",
    ],
  },
  en: {
    eyebrow: 'Strategy-led marketing agency',
    heroStatement:
      'Proactive is a long-term strategic marketing partner for businesses building stronger systems in Uzbekistan.',
    heroDescription:
      'We do not treat marketing as a collection of campaigns. We treat it as a business system that guides growth, decision-making, and sustainable positioning. That is why we work as a strategic partner rather than a short-term executor.',
    foundedLabel: 'Founded',
    foundedValue: '12.12.2022',
    approachLabel: 'Approach',
    approachValue: 'Strategy, analysis, and systems',
    partnerLabel: 'Role',
    partnerValue: 'Long-term strategic partner',
    founderLabel: 'Founder',
    missionTitle: 'Our Mission',
    missionText:
      'To contribute to businesses in Uzbekistan operating their marketing according to international standards. To help establish marketing departments that work on those standards and create clear benchmarks in the market.',
    outlookTitle: 'Our Outlook',
    outlookText:
      'To make that contribution real, every member of our team must understand those standards and have the professional depth to confidently contribute even in board-level discussions while working with partners. In short, we aim to become a team of internationally capable specialists.',
    audienceTitle: 'Target Audience',
    audienceLead: 'The businesses we work with should be ready for these foundations:',
    audienceItems: [
      'They should have long-term strategic tasks, not only short-term performance needs.',
      'They should consider long-term work important.',
      'They should believe that key work belongs in the hands of specialists.',
      'They should have a mission.',
      'They should have goals extending beyond one year.',
      'They should be ready for growth and development.',
      'Partnership structures should be clear and well-defined.',
      'They should not operate in harmful, exploitative, or ethically prohibited fields.',
    ],
  },
  ru: {
    eyebrow: 'Агентство стратегического маркетинга',
    heroStatement:
      'Proactive — это долгосрочный стратегический маркетинговый партнер для бизнеса в Узбекистане.',
    heroDescription:
      'Мы рассматриваем маркетинг не как набор разрозненных кампаний, а как систему, которая помогает бизнесу расти, принимать решения и выстраивать сильное позиционирование. Поэтому мы работаем не как краткосрочный исполнитель, а как стратегический партнер.',
    foundedLabel: 'Основано',
    foundedValue: '12.12.2022',
    approachLabel: 'Подход',
    approachValue: 'Стратегия, аналитика и система',
    partnerLabel: 'Роль',
    partnerValue: 'Долгосрочный стратегический партнер',
    founderLabel: 'Основатель',
    missionTitle: 'Наша миссия',
    missionText:
      'Вносить вклад в то, чтобы бизнесы в Узбекистане выстраивали маркетинг по международным стандартам. Помогать создавать маркетинговые отделы, работающие по этим стандартам, и формировать понятные ориентиры для рынка.',
    outlookTitle: 'Наш ориентир',
    outlookText:
      'Чтобы этот вклад был реальным, каждый участник нашей команды должен знать эти стандарты и обладать достаточной глубиной знаний, чтобы уверенно высказывать позицию даже на уровне совета директоров при работе с партнерами. Иными словами, мы стремимся стать командой специалистов международного уровня.',
    audienceTitle: 'Целевая аудитория',
    audienceLead: 'Бизнесы, с которыми нам по пути, должны быть готовы к следующим основаниям:',
    audienceItems: [
      'У клиента должны быть не только краткосрочные performance-задачи, но и долгосрочные стратегические цели.',
      'Клиент должен считать долгосрочную работу важной.',
      'Должно быть понимание, что значимые функции нужно доверять специалистам.',
      'У клиента должна быть миссия.',
      'Цели должны быть рассчитаны более чем на один год.',
      'Клиент должен быть готов к росту и развитию.',
      'Партнерская конструкция должна быть понятной и заранее определенной.',
      'Бизнес не должен работать в вредных, неэтичных или запрещенных направлениях.',
    ],
  },
};

const surfaceMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: premiumRevealTransition,
} as const;

const AboutPage = () => {
  const { t, lang } = useI18n();
  const founderLang = (lang in founderProfile.intro ? lang : 'uz') as FounderLang;
  const pageLang = (lang in aboutPageContent ? lang : 'uz') as PageLang;
  const content = aboutPageContent[pageLang];

  const facts: FactItem[] = [
    { label: content.foundedLabel, value: content.foundedValue, icon: CalendarDays },
    { label: content.approachLabel, value: content.approachValue, icon: Compass },
    { label: content.partnerLabel, value: content.partnerValue, icon: ArrowUpRight },
  ];

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(82,230,200,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 font-brand text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                {content.eyebrow}
              </span>

              <h1 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,6rem)] font-heading font-bold leading-[0.92] tracking-[-0.04em] text-white text-balance">
                {t.about.title}
              </h1>

              <p className="mt-7 max-w-4xl text-[clamp(1.35rem,2.6vw,2.5rem)] font-medium leading-[1.06] text-primary text-balance">
                {content.heroStatement}
              </p>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                {content.heroDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-4"
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <fact.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="font-brand text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50">
                        {fact.label}
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-tight text-white">
                        {fact.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid gap-8">
            <motion.div
              {...surfaceMotion}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-[#f3efe9] dark:bg-[#141414]">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/[0.03]" />
                  <img
                    src={founderHabibullo}
                    alt={founderProfile.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 md:p-10">
                  <span className="font-brand text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {content.founderLabel}
                  </span>

                  <h2 className="mt-5 text-3xl font-heading font-bold tracking-tight text-foreground md:text-4xl">
                    {founderProfile.name}
                  </h2>

                  <p className="mt-2 font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {founderProfile.role[founderLang]}
                  </p>

                  <FounderSpecialtyChips
                    tags={founderProfile.tags[founderLang]}
                    className="mt-6"
                  />

                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                    {founderProfile.summary[founderLang]}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={founderProfile.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-brand text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <Send className="h-4 w-4" />
                      t.me/habibullo_sadulloyev
                    </a>

                    <a
                      href={founderProfile.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2.5 font-brand text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" />
                      @habibullo_sadulloyev
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              {...surfaceMotion}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#083b57] text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
            >
              <div className="border-b border-white/15 px-7 py-6 md:px-10">
                <h2 className="text-2xl font-heading font-bold md:text-3xl">
                  {content.missionTitle}
                </h2>
              </div>

              <div className="p-7 md:p-10">
                <p className="text-[clamp(1.5rem,3vw,2.6rem)] font-medium leading-[1.08] text-primary text-balance">
                  {content.missionText}
                </p>
              </div>
            </motion.section>

            <motion.section
              {...surfaceMotion}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.12 }}
              className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-7 py-6 md:px-10">
                <h2 className="text-2xl font-heading font-bold text-foreground md:text-3xl">
                  {content.outlookTitle}
                </h2>
              </div>

              <div className="p-7 md:p-10">
                <p className="text-lg leading-8 text-foreground/90 md:text-[1.55rem] md:leading-[1.45]">
                  {content.outlookText}
                </p>
              </div>
            </motion.section>
          </div>

          <motion.section
            {...surfaceMotion}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.18 }}
            className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-7 py-6 md:px-10">
              <h2 className="text-2xl font-heading font-bold text-foreground md:text-3xl">
                {content.audienceTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {content.audienceLead}
              </p>
            </div>

            <div className="space-y-5 p-7 md:p-10">
              {content.audienceItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base leading-8 text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
