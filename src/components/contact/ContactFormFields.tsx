import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Mail, Search } from 'lucide-react';

import type { Language } from '@/lib/i18n';
import {
  DEFAULT_PHONE_COUNTRY,
  formatPhoneDigits,
  getPhoneCountry,
  normalizePhoneDigits,
  PHONE_COUNTRIES,
  type PhoneCountryCode,
} from '@/lib/contact-form';
import { cn } from '@/lib/utils';

type ContactFieldProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

type ContactPhoneInputProps = ContactFieldProps & {
  lang?: Language;
  country?: PhoneCountryCode;
  onCountryChange: (country: PhoneCountryCode) => void;
};

const countryFieldLabel: Record<Language, string> = {
  uz: 'Davlat kodi',
  en: 'Country code',
  ru: 'Код страны',
};

const phoneFieldLabel: Record<Language, string> = {
  uz: 'Telefon raqami',
  en: 'Phone number',
  ru: 'Номер телефона',
};

const phoneHelperText: Record<Language, string> = {
  uz: 'Xalqaro format qabul qilinadi',
  en: 'International format accepted',
  ru: 'Поддерживается международный формат',
};

const emailFieldLabel: Record<Language, string> = {
  uz: 'Email manzil',
  en: 'Email address',
  ru: 'Email адрес',
};

const emailHelperText: Record<Language, string> = {
  uz: 'Javobni shu manzilga yuboramiz',
  en: 'We will send the reply here',
  ru: 'Ответ отправим на этот адрес',
};

const searchPlaceholderText: Record<Language, string> = {
  uz: 'Davlat yoki kodni qidiring',
  en: 'Search country or code',
  ru: 'Найдите страну или код',
};

const noResultsText: Record<Language, string> = {
  uz: "Mos davlat topilmadi",
  en: 'No matching country found',
  ru: 'Подходящая страна не найдена',
};

const EmailFieldIcon = () => (
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_12px_30px_-24px_rgba(38,79,107,0.85)]">
    <Mail className="h-5 w-5" />
  </div>
);

export const ContactPhoneInput = ({
  id,
  value,
  onChange,
  required,
  placeholder,
  className,
  lang = 'uz',
  country = DEFAULT_PHONE_COUNTRY,
  onCountryChange,
}: ContactPhoneInputProps) => {
  const [countryOpen, setCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const countryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const currentCountry = getPhoneCountry(country);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setCountryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (countryOpen) {
      setSearchQuery('');
      window.setTimeout(() => searchInputRef.current?.focus(), 40);
    }
  }, [countryOpen]);

  const filteredCountries = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return PHONE_COUNTRIES;
    }

    return PHONE_COUNTRIES.filter((item) =>
      [item.iso, item.dialCode, item.name.uz, item.name.en, item.name.ru].some((candidate) =>
        candidate.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [searchQuery]);

  return (
    <div
      className={cn(
        'group relative overflow-visible rounded-[1.6rem] border border-border bg-background/95 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.45)] transition-all duration-300',
        'focus-within:border-primary/45 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/80',
        className,
      )}
    >
      <div className="flex min-h-[96px] flex-col sm:flex-row">
        <div
          ref={countryRef}
          className="relative shrink-0 border-b border-border/70 sm:w-[220px] sm:border-b-0 sm:border-r"
        >
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={countryOpen}
            onClick={() => setCountryOpen((open) => !open)}
            className="flex h-full w-full items-center gap-3 px-4 py-4 text-left transition-colors duration-200 hover:bg-secondary/5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/8 text-2xl shadow-[0_12px_30px_-24px_rgba(38,79,107,0.75)]">
              {currentCountry.flag}
            </span>

            <div className="min-w-0 flex-1">
              <div className="font-brand text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {countryFieldLabel[lang]}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="truncate text-sm font-semibold text-foreground">{currentCountry.name[lang]}</span>
                <span className="text-sm font-semibold text-primary">{currentCountry.dialCode}</span>
              </div>
            </div>

            <ChevronDown
              className={cn(
                'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                countryOpen && 'rotate-180',
              )}
            />
          </button>

          {countryOpen && (
            <div
              role="listbox"
              className="absolute left-0 top-[calc(100%+0.75rem)] z-30 w-[min(420px,calc(100vw-3rem))] overflow-hidden rounded-[1.5rem] border border-border bg-background/95 shadow-[0_32px_72px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl"
            >
              <div className="border-b border-border/80 p-3">
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 px-3 py-3">
                  <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={searchPlaceholderText[lang]}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/65"
                  />
                </div>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {filteredCountries.length === 0 ? (
                  <div className="px-3 py-4 text-sm text-muted-foreground">{noResultsText[lang]}</div>
                ) : (
                  filteredCountries.map((item) => {
                    const isActive = item.code === currentCountry.code;

                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          onCountryChange(item.code);
                          setCountryOpen(false);
                        }}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-200',
                          isActive ? 'bg-primary/10 text-foreground' : 'hover:bg-secondary/5',
                        )}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary/8 text-xl">
                          {item.flag}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground">{item.name[lang]}</div>
                          <div className="mt-0.5 font-brand text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {item.iso} {item.dialCode}
                          </div>
                        </div>

                        {isActive ? <Check className="h-4 w-4 shrink-0 text-primary" /> : null}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 items-center px-5 py-4">
          <div className="w-full min-w-0">
            <div className="font-brand text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {phoneFieldLabel[lang]}
            </div>
            <input
              id={id}
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              required={required}
              value={formatPhoneDigits(value, country)}
              onChange={(event) => onChange(normalizePhoneDigits(event.target.value, country))}
              placeholder={placeholder ?? currentCountry.placeholder}
              className="mt-2 w-full bg-transparent text-lg font-semibold tracking-[0.12em] text-foreground outline-none placeholder:text-muted-foreground/50"
            />
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground/85">
              <span className="font-semibold text-primary">{currentCountry.dialCode}</span>
              <span>{phoneHelperText[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactEmailInput = ({
  id,
  value,
  onChange,
  required,
  placeholder = 'you@example.com',
  className,
  lang = 'uz',
}: ContactFieldProps & { lang?: Language }) => (
  <div
    className={cn(
      'group flex min-h-[96px] items-center gap-4 rounded-[1.6rem] border border-border bg-background/95 px-4 py-4 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.45)] transition-all duration-300',
      'focus-within:border-primary/45 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/80',
      className,
    )}
  >
    <EmailFieldIcon />

    <div className="min-w-0 flex-1">
      <div className="font-brand text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
        {emailFieldLabel[lang]}
      </div>
      <input
        id={id}
        type="email"
        inputMode="email"
        autoComplete="email"
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent text-base font-semibold text-foreground outline-none placeholder:text-muted-foreground/55"
      />
      <div className="mt-2 text-xs text-muted-foreground/85">{emailHelperText[lang]}</div>
    </div>
  </div>
);
