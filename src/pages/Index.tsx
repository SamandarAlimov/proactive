import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import MarketingMaximum from '@/components/MarketingMaximum';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Internship from '@/components/Internship';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useI18n } from '@/lib/i18n';
import {
  createOrganizationSchema,
  createWebPageSchema,
  createWebsiteSchema,
} from '@/lib/seo';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.16 } },
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
        <Navbar />
        <Hero />
        <div className="relative z-10 bg-background">
          <About />
          <Services />
          <Projects />
          <Team />
          <MarketingMaximum />
          <Internship />
          <Contact />
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
