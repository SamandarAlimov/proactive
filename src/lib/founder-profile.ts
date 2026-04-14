export type FounderLang = 'uz' | 'en' | 'ru';

type LocalizedText = Record<FounderLang, string>;
type LocalizedList = Record<FounderLang, string[]>;

export const founderProfile = {
  name: "Habibullo Sa'dullayev",
  intro: {
    uz: 'Spiker va kurs muallifi',
    en: 'Speaker and course author',
    ru: 'Спикер и автор курса',
  } satisfies LocalizedText,
  role: {
    uz: 'Founder & CEO, marketolog, analitik, trener',
    en: 'Founder & CEO, marketer, analyst, trainer',
    ru: 'Founder & CEO, маркетолог, аналитик, тренер',
  } satisfies LocalizedText,
  summary: {
    uz: "Habibullo Sa'dullayev Proactive agentligining strategik yo'nalishini boshqaradi. U marketing, tahlil va ta'lim yondashuvlarini birlashtirib, brendlar uchun amaliy o'sish tizimlarini qurishga e'tibor qaratadi.",
    en: 'Habibullo Sa\'dullayev leads Proactive with a strategy-first perspective. He combines marketing, analytics, and education to build practical growth systems for brands.',
    ru: 'Хабибулло Са\'дуллаев задает стратегическое направление агентства Proactive. Он объединяет маркетинг, аналитику и образовательный подход, чтобы выстраивать для брендов практичные системы роста.',
  } satisfies LocalizedText,
  tags: {
    uz: ['Founder & CEO', 'Marketolog', 'Analitik', 'Trener'],
    en: ['Founder & CEO', 'Marketer', 'Analyst', 'Trainer'],
    ru: ['Founder & CEO', 'Маркетолог', 'Аналитик', 'Тренер'],
  } satisfies LocalizedList,
  telegram: 'https://t.me/habibullo_sadulloyev',
  instagram: 'https://www.instagram.com/habibullo_sadulloyev/',
} as const;
