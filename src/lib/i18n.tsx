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
      subtitle: "Kompleks marketingni tizimli formatda amalga oshiruvchi mutaxassislar jamoasi",
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
      intro: [
        "Marketing faqat reklama, kontent yoki kampaniya bilan cheklanmaydi. U mahsulot, bozor, brend, jamoa va qarorlar tizimi bilan bog‘liq.",
        "Proactive biznesga shu tizimni bosqichma-bosqich qurishda yordam beradi: avval vaziyatni tahlil qilamiz, keyin mahsulot va brend yo‘nalishini aniqlaymiz, marketing strategiyasini ishlab chiqamiz va uni jamoaning kundalik ishiga ulaymiz.",
      ],
      'analysis-audit': {
        title: "Tahlil va audit",
        description: "Bozor, raqobatchilar, auditoriya va hozirgi marketing faoliyatini ko‘rib chiqamiz.",
        fullDescription:
          "Tahlil va audit keyingi strategik qarorlar uchun tayanch bosqichdir. Bu yerda bozor, raqobatchilar, auditoriya va amaldagi marketing ishlari bir-biriga bog‘lab ko‘riladi. Maqsad — muammo qayerda ekanini taxmin bilan emas, real holat va aniq kuzatuvlar asosida ko‘rsatish.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Marketing ishlari bor, lekin natija nega kutilgan darajada emasligi ravshan bo‘lmasa, avval audit zarur.",
              "Masalan, kontent va reklama yurib turadi, ammo umumiy yo‘nalish sezilmaydi. Mijoz nima uchun tanlayotgani yoki nega voz kechayotgani yetarlicha tushunarli emas. Raqobatchilar orasida brendning o‘rni aniq ko‘rinmaydi. Taklif, xabar, kanal yoki sotuvga olib boradigan yo‘lda uzilish bor, lekin uning sababi hali topilmagan.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Avval mavjud marketing holatini o‘rganamiz. Mahsulot qanday tushuntirilgani, auditoriya qanday belgilangan, asosiy xabarlar qanchalik aniq va kanallar qaysi mantiq bilan ishlayotgani ko‘riladi.",
              "Keyingi bosqich — bozor va raqobatchilar tahlili. Raqobatchilar qanday va’da berayotgani, mijoz e’tiborini qaysi dalillar tortayotgani, bozorda qaysi joylar band va qaysi imkoniyatlar ochiq qolgani alohida baholanadi.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Audit yakunida marketing holati bo‘yicha aniq tashxis shakllanadi. Qaysi ishlar natija berayotgani, qayerda uzilish borligi va nimadan boshlash kerakligi ravshanlashadi.",
              "Natijada sizda bozor va raqobatchilar bo‘yicha xulosa, auditoriya haqidagi muhim kuzatuvlar, marketingdagi kuchli va zaif nuqtalar, shuningdek keyingi strategik qadamlar bo‘yicha tavsiyalar bo‘ladi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Tahlil va audit marketingdagi muammoni to‘g‘ri nomlashga yordam beradi. Muammo aniq ko‘rilsa, mahsulot, brend va marketing qarorlari ham bir-biriga bog‘lanadi.",
              "Shu sababli keyingi ishlar alohida urinishlar sifatida emas, asosli strategik yo‘nalish bo‘yicha davom etadi.",
            ],
          },
        ],
      },
      'product-strategy': {
        title: "Mahsulot strategiyasi",
        description: "Mahsulot kim uchun kerakligi, qaysi muammoni hal qilishi va bozorda nimasi bilan ajralishini aniqlaymiz.",
        fullDescription:
          "Mahsulot strategiyasi mahsulotning bozordagi o‘rnini, kim uchun qadrli ekanini va qaysi sabab bilan tanlanishini belgilaydi. Bu bosqichda taklifning mazmuni, auditoriya, raqobatchilar fonidagi farq va narxni asoslaydigan qiymat bir joyda ko‘riladi.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Mahsulot bor, lekin uning kimga, nima uchun va qaysi farq bilan taklif qilinishi yetarlicha ravshan bo‘lmagan paytda bu xizmat ayniqsa muhim.",
              "Masalan, mahsulot sifatli, ammo mijoz uni nima sababdan tanlashi kerakligini tez tushunmaydi. Taklif raqobatchilarnikidan ajralib turmaydi. Narxni asoslash qiyin. Sotuvda bir xil e’tirozlar qayta-qayta uchraydi. Yangi mahsulot bozorga chiqishi kerak, lekin qaysi segmentdan boshlash ma’qulligi hali ochiq savol.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Avval mahsulotning amaldagi holatini ko‘ramiz. U qaysi muammoni hal qilishi, kim uchun muhimligi, qaysi vaziyatda kerak bo‘lishi va mijoz undan qanday natija kutishi aniqlashtiriladi.",
              "Keyin bozor va raqobatchilar fonida taklifning farqli tomonlari ajratiladi. Kuchli jihatlar, zaif nuqtalar, narxni asoslaydigan omillar va mijoz qaroriga ta’sir qiladigan mezonlar alohida baholanadi.",
              "Shu asosda mahsulot pozitsiyasi, qiymat taklifi, sotuv argumentlari va rivojlanish yo‘nalishi shakllanadi.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Mahsulotni kimga, qanday qiymat bilan va qaysi farq orqali taklif qilish kerakligi ravshan bo‘ladi.",
              "Natijada sizda asosiy auditoriya segmentlari, mahsulotning qiymat taklifi, raqobatdagi o‘rni, sotuv argumentlari va keyingi rivojlanish uchun strategik yo‘nalish bo‘ladi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Mahsulot strategiyasi marketing va brend uchun poydevor. Mahsulotning qiymati aniq bo‘lmasa, reklama ham, kontent ham, brend xabari ham umumiy chiqadi.",
              "Bu bosqichdan keyin biznes “nima sotamiz?” degan savoldan chuqurroq masalaga o‘tadi: mijoz aslida nimaga pul to‘laydi? Shu savolga topilgan javob keyingi brend platformasi va marketing strategiyasini ancha kuchli qiladi.",
            ],
          },
        ],
      },
      'brand-platform': {
        title: "Brend platformasi",
        description: "Brendning bozordagi o‘rni, asosiy g‘oyasi, xabarlari va gapirish ohangini bir tizimga keltiramiz.",
        fullDescription:
          "Brend platformasi mahsulot qiymatini mijoz tushunadigan, eslab qoladigan va ishonadigan mazmunga aylantiradi. Bu bosqichda brendning bozordagi o‘rni, asosiy g‘oyasi, xabarlari, qadriyatlari va muloqot ohangi aniqlanadi.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Biznesda mahsulot yoki taklif bor, lekin brend bozorda qanday qabul qilinishi kerakligi yetarlicha aniq bo‘lmagan holatlarda bu xizmat muhim.",
              "Masalan, kompaniya turli joyda o‘zini turlicha tushuntiradi. Sotuv, reklama, kontent va rahbar chiqishlarida bir xil fikr sezilmaydi. Brend raqobatchilardan nimasi bilan farq qilishi tushunarsiz. Mijoz sizni qaysi sabab bilan eslab qolishi kerakligi ham ravshan emas.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Avval mahsulot, auditoriya va bozor mantiqidan kelib chiqib, brendning asosiy pozitsiyasi belgilanadi. Brend kim uchun muhim, qaysi vaziyatda esga tushishi kerak, mijozga qanday qiymat va’da qiladi — shu savollar atrofida aniq yo‘nalish shakllanadi.",
              "Keyin brendning asosiy g‘oyasi, xabarlar tizimi, qadriyatlari va muloqot ohangi ishlab chiqiladi. Bu yerda vazifa chiroyli ta’riflar yozish emas. Muhimi, brend har bir aloqa nuqtasida bir xil, tushunarli va ishonchli eshitilishi.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Brend platformasi yakunida kompaniya o‘zini bozorda qanday tushuntirishi, mijozga qaysi asosiy fikrni yetkazishi va qanday ohangda gapirishi aniq bo‘ladi.",
              "Natijada sizda brend pozitsiyasi, asosiy g‘oya, qadriyatlar, xabarlar tizimi, muloqot ohangi va keyingi marketing materiallari uchun tayanch hujjat shakllanadi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Brend platformasi marketing, sotuv va kommunikatsiyani bitta ma’noga ulaydi. Brend ichkarida aniq bo‘lsa, tashqaridagi xabar ham tarqoq chiqmaydi.",
              "Bu bosqichdan keyin kompaniya “biz kimligimizni qanday aytamiz?” degan savolga umumiy emas, aniq javobga ega bo‘ladi. Shu aniqlik marketing strategiyasi, kontent, reklama, taqdimot va sotuv materiallarida bir xil ishlaydi.",
            ],
          },
        ],
      },
      'marketing-strategy': {
        title: "Marketing strategiyasi",
        description: "Mahsulot va brendni bozorga olib chiqish yo‘lini belgilaymiz.",
        fullDescription:
          "Marketing strategiyasi mahsulot va brendni bozorga olib chiqish yo‘lini belgilaydi. Bu bosqichda auditoriya, xabar, kanal, budjet, kampaniya va o‘sish yo‘nalishi bir-biriga bog‘langan holda ko‘riladi.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Mahsulot va brend yo‘nalishi bor, lekin marketing ishlari qaysi ustuvorlik asosida yurishi aniq bo‘lmagan paytda bu xizmat kerak bo‘ladi.",
              "Masalan, reklama berilyapti, kontent chiqyapti, kampaniyalar ham bor. Ammo ularning umumiy yo‘nalishi sezilmaydi. Jamoa har safar nimaga urg‘u berishni qaytadan muhokama qiladi. Kanal tanlovi, xabar, budjet va kutiladigan natija o‘rtasida bog‘liqlik yetarli emas.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Avval biznes maqsadi va marketingdan kutilayotgan natija aniqlashtiriladi. Keyin auditoriya segmentlari, asosiy xabarlar, kanal mantiqi, kampaniya yo‘nalishlari va o‘sish imkoniyatlari bir tizimga yig‘iladi.",
              "Bu jarayonda marketing faqat “qayerda reklama beramiz?” degan savol bilan cheklanmaydi. Har bir qaror mahsulot qiymati, brend pozitsiyasi, mijozning tanlov mezoni va biznesning o‘sish maqsadi bilan bog‘lanadi.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Marketing strategiyasi yakunida biznes uchun aniq yo‘nalish, ustuvor auditoriyalar, asosiy xabarlar, kanal mantiqi va harakat rejasi tayyor bo‘ladi.",
              "Qaysi segmentga chiqish, qaysi xabarni aytish, qaysi kanallarga urg‘u berish va natijani qaysi mezonlar orqali baholash kerakligi aniq ko‘rinadi. Bu keyingi marketing qarorlari uchun tayanch hujjat vazifasini bajaradi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Marketing strategiyasi jamoaning kuchini bir yo‘nalishga yig‘adi. Strategiya bo‘lmasa, ish ko‘p bo‘lishi mumkin, lekin natija tarqoq qoladi.",
              "Bu bosqichdan keyin marketing tasodifiy postlar, alohida reklama urinishlari yoki kampaniya g‘oyalari bilan cheklanib qolmaydi. U biznes maqsadiga ulangan, o‘lchanadigan va boshqariladigan tizimga aylanadi.",
            ],
          },
        ],
      },
      'marketing-team-building': {
        title: "Marketing bo‘limini qurish",
        description: "Marketing jamoasi uchun rollar, ish tartibi, mas’uliyat chegaralari va natija mezonlarini ishlab chiqamiz.",
        fullDescription:
          "Marketing bo‘limi bir nechta mutaxassisni yig‘ish bilan o‘z-o‘zidan tizimga aylanmaydi. Unda strategiya, mas’uliyat, ish tartibi va natija mezonlari bir-biriga bog‘langan bo‘lishi kerak.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Marketing ishlari ko‘paygan, lekin ularni boshqarish qiyinlashgan paytda bu xizmat ayniqsa muhim.",
              "Masalan, jamoa bor, ammo rollar aniq emas. Kontent, reklama, dizayn va sotuv alohida-alohida yuradi. Vazifalar bajariladi, lekin ularning biznes natijasiga ta’siri yetarlicha ko‘rinmaydi. Rahbar esa har safar jarayonni eslatishi, tekshirishi yoki qayta yo‘naltirishi kerak bo‘lib qoladi.",
              "Kompaniya marketing jamoasini endi tuzayotgan bo‘lsa ham, avval ish tartibi va mas’uliyat chegaralari kerak. Shundan keyin jamoaga kim kerakligi aniqroq ko‘rinadi.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Avval biznes marketing bo‘limidan qanday natija kutayotganini aniqlashtiramiz. Keyin jamoa tuzilmasi, asosiy rollar, mas’uliyat chegaralari, ish jarayonlari va hisobot tartibi ishlab chiqiladi.",
              "Marketing ichidagi yo‘nalishlar alohida ko‘riladi: strategiya, kontent, reklama, analitika, brend, sotuv bilan hamkorlik va tashqi pudratchilar bilan ishlash. Har bir yo‘nalish bo‘yicha vazifa, mas’ul shaxs va natija mezoni belgilanadi.",
              "KPI ham shunchaki raqamlar ro‘yxati emas. U biznes maqsadi, marketing strategiyasi va jamoaning real imkoniyatlariga mos bo‘lsa, boshqaruv uchun foydali vositaga aylanadi.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Marketing bo‘limi uchun aniq boshqaruv modeli paydo bo‘ladi. Jamoada kim nima uchun javob berishi, ish qanday tartibda yurishi va natija qanday baholanishi ravshanlashadi.",
              "Sizda jamoa tuzilmasi, rollar taqsimoti, jarayon xaritasi, KPI mantiqi, hisobot tartibi va marketing bo‘limini boshqarish uchun amaliy yo‘l-yo‘riq bo‘ladi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Marketing bo‘limi to‘g‘ri qurilsa, strategiya qog‘ozda qolib ketmaydi. U kundalik vazifalar, uchrashuvlar, qarorlar va natija tahliliga ulanadi.",
              "Bu bosqichdan keyin marketing bo‘limi shunchaki topshiriq bajaradigan ijrochi guruh emas. U biznes o‘sishiga xizmat qiladigan, boshqariladigan tizim sifatida ishlay boshlaydi.",
            ],
          },
        ],
      },
      'strategic-partnership': {
        title: "Strategik hamkorlik",
        description: "Biznes egasi va marketing jamoasi bilan strategik hamkor sifatida ishlaymiz.",
        fullDescription:
          "Strategik hamkorlik — biznes egasi va marketing jamoasi yonida turib, muhim qarorlar, joriy ishlar va strategiya ijrosini tartibda ushlab boradigan xizmat. Bu formatda strategik sessiyalar, muntazam maslahatlar, marketing bo‘limi ishiga tashqi nazar va avval ishlab chiqilgan yechimlarni amalda kuzatish birlashadi.",
        sections: [
          {
            title: "Qachon kerak?",
            paragraphs: [
              "Strategiya bor, lekin uni kundalik ishga ko‘chirishda savollar ko‘paygan paytda bu xizmat ayniqsa foydali.",
              "Masalan, marketing bo‘limi ishlayapti, ammo ustuvorliklar tez-tez almashadi. Jamoa band, lekin qaysi ish natijaga yaqinlashtirayotgani har doim ham ravshan emas. Rahbar esa muhim qarorlarni yolg‘iz emas, tajribali tashqi mutaxassis bilan muhokama qilib borishni xohlaydi.",
              "Yana bir holat — strategiya, brend platformasi yoki marketing tizimi ishlab chiqilgan, lekin uning ijrosi muntazam kuzatuv va yo‘nalishga muhtoj.",
            ],
          },
          {
            title: "Nima qilamiz?",
            paragraphs: [
              "Biznes egasi, rahbar yoki marketing jamoasi bilan belgilangan tartibda ishlaymiz. Strategik sessiyalarda asosiy savollar tartiblanadi, joriy rejalarda esa ustuvor vazifalar, kampaniyalar, brend xabarlari va marketing qarorlari ko‘rib boriladi.",
              "Agar avval strategiya ishlab chiqilgan bo‘lsa, uning amalda qanday ketayotgani alohida kuzatiladi. Qaysi qaror strategiyaga mos, qaysi ish ortiqcha, qayerda yo‘nalish susayayapti — shu nuqtalar birga aniqlanadi.",
              "Marketing bo‘limi bilan ishlaganda jamoani ichkaridan boshqarmaymiz. Bizning vazifamiz — tashqi strategik hamkor sifatida savol berish, yo‘nalish ko‘rsatish va muhim qarorlarni umumiy strategiya bilan bog‘lab turish.",
            ],
          },
          {
            title: "Siz nima olasiz?",
            paragraphs: [
              "Sizda marketing qarorlarini muhokama qilish, jamoa ishiga xolis qarash va strategiyani amaliy ishga yaqin tutish uchun doimiy strategik hamkor bo‘ladi.",
              "Natijada qarorlar asosliroq bo‘ladi, jamoa esa qaysi yo‘nalishni ushlash, qaysi ishni keyinga qoldirish va nimaga ko‘proq e’tibor berish kerakligini aniqroq ko‘radi.",
            ],
          },
          {
            title: "Biznesga qiymati",
            paragraphs: [
              "Strategiya ishlab chiqilgani bilan ish tugamaydi. Uning haqiqiy qiymati kundalik qarorlarda, jamoaning ish tartibida va natijani baholash mezonlarida ko‘rinadi.",
              "Strategik hamkorlik shu jarayonni izchil ushlab turadi. Marketing bo‘limi tarqoq ishlamaydi, rahbar barcha qarorni yolg‘iz ko‘tarmaydi, avval ishlab chiqilgan strategiya esa hujjat bo‘lib qolib ketmaydi.",
            ],
          },
        ],
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
      subtitle: "Proactive jamoasi",
      description: "Kompleks marketingni tizimli formatda amalga oshiruvchi mutaxassislar jamoasi",
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
      description: "Proactive tadbirlari, seminar va masterclasslari tasdiqlanganda shu sahifada e’lon qilinadi.",
      upcoming: "Yaqinlashayotgan tadbirlar",
      past: "O'tgan tadbirlar",
      register: "Ro'yxatdan o'tish",
    },
    careers: {
      title: "Ish va hamkorlik",
      subtitle: "Bizga qo'shiling",
      description:
        "Proactive bilan ishlash yoki hamkorlik qilish uchun murojaat qiling. Ochiq vakansiyalar mavjud bo‘lganda shu sahifada e’lon qilamiz.",
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
      title: "Feel the power of marketing with",
      titleHighlight: "Proactive",
      titleEnd: "",
      subtitle: "A team of specialists delivering comprehensive marketing solutions",
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
      intro: [
        "Marketing is not limited to advertising, content, or campaigns. It is connected to the product, market, brand, team, and decision-making system.",
        "Proactive helps businesses build this system step by step: first we analyze the situation, then define the product and brand direction, develop the marketing strategy, and connect it to the team's day-to-day work.",
      ],
      'analysis-audit': {
        title: "Analysis & Audit",
        description: "We review the market, competitors, audience, and current marketing activity.",
        fullDescription:
          "Analysis and audit create the foundation for the next strategic decisions. We look at the market, competitors, audience, and existing marketing activity as one connected system, so the real problem is visible through evidence instead of assumptions.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "If marketing activity exists but the reason behind weak or inconsistent results is unclear, the work should begin with an audit.",
              "For example, content and ads may be running, yet the overall direction is hard to see. It may be unclear why customers choose you or leave, where the brand stands among competitors, or where the offer, message, channel, or sales path breaks down.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We first study the current state of marketing: how the product is explained, how the audience is defined, how clear the core messages are, and what logic connects the channels.",
              "Then we analyze the market and competitors. We assess what competitors promise, which arguments attract customer attention, which spaces are already occupied, and which opportunities remain open.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "At the end of the audit, you receive a clear diagnosis of the marketing system: what is working, where the gaps are, and where to start.",
              "You get market and competitor conclusions, key audience observations, strengths and weaknesses in marketing, and recommendations for the next strategic steps.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "Analysis and audit help name the marketing problem correctly. Once the problem is clear, product, brand, and marketing decisions can connect to each other.",
              "As a result, the next work continues not as isolated attempts, but as a grounded strategic direction.",
            ],
          },
        ],
      },
      'product-strategy': {
        title: "Product Strategy",
        description: "We define who the product is for, what problem it solves, and how it stands out in the market.",
        fullDescription:
          "Product strategy defines the product's market role, who values it, and why it should be chosen. At this stage, the offer, audience, competitive difference, and value behind the price are viewed together.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "This service is especially important when the product exists, but it is not yet clear who it is for, why it matters, and what makes it different.",
              "For example, the product may be strong, but customers do not quickly understand why they should choose it. The offer may not stand out from competitors, the price may be difficult to justify, sales objections may repeat, or a new product may need a clear starting segment for market entry.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We start by reviewing the product's current state: what problem it solves, who needs it, in which situation it becomes relevant, and what result the customer expects from it.",
              "Then we identify the offer's differentiators against the market and competitors. Strengths, weak points, price justification factors, and customer decision criteria are evaluated separately.",
              "Based on this, we shape the product position, value proposition, sales arguments, and development direction.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "You gain clarity on who the product should be offered to, with what value, and through which difference.",
              "You receive core audience segments, the product value proposition, competitive position, sales arguments, and a strategic direction for future development.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "Product strategy is the foundation for marketing and brand. If the product value is unclear, advertising, content, and brand messaging become generic.",
              "After this stage, the business moves beyond “what do we sell?” to a deeper question: what is the customer really paying for? The answer strengthens the brand platform and marketing strategy that follow.",
            ],
          },
        ],
      },
      'brand-platform': {
        title: "Brand Platform",
        description: "We systemize the brand's market position, core idea, messages, and tone of voice.",
        fullDescription:
          "A brand platform turns product value into meaning customers can understand, remember, and trust. At this stage, we define the brand's market position, core idea, messages, values, and communication tone.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "This service is important when the business has a product or offer, but the way the brand should be perceived in the market is not yet clear.",
              "For example, the company may explain itself differently in different places. Sales, ads, content, and founder communication may not carry the same idea. It may be unclear how the brand differs from competitors or why customers should remember it.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We first define the brand's core position based on the product, audience, and market logic. We clarify who the brand matters to, when it should come to mind, and what value it promises to the customer.",
              "Then we develop the core idea, messaging system, values, and tone of voice. The goal is not to write beautiful descriptions, but to make the brand sound consistent, clear, and credible at every touchpoint.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "By the end of the brand platform, the company understands how to explain itself in the market, which main idea to deliver to customers, and what tone to use.",
              "You receive the brand position, core idea, values, messaging system, tone of voice, and a foundational document for future marketing materials.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "A brand platform connects marketing, sales, and communication to one meaning. When the brand is clear internally, external messaging does not become scattered.",
              "After this stage, the company has a specific answer to “how do we say who we are?” That clarity works across strategy, content, ads, presentations, and sales materials.",
            ],
          },
        ],
      },
      'marketing-strategy': {
        title: "Marketing Strategy",
        description: "We define the path for bringing the product and brand to market.",
        fullDescription:
          "Marketing strategy defines the path for taking the product and brand to market. Audience, message, channel, budget, campaigns, and growth direction are viewed as one connected system.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "This service is needed when the product and brand direction exist, but the priorities that should guide marketing work are not clear enough.",
              "For example, ads are running, content is being published, and campaigns exist, but the overall direction is not visible. The team repeatedly debates what to emphasize, and the link between channel choice, message, budget, and expected result is weak.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We first clarify the business goal and the result expected from marketing. Then we bring audience segments, core messages, channel logic, campaign directions, and growth opportunities into one system.",
              "Marketing is not reduced to “where should we advertise?” Every decision is tied to product value, brand position, customer choice criteria, and the business growth goal.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "At the end of the marketing strategy, the business has a clear direction, priority audiences, core messages, channel logic, and an action plan.",
              "You see which segment to approach, which message to deliver, which channels to prioritize, and which metrics should evaluate the result. This becomes the base document for future marketing decisions.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "Marketing strategy focuses the team's energy in one direction. Without strategy, there may be a lot of activity, but the result remains scattered.",
              "After this stage, marketing is no longer a set of random posts, isolated ad attempts, or campaign ideas. It becomes a measurable, manageable system connected to the business goal.",
            ],
          },
        ],
      },
      'marketing-team-building': {
        title: "Marketing Team Building",
        description: "We design roles, workflows, responsibility boundaries, and result metrics for the marketing team.",
        fullDescription:
          "A marketing department does not become a system simply by gathering several specialists. Strategy, responsibility, workflows, and result metrics must be connected to each other.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "This service is especially important when marketing work has grown and has become difficult to manage.",
              "For example, the team exists, but roles are unclear. Content, ads, design, and sales may work separately. Tasks are completed, but their impact on business results is not visible enough, and the leader has to constantly remind, check, or redirect the process.",
              "If the company is only beginning to build a marketing team, work rules and responsibility boundaries are still needed first. Only then does it become clearer who the team actually needs.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We first clarify what result the business expects from the marketing department. Then we design the team structure, core roles, responsibility boundaries, workflows, and reporting rhythm.",
              "We review key marketing directions separately: strategy, content, advertising, analytics, brand, collaboration with sales, and work with external contractors. For each direction, tasks, owners, and result metrics are defined.",
              "KPIs are not just a list of numbers. When they match the business goal, marketing strategy, and the team's real capacity, they become a useful management tool.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "The marketing department gains a clear management model. The team understands who is responsible for what, how work moves, and how results are evaluated.",
              "You receive a team structure, role distribution, process map, KPI logic, reporting structure, and practical guidance for managing the marketing department.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "When the marketing department is built correctly, strategy does not remain on paper. It connects to daily tasks, meetings, decisions, and result analysis.",
              "After this stage, the marketing department is not just an execution group. It becomes a managed system that serves business growth.",
            ],
          },
        ],
      },
      'strategic-partnership': {
        title: "Strategic Partnership",
        description: "We work alongside the business owner and marketing team as a strategic partner.",
        fullDescription:
          "Strategic partnership is a service that stands beside the business owner and marketing team to keep key decisions, current work, and strategy execution in order. It combines strategic sessions, regular guidance, an external view of the marketing department, and ongoing follow-up on previously developed solutions.",
        sections: [
          {
            title: "When is it needed?",
            paragraphs: [
              "This service is especially useful when a strategy exists, but questions increase as it moves into daily work.",
              "For example, the marketing department is working, but priorities change too often. The team is busy, yet it is not always clear which work brings the business closer to results. The leader may also want to discuss important decisions with an experienced external specialist instead of carrying them alone.",
              "It is also relevant when a strategy, brand platform, or marketing system has been developed but needs regular observation and direction during execution.",
            ],
          },
          {
            title: "What do we do?",
            paragraphs: [
              "We work with the business owner, manager, or marketing team in an agreed rhythm. Strategic sessions organize the key questions, while current plans are reviewed through priorities, campaigns, brand messages, and marketing decisions.",
              "If a strategy has already been developed, we separately track how it is being implemented. Together we identify which decisions fit the strategy, which tasks are unnecessary, and where the direction is becoming weaker.",
              "When working with the marketing department, we do not manage the team from the inside. Our role is to ask the right questions, provide direction, and connect important decisions back to the overall strategy.",
            ],
          },
          {
            title: "What do you get?",
            paragraphs: [
              "You get a continuous strategic partner for discussing marketing decisions, viewing the team's work objectively, and keeping strategy close to practical execution.",
              "As a result, decisions become more grounded, and the team sees more clearly which direction to hold, which work to postpone, and what deserves more attention.",
            ],
          },
          {
            title: "Business value",
            paragraphs: [
              "The work does not end when a strategy is developed. Its real value appears in daily decisions, team routines, and result evaluation.",
              "Strategic partnership keeps this process consistent. The marketing department does not work in fragments, the leader does not carry every decision alone, and the strategy does not remain just a document.",
            ],
          },
        ],
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
      description: "A team of specialists delivering comprehensive marketing solutions",
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
      description: "Proactive events, seminars, and masterclasses will be published here once confirmed.",
      upcoming: "Upcoming Events",
      past: "Past Events",
      register: "Register",
    },
    careers: {
      title: "Careers & Partnership",
      subtitle: "Join Our Team",
      description:
        "Reach out to work or collaborate with Proactive. When open vacancies are available, we publish them on this page.",
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
      title: "Почувствуйте силу маркетинга с",
      titleHighlight: "Proactive",
      titleEnd: "",
      subtitle: "Команда специалистов, реализующая комплексный маркетинг в полном формате",
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
      intro: [
        "Маркетинг не ограничивается рекламой, контентом или кампаниями. Он связан с продуктом, рынком, брендом, командой и системой принятия решений.",
        "Proactive помогает бизнесу выстраивать эту систему поэтапно: сначала анализируем ситуацию, затем определяем продуктовый и брендовый вектор, разрабатываем маркетинговую стратегию и связываем ее с ежедневной работой команды.",
      ],
      'analysis-audit': {
        title: "Анализ и аудит",
        description: "Изучаем рынок, конкурентов, аудиторию и текущую маркетинговую активность.",
        fullDescription:
          "Анализ и аудит - опорный этап для следующих стратегических решений. Мы рассматриваем рынок, конкурентов, аудиторию и текущий маркетинг как связанную систему, чтобы показать проблему не через предположения, а через реальное состояние и конкретные наблюдения.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Если маркетинг уже ведется, но причина слабого или нестабильного результата не ясна, сначала нужен аудит.",
              "Например, контент и реклама работают, но общего направления не видно. Непонятно, почему клиент выбирает бренд или отказывается от него, где бренд находится среди конкурентов, или где возникает разрыв в предложении, сообщении, канале или пути к продаже.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Сначала изучаем текущее состояние маркетинга: как объяснен продукт, как определена аудитория, насколько ясны ключевые сообщения и по какой логике работают каналы.",
              "Затем проводим анализ рынка и конкурентов. Оцениваем, какие обещания дают конкуренты, какие аргументы привлекают внимание клиента, какие позиции на рынке уже заняты и какие возможности остаются открытыми.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "По итогам аудита формируется точный диагноз маркетинговой системы: что работает, где есть разрывы и с чего стоит начинать.",
              "Вы получаете выводы по рынку и конкурентам, важные наблюдения об аудитории, сильные и слабые стороны маркетинга, а также рекомендации по следующим стратегическим шагам.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Анализ и аудит помогают правильно назвать маркетинговую проблему. Когда проблема видна ясно, продуктовые, брендовые и маркетинговые решения начинают связываться между собой.",
              "Поэтому дальнейшая работа продолжается не как набор отдельных попыток, а как обоснованное стратегическое направление.",
            ],
          },
        ],
      },
      'product-strategy': {
        title: "Продуктовая стратегия",
        description: "Определяем, кому нужен продукт, какую проблему он решает и чем отличается на рынке.",
        fullDescription:
          "Продуктовая стратегия определяет место продукта на рынке, для кого он ценен и почему его выбирают. На этом этапе содержание предложения, аудитория, отличие на фоне конкурентов и ценность, которая обосновывает цену, рассматриваются вместе.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Услуга особенно важна, когда продукт уже есть, но не до конца ясно, кому, зачем и через какое отличие его нужно предлагать.",
              "Например, продукт качественный, но клиент не быстро понимает, почему должен выбрать именно его. Предложение не отличается от конкурентов, цену сложно обосновать, в продажах повторяются одни и те же возражения, или новый продукт должен выйти на рынок, но стартовый сегмент пока не определен.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Сначала изучаем текущее состояние продукта: какую проблему он решает, для кого важен, в какой ситуации нужен и какой результат клиент ожидает.",
              "Затем выделяем отличия предложения на фоне рынка и конкурентов. Отдельно оцениваем сильные стороны, слабые места, факторы обоснования цены и критерии, влияющие на решение клиента.",
              "На этой основе формируются позиция продукта, ценностное предложение, аргументы для продаж и направление развития.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "Становится понятно, кому, с какой ценностью и через какое отличие нужно предлагать продукт.",
              "Вы получаете ключевые сегменты аудитории, ценностное предложение продукта, его конкурентную позицию, аргументы для продаж и стратегическое направление дальнейшего развития.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Продуктовая стратегия - фундамент для маркетинга и бренда. Если ценность продукта не ясна, реклама, контент и бренд-сообщение становятся общими.",
              "После этого этапа бизнес переходит от вопроса “что мы продаем?” к более глубокому: за что клиент на самом деле платит? Ответ усиливает последующую бренд-платформу и маркетинговую стратегию.",
            ],
          },
        ],
      },
      'brand-platform': {
        title: "Бренд-платформа",
        description: "Собираем в систему рыночную позицию, основную идею, сообщения и тон бренда.",
        fullDescription:
          "Бренд-платформа превращает ценность продукта в смысл, который клиент понимает, запоминает и которому доверяет. На этом этапе определяются позиция бренда на рынке, основная идея, сообщения, ценности и тон коммуникации.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Услуга важна, когда у бизнеса есть продукт или предложение, но не до конца понятно, как бренд должен восприниматься на рынке.",
              "Например, компания в разных местах объясняет себя по-разному. В продажах, рекламе, контенте и выступлениях руководителя не чувствуется единой мысли. Непонятно, чем бренд отличается от конкурентов и по какой причине клиент должен его запомнить.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Сначала, исходя из продукта, аудитории и рыночной логики, определяем основную позицию бренда. Выясняем, для кого бренд важен, в какой ситуации должен вспоминаться и какую ценность обещает клиенту.",
              "Затем разрабатываем основную идею бренда, систему сообщений, ценности и тон коммуникации. Задача не в красивых формулировках, а в том, чтобы бренд в каждой точке контакта звучал одинаково, понятно и убедительно.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "По итогам бренд-платформы компания понимает, как объяснять себя на рынке, какую главную мысль доносить до клиента и каким тоном говорить.",
              "Вы получаете позицию бренда, основную идею, ценности, систему сообщений, тон коммуникации и опорный документ для будущих маркетинговых материалов.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Бренд-платформа связывает маркетинг, продажи и коммуникацию в один смысл. Если бренд ясен внутри, внешнее сообщение не становится разрозненным.",
              "После этого этапа компания получает не общий, а конкретный ответ на вопрос “как мы говорим, кто мы?”. Эта ясность одинаково работает в стратегии, контенте, рекламе, презентациях и материалах продаж.",
            ],
          },
        ],
      },
      'marketing-strategy': {
        title: "Маркетинговая стратегия",
        description: "Определяем путь вывода продукта и бренда на рынок.",
        fullDescription:
          "Маркетинговая стратегия определяет путь вывода продукта и бренда на рынок. На этом этапе аудитория, сообщение, канал, бюджет, кампании и направление роста рассматриваются как связанная система.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Услуга нужна, когда продуктовый и брендовый вектор уже есть, но не ясно, на каких приоритетах должны строиться маркетинговые действия.",
              "Например, реклама запускается, контент выходит, кампании есть. Но общего направления не видно. Команда каждый раз заново обсуждает, на чем сделать акцент, а связь между выбором каналов, сообщением, бюджетом и ожидаемым результатом недостаточна.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Сначала уточняем цель бизнеса и ожидаемый результат от маркетинга. Затем собираем сегменты аудитории, ключевые сообщения, логику каналов, направления кампаний и возможности роста в единую систему.",
              "В этом процессе маркетинг не ограничивается вопросом “где размещать рекламу?”. Каждое решение связывается с ценностью продукта, позицией бренда, критериями выбора клиента и целью роста бизнеса.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "По итогам маркетинговой стратегии у бизнеса появляется четкое направление, приоритетные аудитории, основные сообщения, логика каналов и план действий.",
              "Становится понятно, к какому сегменту выходить, какое сообщение говорить, на какие каналы делать акцент и по каким метрикам оценивать результат. Это становится опорным документом для следующих маркетинговых решений.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Маркетинговая стратегия собирает силу команды в одном направлении. Без стратегии работы может быть много, но результат остается разрозненным.",
              "После этого этапа маркетинг не ограничивается случайными постами, отдельными рекламными попытками или идеями кампаний. Он превращается в измеримую и управляемую систему, связанную с целью бизнеса.",
            ],
          },
        ],
      },
      'marketing-team-building': {
        title: "Построение отдела маркетинга",
        description: "Разрабатываем роли, порядок работы, зоны ответственности и критерии результата для маркетинговой команды.",
        fullDescription:
          "Отдел маркетинга не становится системой сам по себе только потому, что в нем собрано несколько специалистов. В нем должны быть связаны стратегия, ответственность, порядок работы и критерии результата.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Услуга особенно важна, когда маркетинговых задач стало больше, а управлять ими стало сложнее.",
              "Например, команда есть, но роли не ясны. Контент, реклама, дизайн и продажи идут отдельно друг от друга. Задачи выполняются, но их влияние на бизнес-результат видно недостаточно. Руководителю приходится постоянно напоминать, проверять или перенаправлять процесс.",
              "Если компания только начинает строить маркетинговую команду, сначала тоже нужны порядок работы и границы ответственности. После этого становится понятнее, кто именно нужен команде.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Сначала уточняем, какого результата бизнес ждет от отдела маркетинга. Затем разрабатываем структуру команды, ключевые роли, зоны ответственности, рабочие процессы и порядок отчетности.",
              "Отдельно рассматриваем направления внутри маркетинга: стратегию, контент, рекламу, аналитику, бренд, взаимодействие с продажами и работу с внешними подрядчиками. Для каждого направления определяются задача, ответственный и критерий результата.",
              "KPI - это не просто список цифр. Если они соответствуют цели бизнеса, маркетинговой стратегии и реальным возможностям команды, они становятся полезным инструментом управления.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "У отдела маркетинга появляется понятная модель управления. Команда понимает, кто за что отвечает, как движется работа и как оценивается результат.",
              "Вы получаете структуру команды, распределение ролей, карту процессов, логику KPI, порядок отчетности и практические ориентиры для управления отделом маркетинга.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Если отдел маркетинга построен правильно, стратегия не остается на бумаге. Она связывается с ежедневными задачами, встречами, решениями и анализом результата.",
              "После этого этапа отдел маркетинга становится не просто группой исполнителей, а управляемой системой, которая служит росту бизнеса.",
            ],
          },
        ],
      },
      'strategic-partnership': {
        title: "Стратегическое партнерство",
        description: "Работаем рядом с владельцем бизнеса и маркетинговой командой как стратегический партнер.",
        fullDescription:
          "Стратегическое партнерство - это услуга, в которой мы остаемся рядом с владельцем бизнеса и маркетинговой командой, чтобы удерживать в порядке важные решения, текущую работу и исполнение стратегии. Формат объединяет стратегические сессии, регулярные консультации, внешний взгляд на работу отдела маркетинга и наблюдение за внедрением ранее разработанных решений.",
        sections: [
          {
            title: "Когда это нужно?",
            paragraphs: [
              "Услуга особенно полезна, когда стратегия уже есть, но при переносе в ежедневную работу появляется много вопросов.",
              "Например, отдел маркетинга работает, но приоритеты часто меняются. Команда занята, но не всегда понятно, какая работа приближает к результату. Руководитель хочет обсуждать важные решения не в одиночку, а с опытным внешним специалистом.",
              "Еще одна ситуация - стратегия, бренд-платформа или маркетинговая система уже разработаны, но их исполнение нуждается в регулярном наблюдении и направлении.",
            ],
          },
          {
            title: "Что мы делаем?",
            paragraphs: [
              "Работаем с владельцем бизнеса, руководителем или маркетинговой командой в согласованном ритме. На стратегических сессиях упорядочиваем ключевые вопросы, а в текущих планах рассматриваем приоритеты, кампании, бренд-сообщения и маркетинговые решения.",
              "Если стратегия уже разработана, отдельно наблюдаем, как она реализуется на практике. Вместе определяем, какие решения соответствуют стратегии, какие задачи лишние и где направление начинает ослабевать.",
              "При работе с отделом маркетинга мы не управляем командой изнутри. Наша задача - задавать правильные вопросы, показывать направление и связывать важные решения с общей стратегией.",
            ],
          },
          {
            title: "Что вы получаете?",
            paragraphs: [
              "У вас появляется постоянный стратегический партнер для обсуждения маркетинговых решений, объективного взгляда на работу команды и удержания стратегии рядом с практическими действиями.",
              "В результате решения становятся более обоснованными, а команда яснее видит, какое направление держать, какую работу отложить и на что обратить больше внимания.",
            ],
          },
          {
            title: "Ценность для бизнеса",
            paragraphs: [
              "Работа не заканчивается тем, что стратегия разработана. Ее настоящая ценность проявляется в ежедневных решениях, порядке работы команды и оценке результата.",
              "Стратегическое партнерство удерживает этот процесс последовательно. Отдел маркетинга не работает разрозненно, руководитель не несет все решения один, а ранее разработанная стратегия не остается просто документом.",
            ],
          },
        ],
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
      description: "Команда специалистов, реализующая комплексный маркетинг в полном формате",
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
      description: "События, семинары и мастер-классы Proactive будут опубликованы здесь после подтверждения.",
      upcoming: "Предстоящие события",
      past: "Прошедшие",
      register: "Зарегистрироваться",
    },
    careers: {
      title: "Работа и партнерство",
      subtitle: "Присоединяйтесь к нам",
      description:
        "Свяжитесь с нами, чтобы работать или сотрудничать с Proactive. Когда появляются открытые вакансии, мы публикуем их на этой странице.",
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
