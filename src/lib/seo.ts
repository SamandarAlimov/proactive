import {
  contactAddressCity,
  contactAddressLine,
  contactEmail,
  contactInstagram,
  contactPhone,
} from '@/lib/contact-details';
import { founderProfile } from '@/lib/founder-profile';
import type { Language } from '@/lib/i18n';

export type SeoStructuredData = Record<string, unknown>;
export type SeoBreadcrumbItem = {
  name: string;
  path: string;
};

const envSiteUrl =
  typeof import.meta !== 'undefined' ? import.meta.env.VITE_SITE_URL : undefined;
const runtimeSiteUrl =
  typeof window !== 'undefined' ? window.location.origin : undefined;

export const siteConfig = {
  name: 'Proactive',
  siteUrl: (envSiteUrl || runtimeSiteUrl || 'https://proactive.agency.uz').replace(
    /\/+$/,
    '',
  ),
  defaultLocale: 'uz' as Language,
  defaultOgImagePath: '/og-proactive.svg',
  defaultRobots: 'index, follow, max-image-preview:large',
};

export const localizedSiteDescriptions: Record<Language, string> = {
  uz: "Proactive O'zbekistondagi bizneslar uchun strategik marketing, brend platformasi, mahsulot strategiyasi va marketing tizimlarini quruvchi agentlik.",
  en: 'Proactive is a strategy-led marketing agency building brand platforms, product strategies, and long-term marketing systems for businesses in Uzbekistan.',
  ru: 'Proactive - agentstvo strategicheskogo marketinga, kotoroe pomogaet biznesam v Uzbekistane stroyt brend-platformy, produktovye strategii i dolgosrochnye marketingovye sistemy.',
};

export const localizedSiteKeywords: Record<Language, string[]> = {
  uz: [
    'Proactive',
    'marketing agentligi',
    'strategik marketing',
    'brend platformasi',
    'mahsulot strategiyasi',
    'marketing konsultatsiya',
    'Toshkent marketing agentligi',
  ],
  en: [
    'Proactive agency',
    'marketing agency Uzbekistan',
    'strategic marketing',
    'brand platform',
    'product strategy',
    'marketing consulting',
    'Tashkent marketing agency',
  ],
  ru: [
    'Proactive',
    'marketing agency Uzbekistan',
    'strategic marketing',
    'brand platform',
    'product strategy',
    'marketing consulting',
    'Tashkent agency',
  ],
};

export const buildAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, `${siteConfig.siteUrl}/`).toString();
};

export const defaultSeoImage = buildAbsoluteUrl(siteConfig.defaultOgImagePath);

export const seoLocaleMap: Record<Language, string> = {
  uz: 'uz_UZ',
  en: 'en_US',
  ru: 'ru_RU',
};

export const withSiteName = (title: string) =>
  title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

export const createBreadcrumbSchema = (
  items: SeoBreadcrumbItem[],
): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: buildAbsoluteUrl(item.path),
  })),
});

export const createWebsiteSchema = (lang: Language): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.siteUrl}#website`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  inLanguage: lang,
  description: localizedSiteDescriptions[lang],
});

export const createOrganizationSchema = (lang: Language): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.siteUrl}#organization`,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: defaultSeoImage,
  image: defaultSeoImage,
  description: localizedSiteDescriptions[lang],
  email: contactEmail,
  telephone: contactPhone,
  founder: {
    '@type': 'Person',
    name: founderProfile.name,
    jobTitle: `${founderProfile.intro[lang]}, ${founderProfile.role[lang]}`,
    sameAs: [founderProfile.telegram, founderProfile.instagram],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactAddressLine,
    addressLocality: contactAddressCity,
    addressCountry: 'UZ',
  },
  sameAs: [contactInstagram, founderProfile.telegram, founderProfile.instagram],
  foundingDate: '2022-12-12',
  areaServed: {
    '@type': 'Country',
    name: 'Uzbekistan',
  },
});

export const createWebPageSchema = ({
  description,
  lang,
  path,
  title,
  type = 'WebPage',
}: {
  description: string;
  lang: Language;
  path: string;
  title: string;
  type?: string;
}): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': type,
  name: title,
  url: buildAbsoluteUrl(path),
  inLanguage: lang,
  description,
  isPartOf: {
    '@id': `${siteConfig.siteUrl}#website`,
  },
  about: {
    '@id': `${siteConfig.siteUrl}#organization`,
  },
});

export const createServiceSchema = ({
  description,
  lang,
  name,
  path,
}: {
  description: string;
  lang: Language;
  name: string;
  path: string;
}): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType: name,
  description,
  url: buildAbsoluteUrl(path),
  provider: {
    '@id': `${siteConfig.siteUrl}#organization`,
  },
  areaServed: 'Uzbekistan',
  availableLanguage: lang,
});

export const createCourseSchema = ({
  description,
  lang,
  name,
  path,
}: {
  description: string;
  lang: Language;
  name: string;
  path: string;
}): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name,
  description,
  inLanguage: lang,
  url: buildAbsoluteUrl(path),
  provider: {
    '@id': `${siteConfig.siteUrl}#organization`,
  },
  instructor: {
    '@type': 'Person',
    name: founderProfile.name,
  },
});

export const createCreativeWorkSchema = ({
  description,
  lang,
  name,
  path,
}: {
  description: string;
  lang: Language;
  name: string;
  path: string;
}): SeoStructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  description,
  inLanguage: lang,
  url: buildAbsoluteUrl(path),
  creator: {
    '@id': `${siteConfig.siteUrl}#organization`,
  },
});
