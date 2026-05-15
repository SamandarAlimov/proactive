import type { Transition, Variants } from 'framer-motion';

import type { ScrollDirection } from '@/hooks/useScrollDirection';

type DirectionalRevealOptions = {
  axis?: 'x' | 'y';
  blur?: number;
  direction?: ScrollDirection;
  distance?: number;
  reducedMotion?: boolean;
  scale?: number;
};

export const premiumRevealTransition: Transition = {
  duration: 0.52,
  ease: [0.16, 1, 0.3, 1],
};

export const revealViewport = {
  amount: 0.18,
  once: false,
};

export const createDirectionalRevealVariants = ({
  axis = 'y',
  blur = 0,
  direction = 'down',
  distance = 18,
  reducedMotion = false,
  scale = 0.998,
}: DirectionalRevealOptions = {}): Variants => {
  const hiddenOffset = direction === 'up' ? -distance : distance;

  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  return {
    hidden: {
      opacity: 0,
      scale,
      [axis]: hiddenOffset,
      willChange: 'opacity, transform, filter',
      ...(blur > 0 ? { filter: `blur(${blur}px)` } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      willChange: 'auto',
      ...(blur > 0 ? { filter: 'blur(0px)' } : {}),
    },
  };
};
