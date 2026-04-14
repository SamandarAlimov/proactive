export type PhoneCountryCode =
  | 'uz'
  | 'kz'
  | 'kg'
  | 'ru'
  | 'tj'
  | 'tm'
  | 'tr'
  | 'ae'
  | 'sa'
  | 'qa'
  | 'us'
  | 'gb'
  | 'de'
  | 'fr'
  | 'it'
  | 'es'
  | 'ch'
  | 'nl'
  | 'be'
  | 'ua'
  | 'ge'
  | 'az'
  | 'am'
  | 'by'
  | 'af'
  | 'al'
  | 'dz'
  | 'cn'
  | 'in'
  | 'jp'
  | 'kr'
  | 'my'
  | 'pk'
  | 'eg';

type LocalizedLabel = {
  uz: string;
  en: string;
  ru: string;
};

export type PhoneCountry = {
  code: PhoneCountryCode;
  iso: string;
  flag: string;
  name: LocalizedLabel;
  dialCode: string;
  maxLength: number;
  groups: number[];
  placeholder: string;
};

export const PHONE_COUNTRIES: PhoneCountry[] = [
  {
    code: 'uz',
    iso: 'UZ',
    flag: '🇺🇿',
    name: { uz: "O'zbekiston", en: 'Uzbekistan', ru: 'Узбекистан' },
    dialCode: '+998',
    maxLength: 9,
    groups: [2, 3, 2, 2],
    placeholder: '90 123 45 67',
  },
  {
    code: 'kz',
    iso: 'KZ',
    flag: '🇰🇿',
    name: { uz: "Qozog'iston", en: 'Kazakhstan', ru: 'Казахстан' },
    dialCode: '+7',
    maxLength: 10,
    groups: [3, 3, 2, 2],
    placeholder: '701 234 56 78',
  },
  {
    code: 'kg',
    iso: 'KG',
    flag: '🇰🇬',
    name: { uz: "Qirg'iziston", en: 'Kyrgyzstan', ru: 'Кыргызстан' },
    dialCode: '+996',
    maxLength: 9,
    groups: [3, 3, 3],
    placeholder: '500 123 456',
  },
  {
    code: 'tj',
    iso: 'TJ',
    flag: '🇹🇯',
    name: { uz: 'Tojikiston', en: 'Tajikistan', ru: 'Таджикистан' },
    dialCode: '+992',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '55 123 4567',
  },
  {
    code: 'tm',
    iso: 'TM',
    flag: '🇹🇲',
    name: { uz: 'Turkmaniston', en: 'Turkmenistan', ru: 'Туркменистан' },
    dialCode: '+993',
    maxLength: 8,
    groups: [2, 3, 3],
    placeholder: '65 123 456',
  },
  {
    code: 'ru',
    iso: 'RU',
    flag: '🇷🇺',
    name: { uz: 'Rossiya', en: 'Russia', ru: 'Россия' },
    dialCode: '+7',
    maxLength: 10,
    groups: [3, 3, 2, 2],
    placeholder: '912 345 67 89',
  },
  {
    code: 'tr',
    iso: 'TR',
    flag: '🇹🇷',
    name: { uz: 'Turkiya', en: 'Turkey', ru: 'Турция' },
    dialCode: '+90',
    maxLength: 10,
    groups: [3, 3, 2, 2],
    placeholder: '532 123 45 67',
  },
  {
    code: 'ae',
    iso: 'AE',
    flag: '🇦🇪',
    name: { uz: 'BAA', en: 'UAE', ru: 'ОАЭ' },
    dialCode: '+971',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '50 123 4567',
  },
  {
    code: 'sa',
    iso: 'SA',
    flag: '🇸🇦',
    name: { uz: 'Saudiya Arabistoni', en: 'Saudi Arabia', ru: 'Саудовская Аравия' },
    dialCode: '+966',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '50 123 4567',
  },
  {
    code: 'qa',
    iso: 'QA',
    flag: '🇶🇦',
    name: { uz: 'Qatar', en: 'Qatar', ru: 'Катар' },
    dialCode: '+974',
    maxLength: 8,
    groups: [4, 4],
    placeholder: '3312 4567',
  },
  {
    code: 'us',
    iso: 'US',
    flag: '🇺🇸',
    name: { uz: 'AQSH', en: 'United States', ru: 'США' },
    dialCode: '+1',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '201 555 0123',
  },
  {
    code: 'gb',
    iso: 'GB',
    flag: '🇬🇧',
    name: { uz: 'Buyuk Britaniya', en: 'United Kingdom', ru: 'Великобритания' },
    dialCode: '+44',
    maxLength: 10,
    groups: [4, 3, 3],
    placeholder: '7400 123 456',
  },
  {
    code: 'de',
    iso: 'DE',
    flag: '🇩🇪',
    name: { uz: 'Germaniya', en: 'Germany', ru: 'Германия' },
    dialCode: '+49',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '151 234 5678',
  },
  {
    code: 'fr',
    iso: 'FR',
    flag: '🇫🇷',
    name: { uz: 'Fransiya', en: 'France', ru: 'Франция' },
    dialCode: '+33',
    maxLength: 9,
    groups: [1, 2, 2, 2, 2],
    placeholder: '6 12 34 56 78',
  },
  {
    code: 'it',
    iso: 'IT',
    flag: '🇮🇹',
    name: { uz: 'Italiya', en: 'Italy', ru: 'Италия' },
    dialCode: '+39',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '312 345 6789',
  },
  {
    code: 'es',
    iso: 'ES',
    flag: '🇪🇸',
    name: { uz: 'Ispaniya', en: 'Spain', ru: 'Испания' },
    dialCode: '+34',
    maxLength: 9,
    groups: [3, 3, 3],
    placeholder: '612 345 678',
  },
  {
    code: 'ch',
    iso: 'CH',
    flag: '🇨🇭',
    name: { uz: 'Shveytsariya', en: 'Switzerland', ru: 'Швейцария' },
    dialCode: '+41',
    maxLength: 9,
    groups: [2, 3, 2, 2],
    placeholder: '79 123 45 67',
  },
  {
    code: 'nl',
    iso: 'NL',
    flag: '🇳🇱',
    name: { uz: 'Niderlandiya', en: 'Netherlands', ru: 'Нидерланды' },
    dialCode: '+31',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '61 234 5678',
  },
  {
    code: 'be',
    iso: 'BE',
    flag: '🇧🇪',
    name: { uz: 'Belgiya', en: 'Belgium', ru: 'Бельгия' },
    dialCode: '+32',
    maxLength: 9,
    groups: [3, 2, 2, 2],
    placeholder: '470 12 34 56',
  },
  {
    code: 'ua',
    iso: 'UA',
    flag: '🇺🇦',
    name: { uz: 'Ukraina', en: 'Ukraine', ru: 'Украина' },
    dialCode: '+380',
    maxLength: 9,
    groups: [2, 3, 2, 2],
    placeholder: '67 123 45 67',
  },
  {
    code: 'ge',
    iso: 'GE',
    flag: '🇬🇪',
    name: { uz: 'Gruziya', en: 'Georgia', ru: 'Грузия' },
    dialCode: '+995',
    maxLength: 9,
    groups: [3, 3, 3],
    placeholder: '555 123 456',
  },
  {
    code: 'az',
    iso: 'AZ',
    flag: '🇦🇿',
    name: { uz: 'Ozarbayjon', en: 'Azerbaijan', ru: 'Азербайджан' },
    dialCode: '+994',
    maxLength: 9,
    groups: [2, 3, 2, 2],
    placeholder: '50 123 45 67',
  },
  {
    code: 'am',
    iso: 'AM',
    flag: '🇦🇲',
    name: { uz: 'Armaniston', en: 'Armenia', ru: 'Армения' },
    dialCode: '+374',
    maxLength: 8,
    groups: [2, 3, 3],
    placeholder: '91 123 456',
  },
  {
    code: 'by',
    iso: 'BY',
    flag: '🇧🇾',
    name: { uz: 'Belarus', en: 'Belarus', ru: 'Беларусь' },
    dialCode: '+375',
    maxLength: 9,
    groups: [2, 3, 2, 2],
    placeholder: '29 123 45 67',
  },
  {
    code: 'af',
    iso: 'AF',
    flag: '🇦🇫',
    name: { uz: "Afg'oniston", en: 'Afghanistan', ru: 'Афганистан' },
    dialCode: '+93',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '70 123 4567',
  },
  {
    code: 'al',
    iso: 'AL',
    flag: '🇦🇱',
    name: { uz: 'Albaniya', en: 'Albania', ru: 'Албания' },
    dialCode: '+355',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '67 123 4567',
  },
  {
    code: 'dz',
    iso: 'DZ',
    flag: '🇩🇿',
    name: { uz: 'Jazoir', en: 'Algeria', ru: 'Алжир' },
    dialCode: '+213',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '55 123 4567',
  },
  {
    code: 'cn',
    iso: 'CN',
    flag: '🇨🇳',
    name: { uz: 'Xitoy', en: 'China', ru: 'Китай' },
    dialCode: '+86',
    maxLength: 11,
    groups: [3, 4, 4],
    placeholder: '131 2345 6789',
  },
  {
    code: 'in',
    iso: 'IN',
    flag: '🇮🇳',
    name: { uz: 'Hindiston', en: 'India', ru: 'Индия' },
    dialCode: '+91',
    maxLength: 10,
    groups: [5, 5],
    placeholder: '98765 43210',
  },
  {
    code: 'jp',
    iso: 'JP',
    flag: '🇯🇵',
    name: { uz: 'Yaponiya', en: 'Japan', ru: 'Япония' },
    dialCode: '+81',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '090 123 4567',
  },
  {
    code: 'kr',
    iso: 'KR',
    flag: '🇰🇷',
    name: { uz: 'Janubiy Koreya', en: 'South Korea', ru: 'Южная Корея' },
    dialCode: '+82',
    maxLength: 10,
    groups: [2, 4, 4],
    placeholder: '10 1234 5678',
  },
  {
    code: 'my',
    iso: 'MY',
    flag: '🇲🇾',
    name: { uz: 'Malayziya', en: 'Malaysia', ru: 'Малайзия' },
    dialCode: '+60',
    maxLength: 9,
    groups: [2, 3, 4],
    placeholder: '12 345 6789',
  },
  {
    code: 'pk',
    iso: 'PK',
    flag: '🇵🇰',
    name: { uz: 'Pokiston', en: 'Pakistan', ru: 'Пакистан' },
    dialCode: '+92',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '300 123 4567',
  },
  {
    code: 'eg',
    iso: 'EG',
    flag: '🇪🇬',
    name: { uz: 'Misr', en: 'Egypt', ru: 'Египет' },
    dialCode: '+20',
    maxLength: 10,
    groups: [3, 3, 4],
    placeholder: '100 123 4567',
  },
];

export const DEFAULT_PHONE_COUNTRY: PhoneCountryCode = 'uz';

export const getPhoneCountry = (countryCode: PhoneCountryCode = DEFAULT_PHONE_COUNTRY) =>
  PHONE_COUNTRIES.find((country) => country.code === countryCode) ?? PHONE_COUNTRIES[0];

export const normalizePhoneDigits = (
  value: string,
  countryCode: PhoneCountryCode = DEFAULT_PHONE_COUNTRY,
) => {
  const country = getPhoneCountry(countryCode);
  const rawDialCode = country.dialCode.replace(/\D/g, '');
  const digits = value.replace(/\D/g, '');
  const withoutDialCode =
    digits.startsWith(rawDialCode) && digits.length > country.maxLength ? digits.slice(rawDialCode.length) : digits;

  return withoutDialCode.slice(0, country.maxLength);
};

export const formatPhoneDigits = (
  value: string,
  countryCode: PhoneCountryCode = DEFAULT_PHONE_COUNTRY,
) => {
  const country = getPhoneCountry(countryCode);
  const digits = normalizePhoneDigits(value, countryCode);
  let cursor = 0;

  return country.groups
    .map((size) => {
      const chunk = digits.slice(cursor, cursor + size);
      cursor += size;
      return chunk;
    })
    .filter(Boolean)
    .join(' ');
};

export const buildPhoneNumber = (
  value: string,
  countryCode: PhoneCountryCode = DEFAULT_PHONE_COUNTRY,
) => {
  const country = getPhoneCountry(countryCode);
  const formatted = formatPhoneDigits(value, countryCode);

  return formatted ? `${country.dialCode} ${formatted}` : '';
};
