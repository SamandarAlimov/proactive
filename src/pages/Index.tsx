import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import MarketingMaximum from '@/components/MarketingMaximum';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Events from '@/components/Events';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SiteMotionLayer from '@/components/SiteMotionLayer';
import { useI18n } from '@/lib/i18n';
import {
  createOrganizationSchema,
  createWebPageSchema,
  createWebsiteSchema,
} from '@/lib/seo';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 10, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, filter: 'blur(4px)', transition: { duration: 0.2 } },
};

const Index = () => {
  const { lang, t } = useI18n();
  const seoCopy = {
    uz: {
      title: 'Strategik marketing agentligi va brend platformasi',
      description: t.about.description,
    },
    en: {
      title: 'Strategic marketing agency and brand platform',
      description: t.about.description,
    },
    ru: {
      title: 'Strategicheskoe marketingovoe agentstvo i brand-platforma',
      description: t.about.description,
    },
  }[lang];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="index"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-background"
      >
        <SEO
          title={seoCopy.title}
          description={seoCopy.description}
          lang={lang}
          path="/"
          structuredData={[
            createWebsiteSchema(lang),
            createOrganizationSchema(lang),
            createWebPageSchema({
              title: seoCopy.title,
              description: seoCopy.description,
              lang,
              path: '/',
            }),
          ]}
        />
        <SiteMotionLayer />
        <Navbar />
        <Hero />
        <div className="relative z-10 bg-background">
          <About />
          <Services />
          <Projects />
          <Team />
          <MarketingMaximum />
          <Events />
          <Internship />
          <Contact />
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
