import { motion } from 'framer-motion';
import { ArrowRight, Clock3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import SourceBackLink from '@/components/SourceBackLink';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';
import { revealViewport } from '@/lib/motion';
import { clientLogos, type ClientLogo } from '@/lib/client-logos';

type ProjectCard = {
  slug: string;
  title: string;
  category: string;
  logo: ClientLogo;
  description?: string;
  tags: string[];
};

const detailedProjectSlugs = new Set(['marf', 'milestone-is', 'aurus-pharm']);
const projectLogoAliases: Record<string, string> = {
  'Milestone International School': 'Milestone IS',
};
const projectLogoByName = new Map(clientLogos.map((client) => [client.name, client]));
const resolveProjectLogo = (title: string) => {
  const logoName = projectLogoAliases[title] || title;
  const logo = projectLogoByName.get(logoName);

  if (!logo) {
    return projectLogoByName.get('MARF') as ClientLogo;
  }

  return logo;
};

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
      logo: resolveProjectLogo('MARF'),
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
      logo: resolveProjectLogo('Milestone International School'),
      description:
        lang === 'uz'
          ? "Milestone International School uchun nol holatdan boshlab brand platforma, qabul strategiyasi, CRM va ichki sotuv-marketing tizimi qurildi."
          : lang === 'ru'
            ? 'Разработали полную стратегию для MIS.'
            : 'Built the brand platform, admissions strategy, CRM, and internal sales-marketing system for MIS from a zero stage.',
      tags: ['Education', 'Brand Platform', 'Admissions Strategy', 'CRM'],
    },
    { slug: 'ahmad-tea', title: 'Ahmad Tea', category: 'Marketing', logo: resolveProjectLogo('Ahmad Tea'), tags: ['Marketing Strategy', 'Branding'] },
    { slug: 'bek-ota', title: 'Bek Ota', category: 'Brending', logo: resolveProjectLogo('Bek Ota'), tags: ['Brand Platform', 'Visual Identity'] },
    {
      slug: 'aurus-pharm',
      title: 'Aurus Pharm',
      category: 'Brand Platform, Packaging & Marketing Operations',
      logo: resolveProjectLogo('Aurus Pharm'),
      description:
        lang === 'uz'
          ? "Aurus Pharm uchun BFQ bozori tahlili, qadoq dizayni, brend platformasi va marketing bo'limi ishini tizimlashtirish bo'yicha kompleks loyiha bajarildi."
          : lang === 'ru'
            ? 'Для Aurus Pharm выполнили комплексный проект: анализ рынка БФК, редизайн упаковки, бренд-платформа и систематизация маркетинговой функции.'
            : 'Delivered a full-scope project for Aurus Pharm covering BFQ market analysis, packaging redesign, brand platform development, and marketing operations systemization.',
      tags: ['Pharma', 'Brand Platform', 'Packaging Design', 'Marketing Operations'],
    },
    { slug: 'najot-nur', title: 'Najot Nur', category: 'Marketing & Brending', logo: resolveProjectLogo('Najot Nur'), tags: ['Education', 'Branding'] },
    { slug: 'merit-chemicals', title: 'Merit Chemicals', category: 'Strategy', logo: resolveProjectLogo('Merit Chemicals'), tags: ['Strategy', 'Market Analysis'] },
    { slug: 'zahratun', title: 'Zahratun', category: 'Marketing', logo: resolveProjectLogo('Zahratun Supermarket'), tags: ['Retail', 'Marketing'] },
    { slug: 'impuls', title: 'Impuls Tibbiyot Instituti', category: 'Marketing & Brending', logo: resolveProjectLogo('Impuls Tibbiyot Instituti'), tags: ['Education', 'Medical'] },
    { slug: 'damar', title: 'Damar', category: 'Brending', logo: resolveProjectLogo('Damar'), tags: ['Branding'] },
    { slug: 'aqly', title: 'AQLY', category: 'Strategy', logo: resolveProjectLogo('AQLY'), tags: ['Strategy'] },
    { slug: 'baxtiyor-oila', title: 'Baxtiyor Oila', category: 'Marketing', logo: resolveProjectLogo('Baxtiyor Oila'), tags: ['Marketing'] },
    { slug: 'asr-kimyo', title: 'Asr Kimyo', category: 'Strategy', logo: resolveProjectLogo('Asr Kimyo'), tags: ['Strategy', 'Branding'] },
    { slug: 'oxus-university', title: 'OXUS University', category: 'Marketing & Brending', logo: resolveProjectLogo('OXUS University'), tags: ['Education'] },
    { slug: 'mobetco', title: 'MobetCo', category: 'Marketing', logo: resolveProjectLogo('MobetCo'), tags: ['Marketing'] },
    { slug: 'president-gifts', title: 'President Gifts', category: 'Brending', logo: resolveProjectLogo('President Gifts'), tags: ['Branding'] },
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
        <div
          className="relative flex h-48 items-center justify-center overflow-hidden p-5"
          style={{
            background:
              'radial-gradient(circle at 50% 28%, hsla(166, 75%, 61%, 0.16), transparent 46%), linear-gradient(135deg, hsla(202, 100%, 11%, 0.94), hsla(204, 47%, 28%, 0.9))',
          }}
        >
          {!hasDetailedCase && (
            <div className="absolute left-4 right-4 top-4 z-10 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-secondary/75 px-3 py-1.5 text-center text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur sm:left-auto sm:right-4">
              <Clock3 className="h-3.5 w-3.5" />
              {comingSoonLabel}
            </div>
          )}
          <div
            className={`relative flex h-full w-full items-center justify-center rounded-[1.35rem] border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_18px_50px_rgba(0,0,0,0.18)] transition-transform duration-700 ${
              hasDetailedCase ? 'group-hover:scale-[1.02]' : ''
            } ${
              project.logo.heroTone === 'dark'
                ? 'border-white/10 bg-secondary'
                : 'border-white/70 bg-white/[0.92]'
            }`}
          >
            <div className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_top_right,rgba(82,230,200,0.12),transparent_44%)]" />
            <img
              src={project.logo.logo}
              alt={`${project.title} logo`}
              loading="lazy"
              decoding="async"
              className="relative max-h-24 w-full object-contain drop-shadow-[0_10px_24px_rgba(0,37,58,0.14)]"
            />
          </div>
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
