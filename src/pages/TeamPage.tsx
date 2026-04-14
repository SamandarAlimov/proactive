import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';

const TeamPage = () => {
  const { t } = useI18n();

  return (
    <PageLayout>
      <div className="bg-secondary pb-12 pt-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold leading-tight text-secondary-foreground md:text-7xl lg:text-8xl"
          >
            The Proactive jamoasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/70 md:text-lg"
          >
            {t.team.description}
          </motion.p>
        </div>
      </div>

      <TeamShowcaseStrip />
    </PageLayout>
  );
};

export default TeamPage;
