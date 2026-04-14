import { motion } from 'framer-motion';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';

const TeamPage = () => {
  const { lang } = useI18n();
  const currentLang = (lang in brandbookContent.team.title ? lang : 'uz') as keyof typeof brandbookContent.team.title;

  return (
    <PageLayout>
      <div className="bg-secondary pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold leading-tight text-secondary-foreground md:text-7xl lg:text-8xl"
          >
            {brandbookContent.team.title[currentLang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/70 md:text-lg"
          >
            {brandbookContent.team.description[currentLang]}
          </motion.p>
        </div>
      </div>

      <TeamShowcaseStrip />
    </PageLayout>
  );
};

export default TeamPage;
