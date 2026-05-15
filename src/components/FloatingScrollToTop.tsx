import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const SCROLL_THRESHOLD = 360;

const FloatingScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let rafId = 0;

    const updateVisibility = () => {
      rafId = 0;
      const nextVisible = window.scrollY > SCROLL_THRESHOLD;

      if (nextVisible === visibleRef.current) {
        return;
      }

      visibleRef.current = nextVisible;
      setVisible(nextVisible);
    };

    const handleScroll = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_18px_45px_rgba(8,34,51,0.18)] backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-7 md:right-7 md:h-14 md:w-14"
          style={{
            background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
            color: 'hsl(202, 100%, 11%)',
          }}
        >
          <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingScrollToTop;
