export type PhoneCountryCode = 'uz' | 'kz' | 'kg' | 'ru' | 'tr' | 'ae' | 'sa' | 'us' | 'gb' | 'de';

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
    name: { uz: 'Qozog‘iston', en: 'Kazakhstan', ru: 'Казахстан' },
    dialCode: '+7',
    maxLength: 10,
    groups: [3, 3, 2, 2],
    placeholder: '701 234 56 78',
  },
  {
    code: 'kg',
    iso: 'KG',
    flag: '🇰🇬',
    name: { uz: 'Qirg‘iziston', en: 'Kyrgyzstan', ru: 'Кыргызстан' },
    dialCode: '+996',
    maxLength: 9,
    groups: [3, 3, 3],
    placeholder: '500 123 456',
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
    maxLength: 11,
    groups: [4, 3, 4],
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
