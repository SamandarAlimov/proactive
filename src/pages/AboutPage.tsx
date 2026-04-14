import { motion } from 'framer-motion';
import { Award, Instagram, Send, Target, TrendingUp, Users } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import founderHabibullo from '@/assets/founder-habibullo.png';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import { useI18n } from '@/lib/i18n';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';

type PageLang = 'uz' | 'en' | 'ru';

const aboutExtendedContent = {
  uz: {
    missionTitle: 'Bizning missiya',
    missionText:
      "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'shish. O'zbekistonda xalqaro standartlar bilan ishlaydigan marketing bo'limlarini tuzishga yordam berish, andozalarini qo'yish.",
    outlookTitle: 'Istiqbol rejamiz',
    outlookText:
      "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'sha olishimiz uchun jamoamizning har bir a'zosi shu standartlarni bilishi, hamkorlar bilan ishlash jarayonida direktorlar kengashida bemalol o'z fikrini bildira oladigan darajada ilmga ega bo'lishi zarur. Bir so'z bilan aytganda, xalqaro darajadagi mutaxassislar jamoasiga aylanish.",
    valuesTitle: 'Qadriyatlarimiz',
    values: [
      {
        title: "Proaktiv bo'ling",
        body: "Proaktiv insonlar hayotda sodir bo'layotgan voqealarni boshqarishga harakat qiladi. Ular shikoyat qilmaydi, bahona izlamaydi, aksincha o'z harakatlari bilan natijani o'zgartirishga urinadi. Ular 'Men nima qila olaman?' degan savolni doimiy berib yashashadi. O'z hayotingiz, amallaringiz uchun mas'uliyatni oling. Proaktivlik bu ta'sir doirasida harakat qilish, o'z tasir doirasida mas'uliyatni olish, ta'sir ko'rsata olmaydigan holatlar, vaziyatlar uchun ortiqcha xavotir va tashvishga berilmaslik. Proaktiv bo'lish — muammo kutmasdan yechim taklif qilish!",
      },
      {
        title: 'Yakunni yodda tutib ish boshlang',
        body: "Har bir harakatni 'qilayotganida \"Men buni nima uchun qilyapman?\"' degan savolni o'zingizga bering. Har doim bu ishni nimaga qilayotganingiz yodda bo'lsin! Asl yakunda qanday natija tomon harakat qilayotganingiz? Qanaqa natijaga erishmoqchi edingiz? Harakatlar tasodifiy emas, yo'naltirilgan bo'lishi zarur.",
      },
      {
        title: 'Eng muhimidan boshlang',
        body: "Bandlik muhim emas. Muhimi — muhim ishlarni birinchi qilish. Har kuni ko'p ishlash emas, eng katta natija beradigan ishlarga vaqt ajratish kerak. Hammasini qilishga urunmang. Muhim va foydali ishlarni birinchi bajarish kerak. 'Sho'shilin' deb ko'rinadigan ishlar har doim ham 'muhim' bo'lavermaydi.",
      },
      {
        title: '"Win-Win" ruhida o‘ylang',
        body: "Hayot raqobat emas, hamkorlikdir. Boshqalarni mag'lub etib, siz yutgan bo'lmaysiz. Siz ham yuting, boshqalar ham manfaat ko'rsin. Hamkorlikda, adolatli va ikki tomon ham manfaat ko'radigan natijaga erishish yondashuvini izlang.",
      },
      {
        title: "Tushuning va tushunarli bo'ling",
        body: "Suhbatdoshingizni tinglash orqali ularning fikrini to'liq anglash, keyin o'z fikringizni bildirib, haqiqiy muloqot qilish. Odamlarni tushunishga harakat qiling, keyin ularga o'z fikringizni tushuntiring. Ko'pchilik gapirishga shoshadi, lekin eshitmaydi.",
      },
      {
        title: 'Sinergiyaga erishing',
        body: "Yakkama-yakka ishlash emas, jamoa bilan sinxronlashish. Turli odamlar bilan hamkorlik qilganda yakka-yolg'iz erishib bo'lmaydigan natijalarga erishasiz. Farqli fikrlar — kuch, to'qnashuv emas.",
      },
      {
        title: 'Arrani charxlang',
        body: "Tanangiz, ongingiz, ruhingiz va munosabatlaringizni doim rivojlantirib boring. O'z ustida doimiy ishlash — muvaffaqiyatning barqaror asosidir.",
      },
    ],
    positioningTitle: 'Pozitsiyamiz',
    positioningLead: 'Biznesdagi qisqa va uzoq muddatli (strategik) vazifalar bor. Aynan ',
    positioningStrongOne: 'strategik marketing vazifalarni bajaruvchi',
    positioningMiddle: ', ularga uzoq muddatda yo‘llarini belgilab beruvchi agentlik. Mijozlar bilan uzoq muddatda, ',
    positioningStrongTwo: 'strategik hamkor',
    positioningEnd: '.',
    audienceTitle: "Maqsadli auditoriya",
    audienceItems: [
      "Mijozda qisqa (performance marketing bilan hal bo'ladigan) vazifalar emas, uzoq muddatli strategik vazifalar bo'lishi kerak",
      "Mijoz uzoq muddatli vazifalarni ham muhim deb bilishi kerak",
      "Har qanday ishni o'zini mutaxassislariga topshirishim kerak degan fikr bo'lishi kerak.",
      "Mijozda missiya bo'lishi kerak",
      "1 yildan ortiq muddatda maqsadlari bo'lishi kerak",
      "O'sishga rivojlanishga tayyor bo'lishi kerak",
      "Sherikchilikdagi biznes bo'lmasligi, bo'lsa ham sherikchilik masalalari aniq belgilab olingan bo'lishi kerak",
      "Tovlamachilik, harom qilingan sohalar, odamlarga zarar beradigan faoliyatlar bilan shug'ullanmasligi kerak.",
    ],
  },
  en: {
    missionTitle: 'Our Mission',
    missionText:
      "To contribute to businesses in Uzbekistan operating their marketing according to international standards. To help build marketing departments that work on those standards and establish clear operating benchmarks in the market.",
    outlookTitle: 'Our Long-Term Outlook',
    outlookText:
      "To make that contribution real, every member of our team must understand those standards and possess enough professional depth to confidently express their point of view even in board-level discussions while working with partners. In short, our goal is to become a team of internationally capable specialists.",
    valuesTitle: 'Our Values',
    values: [
      {
        title: 'Be Proactive',
        body: 'Proactive people try to influence events instead of merely reacting to them. They do not complain or look for excuses. They ask, “What can I do?” and take responsibility for their actions, decisions, and sphere of impact. To be proactive means offering solutions before the problem becomes critical.',
      },
      {
        title: 'Begin with the End in Mind',
        body: 'Start every action by asking why you are doing it. Keep the intended result visible. What exact outcome are you moving toward? What did you originally want to achieve? Work should not be random — it should be directed.',
      },
      {
        title: 'Start from What Matters Most',
        body: 'Being busy is not the same as doing important work. Prioritize the actions that create the greatest result. Do not try to do everything. Work on what is truly valuable first, not what only feels urgent.',
      },
      {
        title: 'Think in a Win-Win Way',
        body: 'Business is not only competition — it is also partnership. A strong outcome is one where both sides benefit. Seek fair decisions, collaborative results, and relationships built on mutual value.',
      },
      {
        title: 'Seek to Understand and Be Understood',
        body: 'Real communication begins with listening deeply. First understand the other side, then explain your own position clearly. Many people rush to speak; fewer take the time to truly hear.',
      },
      {
        title: 'Create Synergy',
        body: 'The point is not isolated effort, but synchronized teamwork. When different people work together well, they produce results that would be impossible alone. Difference in perspective is a strength.',
      },
      {
        title: 'Sharpen the Saw',
        body: 'Continuously develop your body, mind, spirit, and relationships. Sustainable growth comes from ongoing self-renewal, not from one-time effort.',
      },
    ],
    positioningTitle: 'Our Positioning',
    positioningLead: 'Businesses have short-term and long-term strategic tasks. We are the agency that executes ',
    positioningStrongOne: 'strategic marketing responsibilities',
    positioningMiddle: ', helps define the path forward over the long run, and works with clients as a lasting ',
    positioningStrongTwo: 'strategic partner',
    positioningEnd: '.',
    audienceTitle: 'Target Audience',
    audienceItems: [
      'Clients should have long-term strategic tasks, not only short-term issues that can be solved through performance marketing.',
      'Clients should recognize long-term strategic work as important.',
      'There should be a belief that each important function should be entrusted to the right specialists.',
      'The client should have a real mission.',
      'The client should have goals extending beyond one year.',
      'The client should be ready for growth and development.',
      'The business should ideally not be trapped in unclear partnership dynamics; if there is a partnership, responsibilities must be clearly defined.',
      'The business should not operate in exploitative, harmful, or ethically prohibited areas.',
    ],
  },
  ru: {
    missionTitle: 'Наша миссия',
    missionText:
      'Вносить вклад в то, чтобы бизнесы в Узбекистане выстраивали маркетинг по международным стандартам. Помогать создавать маркетинговые отделы, работающие по этим стандартам, и формировать для рынка понятные ориентиры.',
    outlookTitle: 'Наш долгосрочный ориентир',
    outlookText:
      'Чтобы этот вклад был реальным, каждый участник нашей команды должен знать эти стандарты и обладать таким уровнем знаний, чтобы уверенно высказывать свою позицию даже на уровне совета директоров при работе с партнерами. Иными словами, мы стремимся стать командой специалистов международного уровня.',
    valuesTitle: 'Наши ценности',
    values: [
      {
        title: 'Будьте проактивны',
        body: 'Проактивные люди пытаются влиять на происходящее, а не просто реагируют на него. Они не ищут оправдания, а спрашивают себя: «Что я могу сделать?» и берут ответственность за свои действия, решения и зону влияния. Быть проактивным — значит предлагать решение раньше, чем проблема станет критичной.',
      },
      {
        title: 'Начинайте с понимания финала',
        body: 'Любое действие стоит начинать с вопроса, зачем оно совершается. Важно помнить конечный результат: к чему именно вы идете и чего хотите добиться. Работа не должна быть случайной — она должна быть направленной.',
      },
      {
        title: 'Начинайте с самого важного',
        body: 'Занятость не равна важности. В первую очередь нужно делать то, что дает наибольший результат. Не пытайтесь сделать все сразу — сначала выполняйте действительно значимые задачи, а не те, что лишь выглядят срочными.',
      },
      {
        title: 'Думайте в логике Win-Win',
        body: 'Бизнес — это не только конкуренция, но и партнерство. Сильный результат возникает тогда, когда обе стороны получают ценность. Стремитесь к справедливым решениям и взаимовыгодным отношениям.',
      },
      {
        title: 'Сначала поймите, потом будьте поняты',
        body: 'Настоящая коммуникация начинается с глубокого слушания. Сначала важно понять собеседника, а затем ясно изложить собственную позицию. Многие спешат говорить, но гораздо реже действительно слушают.',
      },
      {
        title: 'Достигайте синергии',
        body: 'Смысл не в изолированной работе, а в синхронной командной работе. Когда разные люди грамотно сотрудничают, они достигают результата, которого невозможно получить в одиночку. Разные взгляды — это сила.',
      },
      {
        title: 'Постоянно обновляйтесь',
        body: 'Нужно системно развивать тело, мышление, внутреннее состояние и отношения. Устойчивый рост строится на регулярном обновлении себя, а не на разовом усилии.',
      },
    ],
    positioningTitle: 'Наше позиционирование',
    positioningLead: 'У бизнеса есть краткосрочные и долгосрочные стратегические задачи. Мы — агентство, которое берет на себя ',
    positioningStrongOne: 'стратегические маркетинговые задачи',
    positioningMiddle: ', помогает прокладывать путь на долгий срок и выстраивает отношения с клиентами как ',
    positioningStrongTwo: 'стратегический партнер',
    positioningEnd: '.',
    audienceTitle: 'Целевая аудитория',
    audienceItems: [
      'У клиента должны быть не только краткосрочные задачи, решаемые performance-маркетингом, но и долгосрочные стратегические цели.',
      'Клиент должен считать долгосрочные задачи важными.',
      'Должно быть понимание, что каждую значимую функцию нужно доверять профильным специалистам.',
      'У клиента должна быть миссия.',
      'У клиента должны быть цели на срок более одного года.',
      'Клиент должен быть готов к росту и развитию.',
      'Бизнес не должен находиться в неясной партнерской конструкции; если партнерство есть, роли и договоренности должны быть четко определены.',
      'Бизнес не должен работать в сферах, связанных с вредом для людей, запретной или неэтичной деятельностью.',
    ],
  },
} as const;

const AboutPage = () => {
  const { t, lang } = useI18n();
  const founderLang = (lang in founderProfile.intro ? lang : 'uz') as FounderLang;
  const pageLang = (lang in aboutExtendedContent ? lang : 'uz') as PageLang;
  const pageContent = aboutExtendedContent[pageLang];

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
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass-card-light rounded-2xl p-6">
                  <h3 className="mb-2 text-lg font-heading font-bold text-foreground">{pageContent.missionTitle}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{pageContent.missionText}</p>
                </div>
                <div className="glass-card-light rounded-2xl p-6">
                  <h3 className="mb-2 text-lg font-heading font-bold text-foreground">{pageContent.outlookTitle}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{pageContent.outlookText}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="glass-card-light aspect-square overflow-hidden rounded-3xl p-8">
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <img
                      src={proactiveLogo}
                      alt="Proactive Logo"
                      className="mx-auto mb-6 h-32 w-32 rounded-2xl object-cover shadow-lg"
                    />
                    <h3 className="mb-2 text-2xl font-heading font-bold text-foreground">Proactive</h3>
                    <p className="text-muted-foreground">Marketing strategiyasi • Brend platformasi • Konsultatsiya</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-2xl bg-primary opacity-20" />
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[#083b57] text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="border-b border-white/20 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">{pageContent.missionTitle}</h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-5xl text-3xl font-medium leading-tight text-primary md:text-4xl lg:text-[3.35rem]">
                {pageContent.missionText}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mb-16 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.outlookTitle}</h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-6xl text-2xl leading-tight text-foreground md:text-3xl lg:text-[3.1rem]">
                {pageContent.outlookText}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-16 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.valuesTitle}</h2>
            </div>
            <div className="grid gap-x-8 gap-y-10 px-8 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3">
              {pageContent.values.map((value, index) => (
                <div key={value.title} className={index === pageContent.values.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
                  <h3 className="text-[1.8rem] font-heading font-bold leading-tight text-foreground">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{value.body}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="mb-16 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.positioningTitle}</h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-6xl text-2xl leading-tight text-foreground md:text-3xl lg:text-[3.15rem]">
                {pageContent.positioningLead}
                <strong className="font-semibold">{pageContent.positioningStrongOne}</strong>
                {pageContent.positioningMiddle}
                <strong className="font-semibold">{pageContent.positioningStrongTwo}</strong>
                {pageContent.positioningEnd}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.41 }}
            className="mb-20 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.audienceTitle}</h2>
            </div>
            <div className="px-8 py-8 md:px-12 md:py-10">
              <ul className="space-y-4">
                {pageContent.audienceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-foreground/90">
                    <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
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

                <FounderSpecialtyChips tags={founderProfile.tags[founderLang]} className="mt-6" />

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
