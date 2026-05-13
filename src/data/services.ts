import { Building2, Handshake, Lightbulb, Palette, Search, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Language } from '@/lib/i18n';

export type ServiceSlug =
  | 'audit'
  | 'product'
  | 'brand'
  | 'strategy'
  | 'team'
  | 'partnership';

export interface ServiceContent {
  title: string;
  intro: string;
  when: string;
  what: string;
  result: string;
  value: string;
  shortDescription: string;
}

export interface ServiceData {
  slug: ServiceSlug;
  number: string;
  icon: LucideIcon;
  accent: { from: string; to: string };
  content: Record<Language, ServiceContent>;
}

export const services: ServiceData[] = [
  {
    slug: 'audit',
    number: '01',
    icon: Search,
    accent: { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(181, 100%, 50%, 1)' },
    content: {
      uz: {
        title: 'Tahlil va audit',
        shortDescription: 'Bozor, raqobatchilar, auditoriya va hozirgi marketing faoliyatini ko‘rib chiqamiz. Natijada o‘sish imkoniyatlari va uzilish nuqtalari aniq ko‘rinadi.',
        intro: 'Tahlil va audit keyingi strategik qarorlar uchun tayanch bosqichdir. Bu yerda bozor, raqobatchilar, auditoriya va amaldagi marketing ishlari bir-biriga bog‘lab ko‘riladi. Maqsad — muammo qayerda ekanini taxmin bilan emas, real holat va aniq kuzatuvlar asosida ko‘rsatish.',
        when: 'Marketing ishlari bor, lekin natija nega kutilgan darajada emasligi ravshan bo‘lmasa, avval audit zarur. Masalan, kontent va reklama yurib turadi, ammo umumiy yo‘nalish sezilmaydi. Mijoz nima uchun tanlayotgani yoki nega voz kechayotgani yetarlicha tushunarli emas. Raqobatchilar orasida brendning o‘rni aniq ko‘rinmaydi. Taklif, xabar, kanal yoki sotuvga olib boradigan yo‘lda uzilish bor, lekin uning sababi hali topilmagan.',
        what: 'Avval mavjud marketing holatini o‘rganamiz. Mahsulot qanday tushuntirilgani, auditoriya qanday belgilangan, asosiy xabarlar qanchalik aniq va kanallar qaysi mantiq bilan ishlayotgani ko‘riladi. Keyingi bosqich — bozor va raqobatchilar tahlili. Raqobatchilar qanday va’da berayotgani, mijoz e’tiborini qaysi dalillar tortayotgani, bozorda qaysi joylar band va qaysi imkoniyatlar ochiq qolgani alohida baholanadi.',
        result: 'Audit yakunida marketing holati bo‘yicha aniq tashxis shakllanadi. Qaysi ishlar natija berayotgani, qayerda uzilish borligi va nimadan boshlash kerakligi ravshanlashadi. Natijada sizda bozor va raqobatchilar bo‘yicha xulosa, auditoriya haqidagi muhim kuzatuvlar, marketingdagi kuchli va zaif nuqtalar, shuningdek keyingi strategik qadamlar bo‘yicha tavsiyalar bo‘ladi.',
        value: 'Tahlil va audit marketingdagi muammoni to‘g‘ri nomlashga yordam beradi. Muammo aniq ko‘rilsa, mahsulot, brend va marketing qarorlari ham bir-biriga bog‘lanadi. Shu sababli keyingi ishlar alohida urinishlar sifatida emas, asosli strategik yo‘nalish bo‘yicha davom etadi.',
      },
      en: {
        title: 'Analysis & Audit',
        shortDescription: 'We review the market, competitors, audience and current marketing. The result reveals growth opportunities and breakdown points.',
        intro: 'Analysis and audit is the foundation for the next strategic decisions. Here the market, competitors, audience and current marketing are examined together. The goal is to show where the problem is — based on real observations, not guesswork.',
        when: 'When marketing activities exist but it is unclear why results are below expectations, an audit is needed first. For example: content and ads run but there is no shared direction. It is unclear why customers choose or reject you. The brand’s position among competitors is unclear. There is a break in offer, message, channel, or sales path — but the cause has not been found.',
        what: 'First we study the existing marketing state. How the product is explained, how the audience is defined, how clear the key messages are, and the logic behind channels. Next — market and competitor analysis. We assess what competitors promise, what arguments capture customer attention, which positions are taken and which opportunities remain open.',
        result: 'A clear diagnosis of the marketing state is formed. What is working, where the breakdowns are, and where to start become clear. You receive conclusions on market and competitors, key audience observations, marketing strengths and weaknesses, and recommendations for the next strategic steps.',
        value: 'Analysis and audit help name the marketing problem correctly. When the problem is visible, product, brand and marketing decisions also connect. Subsequent work continues as a grounded strategic direction — not isolated attempts.',
      },
      ru: {
        title: 'Анализ и аудит',
        shortDescription: 'Изучаем рынок, конкурентов, аудиторию и текущий маркетинг. В итоге становятся видны возможности роста и точки разрыва.',
        intro: 'Анализ и аудит — основа для последующих стратегических решений. Здесь рынок, конкуренты, аудитория и текущий маркетинг рассматриваются во взаимосвязи. Цель — показать, где проблема, опираясь на реальные наблюдения, а не догадки.',
        when: 'Если маркетинговая активность есть, но непонятно, почему результат ниже ожиданий — нужен аудит. Например: контент и реклама идут, но общего направления не видно. Непонятно, почему клиент выбирает или отказывается. Позиция бренда среди конкурентов размыта. Есть разрыв в предложении, сообщении, канале или воронке — а причина не найдена.',
        what: 'Сначала изучаем текущее состояние маркетинга: как объясняется продукт, как определена аудитория, насколько ясны ключевые сообщения и по какой логике работают каналы. Затем — анализ рынка и конкурентов: что обещают конкуренты, какие аргументы привлекают внимание, какие позиции заняты и какие возможности открыты.',
        result: 'Формируется чёткий диагноз состояния маркетинга. Становится ясно, что работает, где разрывы и с чего начинать. Вы получаете выводы по рынку и конкурентам, наблюдения по аудитории, сильные и слабые стороны и рекомендации по следующим стратегическим шагам.',
        value: 'Анализ и аудит помогают правильно назвать проблему. Когда проблема видна — продукт, бренд и маркетинговые решения связываются. Дальнейшая работа идёт как обоснованное стратегическое направление, а не отдельные попытки.',
      },
    },
  },
  {
    slug: 'product',
    number: '02',
    icon: Lightbulb,
    accent: { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(259, 43%, 65%, 1)' },
    content: {
      uz: {
        title: 'Mahsulot strategiyasi',
        shortDescription: 'Mahsulotning bozordagi o‘rni, kim uchun qadrli ekani va qaysi sabab bilan tanlanishini belgilaymiz.',
        intro: 'Mahsulot strategiyasi mahsulotning bozordagi o‘rnini, kim uchun qadrli ekanini va qaysi sabab bilan tanlanishini belgilaydi. Bu bosqichda taklifning mazmuni, auditoriya, raqobatchilar fonidagi farq va narxni asoslaydigan qiymat bir joyda ko‘riladi. Maqsad — mahsulotni oddiy sotiladigan narsa emas, bozorda aniq ehtiyojga javob beradigan taklifga aylantirish.',
        when: 'Mahsulot bor, lekin uning kimga, nima uchun va qaysi farq bilan taklif qilinishi yetarlicha ravshan bo‘lmagan paytda bu xizmat ayniqsa muhim. Masalan, mahsulot sifatli, ammo mijoz uni nima sababdan tanlashi kerakligini tez tushunmaydi. Taklif raqobatchilarnikidan ajralib turmaydi. Narxni asoslash qiyin. Sotuvda bir xil e’tirozlar qayta-qayta uchraydi. Yangi mahsulot bozorga chiqishi kerak, lekin qaysi segmentdan boshlash ma’qulligi hali ochiq savol.',
        what: 'Avval mahsulotning amaldagi holatini ko‘ramiz. U qaysi muammoni hal qilishi, kim uchun muhimligi, qaysi vaziyatda kerak bo‘lishi va mijoz undan qanday natija kutishi aniqlashtiriladi. Keyin bozor va raqobatchilar fonida taklifning farqli tomonlari ajratiladi. Kuchli jihatlar, zaif nuqtalar, narxni asoslaydigan omillar va mijoz qaroriga ta’sir qiladigan mezonlar alohida baholanadi. Shu asosda mahsulot pozitsiyasi, qiymat taklifi, sotuv argumentlari va rivojlanish yo‘nalishi shakllanadi.',
        result: 'Mahsulotni kimga, qanday qiymat bilan va qaysi farq orqali taklif qilish kerakligi ravshan bo‘ladi. Natijada sizda asosiy auditoriya segmentlari, mahsulotning qiymat taklifi, raqobatdagi o‘rni, sotuv argumentlari va keyingi rivojlanish uchun strategik yo‘nalish bo‘ladi.',
        value: 'Mahsulot strategiyasi marketing va brend uchun poydevor. Mahsulotning qiymati aniq bo‘lmasa, reklama ham, kontent ham, brend xabari ham umumiy chiqadi. Bu bosqichdan keyin biznes “nima sotamiz?” degan savoldan chuqurroq masalaga o‘tadi: mijoz aslida nimaga pul to‘laydi?',
      },
      en: {
        title: 'Product Strategy',
        shortDescription: 'We define the product’s position, for whom it is valuable and why customers choose it.',
        intro: 'Product strategy defines the product’s position in the market, for whom it is valuable and why it is chosen. The offer, audience, differentiation and value that justifies price are examined together. The goal — to turn the product from “something to sell” into an offer that answers a clear market need.',
        when: 'Especially relevant when the product exists but it is unclear to whom, why and with what difference it is offered. The product is good but customers don’t quickly understand why to choose it. The offer doesn’t stand out from competitors. Pricing is hard to justify. The same objections appear in sales repeatedly. A new product needs to launch but the entry segment is still an open question.',
        what: 'First we look at the current product state: what problem it solves, who needs it, in which situation, and what result the customer expects. Then we extract differentiators against the market and competitors. Strengths, weaknesses, price-justifying factors and decision criteria are evaluated separately. On this basis we shape positioning, value proposition, sales arguments and development direction.',
        result: 'It becomes clear to whom the product is offered, with what value and through which difference. You receive key audience segments, value proposition, competitive position, sales arguments and a strategic direction for further development.',
        value: 'Product strategy is the foundation for marketing and brand. Without clear value, ads, content and brand messages all sound generic. After this stage business moves from “what do we sell?” to a deeper question: what does the customer actually pay for?',
      },
      ru: {
        title: 'Продуктовая стратегия',
        shortDescription: 'Определяем позицию продукта, для кого он ценен и почему его выбирают.',
        intro: 'Продуктовая стратегия определяет место продукта на рынке, для кого он ценен и почему его выбирают. Здесь предложение, аудитория, отличие на фоне конкурентов и ценность, оправдывающая цену, рассматриваются вместе. Цель — превратить продукт в предложение, отвечающее реальной потребности рынка.',
        when: 'Особенно важно, когда продукт есть, но непонятно, кому, зачем и с каким отличием он предлагается. Продукт хороший, но клиенты не сразу понимают, почему выбрать именно его. Предложение не выделяется среди конкурентов. Цену сложно обосновать. В продажах повторяются одни и те же возражения. Новый продукт должен выйти, но сегмент входа — открытый вопрос.',
        what: 'Сначала смотрим текущее состояние продукта: какую проблему решает, кому важен, в какой ситуации, какого результата ждёт клиент. Затем выделяем отличия на фоне рынка и конкурентов. Оцениваем сильные и слабые стороны, факторы, обосновывающие цену, и критерии принятия решения. На этой базе формируется позиционирование, ценностное предложение, аргументы продаж и направление развития.',
        result: 'Становится ясно, кому, с какой ценностью и через какое отличие предлагается продукт. Вы получаете ключевые сегменты аудитории, ценностное предложение, позицию относительно конкурентов, аргументы продаж и стратегическое направление.',
        value: 'Продуктовая стратегия — фундамент для маркетинга и бренда. Если ценность размыта, и реклама, и контент, и сообщения бренда звучат общё. После этого бизнес переходит от «что мы продаём?» к более глубокому вопросу: за что клиент действительно платит?',
      },
    },
  },
  {
    slug: 'brand',
    number: '03',
    icon: Palette,
    accent: { from: 'hsla(259, 43%, 51%, 1)', to: 'hsla(166, 75%, 61%, 1)' },
    content: {
      uz: {
        title: 'Brend platformasi',
        shortDescription: 'Brendning bozordagi o‘rni, asosiy g‘oyasi, xabarlari va gapirish ohangini bir tizimga keltiramiz.',
        intro: 'Brend platformasi mahsulot qiymatini mijoz tushunadigan, eslab qoladigan va ishonadigan mazmunga aylantiradi. Bu bosqichda brendning bozordagi o‘rni, asosiy g‘oyasi, xabarlari, qadriyatlari va muloqot ohangi aniqlanadi. Maqsad — brendni faqat tashqi ko‘rinish bilan emas, aniq pozitsiya va ichki mantiq bilan shakllantirish.',
        when: 'Biznesda mahsulot yoki taklif bor, lekin brend bozorda qanday qabul qilinishi kerakligi yetarlicha aniq bo‘lmagan holatlarda bu xizmat muhim. Masalan, kompaniya turli joyda o‘zini turlicha tushuntiradi. Sotuv, reklama, kontent va rahbar chiqishlarida bir xil fikr sezilmaydi. Brend raqobatchilardan nimasi bilan farq qilishi tushunarsiz. Mijoz sizni qaysi sabab bilan eslab qolishi kerakligi ham ravshan emas.',
        what: 'Avval mahsulot, auditoriya va bozor mantiqidan kelib chiqib, brendning asosiy pozitsiyasi belgilanadi. Brend kim uchun muhim, qaysi vaziyatda esga tushishi kerak, mijozga qanday qiymat va’da qiladi — shu savollar atrofida aniq yo‘nalish shakllanadi. Keyin brendning asosiy g‘oyasi, xabarlar tizimi, qadriyatlari va muloqot ohangi ishlab chiqiladi. Muhimi, brend har bir aloqa nuqtasida bir xil, tushunarli va ishonchli eshitilishi.',
        result: 'Kompaniya o‘zini bozorda qanday tushuntirishi, mijozga qaysi asosiy fikrni yetkazishi va qanday ohangda gapirishi aniq bo‘ladi. Sizda brend pozitsiyasi, asosiy g‘oya, qadriyatlar, xabarlar tizimi, muloqot ohangi va keyingi marketing materiallari uchun tayanch hujjat shakllanadi.',
        value: 'Brend platformasi marketing, sotuv va kommunikatsiyani bitta ma’noga ulaydi. Brend ichkarida aniq bo‘lsa, tashqaridagi xabar ham tarqoq chiqmaydi. Kompaniya “biz kimligimizni qanday aytamiz?” degan savolga umumiy emas, aniq javobga ega bo‘ladi.',
      },
      en: {
        title: 'Brand Platform',
        shortDescription: 'We bring the brand’s position, core idea, messages and tone of voice into one system.',
        intro: 'The brand platform turns product value into content the customer understands, remembers and trusts. Position, core idea, messages, values and tone of voice are defined here. The goal — to shape the brand not by appearance alone, but by clear positioning and inner logic.',
        when: 'Important when the product exists but how the brand should be perceived is unclear. The company explains itself differently across touchpoints. Sales, ads, content and leadership messages don’t convey the same thought. It’s unclear how the brand differs from competitors or why a customer should remember you.',
        what: 'First we set the brand’s positioning, derived from product, audience and market logic. For whom the brand matters, in which situations it should come to mind, what value it promises — direction is shaped around these questions. Then the core idea, message system, values and tone of voice are developed. The brand should sound consistent, clear and credible across every touchpoint.',
        result: 'It becomes clear how the company explains itself, what main idea it conveys and in what tone. You receive brand positioning, core idea, values, message system, tone of voice and a foundation document for further marketing materials.',
        value: 'The brand platform unites marketing, sales and communication around one meaning. When the brand is clear inside, external messages are not scattered. The company has a precise — not generic — answer to “how do we say who we are?”',
      },
      ru: {
        title: 'Бренд-платформа',
        shortDescription: 'Сводим в систему позицию бренда, ключевую идею, сообщения и тон коммуникации.',
        intro: 'Бренд-платформа превращает ценность продукта в контент, который клиент понимает, запоминает и которому доверяет. Здесь определяются позиция, ключевая идея, сообщения, ценности и тон коммуникации. Цель — формировать бренд не одной внешней формой, а чёткой позицией и внутренней логикой.',
        when: 'Важно, когда продукт есть, но непонятно, как бренд должен восприниматься. Компания объясняет себя по-разному в разных точках. В продажах, рекламе, контенте и выступлениях руководства не звучит единая мысль. Непонятно, чем бренд отличается от конкурентов и за что его должны запомнить.',
        what: 'Сначала задаём позиционирование бренда — от продукта, аудитории и логики рынка. Для кого бренд важен, в каких ситуациях должен вспоминаться, какую ценность обещает. Затем разрабатываем ключевую идею, систему сообщений, ценности и тон коммуникации. Главное — бренд должен звучать последовательно, понятно и достоверно в каждой точке контакта.',
        result: 'Становится ясно, как компания объясняет себя, какую главную мысль доносит и в каком тоне говорит. Вы получаете позиционирование, ключевую идею, ценности, систему сообщений, тон голоса и опорный документ для дальнейших материалов.',
        value: 'Бренд-платформа связывает маркетинг, продажи и коммуникацию одним смыслом. Когда бренд внутри ясен — внешние сообщения не расходятся. У компании появляется точный, а не общий, ответ на вопрос «как мы говорим, кто мы».',
      },
    },
  },
  {
    slug: 'strategy',
    number: '04',
    icon: Target,
    accent: { from: 'hsla(204, 47%, 28%, 1)', to: 'hsla(166, 75%, 61%, 1)' },
    content: {
      uz: {
        title: 'Marketing strategiyasi',
        shortDescription: 'Mahsulot va brendni bozorga olib chiqish yo‘lini belgilaymiz: auditoriya, xabar, kanal, budjet va kampaniyalar bir tizimga keladi.',
        intro: 'Marketing strategiyasi mahsulot va brendni bozorga olib chiqish yo‘lini belgilaydi. Bu bosqichda auditoriya, xabar, kanal, budjet, kampaniya va o‘sish yo‘nalishi bir-biriga bog‘langan holda ko‘riladi. Asosiy vazifa — marketingni alohida postlar, reklama urinishlari yoki kampaniyalar yig‘indisi emas, biznes maqsadiga xizmat qiladigan tizimga aylantirish.',
        when: 'Mahsulot va brend yo‘nalishi bor, lekin marketing ishlari qaysi ustuvorlik asosida yurishi aniq bo‘lmagan paytda bu xizmat kerak bo‘ladi. Masalan, reklama berilyapti, kontent chiqyapti, kampaniyalar ham bor. Ammo ularning umumiy yo‘nalishi sezilmaydi. Jamoa har safar nimaga urg‘u berishni qaytadan muhokama qiladi. Kanal tanlovi, xabar, budjet va kutiladigan natija o‘rtasida bog‘liqlik yetarli emas.',
        what: 'Avval biznes maqsadi va marketingdan kutilayotgan natija aniqlashtiriladi. Keyin auditoriya segmentlari, asosiy xabarlar, kanal mantiqi, kampaniya yo‘nalishlari va o‘sish imkoniyatlari bir tizimga yig‘iladi. Bu jarayonda marketing faqat “qayerda reklama beramiz?” degan savol bilan cheklanmaydi. Har bir qaror mahsulot qiymati, brend pozitsiyasi, mijozning tanlov mezoni va biznesning o‘sish maqsadi bilan bog‘lanadi.',
        result: 'Yakunda biznes uchun aniq yo‘nalish, ustuvor auditoriyalar, asosiy xabarlar, kanal mantiqi va harakat rejasi tayyor bo‘ladi. Qaysi segmentga chiqish, qaysi xabarni aytish, qaysi kanallarga urg‘u berish va natijani qaysi mezonlar orqali baholash kerakligi aniq ko‘rinadi.',
        value: 'Marketing strategiyasi jamoaning kuchini bir yo‘nalishga yig‘adi. Strategiya bo‘lmasa, ish ko‘p bo‘lishi mumkin, lekin natija tarqoq qoladi. Bu bosqichdan keyin marketing biznes maqsadiga ulangan, o‘lchanadigan va boshqariladigan tizimga aylanadi.',
      },
      en: {
        title: 'Marketing Strategy',
        shortDescription: 'We define the path to bring product and brand to market: audience, message, channels, budget and campaigns become one system.',
        intro: 'Marketing strategy defines the path to bring product and brand to market. Audience, message, channel, budget, campaigns and growth direction are examined as a connected whole. The main task — to turn marketing from scattered posts, ad attempts or campaigns into a system serving business goals.',
        when: 'Needed when product and brand direction exist but it is unclear by which priorities marketing runs. Ads run, content goes out, campaigns exist — but a shared direction is not felt. The team re-discusses focus every time. The connection between channel, message, budget and expected result is insufficient.',
        what: 'First we clarify the business goal and expected marketing result. Then audience segments, key messages, channel logic, campaign directions and growth opportunities are unified. Marketing is not limited to “where do we run ads?” — every decision is tied to product value, brand position, customer choice criteria and growth goals.',
        result: 'A clear direction, priority audiences, key messages, channel logic and an action plan for the business are ready. Which segment to enter, which message to deliver, which channels to emphasise and how results are evaluated — all become clear.',
        value: 'Marketing strategy concentrates the team’s force in one direction. Without strategy there can be a lot of work but scattered results. Marketing becomes a measurable, manageable system tied to business goals.',
      },
      ru: {
        title: 'Маркетинговая стратегия',
        shortDescription: 'Определяем путь вывода продукта и бренда на рынок: аудитория, сообщение, каналы, бюджет и кампании становятся единой системой.',
        intro: 'Маркетинговая стратегия задаёт путь вывода продукта и бренда на рынок. Аудитория, сообщение, канал, бюджет, кампании и направление роста рассматриваются связно. Главная задача — превратить маркетинг из набора постов, попыток рекламы и кампаний в систему, работающую на бизнес-цель.',
        when: 'Нужна, когда направление продукта и бренда есть, но неясно, по каким приоритетам идёт маркетинг. Реклама идёт, контент выходит, кампании есть — но общего направления не чувствуется. Команда каждый раз заново обсуждает, на чём ставить акцент. Связь между каналом, сообщением, бюджетом и ожидаемым результатом недостаточна.',
        what: 'Сначала уточняем бизнес-цель и ожидаемый результат от маркетинга. Затем сегменты аудитории, ключевые сообщения, логика каналов, направления кампаний и точки роста собираются в единую систему. Маркетинг не ограничивается вопросом «где разместить рекламу?» — каждое решение связано с ценностью продукта, позицией бренда, критериями выбора клиента и целью роста бизнеса.',
        result: 'Готово чёткое направление, приоритетные аудитории, ключевые сообщения, логика каналов и план действий. Становится ясно, в какой сегмент выходить, какое сообщение нести, на каких каналах делать упор и по каким критериям оценивать результат.',
        value: 'Маркетинговая стратегия концентрирует силы команды в одном направлении. Без стратегии работы может быть много, а результат остаётся разрозненным. Маркетинг становится измеримой и управляемой системой, привязанной к бизнес-цели.',
      },
    },
  },
  {
    slug: 'team',
    number: '05',
    icon: Building2,
    accent: { from: 'hsla(166, 75%, 61%, 1)', to: 'hsla(259, 43%, 51%, 1)' },
    content: {
      uz: {
        title: 'Marketing bo‘limini qurish',
        shortDescription: 'Marketing jamoasi uchun rollar, ish tartibi, mas’uliyat chegaralari va natija mezonlarini ishlab chiqamiz.',
        intro: 'Marketing bo‘limi bir nechta mutaxassisni yig‘ish bilan o‘z-o‘zidan tizimga aylanmaydi. Unda strategiya, mas’uliyat, ish tartibi va natija mezonlari bir-biriga bog‘langan bo‘lishi kerak. Bu xizmat marketing ishlarini tartibga soladi: jamoada kim qaysi yo‘nalishga javob beradi, vazifalar qanday yuradi, ish qayerda tekshiriladi va natija qaysi mezon bilan baholanadi.',
        when: 'Marketing ishlari ko‘paygan, lekin ularni boshqarish qiyinlashgan paytda bu xizmat ayniqsa muhim. Masalan, jamoa bor, ammo rollar aniq emas. Kontent, reklama, dizayn va sotuv alohida-alohida yuradi. Vazifalar bajariladi, lekin ularning biznes natijasiga ta’siri yetarlicha ko‘rinmaydi. Rahbar har safar jarayonni eslatishi yoki qayta yo‘naltirishi kerak bo‘lib qoladi.',
        what: 'Avval biznes marketing bo‘limidan qanday natija kutayotganini aniqlashtiramiz. Keyin jamoa tuzilmasi, asosiy rollar, mas’uliyat chegaralari, ish jarayonlari va hisobot tartibi ishlab chiqiladi. Marketing ichidagi yo‘nalishlar alohida ko‘riladi: strategiya, kontent, reklama, analitika, brend, sotuv bilan hamkorlik va tashqi pudratchilar bilan ishlash. Har bir yo‘nalish bo‘yicha vazifa, mas’ul shaxs va natija mezoni belgilanadi.',
        result: 'Marketing bo‘limi uchun aniq boshqaruv modeli paydo bo‘ladi. Sizda jamoa tuzilmasi, rollar taqsimoti, jarayon xaritasi, KPI mantiqi, hisobot tartibi va marketing bo‘limini boshqarish uchun amaliy yo‘l-yo‘riq bo‘ladi.',
        value: 'Marketing bo‘limi to‘g‘ri qurilsa, strategiya qog‘ozda qolib ketmaydi. U kundalik vazifalar, uchrashuvlar, qarorlar va natija tahliliga ulanadi. Marketing bo‘limi shunchaki topshiriq bajaradigan ijrochi guruh emas — biznes o‘sishiga xizmat qiladigan tizimga aylanadi.',
      },
      en: {
        title: 'Marketing Team Building',
        shortDescription: 'We design roles, workflows, responsibility lines and result criteria for the marketing team.',
        intro: 'A marketing department doesn’t become a system by gathering specialists alone. Strategy, responsibility, workflow and result criteria must be connected. This service organises marketing work: who is responsible for which area, how tasks flow, where work is reviewed and by which criteria results are evaluated.',
        when: 'Especially relevant when marketing work has grown but become hard to manage. Roles are unclear. Content, ads, design and sales run separately. Tasks are completed but their impact on business is not visible. The leader has to remind, check or redirect the process every time.',
        what: 'First we clarify what the business expects from the marketing department. Then team structure, key roles, responsibility boundaries, work processes and reporting order are designed. Internal directions are examined separately: strategy, content, ads, analytics, brand, sales collaboration and external contractor work. Each direction gets a task, an owner and a result metric.',
        result: 'A clear management model for the marketing department appears. You receive team structure, role distribution, process map, KPI logic, reporting order and a practical guide.',
        value: 'When the marketing department is built right, strategy doesn’t stay on paper. It connects to daily tasks, meetings, decisions and result analysis. The marketing team becomes a system serving business growth — not just a group executing requests.',
      },
      ru: {
        title: 'Построение отдела маркетинга',
        shortDescription: 'Разрабатываем роли, регламенты, зоны ответственности и критерии результата для маркетинговой команды.',
        intro: 'Отдел маркетинга не становится системой просто от набора специалистов. Стратегия, ответственность, регламенты и критерии результата должны быть связаны. Эта услуга упорядочивает работу: кто отвечает за какое направление, как идут задачи, где проверяется работа и по каким критериям оценивается результат.',
        when: 'Особенно важно, когда работ много, а управлять ими стало сложно. Роли размыты. Контент, реклама, дизайн и продажи идут по отдельности. Задачи выполняются, но влияние на бизнес не видно. Руководителю каждый раз приходится напоминать, проверять или перенаправлять процесс.',
        what: 'Сначала уточняем, какого результата бизнес ждёт от отдела маркетинга. Затем разрабатывается структура команды, роли, границы ответственности, процессы и порядок отчётности. Направления рассматриваются отдельно: стратегия, контент, реклама, аналитика, бренд, связка с продажами и работа с подрядчиками. По каждому направлению — задача, ответственный и метрика.',
        result: 'Появляется чёткая модель управления отделом. Вы получаете структуру, распределение ролей, карту процессов, логику KPI, порядок отчётности и практическое руководство.',
        value: 'Когда отдел маркетинга построен правильно, стратегия не остаётся на бумаге. Она связывается с ежедневными задачами, встречами, решениями и анализом результата. Отдел становится системой, работающей на рост бизнеса — а не группой, выполняющей заявки.',
      },
    },
  },
  {
    slug: 'partnership',
    number: '06',
    icon: Handshake,
    accent: { from: 'hsla(202, 100%, 11%, 1)', to: 'hsla(166, 75%, 61%, 1)' },
    content: {
      uz: {
        title: 'Strategik hamkorlik',
        shortDescription: 'Biznes egasi va marketing jamoasi bilan strategik hamkor sifatida ishlaymiz, qarorlarni va strategiyaning ijrosini birga olib boramiz.',
        intro: 'Strategik hamkorlik — biznes egasi va marketing jamoasi yonida turib, muhim qarorlar, joriy ishlar va strategiya ijrosini tartibda ushlab boradigan xizmat. Bu formatda strategik sessiyalar, muntazam maslahatlar, marketing bo‘limi ishiga tashqi nazar va avval ishlab chiqilgan yechimlarni amalda kuzatish birlashadi. Maqsad — marketing yo‘nalishi yo‘qolib ketmasligi, qarorlar esa shoshma-shosharlik bilan emas, umumiy strategiya asosida qabul qilinishi.',
        when: 'Strategiya bor, lekin uni kundalik ishga ko‘chirishda savollar ko‘paygan paytda bu xizmat ayniqsa foydali. Marketing bo‘limi ishlayapti, ammo ustuvorliklar tez-tez almashadi. Jamoa band, lekin qaysi ish natijaga yaqinlashtirayotgani har doim ham ravshan emas. Rahbar muhim qarorlarni yolg‘iz emas, tajribali tashqi mutaxassis bilan muhokama qilib borishni xohlaydi.',
        what: 'Biznes egasi, rahbar yoki marketing jamoasi bilan belgilangan tartibda ishlaymiz. Strategik sessiyalarda asosiy savollar tartiblanadi, joriy rejalarda esa ustuvor vazifalar, kampaniyalar, brend xabarlari va marketing qarorlari ko‘rib boriladi. Marketing bo‘limi bilan ishlaganda jamoani ichkaridan boshqarmaymiz. Bizning vazifamiz — tashqi strategik hamkor sifatida savol berish, yo‘nalish ko‘rsatish va muhim qarorlarni umumiy strategiya bilan bog‘lab turish.',
        result: 'Sizda marketing qarorlarini muhokama qilish, jamoa ishiga xolis qarash va strategiyani amaliy ishga yaqin tutish uchun doimiy strategik hamkor bo‘ladi. Qarorlar asosliroq bo‘ladi, jamoa esa qaysi yo‘nalishni ushlash, qaysi ishni keyinga qoldirish va nimaga ko‘proq e’tibor berish kerakligini aniqroq ko‘radi.',
        value: 'Strategiya ishlab chiqilgani bilan ish tugamaydi. Uning haqiqiy qiymati kundalik qarorlarda, jamoaning ish tartibida va natijani baholash mezonlarida ko‘rinadi. Strategik hamkorlik shu jarayonni izchil ushlab turadi.',
      },
      en: {
        title: 'Strategic Partnership',
        shortDescription: 'We work alongside the business owner and marketing team as a strategic partner, guiding decisions and strategy execution.',
        intro: 'Strategic partnership — a service that stands beside the business owner and marketing team, keeping important decisions, current work and strategy execution in order. It combines strategic sessions, regular advisory, an external view on the marketing department and follow-through on previously developed solutions. The goal — so the marketing direction does not disappear and decisions are made not in haste but on common strategy.',
        when: 'Especially useful when strategy exists but questions multiply when moving it into daily work. The marketing team works, but priorities shift often. The team is busy, but it is not always clear which work moves the needle. The leader wants to discuss key decisions with an experienced external expert.',
        what: 'We work with the owner, leader or marketing team in a set rhythm. Strategic sessions structure key questions; in current planning we go through priority tasks, campaigns, brand messages and marketing decisions. We don’t manage the team from inside — our task is to ask questions, point direction and tie key decisions to the overall strategy.',
        result: 'You get a permanent strategic partner for discussing marketing decisions, looking at the team’s work objectively and keeping strategy close to practice. Decisions are more grounded; the team sees more clearly which direction to hold and where to focus.',
        value: 'Strategy doesn’t end with development. Its real value shows in daily decisions, in the team’s work order and in result evaluation. Strategic partnership keeps this process consistent.',
      },
      ru: {
        title: 'Стратегическое партнёрство',
        shortDescription: 'Работаем рядом с собственником и командой маркетинга как стратегический партнёр, ведя решения и исполнение стратегии.',
        intro: 'Стратегическое партнёрство — услуга, которая стоит рядом с собственником и командой маркетинга, удерживая важные решения, текущие работы и исполнение стратегии в порядке. В этом формате объединяются стратегические сессии, регулярные консультации, внешний взгляд на отдел маркетинга и сопровождение ранее разработанных решений. Цель — чтобы направление маркетинга не терялось, а решения принимались не впопыхах, а на основе общей стратегии.',
        when: 'Особенно полезна, когда стратегия есть, но при переводе в ежедневную работу появляются вопросы. Отдел маркетинга работает, но приоритеты часто меняются. Команда занята, но не всегда понятно, какая работа приближает к результату. Руководитель хочет обсуждать ключевые решения не один, а с опытным внешним экспертом.',
        what: 'Работаем с собственником, руководителем или командой маркетинга в заданном ритме. На стратегических сессиях структурируются ключевые вопросы; в текущем планировании рассматриваются приоритетные задачи, кампании, сообщения бренда и маркетинговые решения. Команду изнутри не управляем — наша задача задавать вопросы, задавать направление и связывать ключевые решения с общей стратегией.',
        result: 'У вас появляется постоянный стратегический партнёр для обсуждения решений, объективного взгляда на работу команды и удержания стратегии близко к практике. Решения становятся обоснованнее; команда яснее видит, какое направление держать и на чём фокусироваться.',
        value: 'Стратегия не заканчивается её разработкой. Её настоящая ценность проявляется в ежедневных решениях, в порядке работы команды и в критериях оценки результата. Стратегическое партнёрство удерживает этот процесс последовательно.',
      },
    },
  },
];

export const serviceSlugRedirects: Record<string, ServiceSlug> = {
  'analysis-audit': 'audit',
  'product-strategy': 'product',
  'brand-platform': 'brand',
  'marketing-strategy': 'strategy',
  'marketing-team-building': 'team',
  'strategic-partnership': 'partnership',
  communication: 'brand',
  consulting: 'partnership',
};

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
