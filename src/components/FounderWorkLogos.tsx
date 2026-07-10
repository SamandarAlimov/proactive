import { Sparkles } from 'lucide-react';

import chortoqLogo from '@/assets/founder-work/chortoq-normalized.png';
import mfaktorLogo from '@/assets/founder-work/mfaktor.webp';
import samsungLogo from '@/assets/founder-work/samsung-normalized.png';
import { useI18n, type Language } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const copy: Record<Language, { eyebrow: string; title: string }> = {
  uz: {
    eyebrow: 'Founder tajribasi',
    title: 'Habibullo Sadulloyev ishlagan brendlar',
  },
  en: {
    eyebrow: 'Founder experience',
    title: 'Brands Habibullo Sadulloyev has worked with',
  },
  ru: {
    eyebrow: 'Опыт основателя',
    title: 'Бренды, с которыми работал Хабибулло Садуллоев',
  },
};

const founderWorkLogos = [
  {
    name: 'Chortoq',
    logo: chortoqLogo,
    imageClassName: 'max-h-[46px] max-w-[160px] sm:max-h-[54px] sm:max-w-[184px]',
  },
  {
    name: 'MFaktor',
    logo: mfaktorLogo,
    imageClassName: 'max-h-[40px] max-w-[160px] sm:max-h-[48px] sm:max-w-[184px]',
  },
  {
    name: 'Samsung',
    logo: samsungLogo,
    imageClassName: 'max-h-[42px] max-w-[160px] sm:max-h-[50px] sm:max-w-[184px]',
  },
];

type FounderWorkLogosProps = {
  className?: string;
  variant?: 'compact' | 'panel';
};

const FounderWorkLogos = ({ className, variant = 'panel' }: FounderWorkLogosProps) => {
  const { lang } = useI18n();
  const text = copy[lang];

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.35rem] border border-border/60 bg-background/70 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm',
        variant === 'panel' && 'sm:p-5',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.08),transparent_44%)]" />

      <div className="relative">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-brand text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="h-3 w-3" />
            {text.eyebrow}
          </span>
          <span className="text-sm font-semibold leading-snug text-foreground/85">
            {text.title}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {founderWorkLogos.map((item) => (
            <div
              key={item.name}
              className={cn(
                'group flex h-16 min-w-0 items-center justify-center rounded-2xl border border-secondary/10 bg-white px-3 py-2.5 shadow-[0_12px_28px_rgba(38,79,107,0.10)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_38px_rgba(38,79,107,0.16)] dark:border-white/10 dark:bg-brand-dark dark:shadow-[0_16px_34px_rgba(0,0,0,0.26)] dark:hover:border-primary/35 dark:hover:shadow-[0_20px_42px_rgba(0,0,0,0.34)]',
                variant === 'panel' && 'sm:h-[4.75rem] sm:px-4',
              )}
            >
              <span className="flex h-[52px] w-full max-w-[190px] items-center justify-center sm:h-[58px]">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'founder-work-logo h-auto w-auto object-contain opacity-95 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100',
                    item.imageClassName,
                  )}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderWorkLogos;
