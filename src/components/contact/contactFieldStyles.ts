export const contactLabelClass =
  'mb-2.5 block px-1 font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary/72 dark:text-secondary-foreground/72';

export const contactFieldShellClass =
  'rounded-[1.35rem] border border-border/80 bg-background/92 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.28)] transition-all duration-300 dark:border-white/8 dark:bg-secondary/20';

export const contactFieldFocusClass =
  'focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/10';

export const contactInputClass =
  'w-full bg-transparent text-base font-medium leading-6 text-foreground outline-none placeholder:text-muted-foreground/60';

export const contactHelperTextClass =
  'mt-2 px-1 text-xs leading-5 text-muted-foreground/88';

export const contactSelectClass = `${contactFieldShellClass} ${contactFieldFocusClass} h-[72px] w-full appearance-none px-4 text-base font-medium text-foreground outline-none`;

export const contactTextInputClass = `${contactFieldShellClass} ${contactFieldFocusClass} h-[72px] w-full px-4 text-base font-medium text-foreground outline-none`;

export const contactTextareaClass = `${contactFieldShellClass} ${contactFieldFocusClass} min-h-[176px] w-full resize-none px-4 py-4 text-base font-medium leading-7 text-foreground outline-none`;
