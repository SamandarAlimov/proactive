import { motion } from 'framer-motion';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TeamShowcaseStrip from '@/components/TeamShowcaseStrip';

const Team = () => {
  const { lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = (lang in brandbookContent.team.title ? lang : 'uz') as keyof typeof brandbookContent.team.title;

  return (
    <section id="team" className="relative overflow-hidden" ref={ref}>
      <div
        className="relative py-20 md:py-24"
        style={{
          background:
            'linear-gradient(135deg, hsla(204, 47%, 28%, 0.98) 0%, hsla(202, 100%, 11%, 0.98) 64%, hsla(202, 100%, 11%, 1) 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 78% 22%, hsla(166, 75%, 61%, 0.12) 0%, transparent 58%), radial-gradient(ellipse at 12% 85%, hsla(181, 100%, 50%, 0.06) 0%, transparent 42%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: 'hsla(166, 75%, 61%, 0.1)',
                color: 'hsl(166, 75%, 61%)',
                border: '1px solid hsla(166, 75%, 61%, 0.2)',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'hsl(166, 75%, 61%)' }} />
              {brandbookContent.team.eyebrow[currentLang]}
            </span>
            <h2 className="mt-4 text-4xl font-heading font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {brandbookContent.team.title[currentLang]}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
              {brandbookContent.team.description[currentLang]}
            </p>
          </motion.div>
        </div>
      </div>

      <TeamShowcaseStrip />
    </section>
  );
};

export default Team;
