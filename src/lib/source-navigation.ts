import type { Language } from '@/lib/i18n';

export type MainSectionState = {
  from: string;
  fromLabel: string;
  source: 'main-section';
};

export const isSafeInternalPath = (value: unknown): value is string =>
  typeof value === 'string' && value.startsWith('/') && !value.startsWith('//');

export const readMoreLabel = (lang: Language) => {
  if (lang === 'ru') {
    return 'Подробнее';
  }

  if (lang === 'en') {
    return 'Read more';
  }

  return 'Batafsil';
};

export const backLabel = (lang: Language) => {
  if (lang === 'ru') {
    return 'Назад';
  }

  if (lang === 'en') {
    return 'Back';
  }

  return 'Ortga';
};

export const createMainSectionState = (
  sectionId: string,
  lang: Language,
): MainSectionState => ({
  from: `/#${sectionId}`,
  fromLabel: backLabel(lang),
  source: 'main-section',
});

export const getMainSectionState = (state: unknown): MainSectionState | null => {
  if (!state || typeof state !== 'object') {
    return null;
  }

  const candidate = state as Record<string, unknown>;
  const from = candidate.from;
  const fromLabel = candidate.fromLabel;

  if (candidate.source !== 'main-section' || !isSafeInternalPath(from)) {
    return null;
  }

  return {
    from,
    fromLabel: typeof fromLabel === 'string' ? fromLabel : 'Back',
    source: 'main-section',
  };
};
