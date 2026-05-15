import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { getMainSectionState } from '@/lib/source-navigation';
import { cn } from '@/lib/utils';

type SourceBackLinkProps = {
  className?: string;
  variant?: 'dark' | 'light';
};

const SourceBackLink = ({ className, variant = 'light' }: SourceBackLinkProps) => {
  const location = useLocation();
  const source = getMainSectionState(location.state);

  if (!source) {
    return null;
  }

  return (
    <Link
      to={source.from}
      className={cn(
        'mb-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors',
        variant === 'dark'
          ? 'text-white/75 hover:text-primary'
          : 'text-muted-foreground hover:text-primary',
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      {source.fromLabel}
    </Link>
  );
};

export default SourceBackLink;
