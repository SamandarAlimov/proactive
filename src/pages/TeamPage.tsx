import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Send } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import founderHabibullo from '@/assets/founder-habibullo.png';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';
import {
  getTeamMemberVisualConfig,
  TEAM_CARD_HEIGHT,
  TEAM_CARD_WIDTH,
  TEAM_TOOLTIP_OFFSET,
  TEAM_TOOLTIP_WIDTH,
} from '@/lib/team-showcase-config';

import member1 from '@/assets/team/member-1.png';
import member2 from '@/assets/team/member-2.png';
import member3 from '@/assets/team/member-3.png';
import member4 from '@/assets/team/member-4.png';
import member5 from '@/assets/team/member-5.png';
import member6 from '@/assets/team/member-6.png';
import member7 from '@/assets/team/member-7.png';
import member8 from '@/assets/team/member-8.png';
import member9 from '@/assets/team/member-9.png';
import member10 from '@/assets/team/member-10.png';

import member1Hover from '@/assets/team/member-1-hover.png';
import member2Hover from '@/assets/team/member-2-hover.png';
import member3Hover from '@/assets/team/member-3-hover.png';
import member4Hover from '@/assets/team/member-4-hover.png';
import member5Hover from '@/assets/team/member-5-hover.png';
import member6Hover from '@/assets/team/member-6-hover.png';
import member7Hover from '@/assets/team/member-7-hover.png';
import member8Hover from '@/assets/team/member-8-hover.png';
import member9Hover from '@/assets/team/member-9-hover.png';
import member10Hover from '@/assets/team/member-10-hover.png';

const teamMembers = [
  { id: 1, name: 'Aziz', image: member1, hoverImage: member1Hover, role: { uz: 'Loyiha menejeri', en: 'Project Manager', ru: 'Проект-менеджер' }, bio: { uz: "Har bir loyihaning muvaffaqiyatli yakunlanishini ta'minlayman.", en: "I ensure every project is completed successfully.", ru: "Обеспечиваю успешное завершение каждого проекта." } },
  { id: 2, name: 'Sardor', image: member2, hoverImage: member2Hover, role: { uz: 'Marketing strateg', en: 'Marketing Strategist', ru: 'Маркетинг-стратег' }, bio: { uz: "Bozor tahlili va strategiyalar ishlab chiqish — mening kuchli tomonim.", en: "Market analysis and strategy development is my strong suit.", ru: "Анализ рынка и разработка стратегий — моя сильная сторона." } },
  { id: 3, name: 'Bekzod', image: member3, hoverImage: member3Hover, role: { uz: 'Kreativ direktor', en: 'Creative Director', ru: 'Креативный директор' }, bio: { uz: "Kreativ g'oyalarni hayotga tatbiq etish — mening ishim.", en: "Bringing creative ideas to life is my job.", ru: "Воплощение креативных идей в жизнь — моя работа." } },
  { id: 4, name: 'Nilufar', image: member4, hoverImage: member4Hover, role: { uz: 'SMM mutaxassisi', en: 'SMM Specialist', ru: 'SMM-специалист' }, bio: { uz: "Ijtimoiy tarmoqlarda brendni rivojlantirish bo'yicha mutaxassisman.", en: "I specialize in brand development on social media.", ru: "Специализируюсь на развитии бренда в социальных сетях." } },
  { id: 5, name: 'Anya', image: member5, hoverImage: member5Hover, role: { uz: 'Grafik dizayner', en: 'Graphic Designer', ru: 'Графический дизайнер' }, bio: { uz: "Menga shunchaki figma berishdi va ketishdi. Hech kim so'ramadi, lekin men buni chiroyli qilaman.", en: "They just gave me Figma and left. Nobody asked, but I make it beautiful.", ru: "Мне просто дали Figma и ушли. Никто не спрашивал, но я делаю это красиво." } },
  { id: 6, name: 'Jasur', image: member6, hoverImage: member6Hover, role: { uz: 'Video producer', en: 'Video Producer', ru: 'Видеопродюсер' }, bio: { uz: "Professional video kontentlar yaratish — mening ishim.", en: "Creating professional video content is my job.", ru: "Создание профессионального видеоконтента — моя работа." } },
  { id: 7, name: 'Madina', image: member7, hoverImage: member7Hover, role: { uz: 'Kontent yozuvchi', en: 'Content Writer', ru: 'Контент-райтер' }, bio: { uz: "So'z bilan sotish san'atini bilaman.", en: "I know the art of selling with words.", ru: "Знаю искусство продажи словом." } },
  { id: 8, name: 'Dilnoza', image: member8, hoverImage: member8Hover, role: { uz: 'PR mutaxassisi', en: 'PR Specialist', ru: 'PR-специалист' }, bio: { uz: "Brendning jamoatchilik bilan munosabatlarini boshqaraman.", en: "I manage brand public relations.", ru: "Управляю связями бренда с общественностью." } },
  { id: 9, name: 'Firdavs', image: member9, hoverImage: member9Hover, role: { uz: 'SEO mutaxassisi', en: 'SEO Specialist', ru: 'SEO-специалист' }, bio: { uz: "Qidiruv tizimlarida brendni birinchi o'ringa olib chiqish — mening maqsadim.", en: "Bringing the brand to the top of search engines is my goal.", ru: "Вывести бренд на первое место в поисковых системах — моя цель." } },
  { id: 10, name: 'Kamola', image: member10, hoverImage: member10Hover, role: { uz: 'Biznes tahlilchi', en: 'Business Analyst', ru: 'Бизнес-аналитик' }, bio: { uz: "Ma'lumotlar tahlili va biznes jarayonlarni optimallashtirish bo'yicha mutaxassisman.", en: "I specialize in data analysis and business process optimization.", ru: "Специализируюсь на анализе данных и оптимизации бизнес-процессов." } },
];

const TeamPage = () => {
  const { t, lang } = useI18n();
  const founderLang = (lang in founderProfile.intro ? lang : 'uz') as FounderLang;
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <div className="bg-secondary pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-secondary-foreground leading-tight">
            The Proactive jamoasi
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
            {t.team.description}
          </motion.p>
        </div>
      </div>

      <section className="bg-background py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-[#f3efe9] dark:bg-[#141414]">
                <img src={founderHabibullo} alt={founderProfile.name} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {founderProfile.intro[founderLang]}
                </span>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  {founderProfile.name}
                </h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {founderProfile.role[founderLang]}
                </p>

                <FounderSpecialtyChips tags={founderProfile.tags[founderLang]} className="mt-6" />

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderProfile.summary[founderLang]}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={founderProfile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    t.me/habibullo_sadulloyev
                  </a>
                  <a
                    href={founderProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    @habibullo_sadulloyev
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsla(202, 100%, 11%, 0.05) 0%, transparent 100%)',
        }}
      >
        <div
          className="h-1"
          style={{
            background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%), hsl(259, 43%, 51%))',
          }}
        />

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex items-end min-w-max px-6 md:px-12 pt-8 pb-0" style={{ gap: '1.5rem' }}>
            {teamMembers.map((member) => {
              const isHovered = hoveredId === member.id;
              const visual = getTeamMemberVisualConfig(member.id);
              const tooltipStyle =
                visual.tooltipSide === 'left'
                  ? { left: `-${TEAM_TOOLTIP_WIDTH + TEAM_TOOLTIP_OFFSET}px`, top: '-20px', width: `${TEAM_TOOLTIP_WIDTH}px` }
                  : { right: `-${TEAM_TOOLTIP_WIDTH + TEAM_TOOLTIP_OFFSET}px`, top: '-20px', width: `${TEAM_TOOLTIP_WIDTH}px` };
              return (
                <div
                  key={member.id}
                  className="relative flex-shrink-0 cursor-pointer overflow-visible"
                  style={{ width: `${TEAM_CARD_WIDTH}px` }}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-30 pointer-events-none"
                        style={tooltipStyle}
                      >
                        <div
                          className="rounded-lg border p-4"
                          style={{
                            background: 'hsla(202, 100%, 11%, 0.85)',
                            backdropFilter: 'blur(12px)',
                            borderColor: 'hsla(166, 75%, 61%, 0.2)',
                          }}
                        >
                          <h4 className="mb-1 font-heading text-xl font-bold text-white">{member.name}</h4>
                          <p className="mb-2 text-xs font-medium text-primary">{member.role[lang]}</p>
                          <p className="text-sm leading-relaxed text-white/70">{member.bio[lang]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative overflow-visible" style={{ height: `${TEAM_CARD_HEIGHT}px` }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom transition-[opacity,transform] duration-300"
                      style={{ opacity: isHovered ? 0 : 1, transform: `scale(${visual.defaultScale})` }}
                    />
                    <img
                      src={member.hoverImage}
                      alt={`${member.name} hover`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full origin-bottom object-contain object-bottom transition-[opacity,transform] duration-300"
                      style={{ opacity: isHovered ? 1 : 0, transform: `scale(${visual.hoverScale})` }}
                    />
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
    </PageLayout>
  );
};

export default TeamPage;
