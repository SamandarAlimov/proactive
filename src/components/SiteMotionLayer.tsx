import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

const SiteMotionLayer = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
  });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[70]">
      <motion.div
        className="h-[2px] origin-left bg-[linear-gradient(90deg,hsl(166,75%,61%),hsl(181,100%,50%),hsl(259,43%,51%))]"
        style={{ scaleX: shouldReduceMotion ? 1 : scaleX }}
      />
    </div>
  );
};

export default SiteMotionLayer;
