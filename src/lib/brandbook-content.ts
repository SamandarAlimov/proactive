export type BrandbookLang = 'uz' | 'en' | 'ru';

export type LocalizedText = Record<BrandbookLang, string>;
export type LocalizedList = Record<BrandbookLang, string[]>;

type LocalizedCard = {
  title: LocalizedText;
  description: LocalizedText;
};

type LocalizedMilestone = {
  label: LocalizedText;
  text: LocalizedText;
};

export const siteContact = {
  phone: '+998 90 123 45 67',
  email: 'info@proactive.uz',
  instagram: 'https://www.instagram.com/proactive.agencyuz/',
  telegram: 'https://t.me/habibullo_sadulloyev',
} as const;

export const brandbookContent = {
  hero: {
    eyebrow: {
      uz: "O'zbekistondagi strategik marketing hamkori",
      en: 'Strategic marketing partner in Uzbekistan',
      ru: 'Стратегический маркетинговый партнер в Узбекистане',
    } satisfies LocalizedText,
    titleStart: {
      uz: 'Proactive — sizning',
      en: 'Proactive is your',
      ru: 'Proactive — ваш',
    } satisfies LocalizedText,
    titleHighlight: {
      uz: 'strategik',
      en: 'strategic',
      ru: 'стратегический',
    } satisfies LocalizedText,
    titleEnd: {
      uz: 'marketing hamkoringiz',
      en: 'marketing partner',
      ru: 'маркетинговый партнер',
    } satisfies LocalizedText,
    description: {
      uz: "Biznes marketingini xalqaro standartlar asosida tizimlashtiramiz: strategiya, brend platformasi, marketing bo'limi va uzoq muddatli o'sish yo'lini bir butun tizimga aylantiramiz.",
      en: 'We systemize business marketing around international standards by connecting strategy, brand platform, in-house marketing operations, and long-term growth into one working system.',
      ru: 'Мы системно выстраиваем маркетинг бизнеса по международным стандартам, соединяя стратегию, бренд-платформу, внутренний маркетинг и долгосрочный рост в одну рабочую систему.',
    } satisfies LocalizedText,
    primaryCta: {
      uz: "Strategik vazifani muhokama qilish",
      en: 'Discuss a strategic task',
      ru: 'Обсудить стратегическую задачу',
    } satisfies LocalizedText,
    secondaryCta: {
      uz: "Platformani ko'rish",
      en: 'Explore the platform',
      ru: 'Посмотреть платформу',
    } satisfies LocalizedText,
    trustedBy: {
      uz: "Bizga ishonch bildirganlar",
      en: 'Trusted by companies we work with',
      ru: 'Компании, которые нам доверяют',
    } satisfies LocalizedText,
  },
  homeAbout: {
    eyebrow: {
      uz: 'Platforma va yondashuv',
      en: 'Platform and approach',
      ru: 'Платформа и подход',
    } satisfies LocalizedText,
    title: {
      uz: "Marketingni tizimga aylantiradigan agentlik",
      en: 'An agency that turns marketing into a system',
      ru: 'Агентство, которое превращает маркетинг в систему',
    } satisfies LocalizedText,
    description: {
      uz: "Proactive — bizneslar uchun qisqa kampaniya emas, uzoq muddatli strategik marketing tizimini quradigan hamkor. Biz brand platforma, strategiya, kommunikatsiya va marketing bo'limini xalqaro standartlar asosida shakllantiramiz.",
      en: 'Proactive is not a short-term campaign vendor. We act as a long-term strategic partner that builds brand platform, strategy, communication, and in-house marketing capability on international standards.',
      ru: 'Proactive — не подрядчик для коротких кампаний, а долгосрочный стратегический партнер, который выстраивает бренд-платформу, стратегию, коммуникацию и внутреннюю маркетинговую функцию по международным стандартам.',
    } satisfies LocalizedText,
    brandCardTitle: {
      uz: 'Strategik marketing platformasi',
      en: 'Strategic marketing platform',
      ru: 'Платформа стратегического маркетинга',
    } satisfies LocalizedText,
    brandCardText: {
      uz: "Proactive — sizning strategik hamkoringiz.",
      en: 'Proactive is your strategic partner.',
      ru: 'Proactive — ваш стратегический партнер.',
    } satisfies LocalizedText,
  },
  footer: {
    description: {
      uz: "O'zbekistonda biznes marketingini xalqaro standartlar asosida quradigan strategik hamkor.",
      en: 'A strategic partner that helps businesses in Uzbekistan build marketing on international standards.',
      ru: 'Стратегический партнер, который помогает бизнесу в Узбекистане выстраивать маркетинг по международным стандартам.',
    } satisfies LocalizedText,
  },
  pageLeads: {
    services: {
      uz: "Biznesdagi uzoq muddatli strategik vazifalarni hal qilish uchun tuzilgan xizmatlar tizimi.",
      en: 'A focused service system built for long-term strategic marketing challenges inside the business.',
      ru: 'Система услуг, выстроенная для решения долгосрочных стратегических маркетинговых задач бизнеса.',
    } satisfies LocalizedText,
    projects: {
      uz: "Har bir loyiha strategiya, tizim va amaliy qarorlar nuqtasidan ishlab chiqiladi.",
      en: 'Every project is built through the lens of strategy, systems, and practical decision-making.',
      ru: 'Каждый проект выстраивается через призму стратегии, системы и практических решений.',
    } satisfies LocalizedText,
    team: {
      uz: "Kompleks marketingni xalqaro standartlar ruhida amalga oshiruvchi in-house mutaxassislar jamoasi.",
      en: 'An in-house team of specialists delivering comprehensive marketing in the spirit of international standards.',
      ru: 'In-house команда специалистов, которая реализует комплексный маркетинг в логике международных стандартов.',
    } satisfies LocalizedText,
    academy: {
      uz: "Marketingni reklama emas, boshqaruv tizimi sifatida o'rgatadigan amaliy ta'lim yo'nalishi.",
      en: 'A practical learning track that teaches marketing as a management system, not only as promotion.',
      ru: 'Практическое направление обучения, которое показывает маркетинг как систему управления, а не только как продвижение.',
    } satisfies LocalizedText,
    events: {
      uz: "Bozor, tajriba va strategik fikr almashinuviga xizmat qiladigan uchrashuvlar va formatlar.",
      en: 'Events and formats designed for market dialogue, shared experience, and strategic thinking.',
      ru: 'События и форматы для рыночного диалога, обмена опытом и стратегического мышления.',
    } satisfies LocalizedText,
    careers: {
      uz: "Proactive uzoq muddatli fikrlaydigan, jamoa bilan ishlaydigan va mas'uliyat oladigan mutaxassislarni izlaydi.",
      en: 'Proactive looks for specialists who think long-term, collaborate well, and take ownership.',
      ru: 'Proactive ищет специалистов, которые умеют мыслить в долгую, работать в команде и брать ответственность.',
    } satisfies LocalizedText,
    internship: {
      uz: "Marketingni tizimli o'rganish va real vazifalarda amaliyot qilishni istaganlar uchun kirish yo'li.",
      en: 'An entry point for people who want to study marketing systematically and practice on real tasks.',
      ru: 'Точка входа для тех, кто хочет изучать маркетинг системно и практиковаться на реальных задачах.',
    } satisfies LocalizedText,
    contact: {
      uz: "Qisqa kampaniya emas, uzoq muddatli strategik vazifalaringizni muhokama qilish uchun bog'laning.",
      en: 'Reach out when you need to discuss long-term strategic tasks, not just short-term campaign activity.',
      ru: 'Свяжитесь с нами, если хотите обсудить не только короткие кампании, а долгосрочные стратегические задачи.',
    } satisfies LocalizedText,
  },
  aboutPage: {
    platformTitle: {
      uz: 'Platforma nima?',
      en: 'What is the platform?',
      ru: 'Что такое платформа?',
    } satisfies LocalizedText,
    platformText: {
      uz: "Brand platforma — kompaniyaning kimligi, qadriyatlari, maqsadli auditoriyasi, toni va nimaga ishonishini tartibga soluvchi asosiy hujjat. U marketing, savdo va ichki jamoa uchun bitta mantiqiy yo'nalish beradi.",
      en: 'A brand platform is the core document that defines who the company is, what it values, whom it serves, what tone it uses, and what it believes in. It gives marketing, sales, and the internal team one coherent direction.',
      ru: 'Бренд-платформа — это базовый документ, который определяет, кто такая компания, во что она верит, какие ценности разделяет, для кого работает и каким тоном говорит. Он задает единое направление для маркетинга, продаж и внутренней команды.',
    } satisfies LocalizedText,
    forWhomTitle: {
      uz: 'Kimlar uchun?',
      en: 'Who is it for?',
      ru: 'Для кого это?',
    } satisfies LocalizedText,
    forWhomItems: [
      {
        title: {
          uz: 'Dizaynerlar',
          en: 'Designers',
          ru: 'Дизайнеры',
        },
        description: {
          uz: "Vizual tilni brendning qadriyati, xarakteri va pozitsiyasiga mos ushlab turish uchun.",
          en: 'To keep the visual language aligned with the brand’s values, character, and position.',
          ru: 'Чтобы визуальный язык соответствовал ценностям, характеру и позиционированию бренда.',
        },
      },
      {
        title: {
          uz: 'SMM va kontent jamoasi',
          en: 'SMM and content teams',
          ru: 'SMM и контент-команда',
        },
        description: {
          uz: "Kontent, xabar va chiqishlarda bir xil ohang hamda ma'no saqlanishi uchun.",
          en: 'To keep tone and meaning consistent across content, messaging, and platform activity.',
          ru: 'Чтобы сохранять единый тон и смысл во всем контенте, сообщениях и публикациях.',
        },
      },
      {
        title: {
          uz: 'Copywriterlar',
          en: 'Copywriters',
          ru: 'Копирайтеры',
        },
        description: {
          uz: "Brend nimani aytishi, nimani aytmasligi va qanday uslubda gapirishi kerakligini bilish uchun.",
          en: 'To understand what the brand should say, what it should avoid, and how it should speak.',
          ru: 'Чтобы понимать, что бренд должен говорить, чего избегать и каким стилем пользоваться.',
        },
      },
      {
        title: {
          uz: 'Savdo va operatorlar',
          en: 'Sales and operators',
          ru: 'Продажи и операторы',
        },
        description: {
          uz: "Mijoz bilan aloqa paytida xabar, va’da va yondashuv bir xil bo'lishi uchun.",
          en: 'So the promise, tone, and message stay consistent in customer communication.',
          ru: 'Чтобы обещание, тон и смысл были едиными в общении с клиентом.',
        },
      },
      {
        title: {
          uz: 'Reklama mutaxassislari',
          en: 'Advertising specialists',
          ru: 'Рекламные специалисты',
        },
        description: {
          uz: "Kreativ, offer va reklama xabarlarini strategik pozitsiyaga mos ushlab turish uchun.",
          en: 'To keep offers, creative direction, and ad messaging tied to the strategic position.',
          ru: 'Чтобы офферы, креатив и рекламные сообщения были связаны со стратегическим позиционированием.',
        },
      },
      {
        title: {
          uz: 'Rahbar va asoschilar',
          en: 'Leaders and founders',
          ru: 'Руководители и основатели',
        },
        description: {
          uz: "Qarorlar, prioritetlar va jamoaga beriladigan yo'nalish bir manbaga tayansin.",
          en: 'So decisions, priorities, and team direction are grounded in one shared source.',
          ru: 'Чтобы решения, приоритеты и направление для команды опирались на единый источник.',
        },
      },
    ] satisfies LocalizedCard[],
    useWhenTitle: {
      uz: 'Qachon foydalaniladi?',
      en: 'When is it used?',
      ru: 'Когда используется?',
    } satisfies LocalizedText,
    useWhenItems: {
      uz: [
        "Mijozga chiqadigan xabar, reklama yoki taklif tayyorlanganda",
        "Yangi mahsulot, yo'nalish yoki xizmat ishga tushirilganda",
        "Brend toni va kontent sifati notekis bo'lib qolganda",
        "Savdo jarayonida e'tiroz va tushuntirishlarni bir tizimga solish kerak bo'lganda",
        "Jamoaga yangi xodim qo'shilganda va onboarding kerak bo'lganda",
      ],
      en: [
        'When preparing customer-facing messages, campaigns, or offers',
        'When launching a new product, direction, or service',
        'When tone and content quality become inconsistent',
        'When sales objections and explanations need one repeatable logic',
        'When new team members need structured onboarding',
      ],
      ru: [
        'Когда готовятся сообщения, реклама или предложения для клиента',
        'Когда запускается новый продукт, направление или услуга',
        'Когда тон и качество контента начинают расходиться',
        'Когда возражения в продажах и объяснения нужно собрать в одну систему',
        'Когда новым участникам команды нужен понятный онбординг',
      ],
    } satisfies LocalizedList,
    useHowTitle: {
      uz: 'Qanday foydalaniladi?',
      en: 'How is it used?',
      ru: 'Как используется?',
    } satisfies LocalizedText,
    useHowItems: {
      uz: [
        "Avval kerakli bo'lim topiladi: auditoriya, qadriyat, ton yoki pozitsiya",
        "Keyin xabar yoki kreativ shu bo'limga suyanib moslashtiriladi",
        "Platforma copy-paste qilish uchun emas, qarorni to'g'ri qilish uchun ishlatiladi",
        "Brief, kontent reja, reklama va ichki review jarayonlarida muntazam reference bo'lib turadi",
      ],
      en: [
        'First identify the relevant section: audience, values, tone, or positioning',
        'Then adapt the message or creative direction through that section',
        'The platform is not for copy-paste repetition, but for better decision-making',
        'It should become a regular reference in briefs, content planning, advertising, and internal review',
      ],
      ru: [
        'Сначала выбирается нужный раздел: аудитория, ценности, тон или позиционирование',
        'Затем сообщение или креатив сверяется с этой логикой',
        'Платформа нужна не для механического копирования, а для правильных решений',
        'Она должна регулярно использоваться в брифах, контент-плане, рекламе и внутренних ревью',
      ],
    } satisfies LocalizedList,
    foundingTitle: {
      uz: 'Asos solinishi',
      en: 'How it was founded',
      ru: 'Основание',
    } satisfies LocalizedText,
    foundingText: {
      uz: "Proactive 12.12.2022 sanasida ishga tushgan. Nom Stiven Kovi tasvirlagan proaktivlik tushunchasidan olingan: bahona emas, mas'uliyat; kutish emas, harakat; muammo emas, yechim. Shu ruh keyinchalik butun agentlik yondashuviga aylangan.",
      en: 'Proactive was launched on December 12, 2022. The name comes from Stephen Covey’s idea of proactivity: responsibility instead of excuses, action instead of waiting, solutions instead of passive complaint. That mindset became the agency’s operating principle.',
      ru: 'Proactive был запущен 12.12.2022. Название выросло из идеи проактивности, описанной Стивеном Кови: ответственность вместо оправданий, действие вместо ожидания, решение вместо пассивной реакции. Этот подход стал принципом всей агентской работы.',
    } satisfies LocalizedText,
    archetypeTitle: {
      uz: 'Brend arxetipi',
      en: 'Brand archetype',
      ru: 'Архетип бренда',
    } satisfies LocalizedText,
    archetypeName: {
      uz: 'Donishmand',
      en: 'The Sage',
      ru: 'Мудрец',
    } satisfies LocalizedText,
    archetypeQuote: {
      uz: 'Haqiqat sizni ozod qiladi',
      en: 'The truth will set you free',
      ru: 'Истина сделает вас свободными',
    } satisfies LocalizedText,
    archetypeText: {
      uz: "Proactive uchun marketingning vazifasi shunchaki ko'rinish emas. U asl holatni ko'rish, sabablarni ajratish, noto'g'ri qarorlarni soddalashtirish va biznesga mantiqiy yo'l ko'rsatishdir. Shu sabab brand arxetipi — donishmand.",
      en: 'For Proactive, marketing is not only about visibility. It is about seeing reality clearly, separating causes from noise, simplifying weak decisions, and showing the business a logical path forward. That is why the brand archetype is the Sage.',
      ru: 'Для Proactive маркетинг — это не только видимость. Это умение ясно видеть реальность, отделять причины от шума, упрощать слабые решения и показывать бизнесу логичный путь вперед. Поэтому архетип бренда — Мудрец.',
    } satisfies LocalizedText,
    archetypeTraits: {
      uz: [
        "Mantiq hamma narsaning boshidir",
        "Bilim va tahlilga tayangan qaror",
        "Shovqin emas, aniqlik va tushuntirish",
        "Murakkab vazifani soddalashtirib ko'rsatish",
      ],
      en: [
        'Logic comes first',
        'Decisions should be grounded in knowledge and analysis',
        'Not noise, but clarity and explanation',
        'Complex tasks should become understandable and actionable',
      ],
      ru: [
        'Логика стоит в основе всего',
        'Решения должны опираться на знание и анализ',
        'Не шум, а ясность и объяснение',
        'Сложные задачи нужно делать понятными и применимыми',
      ],
    } satisfies LocalizedList,
    toneTitle: {
      uz: 'Tone of voice',
      en: 'Tone of voice',
      ru: 'Tone of voice',
    } satisfies LocalizedText,
    toneItems: [
      {
        title: {
          uz: 'Shaffof',
          en: 'Transparent',
          ru: 'Прозрачный',
        },
        description: {
          uz: "Murakkab mavzuni bezamasdan, ortiqcha patossiz va tushunarli qilib aytish.",
          en: 'Explain complex things without decoration, inflated drama, or artificial prestige.',
          ru: 'Говорить о сложном без украшательства, пафоса и искусственной важности.',
        },
      },
      {
        title: {
          uz: 'Xurmat va ehtirom',
          en: 'Respectful',
          ru: 'Уважительный',
        },
        description: {
          uz: "Mijoz, hamkor va auditoriya bilan yuqoridan emas, hurmat bilan gaplashish.",
          en: 'Speak with clients, partners, and audiences respectfully, never from above.',
          ru: 'Говорить с клиентами, партнерами и аудиторией уважительно, не свысока.',
        },
      },
      {
        title: {
          uz: 'Analitik va asosli',
          en: 'Analytical and grounded',
          ru: 'Аналитичный и обоснованный',
        },
        description: {
          uz: "Har bir fikr dalil, tahlil yoki kuzatuvga suyanishi kerak.",
          en: 'Every important statement should be supported by observation, analysis, or evidence.',
          ru: 'Каждое важное утверждение должно опираться на наблюдение, анализ или факт.',
        },
      },
      {
        title: {
          uz: 'Sokin va ishonchli',
          en: 'Calm and confident',
          ru: 'Спокойный и уверенный',
        },
        description: {
          uz: "Proactive baland ovoz bilan emas, aniqlik va tizim orqali ishonch uyg'otadi.",
          en: 'Proactive builds trust not by shouting, but by clarity, systems, and calm conviction.',
          ru: 'Proactive вызывает доверие не громкостью, а ясностью, системой и спокойной уверенностью.',
        },
      },
    ] satisfies LocalizedCard[],
    photoTitle: {
      uz: 'Foto uslubi',
      en: 'Photo style',
      ru: 'Фото-стиль',
    } satisfies LocalizedText,
    photoItems: {
      uz: [
        "Soft light, professional va tabiiy ko'rinish ustuvor",
        "Sayt va taqdimotlar uchun upper-body kadrlar qulay",
        "Brendbook va merch ko'rinishi kerak bo'lgan joylarda full-body rasmlar ishlatiladi",
        "Detal va muhit uchun fragment kadrlar ijtimoiy tarmoqlarda qo'llanadi",
      ],
      en: [
        'Soft light, professional framing, and natural presence come first',
        'Upper-body portraits work best for the website and presentations',
        'Full-body frames are used where merch or full styling needs to be visible',
        'Fragment shots help show detail and atmosphere in social formats',
      ],
      ru: [
        'В приоритете мягкий свет, профессиональная подача и естественное присутствие',
        'Для сайта и презентаций лучше всего работают портреты по пояс',
        'Полнофигурные кадры используются там, где важно показать мерч или полный образ',
        'Фрагментные кадры помогают передавать детали и атмосферу в социальных форматах',
      ],
    } satisfies LocalizedList,
    missionTitle: {
      uz: 'Bizning missiya',
      en: 'Our mission',
      ru: 'Наша миссия',
    } satisfies LocalizedText,
    missionText: {
      uz: "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'shish. O'zbekistonda xalqaro standartlar bilan ishlaydigan marketing bo'limlarini tuzishga yordam berish, andozalarini qo'yish.",
      en: 'To contribute to businesses in Uzbekistan operating their marketing according to international standards. To help create marketing departments that work on those standards and to set clear benchmarks in the market.',
      ru: 'Вносить вклад в то, чтобы бизнесы в Узбекистане выстраивали маркетинг по международным стандартам. Помогать создавать маркетинговые отделы, работающие по этим стандартам, и задавать понятные ориентиры для рынка.',
    } satisfies LocalizedText,
    outlookTitle: {
      uz: 'Istiqbol rejamiz',
      en: 'Our long-term outlook',
      ru: 'Наш долгосрочный ориентир',
    } satisfies LocalizedText,
    outlookText: {
      uz: "O'zbekiston bozoridagi bizneslar marketingi xalqaro standartlar asosida ishlashida hissa qo'sha olishimiz uchun jamoamizning har bir a'zosi shu standartlarni bilishi, hamkorlar bilan ishlash jarayonida direktorlar kengashida bemalol o'z fikrini bildira oladigan darajada ilmga ega bo'lishi zarur. Bir so'z bilan aytganda, xalqaro darajadagi mutaxassislar jamoasiga aylanish.",
      en: 'To make that contribution real, every member of our team must understand those standards and possess enough professional depth to confidently express their point of view even in board-level conversations. In short, our goal is to become a team of specialists of international caliber.',
      ru: 'Чтобы этот вклад был реальным, каждый участник нашей команды должен знать эти стандарты и обладать таким уровнем профессиональной глубины, чтобы уверенно высказывать свою позицию даже на уровне совета директоров. Иными словами, мы стремимся стать командой специалистов международного уровня.',
    } satisfies LocalizedText,
    valuesTitle: {
      uz: 'Qadriyatlarimiz',
      en: 'Our values',
      ru: 'Наши ценности',
    } satisfies LocalizedText,
    values: [
      {
        title: {
          uz: "Proaktiv bo'ling",
          en: 'Be proactive',
          ru: 'Будьте проактивны',
        },
        description: {
          uz: "Vaziyatni shunchaki kuzatish emas, ta'sir doirasida harakat qilish. Bahona emas, yechim taklif qilish.",
          en: 'Do not only observe the situation. Act inside your sphere of influence. Offer a solution instead of an excuse.',
          ru: 'Не просто наблюдать за ситуацией, а действовать в зоне своего влияния. Предлагать решение вместо оправдания.',
        },
      },
      {
        title: {
          uz: 'Yakunni yodda tutib ish boshlang',
          en: 'Begin with the end in mind',
          ru: 'Начинайте с понимания финала',
        },
        description: {
          uz: "Harakat tasodifiy bo'lmasligi kerak. Qaysi natijaga ketayotganingiz doim ko'z oldingizda tursin.",
          en: 'Work should not be random. The intended outcome must remain visible from the start.',
          ru: 'Работа не должна быть случайной. Конечный результат должен быть виден с самого начала.',
        },
      },
      {
        title: {
          uz: 'Eng muhimidan boshlang',
          en: 'Start from what matters most',
          ru: 'Начинайте с самого важного',
        },
        description: {
          uz: "Bandlik muhimlikni bildirmaydi. Katta natija beradigan ishlarni birinchi qilish kerak.",
          en: 'Being busy does not mean being effective. Do the work that creates the biggest result first.',
          ru: 'Занятость не равна важности. Сначала нужно делать то, что дает наибольший результат.',
        },
      },
      {
        title: {
          uz: '"Win-Win" ruhida o‘ylang',
          en: 'Think in a win-win way',
          ru: 'Думайте в логике win-win',
        },
        description: {
          uz: "Hamkorlik ikki tomon uchun ham foydali bo'lgan natijaga olib borishi kerak.",
          en: 'Partnership should lead to a result that creates value for both sides.',
          ru: 'Партнерство должно приводить к результату, полезному для обеих сторон.',
        },
      },
      {
        title: {
          uz: "Tushuning va tushunarli bo'ling",
          en: 'Seek to understand and be understood',
          ru: 'Сначала поймите, потом будьте поняты',
        },
        description: {
          uz: "Avval tinglash, keyin aniq va hurmat bilan gapirish — haqiqiy muloqot shundan boshlanadi.",
          en: 'Real communication starts with listening first, then speaking clearly and respectfully.',
          ru: 'Настоящая коммуникация начинается с умения слушать, а затем ясно и уважительно говорить.',
        },
      },
      {
        title: {
          uz: 'Sinergiyaga erishing',
          en: 'Create synergy',
          ru: 'Достигайте синергии',
        },
        description: {
          uz: "Turli fikr va kuchlar to'g'ri uyg'unlashsa, yakka holda bo'lmaydigan natija paydo bo'ladi.",
          en: 'When different strengths align well, they produce results impossible in isolation.',
          ru: 'Когда разные сильные стороны синхронизируются, появляется результат, невозможный в одиночку.',
        },
      },
      {
        title: {
          uz: 'Arrani charxlang',
          en: 'Sharpen the saw',
          ru: 'Постоянно обновляйтесь',
        },
        description: {
          uz: "Tanani, ongni, munosabatlarni va kasbiy darajani muntazam rivojlantirib borish barqaror o'sishning asosi.",
          en: 'Sustainable growth depends on regularly renewing the body, mind, relationships, and professional capacity.',
          ru: 'Устойчивый рост строится на регулярном развитии тела, мышления, отношений и профессионального уровня.',
        },
      },
    ] satisfies LocalizedCard[],
    positioningTitle: {
      uz: 'Pozitsiyamiz',
      en: 'Our positioning',
      ru: 'Наше позиционирование',
    } satisfies LocalizedText,
    positioningLead: {
      uz: 'Biznesdagi qisqa va uzoq muddatli vazifalar bor. Aynan ',
      en: 'Businesses have short-term and long-term strategic tasks. We are the agency that executes ',
      ru: 'У бизнеса есть краткосрочные и долгосрочные стратегические задачи. Мы — агентство, которое берет на себя ',
    } satisfies LocalizedText,
    positioningStrongOne: {
      uz: 'strategik marketing vazifalarni bajaruvchi',
      en: 'strategic marketing responsibilities',
      ru: 'стратегические маркетинговые задачи',
    } satisfies LocalizedText,
    positioningMiddle: {
      uz: ", ularga uzoq muddatda yo'llarini belgilab beruvchi agentlik. Mijozlar bilan uzoq muddatda, ",
      en: ', helps define the long-term path forward, and works with clients as a lasting ',
      ru: ', помогает выстраивать путь на долгий срок и работает с клиентами как ',
    } satisfies LocalizedText,
    positioningStrongTwo: {
      uz: 'strategik hamkor',
      en: 'strategic partner',
      ru: 'стратегический партнер',
    } satisfies LocalizedText,
    positioningEnd: {
      uz: '.',
      en: '.',
      ru: '.',
    } satisfies LocalizedText,
    audienceTitle: {
      uz: 'Maqsadli auditoriya',
      en: 'Target audience',
      ru: 'Целевая аудитория',
    } satisfies LocalizedText,
    audienceItems: {
      uz: [
        "Mijozda qisqa performance vazifalar emas, uzoq muddatli strategik vazifalar bo'lishi kerak",
        "Mijoz uzoq muddatli vazifalarni ham muhim deb bilishi kerak",
        "Har bir ishni o'z mutaxassisiga topshirish kerak degan fikr bo'lishi kerak",
        "Mijozda missiya va bir yildan ortiq maqsadlar bo'lishi kerak",
        "O'sishga, rivojlanishga va tizim qurishga tayyor bo'lishi kerak",
        "Sherikchilikdagi biznes bo'lsa ham, ichki masalalar aniq belgilangan bo'lishi kerak",
        "Odamlarga zarar beradigan yoki shubhali faoliyatlar bilan shug'ullanmasligi kerak",
      ],
      en: [
        'The client should have long-term strategic tasks, not only short performance problems',
        'The client should see long-term work as genuinely important',
        'There should be a belief that each important function belongs to the right specialist',
        'The client should have a mission and goals extending beyond one year',
        'The client should be ready for growth, development, and system building',
        'If the business has partners, internal responsibilities should already be clearly defined',
        'The business should avoid harmful, unethical, or questionable fields of activity',
      ],
      ru: [
        'У клиента должны быть не только короткие performance-задачи, но и долгосрочные стратегические цели',
        'Клиент должен считать долгосрочную работу действительно важной',
        'Должно быть понимание, что важные функции нужно доверять профильным специалистам',
        'У клиента должна быть миссия и цели на срок более одного года',
        'Клиент должен быть готов к росту, развитию и построению системы',
        'Если в бизнесе есть партнерство, роли и договоренности должны быть четко определены',
        'Бизнес не должен работать в вредных, сомнительных или неэтичных сферах',
      ],
    } satisfies LocalizedList,
  },
  team: {
    eyebrow: {
      uz: 'In-house mutaxassislar jamoasi',
      en: 'In-house team of specialists',
      ru: 'In-house команда специалистов',
    } satisfies LocalizedText,
    title: {
      uz: 'Proactive jamoasi',
      en: 'The Proactive team',
      ru: 'Команда Proactive',
    } satisfies LocalizedText,
    description: {
      uz: "Kompleks marketingni to'liq formatda amalga oshiruvchi, o'zaro sinxron ishlaydigan in-house mutaxassislar jamoasi.",
      en: 'A synchronized in-house team that delivers comprehensive marketing as one integrated system.',
      ru: 'Слаженная in-house команда, которая реализует комплексный маркетинг как единую систему.',
    } satisfies LocalizedText,
    activeLabel: {
      uz: 'Proactive jamoasi',
      en: 'Proactive team',
      ru: 'Команда Proactive',
    } satisfies LocalizedText,
  },
} as const;

export const founderMilestones = [
  {
    label: {
      uz: 'Tajriba',
      en: 'Experience',
      ru: 'Опыт',
    },
    text: {
      uz: '12+ yil marketing tajribasi',
      en: '12+ years of marketing experience',
      ru: '12+ лет опыта в маркетинге',
    },
  },
  {
    label: {
      uz: 'Ta’lim',
      en: 'Education',
      ru: 'Образование',
    },
    text: {
      uz: 'TSUE (bakalavr va magistratura), UJC (PMP), Academy of Applied Arts (New Delhi)',
      en: 'TSUE (bachelor and master programs), UJC (PMP), Academy of Applied Arts (New Delhi)',
      ru: 'TSUE (бакалавриат и магистратура), UJC (PMP), Academy of Applied Arts (New Delhi)',
    },
  },
  {
    label: {
      uz: 'Asos solingan',
      en: 'Founded',
      ru: 'Основано',
    },
    text: {
      uz: 'Proactive 12.12.2022 sanasida ishga tushgan',
      en: 'Proactive launched on 12.12.2022',
      ru: 'Proactive был запущен 12.12.2022',
    },
  },
] satisfies LocalizedMilestone[];

export const getBrandbookText = <T extends LocalizedText>(lang: BrandbookLang, value: T) => value[lang];
