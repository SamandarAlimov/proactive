import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  { id: 4, name: 'Nilufar', image: member4, hoverImage: member4Hover, role: { uz: 'SMM mutaxassisi', en: 'SMM Specialist', ru: 'SMM-специалист' }, bio: { uz: "Ijtimoiy tarmoqlarda brendni rivojlantirish bo'yicha mutaxassisman.", en: "I specialize in brand development on social media.", ru: "Специализируюсь на развитии бренда в соцсетях." } },
  { id: 5, name: 'Anya', image: member5, hoverImage: member5Hover, role: { uz: 'Grafik dizayner', en: 'Graphic Designer', ru: 'Графический дизайнер' }, bio: { uz: "Menga shunchaki figma berishdi va ketishdi.", en: "They just gave me Figma and left.", ru: "Мне просто дали Figma и ушли." } },
  { id: 6, name: 'Jasur', image: member6, hoverImage: member6Hover, role: { uz: 'Video producer', en: 'Video Producer', ru: 'Видеопродюсер' }, bio: { uz: "Professional video kontentlar yaratish.", en: "Creating professional video content.", ru: "Создание профессионального видеоконтента." } },
  { id: 7, name: 'Madina', image: member7, hoverImage: member7Hover, role: { uz: 'Kontent yozuvchi', en: 'Content Writer', ru: 'Контент-райтер' }, bio: { uz: "So'z bilan sotish san'atini bilaman.", en: "I know the art of selling with words.", ru: "Знаю искусство продажи словом." } },
  { id: 8, name: 'Dilnoza', image: member8, hoverImage: member8Hover, role: { uz: 'PR mutaxassisi', en: 'PR Specialist', ru: 'PR-специалист' }, bio: { uz: "Brendning jamoatchilik bilan munosabatlarini boshqaraman.", en: "I manage brand public relations.", ru: "Управляю связями бренда с общественностью." } },
  { id: 9, name: 'Firdavs', image: member9, hoverImage: member9Hover, role: { uz: 'SEO mutaxassisi', en: 'SEO Specialist', ru: 'SEO-специалист' }, bio: { uz: "Qidiruv tizimlarida brendni birinchi o'ringa olib chiqish.", en: "Bringing the brand to the top of search engines.", ru: "Вывести бренд на первое место в поисковых." } },
  { id: 10, name: 'Kamola', image: member10, hoverImage: member10Hover, role: { uz: 'Biznes tahlilchi', en: 'Business Analyst', ru: 'Бизнес-аналитик' }, bio: { uz: "Ma'lumotlar tahlili va biznes jarayonlarni optimallashtirish.", en: "Data analysis and business process optimization.", ru: "Анализ данных и оптимизация бизнес-процессов." } },
];

const Team = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="team" className="relative overflow-hidden" ref={ref}>
      {/* Premium header */}
      <div className="relative py-20 md:py-24" style={{
        background: 'linear-gradient(160deg, hsla(202, 100%, 11%, 0.97) 0%, hsla(204, 47%, 28%, 0.95) 50%, hsla(259, 43%, 51%, 0.15) 100%)',
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 80% 20%, hsla(166, 75%, 61%, 0.08) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'hsla(166, 75%, 61%, 0.1)', color: 'hsl(166, 75%, 61%)', border: '1px solid hsla(166, 75%, 61%, 0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(166, 75%, 61%)' }} />
              {t.team.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mt-4">
              The Proactive<br /><span className="text-primary">jamoasi</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">{t.team.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Team cards */}
      <div className="relative" style={{ background: 'linear-gradient(180deg, hsla(202, 100%, 11%, 0.05) 0%, transparent 100%)' }}>
        <div className="h-1" style={{ background: 'linear-gradient(90deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%), hsl(259, 43%, 51%))' }} />

        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                <div key={member.id} className="relative flex-shrink-0 cursor-pointer overflow-visible" style={{ width: `${TEAM_CARD_WIDTH}px` }}
                  onMouseEnter={() => setHoveredId(member.id)} onMouseLeave={() => setHoveredId(null)}>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }} className="absolute z-30 pointer-events-none" style={tooltipStyle}>
                        <div className="rounded-lg p-4 border" style={{
                          background: 'hsla(202, 100%, 11%, 0.85)', backdropFilter: 'blur(12px)', borderColor: 'hsla(166, 75%, 61%, 0.2)',
                        }}>
                          <h4 className="font-heading font-bold text-white text-xl mb-1">{member.name}</h4>
                          <p className="text-primary text-xs font-medium mb-2">{member.role[lang]}</p>
                          <p className="text-white/70 text-sm leading-relaxed">{member.bio[lang]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative overflow-visible" style={{ height: `${TEAM_CARD_HEIGHT}px` }}>
                    <img src={member.image} alt={member.name} loading="lazy"
                      className="absolute inset-0 w-full h-full origin-bottom object-contain object-bottom transition-[opacity,transform] duration-300"
                      style={{ opacity: isHovered ? 0 : 1, transform: `scale(${visual.defaultScale})` }} />
                    <img src={member.hoverImage} alt={`${member.name} hover`} loading="lazy"
                      className="absolute inset-0 w-full h-full origin-bottom object-contain object-bottom transition-[opacity,transform] duration-300"
                      style={{ opacity: isHovered ? 1 : 0, transform: `scale(${visual.hoverScale})` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-1" style={{ background: 'linear-gradient(90deg, hsl(259, 43%, 51%), hsl(181, 100%, 50%), hsl(166, 75%, 61%))' }} />
      </div>
    </section>
  );
};

export default Team;
