import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';
import marfImg from '@/assets/marf-project.png';
import aurusHero from '@/assets/projects/aurus/aurus-hero.webp';
import milestoneHero from '@/assets/projects/milestone/milestone-hero.webp';

const ProjectsPage = () => {
  const { t, lang } = useI18n();
  const seoDescription =
    lang === 'uz'
      ? "Proactive portfolio sahifasi: brend platformasi, marketing strategiyasi, go-to-market va tizimli o'sish case study'lari."
      : lang === 'ru'
        ? 'Portfolio Proactive: keisy po brand-platforme, marketingovoy strategii, go-to-market i sistemnomu rostu biznesa.'
        : 'The Proactive portfolio featuring brand platform, marketing strategy, go-to-market, and business growth case studies.';

  const projects = [
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
    { slug: 'dilmuss', title: 'Dilmuss', category: 'Brending', image: null, tags: ['Branding', 'Visual Identity'] },
    { slug: 'taxtakon', title: 'Taxtakon', category: 'Marketing', image: null, tags: ['Marketing Strategy'] },
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
    { slug: 'sfera', title: 'Sfera', category: 'Marketing', image: null, tags: ['Marketing'] },
    { slug: 'tima', title: 'Tima', category: 'Brending', image: null, tags: ['Branding'] },
    { slug: 'zafaron', title: "Za'faron", category: 'Marketing', image: null, tags: ['Marketing', 'Strategy'] },
  ];

  return (
    <PageLayout>
      <SEO
        title={t.projects.title}
        description={seoDescription}
        lang={lang}
        path="/projects"
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
        <div className="mx-auto max-w-7xl text-center">
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
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="group">
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="overflow-hidden rounded-2xl glass-card-light transition-all duration-500 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, hsla(204, 47%, 28%, 0.9) 0%, hsla(202, 100%, 11%, 0.95) 100%)',
                        }}
                      >
                        <span className="text-5xl font-heading font-bold text-primary/20">{project.title[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="mb-2 block text-xs font-medium text-primary">{project.category}</span>
                    <h3 className="mb-3 text-lg font-heading font-bold text-foreground transition-colors group-hover:text-primary">{project.title}</h3>
                    {project.description && <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      {t.projects.viewProject} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
