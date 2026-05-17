import type { Language } from '@/lib/i18n';

export type JobOpeningId = 'internship' | 'project-manager' | 'researcher';

type LocalizedText = Record<Language, string>;

export type JobOpening = {
  id: JobOpeningId;
  title: LocalizedText;
  summary: LocalizedText;
  focus: LocalizedText[];
};

export const jobOpenings: JobOpening[] = [
  {
    id: 'internship',
    title: {
      uz: 'Stajorlik',
      en: 'Internship',
      ru: 'Стажировка',
    },
    summary: {
      uz: 'Marketing, kontent va loyiha jarayonlarini real vazifalar orqali o‘rganadigan boshlang‘ich yo‘nalish.',
      en: 'An entry path for learning marketing, content, and project workflows through real tasks.',
      ru: 'Стартовое направление для изучения маркетинга, контента и проектных процессов на реальных задачах.',
    },
    focus: [
      {
        uz: 'Real topshiriqlar',
        en: 'Real tasks',
        ru: 'Реальные задачи',
      },
      {
        uz: 'Mentor nazorati',
        en: 'Mentor support',
        ru: 'Поддержка ментора',
      },
    ],
  },
  {
    id: 'project-manager',
    title: {
      uz: 'Project Manager',
      en: 'Project Manager',
      ru: 'Project Manager',
    },
    summary: {
      uz: 'Loyiha muddatlari, jamoa koordinatsiyasi va mijoz bilan ish jarayonini tartibda ushlab boradigan yo‘nalish.',
      en: 'A role for managing timelines, team coordination, and client-side workflow discipline.',
      ru: 'Роль для управления сроками, координацией команды и рабочим процессом с клиентом.',
    },
    focus: [
      {
        uz: 'Jarayon boshqaruvi',
        en: 'Process management',
        ru: 'Управление процессом',
      },
      {
        uz: 'Jamoa koordinatsiyasi',
        en: 'Team coordination',
        ru: 'Координация команды',
      },
    ],
  },
  {
    id: 'researcher',
    title: {
      uz: 'Tadqiqotchi',
      en: 'Researcher',
      ru: 'Исследователь',
    },
    summary: {
      uz: 'Bozor, auditoriya, raqobatchilar va mahsulot bo‘yicha tahliliy ma’lumotlarni yig‘adigan yo‘nalish.',
      en: 'A research direction focused on markets, audiences, competitors, and product insights.',
      ru: 'Направление для анализа рынка, аудитории, конкурентов и продуктовых инсайтов.',
    },
    focus: [
      {
        uz: 'Bozor tahlili',
        en: 'Market analysis',
        ru: 'Анализ рынка',
      },
      {
        uz: 'Auditoriya kuzatuvi',
        en: 'Audience insight',
        ru: 'Инсайты аудитории',
      },
    ],
  },
];

export const getJobOpeningById = (id: string | null | undefined) =>
  jobOpenings.find((job) => job.id === id) ?? jobOpenings[0];

