import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiteMotionLayer from '@/components/SiteMotionLayer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: 'blur(6px)' }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: 'blur(4px)' }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-background"
    >
      <SiteMotionLayer />
      <Navbar />
      <div style={{ paddingTop: 'var(--site-header-offset)' }}>{children}</div>
      <Footer />
    </motion.div>
  );
};

export default PageLayout;
