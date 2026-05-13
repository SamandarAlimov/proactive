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
    uz: "Habibullo Sa'dullayev Proactive agentligining strategik yo'nalishini boshqaradi. U marketing, tahlil va ta'lim yondashuvlarini birlashtirib, brendlar uchun amaliy o'sish tizimlarini qurishga e'tibor qaratadi.",
    en: "Habibullo Sa'dullayev leads Proactive with a strategy-first perspective. He combines marketing, analytics, and education to build practical growth systems for brands.",
    ru: 'Хабибулло Саъдуллаев определяет стратегическое направление агентства Proactive. Он объединяет маркетинг, аналитику и образовательный подход, чтобы выстраивать для брендов практичные системы роста.',
  } satisfies LocalizedText,
  tags: {
    uz: ['Marketolog', 'Analitik', 'Trener'],
    en: ['Marketer', 'Analyst', 'Trainer'],
    ru: ['Маркетолог', 'Аналитик', 'Тренер'],
  } satisfies LocalizedList,
  telegram: 'https://t.me/habibullo_sadulloyev',
  instagram: 'https://www.instagram.com/habibullo_sadulloyev/',
} as const;
