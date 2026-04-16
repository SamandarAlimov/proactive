import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export const useScrollAnimation = (threshold = 0.15) =>
  useRevealOnScroll({ threshold });
