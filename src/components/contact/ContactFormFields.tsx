import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Mail } from 'lucide-react';

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
  const countryRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      className={cn(
        'group relative rounded-[1.6rem] border border-border bg-background/95 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.45)] transition-all duration-300',
        'focus-within:border-primary/45 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/80',
        className,
      )}
    >
      <div className="flex min-h-[92px] flex-col sm:flex-row">
        <div
          ref={countryRef}
          className="relative border-b border-border/70 sm:min-w-[228px] sm:border-b-0 sm:border-r"
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
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
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
              className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-30 max-h-72 overflow-y-auto rounded-[1.3rem] border border-border bg-background/95 p-2 shadow-[0_30px_65px_-38px_rgba(15,23,42,0.55)] backdrop-blur-xl"
            >
              {PHONE_COUNTRIES.map((item) => {
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
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {item.iso} {item.dialCode}
                      </div>
                    </div>
                    {isActive ? <Check className="h-4 w-4 text-primary" /> : null}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 items-center px-4 py-4">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {phoneFieldLabel[lang]}
            </div>
            <div className="mt-2 flex items-end gap-3">
              <span className="shrink-0 text-xl font-semibold tracking-tight text-foreground">{currentCountry.dialCode}</span>
              <input
                id={id}
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                required={required}
                value={formatPhoneDigits(value, country)}
                onChange={(event) => onChange(normalizePhoneDigits(event.target.value, country))}
                placeholder={placeholder ?? currentCountry.placeholder}
                className="min-w-0 flex-1 bg-transparent pb-0.5 text-lg font-semibold tracking-[0.12em] text-foreground outline-none placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground/85">{phoneHelperText[lang]}</div>
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
      'group flex min-h-[92px] items-center gap-4 rounded-[1.6rem] border border-border bg-background/95 px-4 py-4 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.45)] transition-all duration-300',
      'focus-within:border-primary/45 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/80',
      className,
    )}
  >
    <EmailFieldIcon />

    <div className="min-w-0 flex-1">
      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
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
