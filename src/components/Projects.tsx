import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import marfLogo from '@/assets/clients/marf.png';
import milestoneLogo from '@/assets/clients/milestone.png';
import { createMainSectionState } from '@/lib/source-navigation';

type FeaturedProject = {
  title: string;
  category: string;
  logo: string;
  logoClassName?: string;
  description: string;
  tags: string[];
  color: string;
  accent: string;
};

const Projects = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const location = useLocation();

  const projectsPageState = createMainSectionState('projects', lang);
  const projectDetailState = {
    from: `${location.pathname}${location.search}#projects`,
    fromLabel: lang === 'uz' ? 'Asosiy sahifa' : lang === 'ru' ? 'Главная страница' : 'Home page',
  };

  const featured: FeaturedProject[] = [
    {
      title: 'MARF',
      category: 'Product Market Fit & Brand Platform',
      logo: marfLogo,
      logoClassName: 'max-h-24',
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
      logo: milestoneLogo,
      logoClassName: 'max-h-32',
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
    <section id="projects" className="section-deferred relative scroll-mt-24 overflow-hidden py-24 md:py-32" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          {...getMotionProps({ distance: 30, duration: 0.6 })}
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

        <div className="space-y-8">
          {featured.map((project, i) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={i}
              motionProps={getMotionProps({ distance: 40, delay: 0.15 * i, duration: 0.6 })}
              state={projectDetailState}
              viewProjectText={t.projects.viewProject}
            />
          ))}
        </div>

        <motion.div {...getMotionProps({ distance: 18, delay: 0.5 })} className="mt-12 text-center">
          <Link
            to="/projects"
            state={projectsPageState}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
          >
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
  motionProps,
  state,
  viewProjectText,
}: {
  project: FeaturedProject;
  index: number;
  motionProps: React.ComponentProps<typeof motion.div>;
  state: { from: string; fromLabel: string };
  viewProjectText: string;
}) => {
  return (
    <motion.div
      {...motionProps}
      className="group relative min-w-0 overflow-hidden rounded-[1.5rem] transition-all duration-500 sm:rounded-3xl"
      style={{ background: project.color, border: `1px solid ${project.accent}20` }}
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
        <div className="relative overflow-hidden">
          <div
            className="relative flex h-full min-h-[240px] items-center justify-center overflow-hidden p-6 sm:min-h-[280px] sm:p-8 md:min-h-[360px]"
            style={{
              background:
                'radial-gradient(circle at 50% 30%, hsla(166, 75%, 61%, 0.18), transparent 48%), linear-gradient(135deg, hsla(202, 100%, 11%, 0.94), hsla(204, 47%, 28%, 0.9))',
            }}
          >
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="relative flex aspect-[16/10] w-full max-w-[26rem] items-center justify-center rounded-[1.75rem] border border-white/60 bg-white/90 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-transform duration-700 group-hover:scale-[1.015]">
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.14),transparent_42%)]" />
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                loading="lazy"
                decoding="async"
                className={`relative w-full object-contain drop-shadow-[0_12px_28px_rgba(0,37,58,0.14)] ${project.logoClassName || 'max-h-28'}`}
              />
            </div>
          </div>
        </div>

        <div className={`flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-12 ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
          <span className="mb-3 text-sm font-medium leading-relaxed text-primary">{project.category}</span>
          <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">{project.title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs font-medium leading-relaxed text-primary">
                {tag}
              </span>
            ))}
          </div>
          <Link
            to={`/projects/${project.title === 'MARF' ? 'marf' : 'milestone-is'}`}
            state={state}
            className="group/btn inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-3"
          >
            {viewProjectText}
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
