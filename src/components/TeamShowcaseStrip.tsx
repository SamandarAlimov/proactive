import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { teamMembers } from '@/lib/team-members';
import {
  getTeamMemberVisualConfig,
  TEAM_CARD_HEIGHT,
  TEAM_CARD_WIDTH,
  TEAM_TOOLTIP_OFFSET,
  TEAM_TOOLTIP_WIDTH,
} from '@/lib/team-showcase-config';

const DEFAULT_MEMBER_FILTER = 'grayscale(1) saturate(0) brightness(0.58) contrast(0.92)';
const ACTIVE_MEMBER_FILTER = 'grayscale(0) saturate(1.02) brightness(1) contrast(1.02)';

const TeamConnector = ({ side }: { side: 'left' | 'right' }) => {
  if (side === 'left') {
    return (
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-[4.25rem] h-[4.75rem] w-28 overflow-visible"
        viewBox="0 0 112 76"
        fill="none"
      >
        <path d="M111 2H56L1 74" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
        <circle cx="1" cy="74" r="3" fill="#6df2d4" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -left-28 top-[4.25rem] h-[4.75rem] w-28 overflow-visible"
      viewBox="0 0 112 76"
      fill="none"
    >
      <path d="M1 2H56L111 74" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
      <circle cx="111" cy="74" r="3" fill="#6df2d4" />
    </svg>
  );
};

const TeamShowcaseStrip = ({ className = '' }: { className?: string }) => {
  const { lang } = useI18n();
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      className={`relative overflow-hidden bg-[#2d2d2f] dark:bg-[#2d2d2f] ${className}`.trim()}
      aria-label="Team showcase"
    >
      <div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%), hsl(259, 43%, 51%))',
        }}
      />

      <div className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

        <div className="flex min-w-max items-end px-6 pb-0 pt-8 md:px-12" style={{ gap: '1.5rem' }}>
          {teamMembers.map((member) => {
            const visual = getTeamMemberVisualConfig(member.id);
            const isActive = activeId === member.id;
            const isMuted = activeId !== null && activeId !== member.id;
            const tooltipStyle =
              visual.tooltipSide === 'left'
                ? {
                    left: `-${TEAM_TOOLTIP_WIDTH + TEAM_TOOLTIP_OFFSET}px`,
                    top: '-2px',
                    width: `${TEAM_TOOLTIP_WIDTH}px`,
                  }
                : {
                    right: `-${TEAM_TOOLTIP_WIDTH + TEAM_TOOLTIP_OFFSET}px`,
                    top: '-2px',
                    width: `${TEAM_TOOLTIP_WIDTH}px`,
                  };

            return (
              <div
                key={member.id}
                className={`relative flex-shrink-0 overflow-visible ${isActive ? 'z-20' : 'z-10'}`}
                style={{ width: `${TEAM_CARD_WIDTH}px` }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`${member.name} team profile`}
                  className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  onMouseEnter={() => setActiveId(member.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(member.id)}
                  onBlur={() => setActiveId(null)}
                  onClick={() => setActiveId((current) => (current === member.id ? null : member.id))}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveId((current) => (current === member.id ? null : member.id));
                    }
                  }}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute z-30 pointer-events-none"
                        style={tooltipStyle}
                      >
                        <TeamConnector side={visual.tooltipSide} />
                        <div className="rounded-[1.35rem] border border-white/12 bg-[#101114]/94 px-6 py-5 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-[6px]">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-primary/85">
                            Proactive Team
                          </p>
                          <h4 className="mt-3 font-heading text-[2rem] font-semibold leading-none text-white">
                            {member.name}
                          </h4>
                          <div className="mt-4 h-px w-full bg-white/16" />
                          <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-primary/90">
                            {member.role[lang]}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white/72">{member.bio[lang]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative overflow-visible" style={{ height: `${TEAM_CARD_HEIGHT}px` }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom transition-[opacity,transform,filter] duration-300"
                      style={{
                        opacity: isActive ? 0 : isMuted ? 0.72 : 0.94,
                        transform: `scale(${visual.defaultScale})`,
                        filter: DEFAULT_MEMBER_FILTER,
                      }}
                    />
                    <img
                      src={member.hoverImage}
                      alt={`${member.name} active portrait`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom transition-[opacity,transform,filter] duration-300"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: `scale(${visual.hoverScale})`,
                        filter: ACTIVE_MEMBER_FILTER,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, hsl(259, 43%, 51%), hsl(181, 100%, 50%), hsl(166, 75%, 61%))',
        }}
      />
    </section>
  );
};

export default TeamShowcaseStrip;
