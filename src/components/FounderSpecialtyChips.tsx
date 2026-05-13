import { BarChart3, GraduationCap, Megaphone } from 'lucide-react';

type FounderSpecialtyChipsProps = {
  tags: string[];
  className?: string;
  chipClassName?: string;
  iconClassName?: string;
};

const specialtyIcons = [Megaphone, BarChart3, GraduationCap] as const;

const joinClasses = (...values: Array<string | undefined>) => values.filter(Boolean).join(' ');

const FounderSpecialtyChips = ({
  tags,
  className,
  chipClassName,
  iconClassName,
}: FounderSpecialtyChipsProps) => (
  <div className={joinClasses('flex flex-wrap gap-2', className)}>
    {tags.map((tag, index) => {
      const Icon = specialtyIcons[index] ?? specialtyIcons[specialtyIcons.length - 1];

      return (
        <span
          key={tag}
          className={joinClasses(
            'inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground',
            chipClassName,
          )}
        >
          <Icon className={joinClasses('h-3.5 w-3.5 text-primary', iconClassName)} />
          <span>{tag}</span>
        </span>
      );
    })}
  </div>
);

export default FounderSpecialtyChips;
