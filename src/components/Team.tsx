import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';

const Team = () => {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section id="team" className="relative overflow-hidden" ref={ref}>
      <div
        className="relative py-20 md:py-24"
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={
            isDark
              ? {
                  background: 'radial-gradient(ellipse at 80% 20%, hsla(166, 75%, 61%, 0.08) 0%, transparent 60%)',
                }
              : {
                  background:
                    'radial-gradient(ellipse at 82% 18%, hsla(166, 75%, 61%, 0.14) 0%, transparent 56%), radial-gradient(ellipse at 14% 10%, hsla(204, 47%, 28%, 0.06) 0%, transparent 44%)',
                }
          }
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-brand text-xs font-semibold uppercase tracking-widest"
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
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'hsl(166, 75%, 61%)' }} />
              {t.team.subtitle}
            </span>
            <h2
              className={`mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl lg:text-7xl ${
                isDark ? 'text-white' : 'text-secondary'
              }`}
            >
              The Proactive
              <br />
              <span className="text-primary">jamoasi</span>
            </h2>
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
                isDark ? 'text-white/56' : 'text-secondary/68'
              }`}
            >
              {t.team.description}
            </p>
          </motion.div>
        </div>
      </div>

      <TeamShowcaseStrip />
    </section>
  );
};

export default Team;
