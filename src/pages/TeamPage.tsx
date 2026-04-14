import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';

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

const CARD_WIDTH = 200;
const CARD_HEIGHT = 400;

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

      <div className="bg-muted-foreground/20 dark:bg-muted/30 relative">
        <div className="h-1 bg-primary w-full" />
        <div
          ref={scrollRef}
          className="overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex items-end min-w-max px-6 md:px-12 pt-8 pb-0" style={{ gap: '1.5rem' }}>
            {teamMembers.map((member) => {
              const isHovered = hoveredId === member.id;
              return (
                <div
                  key={member.id}
                  className="relative flex-shrink-0 cursor-pointer"
                  style={{ width: `${CARD_WIDTH}px` }}
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
                        style={{ right: '-220px', top: '-20px', width: '200px' }}
                      >
                        <svg className="absolute" style={{ left: '-60px', top: '40px', width: '70px', height: '60px' }} viewBox="0 0 70 60" fill="none">
                          <line x1="70" y1="0" x2="0" y2="60" stroke="white" strokeWidth="1.5" />
                        </svg>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <h4 className="font-heading font-bold text-white text-xl mb-1">{member.name}</h4>
                          <p className="text-white/80 text-sm leading-relaxed">{member.role[lang]}, {member.bio[lang]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative" style={{ height: `${CARD_HEIGHT}px` }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain object-bottom transition-opacity duration-300"
                      style={{ opacity: isHovered ? 0 : 1 }}
                    />
                    <img
                      src={member.hoverImage}
                      alt={`${member.name} hover`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain object-bottom transition-opacity duration-300"
                      style={{ opacity: isHovered ? 1 : 0 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-1 bg-primary w-full" />
      </div>
    </PageLayout>
  );
};

export default TeamPage;
