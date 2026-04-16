import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Mail, Search } from 'lucide-react';

import {
  contactFieldFocusClass,
  contactFieldShellClass,
  contactHelperTextClass,
  contactInputClass,
} from '@/components/contact/contactFieldStyles';
import {
  DEFAULT_PHONE_COUNTRY,
  formatPhoneDigits,
  getPhoneCountry,
  normalizePhoneDigits,
  PHONE_COUNTRIES,
  type PhoneCountryCode,
} from '@/lib/contact-form';
import type { Language } from '@/lib/i18n';
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

const phoneHelperText: Record<Language, string> = {
  uz: 'Xalqaro format qabul qilinadi',
  en: 'International format is supported',
  ru: 'Поддерживается международный формат',
};

const emailHelperText: Record<Language, string> = {
  uz: 'Javobni shu manzilga yuboramiz',
  en: 'We will send the reply to this address',
  ru: 'Ответ отправим на этот адрес',
};

const searchPlaceholderText: Record<Language, string> = {
  uz: 'Davlat yoki kodni qidiring',
  en: 'Search country or code',
  ru: 'Найдите страну или код',
};

const noResultsText: Record<Language, string> = {
  uz: 'Mos davlat topilmadi',
  en: 'No matching country found',
  ru: 'Подходящая страна не найдена',
};

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
    if (!countryOpen) {
      return;
    }

    setSearchQuery('');
    window.setTimeout(() => searchInputRef.current?.focus(), 40);
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
    <div className={cn('space-y-2.5', className)}>
      <div
        className={cn(
          contactFieldShellClass,
          contactFieldFocusClass,
          'relative flex h-[72px] overflow-visible',
        )}
      >
        <div ref={countryRef} className="relative flex h-full shrink-0">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={countryOpen}
            aria-label="Select phone country code"
            onClick={() => setCountryOpen((open) => !open)}
            className="flex h-full w-[82px] shrink-0 items-center gap-2 border-r border-border/70 px-3 text-left transition-colors duration-200 hover:bg-secondary/5 sm:w-[88px] dark:border-white/10"
          >
            <span className="text-[13px] font-semibold text-foreground sm:text-sm">{currentCountry.iso}</span>
            <ChevronDown
              className={cn(
                'ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                countryOpen && 'rotate-180',
              )}
            />
          </button>

          {countryOpen && (
            <div
              role="listbox"
              className="absolute left-0 top-[calc(100%+0.8rem)] z-40 w-[min(360px,calc(100vw-3rem))] overflow-hidden rounded-[1.4rem] border border-border/85 bg-background/98 shadow-[0_28px_72px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-secondary/96"
            >
              <div className="border-b border-border/80 p-3 dark:border-white/10">
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-3 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                  <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={searchPlaceholderText[lang]}
                    className="w-full bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
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
                          isActive ? 'bg-primary/10 text-foreground' : 'hover:bg-secondary/5 dark:hover:bg-white/[0.03]',
                        )}
                      >
                        <span className="text-xl leading-none">{item.flag}</span>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-semibold text-foreground">{item.name[lang]}</div>
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

        <div className="flex h-full w-[58px] shrink-0 items-center justify-center border-r border-border/70 px-2 text-[12px] font-semibold text-primary sm:w-[64px] sm:text-[13px] dark:border-white/10">
          {currentCountry.dialCode}
        </div>

        <div className="flex min-w-0 flex-1 items-center px-3 sm:px-4">
          <input
            id={id}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required={required}
            value={formatPhoneDigits(value, country)}
            onChange={(event) => onChange(normalizePhoneDigits(event.target.value, country))}
            placeholder={placeholder ?? currentCountry.placeholder}
            className={cn(
              contactInputClass,
              'h-full min-w-0 flex-1 w-full text-[13px] font-semibold tracking-[0.005em] placeholder:font-medium placeholder:tracking-normal sm:text-[14px]',
            )}
          />
        </div>
      </div>

      <p className={cn(contactHelperTextClass, 'min-h-[20px]')}>{phoneHelperText[lang]}</p>
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
  <div className={cn('space-y-2.5', className)}>
      <div
        className={cn(
          contactFieldShellClass,
          contactFieldFocusClass,
          'flex h-[72px] items-center gap-2 px-3 sm:gap-2 sm:px-3.5',
        )}
      >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.9rem] bg-primary/10 text-primary shadow-[0_16px_30px_-26px_rgba(38,79,107,0.75)] sm:h-9 sm:w-9">
        <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
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
        className={cn(contactInputClass, 'h-full min-w-0 flex-1 w-full pr-1 text-[13px] sm:text-[14px]')}
      />
    </div>

    <p className={cn(contactHelperTextClass, 'min-h-[20px]')}>{emailHelperText[lang]}</p>
  </div>
);
