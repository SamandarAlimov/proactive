import { motion } from 'framer-motion';
import { ArrowRight, Clock3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import SourceBackLink from '@/components/SourceBackLink';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';
import { revealViewport } from '@/lib/motion';
import marfImg from '@/assets/marf-project.png';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import aurusHero from '@/assets/projects/aurus/aurus-hero.webp';
import milestoneHero from '@/assets/projects/milestone/milestone-hero.webp';

type ProjectCard = {
  slug: string;
  title: string;
  category: string;
  image: string | null;
  description?: string;
  tags: string[];
};

const detailedProjectSlugs = new Set(['marf', 'milestone-is', 'aurus-pharm']);

const ProjectsPage = () => {
  const { t, lang } = useI18n();
  const location = useLocation();
  const seoDescription =
    lang === 'uz'
      ? "Proactive portfolio sahifasi: brend platformasi, marketing strategiyasi, go-to-market va tizimli o'sish case study'lari."
      : lang === 'ru'
        ? 'Portfolio Proactive: keisy po brand-platforme, marketingovoy strategii, go-to-market i sistemnomu rostu biznesa.'
        : 'The Proactive portfolio featuring brand platform, marketing strategy, go-to-market, and business growth case studies.';

  const projects: ProjectCard[] = [
    {
      slug: 'marf',
      title: 'MARF',
      category: 'Product Market Fit & Brand Platform',
      image: marfImg,
      description:
        lang === 'uz'
          ? "MARF uchun maktab formasi bozori yo'nalishida product-market fit, brend platformasi va bozorga chiqish asosi ishlab chiqildi."
          : lang === 'ru'
            ? 'Для MARF разработали product-market fit, бренд-платформу и основу для выхода на рынок школьной формы.'
            : 'Built the product-market fit, brand platform, and market-entry foundation for MARF in the school uniform direction.',
      tags: ['Product Market Fit', 'Brand Platform', 'Go-To-Market', 'School Uniforms'],
    },
    {
      slug: 'milestone-is',
      title: 'Milestone International School',
      category: 'Go-To-Market, Brand Platform & Admissions System',
      image: milestoneHero,
      description:
        lang === 'uz'
          ? "Milestone International School uchun nol holatdan boshlab brand platforma, qabul strategiyasi, CRM va ichki sotuv-marketing tizimi qurildi."
          : lang === 'ru'
            ? 'Разработали полную стратегию для MIS.'
            : 'Built the brand platform, admissions strategy, CRM, and internal sales-marketing system for MIS from a zero stage.',
      tags: ['Education', 'Brand Platform', 'Admissions Strategy', 'CRM'],
    },
    { slug: 'ahmad-tea', title: 'Ahmad Tea', category: 'Marketing', image: null, tags: ['Marketing Strategy', 'Branding'] },
    { slug: 'bek-ota', title: 'Bek Ota', category: 'Brending', image: null, tags: ['Brand Platform', 'Visual Identity'] },
    {
      slug: 'aurus-pharm',
      title: 'Aurus Pharm',
      category: 'Brand Platform, Packaging & Marketing Operations',
      image: aurusHero,
      description:
        lang === 'uz'
          ? "Aurus Pharm uchun BFQ bozori tahlili, qadoq dizayni, brend platformasi va marketing bo'limi ishini tizimlashtirish bo'yicha kompleks loyiha bajarildi."
          : lang === 'ru'
            ? 'Для Aurus Pharm выполнили комплексный проект: анализ рынка БФК, редизайн упаковки, бренд-платформа и систематизация маркетинговой функции.'
            : 'Delivered a full-scope project for Aurus Pharm covering BFQ market analysis, packaging redesign, brand platform development, and marketing operations systemization.',
      tags: ['Pharma', 'Brand Platform', 'Packaging Design', 'Marketing Operations'],
    },
    { slug: 'najot-nur', title: 'Najot Nur', category: 'Marketing & Brending', image: null, tags: ['Education', 'Branding'] },
    { slug: 'merit-chemicals', title: 'Merit Chemicals', category: 'Strategy', image: null, tags: ['Strategy', 'Market Analysis'] },
    { slug: 'zahratun', title: 'Zahratun', category: 'Marketing', image: null, tags: ['Retail', 'Marketing'] },
    { slug: 'impuls', title: 'Impuls Tibbiyot Instituti', category: 'Marketing & Brending', image: null, tags: ['Education', 'Medical'] },
    { slug: 'damar', title: 'Damar', category: 'Brending', image: null, tags: ['Branding'] },
    { slug: 'aqly', title: 'AQLY', category: 'Strategy', image: null, tags: ['Strategy'] },
    { slug: 'baxtiyor-oila', title: 'Baxtiyor Oila', category: 'Marketing', image: null, tags: ['Marketing'] },
    { slug: 'asr-kimyo', title: 'Asr Kimyo', category: 'Strategy', image: null, tags: ['Strategy', 'Branding'] },
    { slug: 'oxus-university', title: 'OXUS University', category: 'Marketing & Brending', image: null, tags: ['Education'] },
    { slug: 'mobetco', title: 'MobetCo', category: 'Marketing', image: null, tags: ['Marketing'] },
    { slug: 'president-gifts', title: 'President Gifts', category: 'Brending', image: null, tags: ['Branding'] },
  ];
  const projectDetailState = {
    from: `${location.pathname}${location.search}${location.hash}`,
    fromLabel: t.projects.viewAll,
  };
  const comingSoonLabel =
    lang === 'uz' ? "Ma'lumot tayyorlanmoqda" : lang === 'ru' ? 'Материалы готовятся' : 'Details coming soon';
  const comingSoonDescription =
    lang === 'uz'
      ? "Bu loyiha bo'yicha batafsil case materiali hali yig'ilmoqda."
      : lang === 'ru'
        ? 'Подробный кейс по этому проекту пока готовится.'
        : 'A detailed case study for this project is still being prepared.';
  const detailedProjects = projects.filter((project) => detailedProjectSlugs.has(project.slug));
  const pendingProjects = projects.filter((project) => !detailedProjectSlugs.has(project.slug));
  const orderedProjects = [...detailedProjects, ...pendingProjects];

  const renderProjectCard = (project: ProjectCard, index: number) => {
    const hasDetailedCase = detailedProjectSlugs.has(project.slug);
    const card = (
      <div
        className={`overflow-hidden rounded-2xl glass-card-light transition-all duration-500 ${
          hasDetailedCase ? 'hover:shadow-xl' : 'cursor-default'
        }`}
      >
        <div className="relative h-48 overflow-hidden">
          {!hasDetailedCase && (
            <div className="absolute left-4 right-4 top-4 z-10 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-secondary/75 px-3 py-1.5 text-center text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur sm:left-auto sm:right-4">
              <Clock3 className="h-3.5 w-3.5" />
              {comingSoonLabel}
            </div>
          )}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className={`h-full w-full object-cover transition-transform duration-700 ${
                hasDetailedCase ? 'group-hover:scale-[1.025]' : ''
              }`}
            />
          ) : (
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, hsla(204, 47%, 28%, 0.94) 0%, hsla(202, 100%, 11%, 0.98) 100%)',
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(82,230,200,0.18),transparent_48%)]" />
              <div className="relative flex flex-col items-center gap-3 text-center">
                <img
                  src={proactiveLogo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 rounded-2xl object-cover opacity-90 shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                />
                <span className="max-w-[13rem] text-sm font-heading font-semibold tracking-wide text-white/90">
                  {project.title}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="min-w-0 p-5 sm:p-6">
          <span className="mb-2 block text-xs font-medium text-primary">{project.category}</span>
          <h3
            className={`mb-3 text-lg font-heading font-bold text-foreground transition-colors ${
              hasDetailedCase ? 'group-hover:text-primary' : ''
            }`}
          >
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description || comingSoonDescription}
          </p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium leading-relaxed text-primary">
                {tag}
              </span>
            ))}
          </div>
          {hasDetailedCase ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
              {t.projects.viewProject} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
              {comingSoonLabel} <Clock3 className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    );

    return (
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{ delay: 0.05 * index }}
        className="group"
      >
        {hasDetailedCase ? (
          <Link to={`/projects/${project.slug}`} state={projectDetailState} className="block">
            {card}
          </Link>
        ) : (
          <article aria-disabled="true">{card}</article>
        )}
      </motion.div>
    );
  };

  return (
    <PageLayout>
      <SEO
        title={t.projects.title}
        description={seoDescription}
        lang={lang}
        path="/projects"
        keywords={[
          'Proactive portfolio',
          'marketing case studies',
          'brand platform',
          'marketing strategy',
          'go-to-market',
          'Tashkent marketing agency',
          t.projects.title,
        ]}
        structuredData={[
          createWebPageSchema({
            title: t.projects.title,
            description: seoDescription,
            lang,
            path: '/projects',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.projects.title, path: '/projects' },
          ]),
        ]}
      />
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl">
          <SourceBackLink variant="dark" />
          <div className="text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.projects.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-heading font-bold md:text-6xl"
          >
            {t.projects.title}
          </motion.h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orderedProjects.map(renderProjectCard)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
