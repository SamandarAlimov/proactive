import { ChevronDown, Mail } from 'lucide-react';

import { formatPhoneDigits, normalizePhoneDigits } from '@/lib/contact-form';
import { cn } from '@/lib/utils';

type ContactFieldProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

const UzbekistanFlag = () => (
  <span className="relative block h-5 w-7 overflow-hidden rounded-[4px] border border-black/10 shadow-sm">
    <span className="absolute inset-x-0 top-0 h-[33%] bg-[#19a7e0]" />
    <span className="absolute inset-x-0 top-[33%] h-[10%] bg-[#d32f45]" />
    <span className="absolute inset-x-0 top-[43%] h-[33%] bg-white" />
    <span className="absolute inset-x-0 top-[76%] h-[10%] bg-[#d32f45]" />
    <span className="absolute inset-x-0 bottom-0 h-[24%] bg-[#1ca36b]" />
  </span>
);

export const ContactPhoneInput = ({
  id,
  value,
  onChange,
  required,
  placeholder = '90 123 45 67',
  className,
}: ContactFieldProps) => (
  <div
    className={cn(
      'group flex items-center overflow-hidden rounded-2xl border border-border bg-background/90 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] transition-all duration-300',
      'focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/70',
      className,
    )}
  >
    <div className="flex items-center gap-3 border-r border-border/80 px-4 py-3 text-secondary dark:text-secondary-foreground">
      <UzbekistanFlag />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">UZ</span>
      <ChevronDown className="h-4 w-4 text-muted-foreground" />
    </div>

    <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
      <span className="text-xl font-semibold tracking-tight text-foreground">+998</span>
      <div className="h-8 w-px bg-border" />
      <input
        id={id}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        required={required}
        value={formatPhoneDigits(value)}
        onChange={(event) => onChange(normalizePhoneDigits(event.target.value))}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-lg font-medium tracking-[0.14em] text-foreground outline-none placeholder:text-muted-foreground/60"
      />
    </div>
  </div>
);

export const ContactEmailInput = ({
  id,
  value,
  onChange,
  required,
  placeholder = 'you@example.com',
  className,
}: ContactFieldProps) => (
  <div
    className={cn(
      'group flex items-center gap-4 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] transition-all duration-300',
      'focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 dark:bg-background/70',
      className,
    )}
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-primary transition-transform duration-300 group-focus-within:scale-105">
      <Mail className="h-5 w-5" />
    </div>

    <div className="min-w-0 flex-1">
      <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Email</div>
      <input
        id={id}
        type="email"
        inputMode="email"
        autoComplete="email"
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-base font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
      />
    </div>
  </div>
);
