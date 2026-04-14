import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import marfImg from '@/assets/marf-project.png';
import misImg from '@/assets/mis-project.png';

type FeaturedProject = {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  color: string;
  accent: string;
};

const Projects = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const allProjects = [
    'Dilmuss', 'Bek Ota', 'Taxtakon', 'Aurus Pharm', 'Ahmad Tea', 'Baxtiyor Oila',
    'Asr Kimyo', 'MARF', 'Merit Chemicals', 'Najot Nur', 'OXUS University', 'MobetCo',
    'President Gifts', 'Sfera', 'Tima', 'Zahratun', "Za'faron", 'Impuls Tibbiyot Instituti',
    'Milestone IS', 'Damar', 'AQLY',
  ];

  const featured = [
    {
      title: 'MARF', category: 'Brending & Strategy', image: marfImg,
      description: lang === 'uz' ? "Bozorga yangi mahsulotni muvaffaqiyatli olib kirish uchun to'liq strategik asos yaratdik." : lang === 'ru' ? "Создали полную стратегическую основу для успешного вывода нового продукта на рынок." : "Created a complete strategic foundation for successfully launching a new product to market.",
      tags: ['Brand Strategy', 'Market Analysis', 'Brand Platform'],
      color: 'hsla(166, 75%, 61%, 0.08)', accent: 'hsl(166, 75%, 61%)',
    },
    {
      title: 'Milestone International School', category: 'Marketing & Brending', image: misImg,
      description: lang === 'uz' ? "Milestone International School uchun to'liq marketing va brending strategiyasini ishlab chiqdik." : lang === 'ru' ? "Разработали полную маркетинговую стратегию для MIS." : "Developed a complete marketing and branding strategy for MIS.",
      tags: ['Education', 'Branding', 'Visual Identity'],
      color: 'hsla(259, 43%, 51%, 0.08)', accent: 'hsl(259, 43%, 51%)',
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'hsla(166, 75%, 61%, 0.08)', color: 'hsl(166, 75%, 50%)', border: '1px solid hsla(166, 75%, 61%, 0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.projects.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-6 tracking-tight">{t.projects.title}</h2>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-16">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} isVisible={isVisible} viewProjectText={t.projects.viewProject} />
          ))}
        </div>

        {/* All projects grid */}
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-6 text-center">
            {lang === 'uz' ? 'Barcha loyihalar' : lang === 'ru' ? 'Все проекты' : 'All Projects'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allProjects.map((name, i) => (
              <motion.span key={name} initial={{ opacity: 0, scale: 0.9 }} animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.02 }}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                style={{ borderColor: 'hsla(166, 75%, 61%, 0.15)', background: 'hsla(166, 75%, 61%, 0.04)', color: 'hsl(var(--foreground))' }}>
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-14">
          <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-primary font-semibold border border-primary/20 hover:bg-primary/5 transition-all duration-300">
            {t.projects.viewAll}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCard = ({
  project,
  index,
  isVisible,
  viewProjectText,
}: {
  project: FeaturedProject;
  index: number;
  isVisible: boolean;
  viewProjectText: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={cardRef} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="group relative rounded-3xl overflow-hidden transition-all duration-500"
      style={{ background: project.color, border: `1px solid ${project.accent}20` }}>
      <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
        <div className="relative overflow-hidden">
          {project.image ? (
            <motion.div className="relative h-full min-h-[280px] md:min-h-[360px]" style={{ y: parallaxY }}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          ) : (
            <div className="w-full h-full min-h-[280px] flex items-center justify-center" style={{ background: project.color }}>
              <span className="text-7xl font-heading font-bold text-primary/15">{project.title[0]}</span>
            </div>
          )}
        </div>
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
          <span className="text-sm font-medium text-primary mb-3">{project.category}</span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/10">{tag}</span>
            ))}
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/btn">
            {viewProjectText}
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
