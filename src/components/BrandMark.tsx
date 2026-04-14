import logoSymbol from '@/assets/proactive-logo.jpg';

type BrandMarkProps = {
  variant?: 'full' | 'symbol';
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  symbolClassName?: string;
  wordmarkClassName?: string;
};

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ');

const sizeMap = {
  sm: {
    symbol: 'h-9 w-9 rounded-xl',
    wordmark: 'text-xl',
    gap: 'gap-2.5',
  },
  md: {
    symbol: 'h-10 w-10 rounded-[0.95rem]',
    wordmark: 'text-2xl',
    gap: 'gap-3',
  },
  lg: {
    symbol: 'h-12 w-12 rounded-[1.1rem]',
    wordmark: 'text-[1.85rem]',
    gap: 'gap-3.5',
  },
} as const;

const toneMap = {
  light: {
    wordmark: 'text-white',
  },
  dark: {
    wordmark: 'text-secondary dark:text-white',
  },
} as const;

const BrandMark = ({
  variant = 'full',
  tone = 'dark',
  size = 'md',
  className,
  symbolClassName,
  wordmarkClassName,
}: BrandMarkProps) => {
  const config = sizeMap[size];

  return (
    <span className={joinClasses('inline-flex items-center', config.gap, className)}>
      <img
        src={logoSymbol}
        alt="Proactive symbol"
        className={joinClasses(config.symbol, 'object-cover shadow-[0_12px_28px_rgba(38,79,107,0.18)]', symbolClassName)}
      />
      {variant === 'full' ? (
        <span
          className={joinClasses(
            'font-brand font-extrabold tracking-[-0.04em] leading-none',
            config.wordmark,
            toneMap[tone].wordmark,
            wordmarkClassName,
          )}
        >
          Proactive
        </span>
      ) : null}
    </span>
  );
};

export default BrandMark;
