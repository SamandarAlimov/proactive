import type { Language } from '@/lib/i18n';

export type PodcastVideo = {
  focus: Record<Language, string>;
  id: string;
  published: string;
  title: string;
};

export const cubicPodcastChannelUrl = 'https://www.youtube.com/@Cubic_podcast';

export const cubicPodcastVideos: PodcastVideo[] = [
  {
    id: 'PKPNaNzkNbI',
    title: '25 Yoshda Marketing Direktori Bo’lish Yo’li | Cubic Podcast',
    published: '2025-09-20',
    focus: {
      uz: 'Marketing karyerasi',
      en: 'Marketing career',
      ru: 'Карьера в маркетинге',
    },
  },
  {
    id: 'iH1bAJjQBKI',
    title: 'Jamoasiz Marketolog Hech Narsa Qilolmaydi! | Cubic Podcast',
    published: '2025-08-02',
    focus: {
      uz: 'Jamoa va jarayon',
      en: 'Team and process',
      ru: 'Команда и процессы',
    },
  },
  {
    id: 'djBnComskEU',
    title: 'Tadbirkor fikrlashini o‘zgartirmasa, biznes o‘smaydi! | Cubic Podcast',
    published: '2025-07-02',
    focus: {
      uz: 'Biznes fikrlashi',
      en: 'Business mindset',
      ru: 'Мышление предпринимателя',
    },
  },
  {
    id: 'T7wqbhiuy4E',
    title: 'Asaxiyda marketing qanday ishlaydi? | Cubic Podcast',
    published: '2025-06-09',
    focus: {
      uz: 'Marketing tizimi',
      en: 'Marketing system',
      ru: 'Система маркетинга',
    },
  },
  {
    id: 'UAzmFedIaaw',
    title: 'Marketing Nimaga Asoslangan Bo‘lishi kerak? | Cubic Podcast',
    published: '2025-05-24',
    focus: {
      uz: 'Strategiya asoslari',
      en: 'Strategy foundations',
      ru: 'Основы стратегии',
    },
  },
  {
    id: '95ICC4taxR8',
    title: "Nostandart Universitetning Nostandart Marketologi Qanday bo'ladi? | Cubic Podcast",
    published: '2025-05-10',
    focus: {
      uz: 'Ta’lim marketingi',
      en: 'Education marketing',
      ru: 'Маркетинг образования',
    },
  },
  {
    id: 'qfT1Cp-Tp5U',
    title: 'Nega Marketing Natija Bermayapti? | Cubic Podcast',
    published: '2025-04-26',
    focus: {
      uz: 'Natija va tahlil',
      en: 'Results and analysis',
      ru: 'Результат и анализ',
    },
  },
  {
    id: 'V76PizhSPzs',
    title: 'Biznesda Marketolog Vazifasi Nima? Elmurod Raimbaev | Cubic Podcast',
    published: '2025-04-12',
    focus: {
      uz: 'Marketolog roli',
      en: 'Marketer role',
      ru: 'Роль маркетолога',
    },
  },
];

const localeMap: Record<Language, string> = {
  uz: 'uz-UZ',
  en: 'en-US',
  ru: 'ru-RU',
};

export const formatPodcastDate = (date: string, lang: Language) =>
  new Intl.DateTimeFormat(localeMap[lang], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));
