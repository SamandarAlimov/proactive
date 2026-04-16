import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

export const useScrollDirection = (threshold = 10) => {
  const [direction, setDirection] = useState<ScrollDirection>('down');
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const directionRef = useRef<ScrollDirection>('down');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    lastYRef.current = window.scrollY;

    const updateDirection = () => {
      tickingRef.current = false;

      const nextY = window.scrollY;
      const delta = nextY - lastYRef.current;

      if (Math.abs(delta) < threshold) {
        return;
      }

      const nextDirection: ScrollDirection = delta > 0 ? 'down' : 'up';

      lastYRef.current = nextY;

      if (nextDirection === directionRef.current) {
        return;
      }

      directionRef.current = nextDirection;
      setDirection(nextDirection);
    };

    const handleScroll = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;
      window.requestAnimationFrame(updateDirection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return direction;
};
