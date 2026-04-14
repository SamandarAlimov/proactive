import React, { createContext, useContext, useState } from 'react';

export type Language = 'uz' | 'en' | 'ru';

const translations = {
  uz: {
    nav: {
      about: "Biz haqimizda",
      services: "Xizmatlar",
      projects: "Loyihalar",
      team: "Jamoa",
      academy: "Academy",
      events: "Events",
      careers: "Ish va hamkorlik",
      clients: "Mijozlar",
      news: "Yangiliklar",
      internship: "Stajirovka",
      contact: "Bog'lanish",
    },
    hero: {
      title: "Marketing kuchini",
      titleHighlight: "Proactive",
      titleEnd: "bilan his qiling",
      subtitle: "Kompleks marketingni to'liq formatda amalga oshiruvchi In-house mutaxassislar jamoasi",
      cta: "Loyiha boshlash",
      ctaSecondary: "Batafsil",
      trustedBy: "Bizga ishonch bildirganlar",
    },
    about: {
      title: "Biz haqimizda",
      subtitle: "Muvaffaqiyat hikoyalari",
      description:
        "Proactive bu marketing, brending va strategik rivojlanish yo'nalishida kompleks xizmatlar ko'rsatuvchi agentlik. Biz brendlarning o'sishini tizimlashtirish, bozorga chiqish yo'lini aniqlash va amaliy marketing yechimlarini joriy etishga ixtisoslashganmiz.",
      stats: {
        projects: "Loyihalar",
        clients: "Mijozlar",
        experience: "Yillik tajriba",
        team: "Jamoa a'zolari",
      },
      mission: "Bizning maqsadimiz har bir brendga o'ziga xos ovoz berish va bozorda mustahkam o'rin egallashiga yordam berish.",
      vision: "Biz O'zbekistondagi yetakchi marketing agentliklaridan biriga aylanish va xalqaro darajadagi xizmat sifati yaratishni maqsad qilganmiz.",
    },
    services: {
      title: "Xizmatlar",
      subtitle: "Biz nima qilamiz",
      viewAll: "Barcha xizmatlar",
      'marketing-strategy': {
        title: "Marketing strategiyasi",
        description: "Biznes maqsadlari, bozor holati va o'sish nuqtalariga tayangan marketing yo'nalishi.",
        fullDescription:
          "Marketing strategiyasi doirasida bozor vaziyati, auditoriya ehtiyoji, raqobat muhiti va biznes maqsadlarini yagona tizimga keltiramiz. Natijada brend qayerga yurishi, qaysi kanallar va qaysi ustuvorliklar bilan ishlashi kerakligi aniq bo'ladi.",
      },
      'brand-platform': {
        title: "Brend platformasi",
        description: "Brendning pozitsiyasi, qadriyatlari, toni va vizual asoslarini bir tizimga keltiramiz.",
        fullDescription:
          "Brend platformasi xizmatida brendning mohiyati, qadriyati, va'dasi, pozitsiyasi va kommunikatsion ohangini shakllantiramiz. Bu keyingi vizual identifikatsiya, kontent va savdo xabarlarining bir xil va ishonchli ishlashiga tayanch bo'ladi.",
      },
      'product-strategy': {
        title: "Mahsulot strategiyasi",
        description: "Mahsulotning qiymat taklifi, bozor mosligi va rivojlanish yo'nalishini aniqlaymiz.",
        fullDescription:
          "Mahsulot strategiyasi orqali mahsulotning bozordagi roli, mijoz uchun qiymati va o'sish imkoniyatlarini aniqlaymiz. Taklifni to'g'ri joylashtirish, portfelni tartiblash va mahsulotni kuchliroq pozitsiyaga olib chiqish uchun amaliy yechimlar ishlab chiqamiz.",
      },
      communication: {
        title: "Kommunikatsiya",
        description: "Brendning asosiy xabarlari, kontent yo'nalishi va tashqi aloqalar tizimini ishlab chiqamiz.",
        fullDescription:
          "Kommunikatsiya xizmatida brendning qanday gapirishi, nimani urg'ulashi va qaysi formatlarda auditoriyaga chiqishini belgilaymiz. Xabarlar arxitekturasi, kontent yo'nalishi va ichki-tashqi aloqalar tamoyillari yagona tizimda shakllanadi.",
      },
      'marketing-team-building': {
        title: "Marketing bo'limini qurish",
        description: "Ichki marketing jamoasini rol, jarayon, KPI va boshqaruv modeli bilan quramiz.",
        fullDescription:
          "Marketing bo'limini qurish xizmatida kompaniya ichidagi marketing funksiyasini tizimlashtiramiz. Strukturani, rollarni, javobgarlik zonalarini, KPI va ish jarayonlarini belgilab, jamoaning natijaga yo'naltirilgan ishlash modelini yaratamiz.",
      },
      consulting: {
        title: "Konsultatsiya",
        description: "Rahbarlar va jamoalar uchun amaliy strategik sessiyalar hamda professional maslahatlar.",
        fullDescription:
          "Konsultatsiya jarayonida rahbariyat, marketing bo'limi yoki loyiha jamoasi bilan birga aniq vazifalar ustida ishlaymiz. Bu xizmat qarorlarni tezlashtirish, noto'g'ri yo'nalishlarni to'g'rilash va ichki jamoani kuchaytirish uchun amaliy formatda olib boriladi.",
      },
      'analysis-audit': {
        title: "Tahlil va audit",
        description: "Bozor, raqobatchilar, auditoriya va amaldagi marketing faoliyatini chuqur o'rganamiz.",
        fullDescription:
          "Tahlil va audit xizmatida mavjud marketing faoliyati, brend ko'rinishi, kommunikatsiya sifati va bozor muhitini chuqur o'rganamiz. Kuchli va zaif tomonlarni aniqlab, keyingi strategik qarorlar uchun aniq asos yaratamiz.",
      },
    },
    projects: {
      title: "Loyihalar",
      subtitle: "Bizning ishlarimiz",
      viewProject: "Batafsil ko'rish",
      viewAll: "Barcha loyihalar",
    },
    team: {
      title: "Jamoa",
      subtitle: "The Proactive jamoasi",
      description: "Kompleks marketingni to'liq formatda amalga oshiruvchi In-house mutaxassislar jamoasi",
    },
    clients: {
      title: "Mijozlarimiz",
      subtitle: "Bizga ishonch bildirganlar",
    },
    academy: {
      title: "Proactive Academy",
      subtitle: "Marketing sohasida karerangizni boshlang",
      description:
        "Proactive Academy marketing, brending va strategiya bo'yicha amaliy bilimlar olish imkoniyatini beradi. Professional mentorlar bilan ishlang va real loyihalarda tajriba orttiring.",
      courses: "Kurslar",
      mentors: "Mentorlar",
      graduates: "Bitiruvchilar",
      apply: "Ro'yxatdan o'tish",
    },
    events: {
      title: "Tadbirlar",
      subtitle: "Proactive Events",
      description: "Marketing, brending va biznes sohasidagi eng so'nggi tadbirlar, seminarlar va konferensiyalar.",
      upcoming: "Yaqinlashayotgan tadbirlar",
      past: "O'tgan tadbirlar",
      register: "Ro'yxatdan o'tish",
    },
    careers: {
      title: "Ish va hamkorlik",
      subtitle: "Bizga qo'shiling",
      description:
        "Proactive jamoasiga qo'shiling yoki hamkorlik uchun murojaat qiling. Biz doimo iqtidorli mutaxassislarni izlaymiz.",
      openPositions: "Ochiq pozitsiyalar",
      partnership: "Hamkorlik",
      apply: "Ariza topshirish",
    },
    internship: {
      title: "Onlayn stajirovka",
      subtitle: "Marketing sohasida o'z karerangizni boshlang",
      description:
        "Proactive Academy marketing, brending va strategiya bo'yicha amaliy bilimlar olish imkoniyatini beradi. Professional mentorlar bilan ishlang va real loyihalarda tajriba orttiring.",
      cta: "Ro'yxatdan o'tish",
      benefits: "Afzalliklar",
    },
    contact: {
      title: "Bog'lanish",
      subtitle: "Loyihangiz haqida gaplashaylik",
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      email: "Email",
      message: "Xabaringiz",
      send: "Yuborish",
      success: "Xabaringiz muvaffaqiyatli yuborildi!",
    },
    news: {
      title: "Yangiliklar",
      subtitle: "Blog va yangiliklar",
      readMore: "Batafsil o'qish",
      viewAll: "Barcha yangiliklar",
      backToNews: "Yangiliklarga qaytish",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan",
      followUs: "Bizni kuzating",
    },
    common: {
      backToHome: "Bosh sahifaga",
      learnMore: "Batafsil",
    },
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      projects: "Projects",
      team: "Team",
      academy: "Academy",
      events: "Events",
      careers: "Careers",
      clients: "Clients",
      news: "News",
      internship: "Internship",
      contact: "Contact",
    },
    hero: {
      title: "Feel the power of marketing",
      titleHighlight: "Proactive",
      titleEnd: "with",
      subtitle: "A team of in-house specialists delivering comprehensive marketing solutions",
      cta: "Start a Project",
      ctaSecondary: "Learn More",
      trustedBy: "Trusted by leading brands",
    },
    about: {
      title: "About Us",
      subtitle: "Success Stories",
      description:
        "Proactive is a full-service agency focused on marketing, branding, and strategic growth. We help brands systemize growth, define their market direction, and implement practical marketing solutions.",
      stats: {
        projects: "Projects",
        clients: "Clients",
        experience: "Years Experience",
        team: "Team Members",
      },
      mission: "Our mission is to give every brand a distinctive voice and help it build a strong market position.",
      vision: "We aim to become one of Uzbekistan's leading marketing agencies and deliver services at an international standard.",
    },
    services: {
      title: "Services",
      subtitle: "What We Do",
      viewAll: "All Services",
      'marketing-strategy': {
        title: "Marketing Strategy",
        description: "A marketing direction built on business goals, market conditions, and growth opportunities.",
        fullDescription:
          "Within marketing strategy, we connect market realities, audience needs, the competitive landscape, and business goals into one clear framework. This creates a practical direction for where the brand should move and which priorities and channels should lead the work.",
      },
      'brand-platform': {
        title: "Brand Platform",
        description: "We systemize the brand's position, values, tone, and foundational identity.",
        fullDescription:
          "The brand platform defines the brand's essence, value, promise, positioning, and communication tone. It becomes the strategic base that keeps visual identity, content, and sales messaging consistent and credible.",
      },
      'product-strategy': {
        title: "Product Strategy",
        description: "We define the product's value proposition, market fit, and growth direction.",
        fullDescription:
          "Product strategy helps clarify the product's role in the market, the value it creates for customers, and the opportunities for growth. We develop practical decisions for positioning, portfolio logic, and stronger product-market alignment.",
      },
      communication: {
        title: "Communication",
        description: "We develop the brand's key messages, content direction, and communication system.",
        fullDescription:
          "In communication, we define how the brand should speak, what it should emphasize, and which formats best connect with the audience. Messaging architecture, content direction, and internal-external communication principles are built into one coherent system.",
      },
      'marketing-team-building': {
        title: "Marketing Team Building",
        description: "We build in-house marketing teams with roles, processes, KPIs, and management logic.",
        fullDescription:
          "This service systemizes the marketing function inside the company. We shape the team structure, clarify responsibilities, define KPIs, and organize workflows so the team can operate with stronger accountability and better business impact.",
      },
      consulting: {
        title: "Consulting",
        description: "Practical strategic sessions and professional guidance for leaders and teams.",
        fullDescription:
          "Consulting is designed for founders, managers, and marketing teams that need clarity on concrete challenges. We work through decisions together in a practical format that helps speed up choices, correct weak directions, and strengthen internal capability.",
      },
      'analysis-audit': {
        title: "Analysis & Audit",
        description: "We deeply assess the market, competitors, audience, and current marketing performance.",
        fullDescription:
          "Analysis and audit examine the current marketing system, brand visibility, communication quality, and market environment in depth. We identify strong and weak points and provide a reliable base for smarter strategic decisions.",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Our Work",
      viewProject: "View Details",
      viewAll: "All Projects",
    },
    team: {
      title: "Team",
      subtitle: "The Proactive Team",
      description: "A team of in-house specialists delivering comprehensive marketing solutions",
    },
    clients: {
      title: "Our Clients",
      subtitle: "Those Who Trust Us",
    },
    academy: {
      title: "Proactive Academy",
      subtitle: "Start your career in marketing",
      description:
        "Proactive Academy gives you the opportunity to gain practical knowledge in marketing, branding, and strategy. Work with professional mentors and gain experience on real projects.",
      courses: "Courses",
      mentors: "Mentors",
      graduates: "Graduates",
      apply: "Apply Now",
    },
    events: {
      title: "Events",
      subtitle: "Proactive Events",
      description: "The latest events, seminars, and conferences in marketing, branding, and business.",
      upcoming: "Upcoming Events",
      past: "Past Events",
      register: "Register",
    },
    careers: {
      title: "Careers & Partnership",
      subtitle: "Join Our Team",
      description:
        "Join the Proactive team or reach out for partnership opportunities. We are always looking for talented specialists.",
      openPositions: "Open Positions",
      partnership: "Partnership",
      apply: "Apply",
    },
    internship: {
      title: "Online Internship",
      subtitle: "Start your career in marketing",
      description:
        "Proactive Academy gives you the opportunity to gain practical knowledge in marketing, branding, and strategy.",
      cta: "Register Now",
      benefits: "Benefits",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about your project",
      name: "Your Name",
      phone: "Phone Number",
      email: "Email",
      message: "Your Message",
      send: "Send",
      success: "Your message has been sent successfully!",
    },
    news: {
      title: "News",
      subtitle: "Blog & News",
      readMore: "Read More",
      viewAll: "All News",
      backToNews: "Back to News",
    },
    footer: {
      rights: "All rights reserved",
      followUs: "Follow Us",
    },
    common: {
      backToHome: "Back to Home",
      learnMore: "Learn More",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      services: "Услуги",
      projects: "Проекты",
      team: "Команда",
      academy: "Академия",
      events: "События",
      careers: "Карьера",
      clients: "Клиенты",
      news: "Новости",
      internship: "Стажировка",
      contact: "Контакты",
    },
    hero: {
      title: "Почувствуйте силу маркетинга",
      titleHighlight: "Proactive",
      titleEnd: "с",
      subtitle: "Команда штатных специалистов, реализующих комплексный маркетинг в полном формате",
      cta: "Начать проект",
      ctaSecondary: "Подробнее",
      trustedBy: "Нам доверяют ведущие бренды",
    },
    about: {
      title: "О нас",
      subtitle: "Истории успеха",
      description:
        "Proactive - это агентство комплексных услуг в области маркетинга, брендинга и стратегического роста. Мы помогаем брендам выстраивать системный рост, определять рыночное направление и внедрять практичные маркетинговые решения.",
      stats: {
        projects: "Проектов",
        clients: "Клиентов",
        experience: "Лет опыта",
        team: "Членов команды",
      },
      mission: "Наша миссия - дать каждому бренду узнаваемый голос и помочь занять сильную позицию на рынке.",
      vision: "Мы стремимся стать одним из ведущих маркетинговых агентств Узбекистана и работать на уровне международных стандартов.",
    },
    services: {
      title: "Услуги",
      subtitle: "Что мы делаем",
      viewAll: "Все услуги",
      'marketing-strategy': {
        title: "Маркетинговая стратегия",
        description: "Маркетинговое направление, основанное на целях бизнеса, рынке и точках роста.",
        fullDescription:
          "В рамках маркетинговой стратегии мы соединяем рыночную ситуацию, потребности аудитории, конкурентную среду и цели бизнеса в единую систему. Это помогает понять, куда должен двигаться бренд, какие каналы важнее и какие приоритеты дадут наибольший результат.",
      },
      'brand-platform': {
        title: "Бренд-платформа",
        description: "Собираем в единую систему позиционирование, ценности, тональность и основу бренда.",
        fullDescription:
          "Бренд-платформа определяет суть бренда, его ценность, обещание, позиционирование и тон коммуникации. Она становится стратегической основой, которая делает визуальную идентичность, контент и коммерческие сообщения последовательными и убедительными.",
      },
      'product-strategy': {
        title: "Продуктовая стратегия",
        description: "Определяем ценностное предложение продукта, его рыночное соответствие и направление роста.",
        fullDescription:
          "Продуктовая стратегия помогает понять роль продукта на рынке, ценность для клиента и точки роста. Мы формируем практические решения по позиционированию, логике портфеля и усилению product-market fit.",
      },
      communication: {
        title: "Коммуникация",
        description: "Разрабатываем ключевые сообщения бренда, контент-направление и систему коммуникации.",
        fullDescription:
          "В коммуникации мы определяем, как бренд должен говорить, что именно подчеркивать и в каких форматах выходить к аудитории. Архитектура сообщений, контент-направление и принципы внешней и внутренней коммуникации собираются в единую систему.",
      },
      'marketing-team-building': {
        title: "Построение отдела маркетинга",
        description: "Строим внутреннюю маркетинговую команду с ролями, процессами, KPI и моделью управления.",
        fullDescription:
          "Эта услуга систематизирует маркетинговую функцию внутри компании. Мы выстраиваем структуру команды, зоны ответственности, KPI и рабочие процессы, чтобы отдел работал более управляемо и приносил реальный бизнес-результат.",
      },
      consulting: {
        title: "Консультация",
        description: "Практические стратегические сессии и профессиональная поддержка для руководителей и команд.",
        fullDescription:
          "Консультационный формат подходит основателям, руководителям и маркетинговым командам, которым нужна ясность по конкретным задачам. Мы вместе прорабатываем решения, ускоряем выбор, корректируем слабые направления и усиливаем внутреннюю компетенцию команды.",
      },
      'analysis-audit': {
        title: "Анализ и аудит",
        description: "Глубоко изучаем рынок, конкурентов, аудиторию и текущее состояние маркетинга.",
        fullDescription:
          "Анализ и аудит позволяют глубоко оценить текущую маркетинговую систему, видимость бренда, качество коммуникации и рыночную среду. Мы выявляем сильные и слабые стороны и формируем надежную базу для следующих стратегических решений.",
      },
    },
    projects: {
      title: "Проекты",
      subtitle: "Наши работы",
      viewProject: "Подробнее",
      viewAll: "Все проекты",
    },
    team: {
      title: "Команда",
      subtitle: "Команда Proactive",
      description: "Команда штатных специалистов, реализующих комплексный маркетинг в полном формате",
    },
    clients: {
      title: "Наши клиенты",
      subtitle: "Те, кто нам доверяет",
    },
    academy: {
      title: "Proactive Academy",
      subtitle: "Начните карьеру в маркетинге",
      description:
        "Proactive Academy дает возможность получить практические знания в маркетинге, брендинге и стратегии. Работайте с профессиональными менторами и набирайтесь опыта на реальных проектах.",
      courses: "Курсы",
      mentors: "Менторы",
      graduates: "Выпускники",
      apply: "Зарегистрироваться",
    },
    events: {
      title: "События",
      subtitle: "Proactive Events",
      description: "Актуальные события, семинары и конференции в сфере маркетинга, брендинга и бизнеса.",
      upcoming: "Предстоящие события",
      past: "Прошедшие",
      register: "Зарегистрироваться",
    },
    careers: {
      title: "Работа и партнерство",
      subtitle: "Присоединяйтесь к нам",
      description:
        "Присоединяйтесь к команде Proactive или обращайтесь по вопросам партнерства. Мы всегда ищем сильных специалистов.",
      openPositions: "Открытые позиции",
      partnership: "Партнерство",
      apply: "Подать заявку",
    },
    internship: {
      title: "Онлайн-стажировка",
      subtitle: "Начните карьеру в маркетинге",
      description:
        "Proactive Academy дает возможность получить практические знания в маркетинге, брендинге и стратегии.",
      cta: "Зарегистрироваться",
      benefits: "Преимущества",
    },
    contact: {
      title: "Контакты",
      subtitle: "Давайте обсудим ваш проект",
      name: "Ваше имя",
      phone: "Номер телефона",
      email: "Email",
      message: "Ваше сообщение",
      send: "Отправить",
      success: "Ваше сообщение успешно отправлено!",
    },
    news: {
      title: "Новости",
      subtitle: "Блог и новости",
      readMore: "Читать далее",
      viewAll: "Все новости",
      backToNews: "Вернуться к новостям",
    },
    footer: {
      rights: "Все права защищены",
      followUs: "Подписывайтесь",
    },
    common: {
      backToHome: "На главную",
      learnMore: "Подробнее",
    },
  },
};

type Translations = typeof translations.uz;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'uz',
  setLang: () => {},
  t: translations.uz,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('uz');
  const t = translations[lang];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
