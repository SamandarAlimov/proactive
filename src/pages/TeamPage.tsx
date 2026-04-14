import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';

const TeamPage = () => {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <PageLayout>
      <div
        className="pb-12 pt-28"
        style={
          isDark
            ? {
                background:
                  'linear-gradient(160deg, hsla(202, 100%, 11%, 0.97) 0%, hsla(204, 47%, 28%, 0.95) 50%, hsla(259, 43%, 51%, 0.15) 100%)',
              }
            : {
                background:
                  'linear-gradient(160deg, hsla(0, 0%, 100%, 0.98) 0%, hsla(200, 45%, 95%, 0.96) 52%, hsla(166, 75%, 61%, 0.12) 100%)',
              }
        }
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-brand text-xs font-semibold uppercase tracking-widest"
            style={
              isDark
                ? {
                    background: 'hsla(166, 75%, 61%, 0.1)',
                    color: 'hsl(166, 75%, 61%)',
                    border: '1px solid hsla(166, 75%, 61%, 0.2)',
                  }
                : {
                    background: 'hsla(204, 47%, 28%, 0.05)',
                    color: 'hsl(204, 47%, 28%)',
                    border: '1px solid hsla(204, 47%, 28%, 0.08)',
                  }
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.team.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-5 text-5xl font-heading font-bold leading-tight md:text-7xl lg:text-8xl ${
              isDark ? 'text-secondary-foreground' : 'text-secondary'
            }`}
          >
            The Proactive jamoasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
              isDark ? 'text-secondary-foreground/70' : 'text-secondary/70'
            }`}
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
