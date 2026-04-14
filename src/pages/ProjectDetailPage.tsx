import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import marfImg from '@/assets/marf-project.png';
import aurusHero from '@/assets/projects/aurus/aurus-hero.webp';
import aurusGallery01 from '@/assets/projects/aurus/aurus-gallery-01.webp';
import aurusGallery02 from '@/assets/projects/aurus/aurus-gallery-02.webp';
import aurusGallery03 from '@/assets/projects/aurus/aurus-gallery-03.webp';
import aurusGallery04 from '@/assets/projects/aurus/aurus-gallery-04.webp';
import aurusGallery05 from '@/assets/projects/aurus/aurus-gallery-05.webp';
import aurusGallery06 from '@/assets/projects/aurus/aurus-gallery-06.webp';
import aurusGallery07 from '@/assets/projects/aurus/aurus-gallery-07.webp';
import aurusGallery08 from '@/assets/projects/aurus/aurus-gallery-08.webp';
import milestoneHero from '@/assets/projects/milestone/milestone-hero.webp';
import milestoneGallery05 from '@/assets/projects/milestone/milestone-gallery-05.webp';
import milestoneGallery06 from '@/assets/projects/milestone/milestone-gallery-06.webp';
import milestoneGallery07 from '@/assets/projects/milestone/milestone-gallery-07.webp';
import milestoneGallery08 from '@/assets/projects/milestone/milestone-gallery-08.webp';
import milestoneGallery09 from '@/assets/projects/milestone/milestone-gallery-09.webp';
import milestoneGallery10 from '@/assets/projects/milestone/milestone-gallery-10.webp';
import marfGallery01 from '@/assets/projects/marf/marf-gallery-01.webp';
import marfGallery02 from '@/assets/projects/marf/marf-gallery-02.webp';
import marfGallery06 from '@/assets/projects/marf/marf-gallery-06.webp';
import marfGallery07 from '@/assets/projects/marf/marf-gallery-07.webp';

type LangKey = 'uz' | 'en' | 'ru';

type LocalizedText = Record<LangKey, string>;
type LocalizedList = Record<LangKey, string[]>;

type ProjectGalleryItem = {
  src: string;
  title: LocalizedText;
};

type ProjectDetail = {
  title: string;
  category: string;
  image: string | null;
  description: LocalizedText;
  tags: string[];
  services: LocalizedList;
  challenges?: LocalizedList;
  deliverables?: LocalizedList;
  gallery?: ProjectGalleryItem[];
};

const projectsData: Record<string, ProjectDetail> = {
  marf: {
    title: 'MARF',
    category: 'Product Market Fit & Brand Platform',
    image: marfImg,
    description: {
      uz: "MARF 10 yildan ortiq vaqt davomida O'zbekistondagi textile fabrikalariga Xitoydan mato yetkazib kelgan korxona sifatida yangi yo'nalish — maktab formasi bozori uchun alohida strategik asosga muhtoj edi. Loyiha davomida product-market fit tadqiqoti, brend platformasi va bozorga chiqish uchun kerakli savdo hamda marketing materiallarini ishlab chiqdik.",
      en: 'MARF had spent more than 10 years supplying fabric from China to textile factories in Uzbekistan and needed a dedicated strategic foundation for a new direction: the school uniform market. During the project we developed the product-market fit research, brand platform, and the sales and marketing materials required for market entry.',
      ru: 'MARF более 10 лет поставлял ткани из Китая текстильным фабрикам Узбекистана и для нового направления — рынка школьной формы — нуждался в отдельной стратегической базе. В рамках проекта мы разработали product-market fit исследование, бренд-платформу, а также sales и marketing материалы для выхода на рынок.',
    },
    tags: ['Product Market Fit', 'Brand Platform', 'Go-To-Market', 'School Uniform Market', 'Marketing Materials'],
    services: {
      uz: ['Mahsulot strategiyasi', 'Brend platformasi', 'Kommunikatsiya', 'Tahlil va audit'],
      en: ['Product Strategy', 'Brand Platform', 'Communication', 'Analysis & Audit'],
      ru: ['Продуктовая стратегия', 'Бренд-платформа', 'Коммуникация', 'Анализ и аудит'],
    },
    challenges: {
      uz: [
        "Yangi yo'nalishga kirish uchun brendning bozordagi o'rni, qadriyatlari va xarakteri hali shakllanmagan edi.",
        "Raqobatchilar va maqsadli auditoriya bo'yicha chuqur tahlil yo'qligi sabab ustunliklarni aniq ifodalash qiyin edi.",
        "Foydalanuvchi ehtiyojlari, qaror qabul qilish mezonlari va maktab formasi bozori dinamikasi tizimli o'rganilmagan edi.",
      ],
      en: [
        'The new direction required a clear market position, brand values, and character that had not yet been formalized.',
        'Without deep competitor and audience analysis, it was difficult to define a persuasive competitive advantage.',
        'User needs, decision-making criteria, and the school uniform market dynamics had not been studied in a structured way.',
      ],
      ru: [
        'Для нового направления требовалось четко сформулировать позиционирование, ценности и характер бренда.',
        'Без глубокого анализа конкурентов и аудитории было сложно определить убедительное конкурентное преимущество.',
        'Потребности пользователей, критерии выбора и динамика рынка школьной формы не были изучены системно.',
      ],
    },
    deliverables: {
      uz: [
        "Maktab formasi bozori, ota-onalar, o'quvchilar va maktab rahbarlari bo'yicha chuqur tadqiqot o'tkazildi.",
        "Raqobatchilar mahsulot, narx, xizmat va sotuv modeli kesimida tahlil qilindi va imkoniyat zonalari belgilandi.",
        "Brend platformasi: missiya, qadriyatlar, pozitsiyalash, TOV, ratsional va emotsional UTP, RTB ishlab chiqildi.",
        "Bozorga chiqish strategiyasi, assortiment logikasi hamda savdo va marketing materiallari tayyorlandi.",
      ],
      en: [
        'We conducted deep research into the school uniform market, including parents, students, and school decision-makers.',
        'Competitors were analyzed across product, pricing, service, and sales model to define opportunity zones.',
        'We developed the brand platform: mission, values, positioning, tone of voice, rational and emotional USP, and RTB.',
        'The team received a go-to-market strategy, assortment logic, and the sales and marketing materials needed for execution.',
      ],
      ru: [
        'Мы провели глубокое исследование рынка школьной формы, включая родителей, учеников и представителей школ.',
        'Конкуренты были проанализированы по продукту, цене, сервису и модели продаж, чтобы определить зоны возможностей.',
        'Мы разработали бренд-платформу: миссию, ценности, позиционирование, tone of voice, рациональные и эмоциональные USP, а также RTB.',
        'Команда получила go-to-market стратегию, логику ассортимента и набор sales и marketing материалов для запуска.',
      ],
    },
    gallery: [
      {
        src: marfGallery01,
        title: {
          uz: 'Katalog va mahsulot namoyishi',
          en: 'Catalog and product showcase',
          ru: 'Каталог и демонстрация продукта',
        },
      },
      {
        src: marfGallery02,
        title: {
          uz: 'Maktab formasi kolleksiyasi',
          en: 'School uniform collection',
          ru: 'Коллекция школьной формы',
        },
      },
      /*
      {
        src: marfGallery03,
        title: {
          uz: "Brend qadriyatlari va asosiy g'oya",
          en: 'Brand values and core idea',
          ru: 'Ценности бренда и основная идея',
        },
      },
      {
        src: marfGallery04,
        title: {
          uz: 'Logotip va brend konsepsiyasi',
          en: 'Logo and brand concept',
          ru: 'Логотип и бренд-концепция',
        },
      },
      {
        src: marfGallery05,
        title: {
          uz: 'Touchpoint va brend tizimi',
          en: 'Touchpoints and brand system',
          ru: 'Точки контакта и бренд-система',
        },
      },
      */
      {
        src: marfGallery06,
        title: {
          uz: 'Mahsulot vizuallari',
          en: 'Product visuals',
          ru: 'Визуалы продукта',
        },
      },
      {
        src: marfGallery07,
        title: {
          uz: "Brend elementlari va qo'llanishi",
          en: 'Brand elements and application',
          ru: 'Элементы бренда и их применение',
        },
      },
    ],
  },
  'aurus-pharm': {
    title: 'Aurus Pharm',
    category: 'Brand Platform, Packaging & Marketing Operations',
    image: aurusHero,
    description: {
      uz: "Aurus Pharm 2022-yil 17-iyunda Toshkentda tashkil topgan farm kompaniya bo'lib, Argon nomi ostida bo'g'imlar bilan bog'liq holatlar uchun BFQ mahsulotlarini ishlab chiqadi. Loyiha davomida bozorni chuqur o'rganish, qadoq dizaynini qayta tizimlash, brend platformasini shakllantirish, marketing strategiyasini yozish va marketing bo'limi ishini standartlashtirish bo'yicha kompleks ish olib borildi.",
      en: 'Aurus Pharm is a pharmaceutical company founded in Tashkent on June 17, 2022, developing BFQ products for joint-related conditions under the Argon name. This project covered deep market research, packaging redesign, brand platform development, marketing strategy creation, and the systemization of marketing operations and standards.',
      ru: 'Aurus Pharm - фармацевтическая компания, основанная в Ташкенте 17 июня 2022 года и развивающая БФК-продукты под брендом Argon для состояний, связанных с суставами. В рамках проекта была проведена глубокая аналитика рынка, обновлен дизайн упаковки, сформирована бренд-платформа, разработана маркетинговая стратегия и систематизирована работа маркетинговой функции.',
    },
    tags: ['Pharma', 'Brand Platform', 'Packaging Design', 'Marketing Strategy', 'Marketing Operations'],
    services: {
      uz: ['Mahsulot strategiyasi', 'Brend platformasi', 'Kommunikatsiya', "Marketing bo'limini qurish", 'Tahlil va audit'],
      en: ['Product Strategy', 'Brand Platform', 'Communication', 'Marketing Team Building', 'Analysis & Audit'],
      ru: ['Продуктовая стратегия', 'Бренд-платформа', 'Коммуникация', 'Построение маркетингового отдела', 'Анализ и аудит'],
    },
    challenges: {
      uz: [
        "Savdo bo'limi mavjud bo'lishiga qaramay, mahsulotlar savdosi pasayib borayotgan edi va marketing tizimi savdoni qo'llab-quvvatlamayotgan edi.",
        "Brend uchun alohida marketing strategiyasi yo'q edi, shu sabab bozor, auditoriya va raqobatchilar bo'yicha yaxlit tasavvur shakllanmagan edi.",
        "Qadoqlarda mahsulotning afzalliklari va foydasi yetarlicha aniq ko'rinmas, vizual birlik hamda TOV tizimi izchil emas edi.",
        "Savdo kanallari, dorixonalar va distribyutorlar uchun standart materiallar yo'q, ichki marketing rollari va jarayonlari ham to'liq aniqlanmagan edi.",
      ],
      en: [
        'Despite having a sales department, product sales were declining and marketing was not operating as a system that could support revenue.',
        'There was no formal marketing strategy, which meant the team lacked a unified view of the market, the audience, and the competitive field.',
        'Packaging did not communicate product benefits clearly, and the brand lacked a consistent visual language and tone of voice.',
        'There were no standard materials for sales channels, pharmacies, or distributors, and internal marketing roles and processes were still undefined.',
      ],
      ru: [
        'Несмотря на наличие отдела продаж, продажи снижались, а маркетинг не работал как системная функция, поддерживающая выручку.',
        'Отсутствовала полноценная маркетинговая стратегия, из-за чего не было целостного понимания рынка, аудитории и конкурентного поля.',
        'Упаковка не доносила преимущества продукта достаточно ясно, а у бренда не было цельной визуальной системы и tone of voice.',
        'Не существовало стандартных материалов для каналов продаж, аптек и дистрибьюторов, а внутренние роли и процессы маркетинга были определены не полностью.',
      ],
    },
    deliverables: {
      uz: [
        "BFQ bozori o'rganildi, bo'g'im og'rig'i bilan yashovchi iste'molchilar va Argon xaridorlari orasida sifat va miqdoriy tadqiqotlar o'tkazildi.",
        "Mijoz ehtiyojlari, tanlov drayverlari va to'siqlari aniqlanib, UVP va mahsulotning ratsional hamda emotsional ustunliklari shakllantirildi.",
        "Argon Caps va boshqa mahsulotlar uchun qadoq dizayni hamda yagona vizual identifikatsiya qayta ishlab chiqildi; logobook va brand standards tayyorlandi.",
        "Brend qadriyatlari, missiya, arxetip, TOV, UTP va RTB tizimlashtirildi, mahsulot book hamda savdo nuqtalari uchun taqdimot materiallari yaratildi.",
        "Marketing strategiyasi, ichki rollar, jarayonlar va standartlar belgilandi; farmatsiya kanali, distribyutorlar va savdo jamoasi uchun amaliy materiallar topshirildi.",
      ],
      en: [
        'The BFQ category was researched in depth, with qualitative and quantitative studies among people experiencing joint pain and existing Argon buyers.',
        'Customer needs, choice drivers, and barriers were mapped, which allowed us to define the UVP and the rational and emotional strengths of the product.',
        'Packaging for Argon Caps and other products was redesigned within a unified visual identity, supported by a logobook and brand standards.',
        'We formalized the brand values, mission, archetype, tone of voice, UTP, and RTB, and produced a product book and presentation materials for sales points.',
        'The team received a practical marketing strategy together with defined roles, processes, standards, and execution materials for pharmacies, distributors, and sales teams.',
      ],
      ru: [
        'Была глубоко изучена категория БФК: проведены качественные и количественные исследования среди людей с болями в суставах и покупателей Argon.',
        'Мы определили потребности аудитории, драйверы и барьеры выбора, что позволило сформулировать UVP, а также рациональные и эмоциональные преимущества продукта.',
        'Для Argon Caps и других продуктов был переработан дизайн упаковки в рамках единой визуальной системы, дополненной logobook и brand standards.',
        'Были систематизированы ценности бренда, миссия, архетип, tone of voice, UTP и RTB, а также подготовлены product book и презентационные материалы для точек продаж.',
        'Команда получила прикладную маркетинговую стратегию с описанными ролями, процессами, стандартами и набором материалов для аптек, дистрибьюторов и продаж.',
      ],
    },
    gallery: [
      {
        src: aurusGallery01,
        title: {
          uz: 'Bozor va auditoriya tahlili sahifalari',
          en: 'Market and audience analysis pages',
          ru: 'Страницы анализа рынка и аудитории',
        },
      },
      {
        src: aurusGallery02,
        title: {
          uz: "Strategik vazifalar va tadqiqot yo'nalishlari",
          en: 'Strategic tasks and research directions',
          ru: 'Стратегические задачи и направления исследования',
        },
      },
      {
        src: aurusGallery03,
        title: {
          uz: 'Customer insights va competitor mapping',
          en: 'Customer insights and competitor mapping',
          ru: 'Customer insights и карта конкурентов',
        },
      },
      {
        src: aurusGallery04,
        title: {
          uz: 'Logobook va brend tizimi',
          en: 'Logobook and brand system',
          ru: 'Logobook и система бренда',
        },
      },
      {
        src: aurusGallery05,
        title: {
          uz: 'Argon qadoq dizayni konsepsiyasi',
          en: 'Argon packaging design concept',
          ru: 'Концепция дизайна упаковки Argon',
        },
      },
      {
        src: aurusGallery06,
        title: {
          uz: 'Kapsula mahsuloti uchun vizual yechim',
          en: 'Visual solution for the capsule product',
          ru: 'Визуальное решение для капсульного продукта',
        },
      },
      {
        src: aurusGallery07,
        title: {
          uz: "Maz va qo'llash bo'yicha materiallar",
          en: 'Ointment and application materials',
          ru: 'Материалы по мази и применению',
        },
      },
      {
        src: aurusGallery08,
        title: {
          uz: "Xodimlar uchun amaliy qo'llanma",
          en: 'Practical guide for employees',
          ru: 'Практическое руководство для сотрудников',
        },
      },
    ],
  },
  'milestone-is': {
    title: 'Milestone International School',
    category: 'Go-To-Market, Brand Platform & Admissions System',
    image: milestoneHero,
    description: {
      uz: "Milestone International School Toshkentdagi xususiy maktab loyihasi bo'lib, murojaat vaqtida hali nol holatda edi: bino qurilish bosqichida, nom tanlash jarayonida, o'quv yili boshlanishiga esa juda oz fursat qolgan edi. Loyiha davomida maktabni bozorda to'g'ri joylashtirish, mahsulotni to'liq upakovka qilish, brend platformasini qurish, ota-onalar bilan aloqa strategiyasini ishlab chiqish va qabul uchun sotuv hamda marketing tizimini yo'lga qo'yish ustida ishladik.",
      en: 'Milestone International School was a private school project in Tashkent that was still at a zero stage when the engagement started: the building was under construction, the naming process was ongoing, and there was very little time left before the academic year. The project focused on market positioning, packaging the educational product, building the brand platform, shaping parent communication, and setting up the admissions-oriented sales and marketing system.',
      ru: 'Milestone International School - проект частной школы в Ташкенте, который на момент обращения находился фактически на нулевой стадии: здание еще строилось, шел процесс выбора названия, а до начала учебного года оставалось совсем мало времени. В рамках проекта мы занимались рыночным позиционированием, полной упаковкой продукта, созданием бренд-платформы, разработкой стратегии коммуникации с родителями и запуском системы продаж и маркетинга для набора.',
    },
    tags: ['Education', 'Brand Platform', 'Go-To-Market', 'Admissions Strategy', 'CRM'],
    services: {
      uz: ['Mahsulot strategiyasi', 'Brend platformasi', "Marketing bo'limini qurish", 'Marketing strategiyasi'],
      en: ['Product Strategy', 'Brand Platform', 'Marketing Team Building', 'Marketing Strategy'],
      ru: ['Продуктовая стратегия', 'Бренд-платформа', 'Построение маркетингового отдела', 'Маркетинговая стратегия'],
    },
    challenges: {
      uz: [
        "Maktab loyiha boshlanishida hali nol holatda edi: bino qurilishda, nom tanlash jarayonida va qabul mavsumigacha vaqt juda qisqa edi.",
        "Yetarli investitsiya mablag'ini jalb qilish qiyin kechgan, shu bilan birga mahsulot, brending va strategiya tomondan tayyor tizim mavjud emas edi.",
        "Toshkentda 80+ xususiy maktab faoliyat yuritayotgan bo'lsa-da, ota-onalar tanlovni ko'pincha emotsional asosda qilayotgan edi; bu esa aniq pozitsiyalash va ishonchli argumentatsiyani talab qildi.",
        "Maktabni bozorda farqlash, ota-onalar bilan aloqa strategiyasini qurish va qabul uchun ichki sotuv-marketing tizimini tez ishga tushirish kerak edi.",
      ],
      en: [
        'At the start of the project, the school was still at zero stage: the building was under construction, the name had not yet been finalized, and there was very limited time before admissions season.',
        'Investment attraction had been difficult, and there was no ready-made product, branding, or strategic system in place.',
        'Although more than 80 private schools were operating in Tashkent, parents were often making decisions emotionally, which increased the need for clear positioning and strong trust-building arguments.',
        'The team needed to quickly differentiate the school, shape parent communication, and launch an internal admissions-focused sales and marketing system.',
      ],
      ru: [
        'На старте проекта школа находилась на нулевой стадии: здание строилось, название еще не было финализировано, а до сезона набора оставалось совсем мало времени.',
        'Привлечение инвестиций шло сложно, при этом не существовало готовой продуктовой, брендинговой и стратегической системы.',
        'Несмотря на наличие 80+ частных школ в Ташкенте, родители часто принимали решение эмоционально, поэтому требовались четкое позиционирование и убедительная аргументация.',
        'Нужно было быстро выделить школу на рынке, выстроить коммуникацию с родителями и запустить внутреннюю систему продаж и маркетинга под набор учеников.',
      ],
    },
    deliverables: {
      uz: [
        "TAM/SAM/SOM, 80+ xususiy maktab argument kartasi, SWOT, RTB va UST asosida bozor hamda raqobat muhiti tahlil qilindi.",
        "100+ respondent bilan CustDev va so'rovnomalar o'tkazildi, JTBD orqali ota-onalarning yashirin og'riq nuqtalari ochildi va 16 bosqichli CJM xaritasi ishlab chiqildi.",
        "Maktabning brend qadriyatlari, arxetipi, TOV va asosiy pozitsiyalash logikasi shakllantirildi; logo, brand platform, brandbook va touchpoint tizimi tayyorlandi.",
        "FAB modeli asosida maktab mahsuloti vizual va kontent jihatdan to'liq upakovka qilindi; welcomebook, targ'ibot dizaynlari, merch va kommunikatsion materiallar ishlab chiqildi.",
        "Qabul uchun CRM (amoCRM), sotuv KPI tizimi, ichki sotuv va marketing bo'limlari, vebsayt va reklama roliklari bilan to'liq ishlovchi qabul infratuzilmasi yaratildi.",
      ],
      en: [
        'The market and competitive landscape were analyzed through TAM/SAM/SOM, an argument map of 80+ private schools, SWOT, RTB, and UST workstreams.',
        'We ran CustDev interviews and surveys with 100+ respondents, uncovered hidden parent pain points through JTBD, and built a 16-step Customer Journey Map.',
        'The school received a full brand foundation including values, archetype, tone of voice, positioning logic, logo, brand platform, brandbook, and touchpoint system.',
        'Using the FAB model, we fully packaged the educational product in both visual and content terms, including a welcomebook, promotional design assets, merch, and communication materials.',
        'For admissions, we helped implement amoCRM, sales KPIs, internal sales and marketing departments, the website, and campaign videos to form a working enrollment infrastructure.',
      ],
      ru: [
        'Рынок и конкурентное окружение были проанализированы через TAM/SAM/SOM, карту аргументов 80+ частных школ, а также блоки SWOT, RTB и UST.',
        'Мы провели CustDev и опросы с участием 100+ респондентов, выявили скрытые боли родителей через JTBD и построили 16-шаговую Customer Journey Map.',
        'Школа получила полноценную бренд-основу: ценности, архетип, tone of voice, логику позиционирования, логотип, brand platform, brandbook и систему touchpoints.',
        'По модели FAB был полностью упакован образовательный продукт с визуальной и контентной стороны: welcomebook, рекламные дизайны, merch и коммуникационные материалы.',
        'Для набора были внедрены amoCRM, KPI для продаж, внутренние отделы продаж и маркетинга, сайт и рекламные ролики - то есть рабочая инфраструктура набора.',
      ],
    },
    gallery: [
      /*
      {
        src: milestoneGallery01,
        title: {
          uz: 'Bozor hajmi, insightlar va raqobatchilar tahlili',
          en: 'Market size, insights, and competitor analysis',
          ru: 'Анализ рынка, инсайтов и конкурентов',
        },
      },
      {
        src: milestoneGallery02,
        title: {
          uz: 'Brendning ratsional va emotsional ustunliklari',
          en: 'Rational and emotional brand advantages',
          ru: 'Рациональные и эмоциональные преимущества бренда',
        },
      },
      {
        src: milestoneGallery03,
        title: {
          uz: 'Brend qadriyatlari, missiya va arxetip',
          en: 'Brand values, mission, and archetype',
          ru: 'Ценности бренда, миссия и архетип',
        },
      },
      {
        src: milestoneGallery04,
        title: {
          uz: 'Logo, brand platform va touchpoint tizimi',
          en: 'Logo, brand platform, and touchpoint system',
          ru: 'Логотип, brand platform и система touchpoints',
        },
      },
      */
      {
        src: milestoneGallery05,
        title: {
          uz: 'Welcomebook va qabul materiallari',
          en: 'Welcomebook and admissions materials',
          ru: 'Welcomebook и материалы для набора',
        },
      },
      {
        src: milestoneGallery06,
        title: {
          uz: 'Maktab vebsayti',
          en: 'School website',
          ru: 'Сайт школы',
        },
      },
      {
        src: milestoneGallery07,
        title: {
          uz: 'Qabul uchun reklama roliklari',
          en: 'Admissions video creatives',
          ru: 'Рекламные ролики для набора',
        },
      },
      {
        src: milestoneGallery08,
        title: {
          uz: 'Maktab binosi: oldin va bitkazilgan holat',
          en: 'School building: before and completed state',
          ru: 'Здание школы: до и после завершения',
        },
      },
      {
        src: milestoneGallery09,
        title: {
          uz: 'Maktab ichki rasmlari',
          en: 'School interior photography',
          ru: 'Фотографии интерьера школы',
        },
      },
      {
        src: milestoneGallery10,
        title: {
          uz: "Ichki sotuv va marketing bo'limlari",
          en: 'Internal sales and marketing departments',
          ru: 'Внутренние отделы продаж и маркетинга',
        },
      },
    ],
  },
};

const genericTitles: Record<string, string> = {
  'ahmad-tea': 'Ahmad Tea',
  'bek-ota': 'Bek Ota',
  dilmuss: 'Dilmuss',
  taxtakon: 'Taxtakon',
  'najot-nur': 'Najot Nur',
  'merit-chemicals': 'Merit Chemicals',
  zahratun: 'Zahratun',
  impuls: 'Impuls Tibbiyot Instituti',
  damar: 'Damar',
  aqly: 'AQLY',
  'baxtiyor-oila': 'Baxtiyor Oila',
  'asr-kimyo': 'Asr Kimyo',
  'oxus-university': 'OXUS University',
  mobetco: 'MobetCo',
  'president-gifts': 'President Gifts',
  sfera: 'Sfera',
  tima: 'Tima',
  zafaron: "Za'faron",
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const currentLang = (lang in { uz: true, en: true, ru: true } ? lang : 'uz') as LangKey;

  const project = slug ? projectsData[slug] : null;
  const genericTitle = slug ? genericTitles[slug] : null;

  if (!project && !genericTitle) {
    return (
      <PageLayout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">
            {currentLang === 'uz' ? 'Loyiha topilmadi' : currentLang === 'ru' ? 'Проект не найден' : 'Project not found'}
          </h1>
          <Link to="/projects" className="mt-4 inline-block text-primary">
            {t.projects.viewAll}
          </Link>
        </div>
      </PageLayout>
    );
  }

  const title = project?.title || genericTitle || '';
  const category = project?.category || 'Marketing & Strategy';
  const image = project?.image || null;
  const description =
    project?.description?.[currentLang] ||
    (currentLang === 'uz'
      ? `${title} uchun marketing va brending xizmatlarini taqdim etdik.`
      : currentLang === 'ru'
        ? `Мы оказали маркетинговые и брендинговые услуги для ${title}.`
        : `Provided marketing and branding services for ${title}.`);
  const tags = project?.tags || ['Marketing', 'Strategy'];
  const services =
    project?.services?.[currentLang] ||
    (currentLang === 'uz'
      ? ['Marketing strategiyasi', 'Brend platformasi']
      : currentLang === 'ru'
        ? ['Маркетинговая стратегия', 'Бренд-платформа']
        : ['Marketing Strategy', 'Brand Platform']);
  const challenges = project?.challenges?.[currentLang] || [];
  const deliverables = project?.deliverables?.[currentLang] || [];
  const gallery = project?.gallery || [];

  const aboutLabel = currentLang === 'uz' ? 'Loyiha haqida' : currentLang === 'ru' ? 'О проекте' : 'About the project';
  const servicesLabel = currentLang === 'uz' ? "Ko'rsatilgan xizmatlar" : currentLang === 'ru' ? 'Оказанные услуги' : 'Services provided';
  const challengesLabel = currentLang === 'uz' ? 'Aniqlangan ehtiyoj va muammolar' : currentLang === 'ru' ? 'Выявленные задачи и проблемы' : 'Challenges and needs identified';
  const deliverablesLabel = currentLang === 'uz' ? 'Bajarilgan ishlar' : currentLang === 'ru' ? 'Что было сделано' : 'What we delivered';
  const galleryLabel = currentLang === 'uz' ? 'Loyiha vizuallari' : currentLang === 'ru' ? 'Визуалы проекта' : 'Project visuals';
  const galleryDescription =
    slug === 'aurus-pharm'
      ? currentLang === 'uz'
        ? "Portfoliodagi asosiy vizuallar: bozor tahlili, qadoq dizayni, logobook, mahsulot book va savdo jamoasi uchun tayyorlangan materiallar."
        : currentLang === 'ru'
          ? 'Ключевые визуалы из портфолио: аналитика рынка, дизайн упаковки, logobook, product book и материалы для команды продаж.'
          : 'Key visuals from the portfolio: market analysis, packaging design, the logobook, product book, and materials prepared for the sales team.'
      : slug === 'milestone-is'
        ? currentLang === 'uz'
          ? "Portfoliodagi asosiy vizuallar: bozor va raqobatchilar tahlili, brandbook materiallari, qabul uchun website va roliklar, maktab ichki muhitlari hamda sotuv-marketing tizimi."
          : currentLang === 'ru'
            ? 'Ключевые визуалы из портфолио: анализ рынка и конкурентов, brandbook-материалы, сайт и ролики для набора, интерьер школы и система продаж-маркетинга.'
            : 'Key visuals from the portfolio: market and competitor analysis, brandbook materials, the admissions website and videos, school interiors, and the sales-marketing setup.'
      : currentLang === 'uz'
        ? "Portfoliodagi asosiy sahifalardan olingan vizuallar: katalog, brend platformasi va touchpointlar."
        : currentLang === 'ru'
          ? 'Подборка визуалов из портфолио: каталог, бренд-платформа и ключевые точки контакта.'
          : 'A selection of visuals from the portfolio: catalog pages, brand platform materials, and key touchpoints.';

  return (
    <PageLayout>
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, hsla(202, 100%, 11%, 0.97) 0%, hsla(204, 47%, 28%, 0.95) 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, hsla(166, 75%, 61%, 0.08) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-white/50 transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {t.projects.viewAll}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-primary">{category}</span>
            <h1 className="mt-2 text-4xl font-heading font-bold text-white md:text-6xl">{title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 overflow-hidden rounded-3xl shadow-xl"
            >
              <img src={image} alt={title} className="h-auto w-full" />
            </motion.div>
          )}

          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 text-2xl font-heading font-bold text-foreground">{aboutLabel}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-heading font-bold text-foreground">{servicesLabel}</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="mb-3 text-lg font-heading font-bold text-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {(challenges.length > 0 || deliverables.length > 0) && (
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {challenges.length > 0 && (
                <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
                  <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">{challengesLabel}</h3>
                  <div className="space-y-4">
                    {challenges.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <p className="leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {deliverables.length > 0 && (
                <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
                  <h3 className="mb-5 text-2xl font-heading font-bold text-foreground">{deliverablesLabel}</h3>
                  <div className="space-y-4">
                    {deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <p className="leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {gallery.length > 0 && (
            <div className="mt-14">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground md:text-3xl">{galleryLabel}</h2>
                  <p className="mt-3 max-w-3xl text-muted-foreground">{galleryDescription}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {gallery.map((item, index) => (
                  <motion.figure
                    key={`${item.src}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-[0_18px_50px_rgba(0,0,0,0.05)] ${
                      gallery.length % 2 === 1 && index === gallery.length - 1 ? 'md:col-span-2' : ''
                    }`}
                  >
                    <img src={item.src} alt={item.title[currentLang]} className="h-full w-full object-cover" loading="lazy" />
                    <figcaption className="border-t border-border/70 px-5 py-4 text-sm text-muted-foreground">
                      {item.title[currentLang]}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          )}

          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, hsla(166, 75%, 61%, 0.06) 0%, hsla(259, 43%, 51%, 0.04) 100%)',
              border: '1px solid hsla(166, 75%, 61%, 0.1)',
            }}
          >
            <h3 className="mb-2 text-xl font-heading font-bold text-foreground">
              {currentLang === 'uz' ? "Loyihangizni muhokama qilaylik" : currentLang === 'ru' ? 'Обсудим ваш проект' : "Let's discuss your project"}
            </h3>
            <p className="mb-6 text-muted-foreground">
              {currentLang === 'uz'
                ? "Biz sizning brendingiz uchun eng yaxshi yechimni topamiz"
                : currentLang === 'ru'
                  ? 'Мы найдём лучшее решение для вашего бренда'
                  : "We'll find the best solution for your brand"}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))', color: 'hsl(202, 100%, 11%)' }}
            >
              {t.contact.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetailPage;
