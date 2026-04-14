import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import marfImg from '@/assets/marf-project.png';
import milestoneHero from '@/assets/projects/milestone/milestone-hero.webp';
import { clientList } from '@/lib/client-list';

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

  const allProjects = clientList;

  const featured: FeaturedProject[] = [
    {
      title: 'MARF',
      category: 'Product Market Fit & Brand Platform',
      image: marfImg,
      description:
        lang === 'uz'
          ? "MARF uchun maktab formasi bozori yo'nalishida product-market fit, brend platformasi va bozorga chiqish asosi ishlab chiqildi."
          : lang === 'ru'
            ? 'Для MARF разработали product-market fit, бренд-платформу и основу для выхода на рынок школьной формы.'
            : 'Built the product-market fit, brand platform, and market-entry foundation for MARF in the school uniform direction.',
      tags: ['Product Market Fit', 'Brand Platform', 'Go-To-Market'],
      color: 'hsla(166, 75%, 61%, 0.08)',
      accent: 'hsl(166, 75%, 61%)',
    },
    {
      title: 'Milestone International School',
      category: 'Go-To-Market, Brand Platform & Admissions System',
      image: milestoneHero,
      description:
        lang === 'uz'
          ? "Milestone International School uchun nol holatdan boshlab brand platforma, qabul strategiyasi, CRM va ichki sotuv-marketing tizimi qurildi."
          : lang === 'ru'
            ? 'Разработали полную маркетинговую стратегию для MIS.'
            : 'Built the brand platform, admissions strategy, CRM, and internal sales-marketing system for MIS from a zero stage.',
      tags: ['Education', 'Brand Platform', 'Admissions Strategy'],
      color: 'hsla(259, 43%, 51%, 0.08)',
      accent: 'hsl(259, 43%, 51%)',
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsla(166, 75%, 61%, 0.08)',
              color: 'hsl(166, 75%, 50%)',
              border: '1px solid hsla(166, 75%, 61%, 0.15)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.projects.subtitle}
          </span>
          <h2 className="mt-6 text-3xl font-heading font-bold tracking-tight text-foreground md:text-5xl">{t.projects.title}</h2>
        </motion.div>

        <div className="mb-16 space-y-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} isVisible={isVisible} viewProjectText={t.projects.viewProject} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          <h3 className="mb-6 text-center text-xl font-heading font-bold text-foreground">
            {lang === 'uz' ? 'Barcha loyihalar' : lang === 'ru' ? 'Все проекты' : 'All Projects'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allProjects.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.02 }}
                className="cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'hsla(166, 75%, 61%, 0.15)',
                  background: 'hsla(166, 75%, 61%, 0.04)',
                  color: 'hsl(var(--foreground))',
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-14 text-center">
          <Link to="/projects" className="group inline-flex items-center gap-2 rounded-xl border border-primary/20 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary/5">
            {t.projects.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="group relative overflow-hidden rounded-3xl transition-all duration-500"
      style={{ background: project.color, border: `1px solid ${project.accent}20` }}
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
        <div className="relative overflow-hidden">
          <motion.div className="relative h-full min-h-[280px] md:min-h-[360px]" style={{ y: parallaxY }}>
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </motion.div>
        </div>

        <div className={`flex flex-col justify-center p-8 lg:p-12 ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
          <span className="mb-3 text-sm font-medium text-primary">{project.category}</span>
          <h3 className="mb-4 text-2xl font-heading font-bold text-foreground md:text-3xl">{project.title}</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
          <Link to={`/projects/${project.title === 'MARF' ? 'marf' : 'milestone-is'}`} className="group/btn inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-3">
            {viewProjectText}
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
