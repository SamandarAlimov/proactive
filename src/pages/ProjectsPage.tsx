import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import PageLayout from '@/components/PageLayout';
import marfImg from '@/assets/marf-project.png';
import misImg from '@/assets/mis-project.png';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const { t, lang } = useI18n();

  const projects = [
    { slug: 'marf', title: 'MARF', category: 'Brending & Strategy', image: marfImg,
      description: lang === 'uz' ? "Bozorga yangi mahsulotni muvaffaqiyatli olib kirish uchun to'liq strategik asos yaratdik. Bozor tahlili, raqobatchilar tahlili va brend platformasini ishlab chiqdik." : lang === 'ru' ? "Создали полную стратегическую основу для успешного вывода нового продукта на рынок." : "Created a complete strategic foundation for successfully launching a new product to market.",
      tags: ['Brand Strategy', 'Market Analysis', 'Brand Platform', 'Marketing Materials'] },
    { slug: 'milestone-is', title: 'Milestone International School', category: 'Marketing & Brending', image: misImg,
      description: lang === 'uz' ? "Milestone International School uchun to'liq marketing va brending strategiyasini ishlab chiqdik." : lang === 'ru' ? "Разработали полную стратегию для MIS." : "Developed a complete marketing and branding strategy for MIS.",
      tags: ['Education', 'Branding', 'Marketing Strategy', 'Visual Identity'] },
    { slug: 'ahmad-tea', title: 'Ahmad Tea', category: 'Marketing', image: null, tags: ['Marketing Strategy', 'Branding'] },
    { slug: 'bek-ota', title: 'Bek Ota', category: 'Brending', image: null, tags: ['Brand Platform', 'Visual Identity'] },
    { slug: 'aurus-pharm', title: 'Aurus Pharm', category: 'Marketing & Strategy', image: null, tags: ['Pharma', 'Marketing Strategy'] },
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
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-primary uppercase tracking-widest">{t.projects.subtitle}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-bold mt-4">{t.projects.title}</motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
              className="group">
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="rounded-2xl overflow-hidden glass-card-light hover:shadow-xl transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{
                        background: 'linear-gradient(135deg, hsla(204, 47%, 28%, 0.9) 0%, hsla(202, 100%, 11%, 0.95) 100%)',
                      }}>
                        <span className="text-5xl font-heading font-bold text-primary/20">{project.title[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    {project.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">{tag}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                      {t.projects.viewProject} <ArrowRight className="w-3.5 h-3.5" />
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
