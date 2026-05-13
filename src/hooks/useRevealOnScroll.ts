import { useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import {
  createDirectionalRevealVariants,
  premiumRevealTransition,
} from '@/lib/motion';

type RevealOnScrollOptions = {
  rootMargin?: string;
  threshold?: number;
};

type RevealMotionOptions = {
  axis?: 'x' | 'y';
  blur?: number;
  delay?: number;
  distance?: number;
  duration?: number;
  scale?: number;
};

export const useRevealOnScroll = ({
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.15,
}: RevealOnScrollOptions = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const direction = useScrollDirection();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  const getMotionProps = useMemo(
    () =>
      ({
        axis = 'y',
        blur = 0,
        delay = 0,
        distance = 22,
        duration = premiumRevealTransition.duration ?? 0.36,
        scale = 0.994,
      }: RevealMotionOptions = {}) => ({
        initial: 'hidden' as const,
        animate: isVisible ? ('visible' as const) : ('hidden' as const),
        exit: 'hidden' as const,
        variants: createDirectionalRevealVariants({
          axis,
          blur,
          direction,
          distance,
          reducedMotion: shouldReduceMotion,
          scale,
        }),
        transition: {
          ...premiumRevealTransition,
          delay,
          duration,
        },
      }),
    [direction, isVisible, shouldReduceMotion],
  );

  return {
    ref,
    isVisible,
    direction,
    shouldReduceMotion,
    getMotionProps,
  };
};
