import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { useI18n } from '@/lib/i18n';
import { teamMembers } from '@/lib/team-members';
import {
  getTeamMemberVisualConfig,
  TEAM_CARD_HEIGHT,
  TEAM_CARD_WIDTH,
  TEAM_TOOLTIP_OFFSET,
  TEAM_TOOLTIP_WIDTH,
} from '@/lib/team-showcase-config';

const panelCopy = {
  uz: {
    eyebrow: 'Jamoa profili',
    roleLabel: 'Asosiy rol',
  },
  en: {
    eyebrow: 'Team profile',
    roleLabel: 'Primary role',
  },
  ru: {
    eyebrow: 'Профиль команды',
    roleLabel: 'Основная роль',
  },
} as const;

const TeamConnector = ({ side, isDark }: { side: 'left' | 'right'; isDark: boolean }) => {
  const stroke = isDark ? 'rgba(255,255,255,0.38)' : 'rgba(38,79,107,0.28)';
  const dot = '#52E6C8';

  if (side === 'left') {
    return (
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-[4.4rem] h-[4.75rem] w-28 overflow-visible"
        viewBox="0 0 112 76"
        fill="none"
      >
        <path d="M111 2H56L1 74" stroke={stroke} strokeWidth="1.3" />
        <circle cx="1" cy="74" r="3.1" fill={dot} />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -left-28 top-[4.4rem] h-[4.75rem] w-28 overflow-visible"
      viewBox="0 0 112 76"
      fill="none"
    >
      <path d="M1 2H56L111 74" stroke={stroke} strokeWidth="1.3" />
      <circle cx="111" cy="74" r="3.1" fill={dot} />
    </svg>
  );
};

const TeamShowcaseStrip = ({ className = '' }: { className?: string }) => {
  const { lang } = useI18n();
  const { resolvedTheme } = useTheme();
  const [activeId, setActiveId] = useState<number | null>(null);

  const isDark = resolvedTheme === 'dark';
  const copy = panelCopy[lang];

  const tone = useMemo(
    () => ({
      sectionClass: isDark
        ? 'bg-[#2d2d2f] text-white'
        : 'bg-[linear-gradient(180deg,#f7fafc_0%,#edf3f7_100%)] text-secondary',
      overlayClass: isDark
        ? 'bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.06),transparent_32%)]'
        : 'bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(38,79,107,0.05),transparent_26%)]',
      defaultFilter: isDark
        ? 'grayscale(1) saturate(0) brightness(0.58) contrast(0.92)'
        : 'grayscale(1) saturate(0) brightness(0.74) contrast(1.02)',
      activeFilter: 'grayscale(0) saturate(1.02) brightness(1) contrast(1.02)',
      tooltipClass: isDark
        ? 'border-white/12 bg-[#101114]/94 text-white shadow-[0_32px_80px_rgba(0,0,0,0.45)]'
        : 'border-[#264F6B]/10 bg-white/96 text-secondary shadow-[0_24px_72px_rgba(38,79,107,0.16)]',
      eyebrowClass: isDark ? 'text-primary/88' : 'text-secondary/55',
      nameClass: isDark ? 'text-white' : 'text-secondary',
      dividerClass: isDark ? 'bg-white/14' : 'bg-secondary/10',
      roleLabelClass: isDark ? 'text-white/46' : 'text-secondary/45',
      roleClass: isDark ? 'text-primary/92' : 'text-secondary',
      bioClass: isDark ? 'text-white/72' : 'text-secondary/72',
      idleOpacity: isDark ? 0.94 : 0.96,
      mutedOpacity: isDark ? 0.72 : 0.68,
    }),
    [isDark],
  );

  return (
    <section
      className={`relative overflow-hidden ${tone.sectionClass} ${className}`.trim()}
      aria-label="Team showcase"
    >
      <div className={`pointer-events-none absolute inset-0 ${tone.overlayClass}`} />

      <div
        className="relative h-1"
        style={{
          background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%), hsl(259, 43%, 51%))',
        }}
      />

      <div className="relative overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                        <TeamConnector side={visual.tooltipSide} isDark={isDark} />
                        <div className={`rounded-[1.45rem] border px-6 py-5 backdrop-blur-[8px] ${tone.tooltipClass}`}>
                          <p className={`font-brand text-[0.62rem] font-semibold uppercase tracking-[0.34em] ${tone.eyebrowClass}`}>
                            {copy.eyebrow}
                          </p>
                          <h4 className={`mt-3 font-heading text-[2rem] font-semibold leading-none ${tone.nameClass}`}>
                            {member.name}
                          </h4>
                          <div className={`mt-4 h-px w-full ${tone.dividerClass}`} />
                          <div className="mt-4 space-y-1.5">
                            <p className={`font-brand text-[0.62rem] font-semibold uppercase tracking-[0.3em] ${tone.roleLabelClass}`}>
                              {copy.roleLabel}
                            </p>
                            <p className={`text-[0.78rem] font-semibold uppercase tracking-[0.22em] ${tone.roleClass}`}>
                              {member.role[lang]}
                            </p>
                          </div>
                          <p className={`mt-3 text-sm leading-7 ${tone.bioClass}`}>{member.bio[lang]}</p>
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
                        opacity: isActive ? 0 : isMuted ? tone.mutedOpacity : tone.idleOpacity,
                        transform: `scale(${visual.defaultScale})`,
                        filter: tone.defaultFilter,
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
                        filter: tone.activeFilter,
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
        className="relative h-1"
        style={{
          background: 'linear-gradient(90deg, hsl(259, 43%, 51%), hsl(181, 100%, 50%), hsl(166, 75%, 61%))',
        }}
      />
    </section>
  );
};

export default TeamShowcaseStrip;
