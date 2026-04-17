import { useSyncExternalStore } from 'react';

export type ScrollDirection = 'up' | 'down';

type DirectionStore = {
  getSnapshot: () => ScrollDirection;
  subscribe: (listener: () => void) => () => void;
};

const stores = new Map<number, DirectionStore>();

const createDirectionStore = (threshold: number): DirectionStore => {
  let direction: ScrollDirection = 'down';
  let lastY = 0;
  let ticking = false;
  let rafId = 0;
  let listening = false;

  const listeners = new Set<() => void>();

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  const updateDirection = () => {
    ticking = false;

    if (typeof window === 'undefined') {
      return;
    }

    const nextY = window.scrollY;
    const delta = nextY - lastY;

    if (Math.abs(delta) < threshold) {
      return;
    }

    lastY = nextY;

    const nextDirection: ScrollDirection = delta > 0 ? 'down' : 'up';

    if (nextDirection === direction) {
      return;
    }

    direction = nextDirection;
    notify();
  };

  const handleScroll = () => {
    if (typeof window === 'undefined' || ticking) {
      return;
    }

    ticking = true;
    rafId = window.requestAnimationFrame(updateDirection);
  };

  const start = () => {
    if (typeof window === 'undefined' || listening) {
      return;
    }

    listening = true;
    lastY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  const stop = () => {
    if (typeof window === 'undefined' || !listening) {
      return;
    }

    listening = false;
    window.removeEventListener('scroll', handleScroll);
    window.cancelAnimationFrame(rafId);
    ticking = false;
  };

  return {
    getSnapshot: () => direction,
    subscribe: (listener) => {
      listeners.add(listener);
      start();

      return () => {
        listeners.delete(listener);

        if (listeners.size === 0) {
          stop();
        }
      };
    },
  };
};

const getDirectionStore = (threshold: number) => {
  const key = Math.max(1, Math.round(threshold));

  if (!stores.has(key)) {
    stores.set(key, createDirectionStore(key));
  }

  return stores.get(key)!;
};

export const useScrollDirection = (threshold = 10) => {
  const store = getDirectionStore(threshold);

  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    () => 'down' satisfies ScrollDirection,
  );
};
