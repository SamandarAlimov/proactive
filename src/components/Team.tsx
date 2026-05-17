import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';
import { createMainSectionState, readMoreLabel } from '@/lib/source-navigation';

const Team = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const teamPageState = createMainSectionState('team', lang);
  const heading =
    lang === 'uz'
      ? { first: 'Proactive', second: 'jamoasi' }
      : lang === 'ru'
        ? { first: 'Команда', second: 'Proactive' }
        : { first: 'The Proactive', second: 'team' };

  return (
    <section id="team" className="section-deferred relative overflow-hidden" ref={ref}>
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
            {...getMotionProps({ distance: 24, duration: 0.45 })}
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
              className={`mt-4 text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-6xl ${
                isDark ? 'text-white' : 'text-secondary'
              }`}
            >
              {heading.first}
              <br />
              <span className="text-primary">{heading.second}</span>
            </h2>
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
                isDark ? 'text-white/75' : 'text-secondary/70'
              }`}
            >
              {t.team.description}
            </p>
            <Link
              to="/team"
              state={teamPageState}
              className={`group mt-7 inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? 'border-white/15 text-white hover:border-primary/50 hover:text-primary'
                  : 'border-primary/20 text-primary hover:bg-primary/5'
              }`}
            >
              {readMoreLabel(lang)}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <TeamShowcaseStrip />
    </section>
  );
};

export default Team;
