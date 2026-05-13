export type TeamMemberLanguage = 'uz' | 'en' | 'ru';

type LocalizedText = Record<TeamMemberLanguage, string>;

export type TeamMember = {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  role: LocalizedText;
  bio: LocalizedText;
};

import founderHabibullo from '@/assets/founder-habibullo.png';
import member1 from '@/assets/team/member-1.png';
import member2 from '@/assets/team/member-2.png';
import member3 from '@/assets/team/member-3.png';
import member4 from '@/assets/team/member-4.png';
import member5 from '@/assets/team/member-5.png';
import member6 from '@/assets/team/member-6.png';
import member7 from '@/assets/team/member-7.png';
import member8 from '@/assets/team/member-8.png';
import member9 from '@/assets/team/member-9.png';
import member10 from '@/assets/team/member-10.png';

import member1Hover from '@/assets/team/member-1-hover.png';
import member2Hover from '@/assets/team/member-2-hover.png';
import member3Hover from '@/assets/team/member-3-hover.png';
import member4Hover from '@/assets/team/member-4-hover.png';
import member5Hover from '@/assets/team/member-5-hover.png';
import member6Hover from '@/assets/team/member-6-hover.png';
import member7Hover from '@/assets/team/member-7-hover.png';
import member8Hover from '@/assets/team/member-8-hover.png';
import member9Hover from '@/assets/team/member-9-hover.png';
import member10Hover from '@/assets/team/member-10-hover.png';

export const teamMembers: TeamMember[] = [
  {
    id: 11,
    name: "Habibullo Sa'dullayev",
    image: founderHabibullo,
    hoverImage: founderHabibullo,
    role: {
      uz: 'Asoschi',
      en: 'Founder',
      ru: 'Основатель',
    },
    bio: {
      uz: "Proactive agentligining strategik yo'nalishini belgilaydi va marketing, tahlil hamda ta'lim yondashuvlarini yagona o'sish tizimiga birlashtiradi.",
      en: 'Defines Proactive’s strategic direction and combines marketing, analytics, and education into one growth system.',
      ru: 'Определяет стратегическое направление Proactive и объединяет маркетинг, аналитику и образовательный подход в единую систему роста.',
    },
  },
  {
    id: 1,
    name: 'Aziz',
    image: member1,
    hoverImage: member1Hover,
    role: {
      uz: 'Loyiha menejeri',
      en: 'Project Manager',
      ru: 'Проект-менеджер',
    },
    bio: {
      uz: "Jarayonlarni tartibga solib, muddat, resurs va jamoa ishini bitta natijaga birlashtiradi.",
      en: 'Aligns timelines, resources, and team coordination into one clear delivery rhythm.',
      ru: 'Объединяет сроки, ресурсы и работу команды в один понятный ритм реализации.',
    },
  },
  {
    id: 2,
    name: 'Sardor',
    image: member2,
    hoverImage: member2Hover,
    role: {
      uz: 'Marketing strateg',
      en: 'Marketing Strategist',
      ru: 'Маркетинг-стратег',
    },
    bio: {
      uz: "Bozor tahlili, segmentatsiya va o'sish ssenariylarini biznes maqsadlariga mos strategiyaga aylantiradi.",
      en: 'Turns market signals, segmentation, and growth scenarios into strategy tied to business goals.',
      ru: 'Превращает рыночные сигналы, сегментацию и сценарии роста в стратегию, связанную с целями бизнеса.',
    },
  },
  {
    id: 3,
    name: 'Bekzod',
    image: member3,
    hoverImage: member3Hover,
    role: {
      uz: 'Kreativ direktor',
      en: 'Creative Director',
      ru: 'Креативный директор',
    },
    bio: {
      uz: "Brend g'oyasini kuchli vizual til va kampaniya konsepsiyalariga aylantirib beradi.",
      en: 'Transforms brand thinking into a visual language and campaign concepts with clear direction.',
      ru: 'Переводит идеи бренда в сильный визуальный язык и кампании с ясным направлением.',
    },
  },
  {
    id: 4,
    name: 'Nilufar',
    image: member4,
    hoverImage: member4Hover,
    role: {
      uz: 'SMM mutaxassisi',
      en: 'SMM Specialist',
      ru: 'SMM-специалист',
    },
    bio: {
      uz: "Ijtimoiy tarmoqlarda auditoriya bilan muntazam aloqa va kontent dinamikasini boshqaradi.",
      en: 'Leads social consistency, audience engagement, and platform-native content dynamics.',
      ru: 'Управляет системной коммуникацией с аудиторией и динамикой контента в социальных сетях.',
    },
  },
  {
    id: 5,
    name: 'Anya',
    image: member5,
    hoverImage: member5Hover,
    role: {
      uz: 'Grafik dizayner',
      en: 'Graphic Designer',
      ru: 'Графический дизайнер',
    },
    bio: {
      uz: "Brend identikasi, layout va taqdimot materiallarini estetik va tizimli ko'rinishga olib keladi.",
      en: 'Shapes brand identity, layouts, and presentation assets into a polished and consistent system.',
      ru: 'Собирает айдентику, макеты и презентационные материалы в цельную и эстетичную систему.',
    },
  },
  {
    id: 6,
    name: 'Jasur',
    image: member6,
    hoverImage: member6Hover,
    role: {
      uz: 'Video producer',
      en: 'Video Producer',
      ru: 'Видеопродюсер',
    },
    bio: {
      uz: "Rolik, branded content va promo formatlarini g'oyadan tayyor kadrgacha boshqaradi.",
      en: 'Oversees commercials, branded content, and promo formats from concept to final frame.',
      ru: 'Ведет ролики, branded content и promo-форматы от идеи до финального кадра.',
    },
  },
  {
    id: 7,
    name: 'Madina',
    image: member7,
    hoverImage: member7Hover,
    role: {
      uz: 'Kontent yozuvchi',
      en: 'Content Writer',
      ru: 'Контент-райтер',
    },
    bio: {
      uz: "Brend ovozini aniq saqlagan holda sotuv, reputatsiya va tushunarlilikni kuchaytiruvchi matnlar yozadi.",
      en: 'Writes copy that protects the brand voice while improving clarity, trust, and conversion.',
      ru: 'Пишет тексты, которые сохраняют голос бренда и усиливают понятность, доверие и конверсию.',
    },
  },
  {
    id: 8,
    name: 'Dilnoza',
    image: member8,
    hoverImage: member8Hover,
    role: {
      uz: 'PR mutaxassisi',
      en: 'PR Specialist',
      ru: 'PR-специалист',
    },
    bio: {
      uz: "Brendning ommaviy maydondagi pozitsiyasi, media aloqalari va reputatsion ishonchini boshqaradi.",
      en: 'Builds the brand’s media presence, public positioning, and reputation confidence.',
      ru: 'Выстраивает медийное присутствие бренда, публичное позиционирование и репутационное доверие.',
    },
  },
  {
    id: 9,
    name: 'Firdavs',
    image: member9,
    hoverImage: member9Hover,
    role: {
      uz: 'SEO mutaxassisi',
      en: 'SEO Specialist',
      ru: 'SEO-специалист',
    },
    bio: {
      uz: "Qidiruvdagi ko'rinish, kontent struktura va organik trafik o'sishini tizimli ravishda boshqaradi.",
      en: 'Improves search visibility, content structure, and organic growth through disciplined SEO execution.',
      ru: 'Системно усиливает поисковую видимость, структуру контента и органический рост.',
    },
  },
  {
    id: 10,
    name: 'Kamola',
    image: member10,
    hoverImage: member10Hover,
    role: {
      uz: 'Biznes tahlilchi',
      en: 'Business Analyst',
      ru: 'Бизнес-аналитик',
    },
    bio: {
      uz: "Ma'lumotlarni qarorga aylantirib, ichki jarayonlar va o'sish nuqtalarini aniq ko'rsatib beradi.",
      en: 'Turns data into decisions by exposing process gaps and the most valuable growth opportunities.',
      ru: 'Преобразует данные в решения, показывая слабые места процессов и ключевые точки роста.',
    },
  },
];
