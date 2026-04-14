export type FounderLang = 'uz' | 'en' | 'ru';

type LocalizedText = Record<FounderLang, string>;
type LocalizedList = Record<FounderLang, string[]>;

export const founderProfile = {
  name: "Habibullo Sa'dullayev",
  intro: {
    uz: 'Asoschi',
    en: 'Founder',
    ru: 'Основатель',
  } satisfies LocalizedText,
  role: {
    uz: 'Marketolog, analitik, trener',
    en: 'Marketer, analyst, trainer',
    ru: 'Маркетолог, аналитик, тренер',
  } satisfies LocalizedText,
  summary: {
    uz: "Habibullo Sa'dullayev 12+ yillik marketing tajribasiga ega asoschi. U Proactive'ning strategik yo'nalishini belgilab, marketing, tahlil va ta'lim yondashuvlarini biznes uchun amaliy o'sish tizimiga aylantiradi.",
    en: "Habibullo Sa'dullayev is the founder with 12+ years of marketing experience. He shapes Proactive's strategic direction and combines marketing, analytics, and education into practical growth systems for business.",
    ru: 'Хабибулло Саъдуллаев — основатель с 12+ годами опыта в маркетинге. Он определяет стратегическое направление Proactive и объединяет маркетинг, аналитику и образовательный подход в практичные системы роста для бизнеса.',
  } satisfies LocalizedText,
  tags: {
    uz: ['Marketolog', 'Analitik', 'Trener'],
    en: ['Marketer', 'Analyst', 'Trainer'],
    ru: ['Маркетолог', 'Аналитик', 'Тренер'],
  } satisfies LocalizedList,
  telegram: 'https://t.me/habibullo_sadulloyev',
  instagram: 'https://www.instagram.com/habibullo_sadulloyev/',
} as const;
