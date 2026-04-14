import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LayoutGrid,
  LineChart,
  Send,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import academySpeaker from '@/assets/academy-speaker.jpg';

type LangKey = 'uz' | 'en' | 'ru';
type Localized = Record<LangKey, string>;

const pageCopy: Record<LangKey, Record<string, string>> = {
  uz: {
    eyebrow: 'Marketing Maximum',
    title: 'Amaliy marketingni tizimga aylantiradigan 2.5 oylik oflayn kurs.',
    description:
      "Kurs marketingni reklama darajasida emas, balki butun biznesni harakatga keltiruvchi boshqaruv tizimi sifatida o'rgatadi.",
    apply: "Kursga yozilish",
    modules: "Modullarni ko'rish",
    blueprintEyebrow: 'The Strategic Blueprint',
    blueprintTitle: 'Marketing faqat reklama emas, u butun biznesni harakatga keltiruvchi tizimdir.',
    blueprintDescription:
      "Tahlil qilish, strategiya tuzish, rejalashtirish va nazorat qilish o'rtasidagi uzviy bog'liqlikni amalda ko'rish va o'rganish.",
    blueprintSummary: 'Olingan bilimlarni yaxlit mexanizmga aylantirish kursning asosiy maqsadi.',
    who: 'Bu kurs aynan kimlar uchun?',
    directions: "16 dars qamrab oladigan 6 ta asosiy yo'nalish",
    map: '9 modulli strukturaviy xarita',
    mapDescription: "Modullar marketingni ketma-ket o'rganish uchun mantiqiy joylashtirilgan.",
    process: "O'quv jarayoni qanday o'tadi?",
    processDescription: 'Kurs 2.5 oy davom etadi va darslar uzluksiz amaliy mashqlar bilan birga olib boriladi.',
    speakerEyebrow: 'Spiker va kurs muallifi',
    speakerRole: 'Founder & CEO, marketolog, analitik, trener',
    brands: 'Bitiruvchilarimiz qayerlarda ishlaydi?',
    brandsDescription: "Retail, ta'lim, xizmat ko'rsatish, tibbiyot, agentlik va media yo'nalishlaridagi yetakchi brendlar.",
    quotes: "O'quvchilar fikri",
    quotesDescription: "Asosiy e'tirof: kurs marketingga kengroq va tizimli qarashni beradi.",
    finalTitle: "Marketingni tizimli o'rganishga tayyormisiz?",
    finalDescription: "Kurs dasturi, qatnashish formati va boshlanish sanasi bo'yicha batafsil ma'lumot olish uchun biz bilan bog'laning.",
    finalCta: "Bog'lanish",
  },
  en: {
    eyebrow: 'Marketing Maximum',
    title: 'A 2.5-month offline course that turns practical marketing into a working system.',
    description:
      'The course teaches marketing not as isolated promotion, but as a management system that moves the whole business.',
    apply: 'Apply for the course',
    modules: 'Explore modules',
    blueprintEyebrow: 'The Strategic Blueprint',
    blueprintTitle: 'Marketing is not just advertising. It is the system that drives the business.',
    blueprintDescription: 'You learn how analysis, strategy, planning, and control connect inside one practical workflow.',
    blueprintSummary: 'The main goal is to turn separate tools into one integrated operating mechanism.',
    who: 'Who is this course for?',
    directions: '6 core directions covered across 16 lessons',
    map: 'A 9-module structural map',
    mapDescription: 'Modules are arranged in a logical sequence so the system builds step by step.',
    process: 'How does the learning process work?',
    processDescription: 'The course runs for 2.5 months and every lesson is paired with practical application.',
    speakerEyebrow: 'Speaker and course author',
    speakerRole: 'Founder & CEO, marketer, analyst, trainer',
    brands: 'Where do our graduates work?',
    brandsDescription: 'Leading brands across retail, education, service, healthcare, agency, and media sectors.',
    quotes: 'Student feedback',
    quotesDescription: 'The core takeaway: the course builds a broader and more systematic marketing mindset.',
    finalTitle: 'Ready to learn marketing as a real system?',
    finalDescription: 'Reach out to get full details about the program, participation format, and the next intake.',
    finalCta: 'Contact us',
  },
  ru: {
    eyebrow: 'Marketing Maximum',
    title: 'Офлайн-курс на 2.5 месяца, который превращает практический маркетинг в цельную систему.',
    description:
      'Курс показывает маркетинг не как набор отдельных рекламных действий, а как систему управления, которая двигает весь бизнес.',
    apply: 'Записаться на курс',
    modules: 'Посмотреть модули',
    blueprintEyebrow: 'The Strategic Blueprint',
    blueprintTitle: 'Маркетинг - это не только реклама, а система, которая приводит в движение весь бизнес.',
    blueprintDescription: 'На курсе вы видите, как анализ, стратегия, планирование и контроль соединяются в одну практическую цепочку.',
    blueprintSummary: 'Главная цель курса - собрать разрозненные инструменты в единый рабочий механизм.',
    who: 'Для кого этот курс?',
    directions: '6 ключевых направлений в рамках 16 занятий',
    map: 'Структурная карта из 9 модулей',
    mapDescription: 'Модули расположены логично, чтобы выстраивать систему шаг за шагом.',
    process: 'Как проходит обучение?',
    processDescription: 'Курс длится 2.5 месяца, и каждое занятие сопровождается практической работой.',
    speakerEyebrow: 'Спикер и автор курса',
    speakerRole: 'Founder & CEO, маркетолог, аналитик, тренер',
    brands: 'Где работают наши выпускники?',
    brandsDescription: 'Ведущие бренды в сферах ритейла, образования, сервиса, медицины, агентского бизнеса и медиа.',
    quotes: 'Отзывы студентов',
    quotesDescription: 'Главный вывод: курс дает более широкое и системное понимание маркетинга.',
    finalTitle: 'Готовы изучать маркетинг как систему?',
    finalDescription: 'Свяжитесь с нами, чтобы получить подробности о программе, формате участия и ближайшем наборе.',
    finalCta: 'Связаться',
  },
};

const statItems = [
  { value: '9', label: { uz: 'Modul', en: 'Modules', ru: 'Модулей' }, icon: LayoutGrid },
  { value: '16', label: { uz: 'Dars', en: 'Lessons', ru: 'Занятий' }, icon: BookOpen },
  { value: 'Offline', label: { uz: 'Format', en: 'Format', ru: 'Формат' }, icon: Users },
  { value: 'Workbook + Certificate', label: { uz: 'Natija', en: 'Outcome', ru: 'Результат' }, icon: BadgeCheck },
];

const blueprintSteps = [
  { label: { uz: 'Tahlil', en: 'Analysis', ru: 'Анализ' }, icon: LineChart },
  { label: { uz: 'Strategiya', en: 'Strategy', ru: 'Стратегия' }, icon: Target },
  { label: { uz: 'Taktika', en: 'Tactics', ru: 'Тактика' }, icon: Workflow },
  { label: { uz: 'Nazorat', en: 'Control', ru: 'Контроль' }, icon: ClipboardList },
];

const audienceItems = [
  {
    title: { uz: 'Tadbirkorlar va biznes egalari', en: 'Entrepreneurs and business owners', ru: 'Предприниматели и владельцы бизнеса' },
    description: {
      uz: "Marketing jarayonlarini tushunish, jamoani to'g'ri boshqarish va byudjetni samarali taqsimlashni istaganlar uchun.",
      en: 'For those who want to understand marketing processes, manage teams better, and allocate budgets more effectively.',
      ru: 'Для тех, кто хочет понимать маркетинговые процессы, лучше управлять командой и эффективнее распределять бюджет.',
    },
    icon: BriefcaseBusiness,
  },
  {
    title: { uz: 'Amaliyotdagi marketologlar', en: 'Practicing marketers', ru: 'Практикующие маркетологи' },
    description: {
      uz: "O'z bilimlarini tizimlashtirish, tarqoq vositalardan yagona strategiyaga o'tish va professional darajasini oshirishni ko'zlaganlar.",
      en: 'For marketers who want to systematize their knowledge and move from scattered tools to one strategy.',
      ru: 'Для маркетологов, которые хотят систематизировать знания и перейти от разрозненных инструментов к единой стратегии.',
    },
    icon: LineChart,
  },
  {
    title: { uz: "Marketing rahbarlari va bo'lim boshliqlari", en: 'Marketing leads and department heads', ru: 'Руководители маркетинга и отделов' },
    description: {
      uz: "Jamoa ishini tashkil qilish, aniq KPI'lar qoidalari va strategik rejalashtirishni kuchaytirish uchun.",
      en: 'For those who need stronger team organization, clear KPI rules, and better strategic planning.',
      ru: 'Для тех, кому нужно усилить организацию команды, внедрить понятные KPI и улучшить стратегическое планирование.',
    },
    icon: Building2,
  },
  {
    title: { uz: "Marketingni tizimli o'rganmoqchi bo'lgan mutaxassislar", en: 'Specialists who want to study marketing systematically', ru: 'Специалисты, которые хотят изучать маркетинг системно' },
    description: {
      uz: "SMM, brending yoki savdo sohasida ishlab, marketingning to'liq manzarasini va amaliy frameworklarini o'zlashtirmoqchi bo'lganlar.",
      en: 'For specialists from SMM, branding, or sales who want the full picture and practical frameworks.',
      ru: 'Для специалистов из SMM, брендинга или продаж, которые хотят увидеть полную картину маркетинга.',
    },
    icon: GraduationCap,
  },
];

const directionItems = [
  { order: '01', title: { uz: 'Marketing asoslari', en: 'Marketing fundamentals', ru: 'Основы маркетинга' }, description: { uz: "Marketingga kirish, tarix, proaktiv yondashuv, marketolog roli.", en: 'Introduction to marketing, history, proactive thinking, and the role of the marketer.', ru: 'Введение в маркетинг, история, проактивный подход и роль маркетолога.' } },
  { order: '02', title: { uz: 'Tahlil', en: 'Analysis', ru: 'Анализ' }, description: { uz: "Bozor tahlili, raqobatchi, mijoz tahlili, VPC, JTBD, ma'lumot yig'ish.", en: 'Market, competitor, and customer analysis, plus VPC, JTBD, and data collection.', ru: 'Анализ рынка, конкурентов и клиента, а также VPC, JTBD и сбор данных.' } },
  { order: '03', title: { uz: 'Mijoz psixologiyasi', en: 'Customer psychology', ru: 'Психология клиента' }, description: { uz: 'CJM, CustDev, pozitsiyalash va mijoz oqimini boshqarish.', en: 'CJM, CustDev, positioning, and customer flow management.', ru: 'CJM, CustDev, позиционирование и управление клиентским потоком.' } },
  { order: '04', title: { uz: 'Mahsulot va qiymat', en: 'Product and value', ru: 'Продукт и ценность' }, description: { uz: 'Mahsulot tahlili, FAB, USP, 4P / 4C / 4E.', en: 'Product analysis, FAB, USP, and 4P / 4C / 4E frameworks.', ru: 'Анализ продукта, FAB, USP и фреймворки 4P / 4C / 4E.' } },
  { order: '05', title: { uz: 'Strategiya', en: 'Strategy', ru: 'Стратегия' }, description: { uz: 'SOSTAC, narxlash, Ansoff, 7P strategiyasi, marketing byudjeti.', en: 'SOSTAC, pricing, Ansoff, 7P strategy, and the marketing budget.', ru: 'SOSTAC, ценообразование, Ansoff, стратегия 7P и маркетинговый бюджет.' } },
  { order: '06', title: { uz: 'Ijro va nazorat', en: 'Execution and control', ru: 'Исполнение и контроль' }, description: { uz: "Eyzenhauer, Pareto, bo'lim qurish, Gantt, KPI, brend va kreativ.", en: 'Eisenhower, Pareto, team structure, Gantt, KPI, brand, and creative execution.', ru: 'Эйзенхауэр, Парето, построение отдела, Gantt, KPI, бренд и креатив.' } },
];

const stageItems = [
  {
    stage: { uz: 'I Bosqich (Poydevor va Tahlil)', en: 'Stage I (Foundation and analysis)', ru: 'Этап I (Основа и анализ)' },
    modules: [
      { uz: '1-Modul: Marketingga kirish', en: 'Module 1: Introduction to marketing', ru: 'Модуль 1: Введение в маркетинг' },
      { uz: '2-Modul: Korxona, mahsulot, mijoz', en: 'Module 2: Company, product, customer', ru: 'Модуль 2: Компания, продукт, клиент' },
      { uz: '3-Modul: Holat tahlili', en: 'Module 3: Situation analysis', ru: 'Модуль 3: Ситуационный анализ' },
    ],
  },
  {
    stage: { uz: 'II Bosqich (Maqsad va Strategiya)', en: 'Stage II (Goals and strategy)', ru: 'Этап II (Цели и стратегия)' },
    modules: [
      { uz: "4-Modul: Maqsadlarni qo'yish", en: 'Module 4: Goal setting', ru: 'Модуль 4: Постановка целей' },
      { uz: '5-Modul: Marketing strategiyasi', en: 'Module 5: Marketing strategy', ru: 'Модуль 5: Маркетинговая стратегия' },
      { uz: '6-Modul: Taktik rejalashtirish', en: 'Module 6: Tactical planning', ru: 'Модуль 6: Тактическое планирование' },
    ],
  },
  {
    stage: { uz: 'III Bosqich (Ijro va Nazorat)', en: 'Stage III (Execution and control)', ru: 'Этап III (Исполнение и контроль)' },
    modules: [
      { uz: '7-Modul: Harakatlar rejasi', en: 'Module 7: Action plan', ru: 'Модуль 7: План действий' },
      { uz: '8-Modul: Nazorat va KPI', en: 'Module 8: Control and KPI', ru: 'Модуль 8: Контроль и KPI' },
      { uz: '9-Modul: Brend va kreativ marketing', en: 'Module 9: Brand and creative marketing', ru: 'Модуль 9: Бренд и креативный маркетинг' },
    ],
  },
];

const processItems = [
  {
    title: { uz: '1-Qadam | Dars', en: 'Step 1 | Lesson', ru: 'Шаг 1 | Занятие' },
    description: { uz: "Nazariy va konseptual bilimlarni o'zlashtirish.", en: 'Absorbing theoretical and conceptual knowledge.', ru: 'Освоение теоретических и концептуальных знаний.' },
  },
  {
    title: { uz: '2-Qadam | Tahlil', en: 'Step 2 | Analysis', ru: 'Шаг 2 | Анализ' },
    description: { uz: "Real keyslar va bozor misolida o'rganish.", en: 'Learning through real cases and market examples.', ru: 'Изучение на реальных кейсах и рыночных примерах.' },
  },
  {
    title: { uz: '3-Qadam | Workshop', en: 'Step 3 | Workshop', ru: 'Шаг 3 | Workshop' },
    description: { uz: "Olingan bilimlarni amaliy mashqlarda sinab ko'rish.", en: 'Testing the learned frameworks through practical exercises.', ru: 'Проверка знаний на практических упражнениях.' },
  },
  {
    title: { uz: '4-Qadam | Tizimga tushirish', en: 'Step 4 | Systemization', ru: 'Шаг 4 | Систематизация' },
    description: { uz: "Natijalarni yakuniy marketing rejasiga kiritib borish.", en: 'Integrating results into a final marketing plan.', ru: 'Перенос результатов в итоговый маркетинговый план.' },
  },
];

const speakerFacts = [
  {
    title: { uz: 'Asosiy fakt', en: 'Key fact', ru: 'Ключевой факт' },
    text: {
      uz: '12+ yil marketing tajribasi. Proactive marketing agentligi va Cubic ekotizimi hamasoschisi.',
      en: '12+ years of marketing experience. Co-founder of Proactive marketing agency and the Cubic ecosystem.',
      ru: '12+ лет опыта в маркетинге. Сооснователь агентства Proactive и экосистемы Cubic.',
    },
  },
  {
    title: { uz: "Ta'lim", en: 'Education', ru: 'Образование' },
    text: {
      uz: 'TSUE (Bakalavr va Magistratura), UJC (PMP), Academy of Applied Arts (New Delhi - Advanced Diploma).',
      en: 'TSUE (Bachelor and Master), UJC (PMP), Academy of Applied Arts (New Delhi - Advanced Diploma).',
      ru: 'TSUE (бакалавриат и магистратура), UJC (PMP), Academy of Applied Arts (New Delhi - Advanced Diploma).',
    },
  },
  {
    title: { uz: 'Loyihalar', en: 'Projects', ru: 'Проекты' },
    text: {
      uz: 'MFactor, Shark, Lelas, Najot Nur, Credit Asia, Silver Rain, Duplextel.',
      en: 'MFactor, Shark, Lelas, Najot Nur, Credit Asia, Silver Rain, Duplextel.',
      ru: 'MFactor, Shark, Lelas, Najot Nur, Credit Asia, Silver Rain, Duplextel.',
    },
  },
];

const brandNames = ['KochA', 'leti', 'Zaman', 'IDU', 'Impuls Tibbiyot Instituti', 'Qarshi International University', 'Zahratun', 'PCG', 'President', 'Plan Baby.uz', "Registon O'quv Markazi", 'Milestone International School', 'JETSO', 'Ilm-u Ziyo', 'asno', 'OXUS University'];

const quotes = [
  {
    author: 'Sunnat Raxmonov',
    text: {
      uz: "Marketingdagi umumiy tushunchalarni tizimlashtirib, o'zimga ishonch berdi.",
      en: 'It systematized my overall understanding of marketing and gave me more confidence.',
      ru: 'Курс систематизировал мои общие представления о маркетинге и добавил уверенности.',
    },
  },
  {
    author: 'Nazima Akmalovna',
    text: {
      uz: "Strategiya, KPI va byudjetni qanday qurishni aniq tushunib oldim.",
      en: 'I clearly understood how to build strategy, KPI, and the budget.',
      ru: 'Я четко поняла, как выстраивать стратегию, KPI и бюджет.',
    },
  },
  {
    author: 'Mirjalol Urinboev',
    text: {
      uz: "Marketing o'ylaganimdan ancha keng tizim ekanini kurs davomida tushundim.",
      en: 'During the course I realized marketing is a much broader system than I expected.',
      ru: 'Во время курса я понял, что маркетинг - гораздо более широкая система, чем я представлял.',
    },
  },
];

const AcademyPage = () => {
  const { lang } = useI18n();
  const currentLang = (lang in pageCopy ? lang : 'uz') as LangKey;
  const text = pageCopy[currentLang];
  const tr = (value: Localized) => value[currentLang];

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#081625] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,248,214,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(103,248,214,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[#74f2d8]">{text.eyebrow}</span>
            <h1 className="mt-5 max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">{text.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/76 md:text-xl">{text.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-[#74f2d8] px-6 py-3 text-sm font-semibold text-[#082233] transition-transform duration-300 hover:-translate-y-0.5"><Send className="h-4 w-4" />{text.apply}</a>
              <a href="#academy-modules" className="inline-flex items-center gap-2 rounded-2xl border border-white/14 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"><ArrowRight className="h-4 w-4" />{text.modules}</a>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statItems.map((item, index) => (
              <motion.div key={item.value + tr(item.label)} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <item.icon className="h-6 w-6 text-[#74f2d8]" />
                <div className="mt-6 text-3xl font-heading font-bold md:text-4xl">{item.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.22em] text-white/60">{tr(item.label)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">{text.blueprintEyebrow}</span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">{text.blueprintTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{text.blueprintDescription}</p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">{text.blueprintSummary}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-4 md:grid-cols-2">
            {blueprintSteps.map((step, index) => (
              <div key={tr(step.label)} className="rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 text-primary">
                  <step.icon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">{tr(step.label)}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl font-heading text-3xl font-bold text-foreground md:text-5xl">{text.who}</motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {audienceItems.map((item, index) => (
              <motion.div key={tr(item.title)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[1.75rem] border border-border/70 bg-card p-7">
                <item.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">{tr(item.title)}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tr(item.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="academy-modules" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">{text.directions}</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {directionItems.map((item, index) => (
              <motion.div key={item.order} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-[1.9rem] border border-border/70 bg-card p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
                <div className="text-[3.25rem] font-heading font-bold leading-none tracking-[-0.08em] text-primary/85">{item.order}</div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">{tr(item.title)}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tr(item.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081625] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">{text.map}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/72">{text.mapDescription}</p>
          </motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {stageItems.map((stage, index) => (
              <motion.div key={tr(stage.stage)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#74f2d8]">{tr(stage.stage)}</span>
                <div className="mt-6 space-y-3">
                  {stage.modules.map((module) => (
                    <div key={tr(module)} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#74f2d8]" />
                      <span className="text-sm leading-relaxed text-white/86">{tr(module)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">{text.process}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{text.processDescription}</p>
          </motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {processItems.map((item, index) => (
              <motion.div key={tr(item.title)} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[1.75rem] border border-border/70 bg-card p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">0{index + 1}</div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">{tr(item.title)}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tr(item.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.86fr_1.14fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-border/60 bg-card">
            <img src={academySpeaker} alt="Habibullo Sa'dullayev" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">{text.speakerEyebrow}</span>
            <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-5xl">Habibullo Sa'dullayev</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">{text.speakerRole}</p>
            <div className="mt-8 space-y-4">
              {speakerFacts.map((fact) => (
                <div key={tr(fact.title)} className="rounded-[1.5rem] border border-border/70 bg-card p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">{tr(fact.title)}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tr(fact.text)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">{text.brands}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{text.brandsDescription}</p>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-3">
            {brandNames.map((brand) => (
              <div key={brand} className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground/84">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081625] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">{text.quotes}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/74">{text.quotesDescription}</p>
          </motion.div>
          <div className="mt-12 space-y-5">
            {quotes.map((quote, index) => (
              <motion.div key={quote.author} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-7 md:px-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <p className="max-w-4xl text-xl leading-relaxed md:text-2xl">{tr(quote.text)}</p>
                  <span className="text-base font-medium text-[#74f2d8] md:text-lg">- {quote.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2.25rem] border border-border/70 bg-card px-8 py-14 shadow-[0_24px_80px_rgba(0,0,0,0.06)] md:px-14">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-6 font-heading text-3xl font-bold text-foreground md:text-5xl">{text.finalTitle}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{text.finalDescription}</p>
            <a href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"><Send className="h-4 w-4" />{text.finalCta}</a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AcademyPage;
