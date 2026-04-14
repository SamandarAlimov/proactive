import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import marfImg from '@/assets/marf-project.png';
import misImg from '@/assets/mis-project.png';

type LocalizedText = {
  uz: string;
  en: string;
  ru: string;
};

type LocalizedList = {
  uz: string[];
  en: string[];
  ru: string[];
};

type ProjectDetail = {
  title: string;
  category: string;
  image: string;
  description: LocalizedText;
  tags: string[];
  services: LocalizedList;
};

const projectsData: Record<string, ProjectDetail> = {
  marf: {
    title: 'MARF', category: 'Brending & Strategy', image: marfImg,
    description: {
      uz: "Bozorga yangi mahsulotni muvaffaqiyatli olib kirish uchun to'liq strategik asos yaratdik. Bozor tahlili, raqobatchilar tahlili va brend platformasini ishlab chiqdik va marketing materiallarini tayyorladik.",
      en: "Created a complete strategic foundation for successfully launching a new product to market. Developed market analysis, competitor analysis and brand platform.",
      ru: "Создали полную стратегическую основу для успешного вывода нового продукта на рынок.",
    },
    tags: ['Brand Strategy', 'Market Analysis', 'Brand Platform', 'Marketing Materials'],
    services: {
      uz: ['Bozor tahlili', 'Raqobatchilar tahlili', 'Brend platformasi', 'Marketing materiallari', 'Vizual identifikatsiya'],
      en: ['Market Analysis', 'Competitor Analysis', 'Brand Platform', 'Marketing Materials', 'Visual Identity'],
      ru: ['Анализ рынка', 'Анализ конкурентов', 'Бренд-платформа', 'Маркетинговые материалы', 'Визуальная идентичность'],
    },
  },
  'milestone-is': {
    title: 'Milestone International School', category: 'Marketing & Brending', image: misImg,
    description: {
      uz: "Milestone International School uchun to'liq marketing va brending strategiyasini ishlab chiqdik. Maktabning brend identifikatsiyasini yaratdik va marketing kampaniyalarini boshqardik.",
      en: "Developed a complete marketing and branding strategy for Milestone International School.",
      ru: "Разработали полную маркетинговую и брендинговую стратегию для Milestone International School.",
    },
    tags: ['Education', 'Branding', 'Marketing Strategy', 'Visual Identity'],
    services: {
      uz: ['Marketing strategiyasi', 'Brend identifikatsiyasi', 'Vizual dizayn', 'Kampaniya boshqaruvi'],
      en: ['Marketing Strategy', 'Brand Identity', 'Visual Design', 'Campaign Management'],
      ru: ['Маркетинговая стратегия', 'Идентичность бренда', 'Визуальный дизайн', 'Управление кампаниями'],
    },
  },
};

// Generic projects
const genericProjects = [
  'ahmad-tea', 'bek-ota', 'aurus-pharm', 'dilmuss', 'taxtakon', 'najot-nur',
  'merit-chemicals', 'zahratun', 'impuls', 'damar', 'aqly', 'baxtiyor-oila',
  'asr-kimyo', 'oxus-university', 'mobetco', 'president-gifts', 'sfera', 'tima', 'zafaron',
];

const genericTitles: Record<string, string> = {
  'ahmad-tea': 'Ahmad Tea', 'bek-ota': 'Bek Ota', 'aurus-pharm': 'Aurus Pharm',
  'dilmuss': 'Dilmuss', 'taxtakon': 'Taxtakon', 'najot-nur': 'Najot Nur',
  'merit-chemicals': 'Merit Chemicals', 'zahratun': 'Zahratun',
  'impuls': 'Impuls Tibbiyot Instituti', 'damar': 'Damar', 'aqly': 'AQLY',
  'baxtiyor-oila': 'Baxtiyor Oila', 'asr-kimyo': 'Asr Kimyo',
  'oxus-university': 'OXUS University', 'mobetco': 'MobetCo',
  'president-gifts': 'President Gifts', 'sfera': 'Sfera', 'tima': 'Tima', 'zafaron': "Za'faron",
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();

  const project = slug ? projectsData[slug] : null;
  const genericTitle = slug ? genericTitles[slug] : null;

  if (!project && !genericTitle) {
    return (
      <PageLayout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">
            {lang === 'uz' ? 'Loyiha topilmadi' : lang === 'ru' ? 'Проект не найден' : 'Project not found'}
          </h1>
          <Link to="/projects" className="text-primary mt-4 inline-block">{t.projects.viewAll}</Link>
        </div>
      </PageLayout>
    );
  }

  const title = project?.title || genericTitle;
  const category = project?.category || 'Marketing & Strategy';
  const image = project?.image || null;
  const description = project?.description?.[lang] ||
    (lang === 'uz' ? `${title} uchun marketing va brending xizmatlarini taqdim etdik.` :
     lang === 'ru' ? `Предоставили маркетинговые и брендинговые услуги для ${title}.` :
     `Provided marketing and branding services for ${title}.`);
  const tags = project?.tags || ['Marketing', 'Strategy'];
  const services = project?.services?.[lang] || (lang === 'uz' ? ['Marketing strategiyasi', 'Brend platformasi'] : lang === 'ru' ? ['Маркетинговая стратегия', 'Бренд-платформа'] : ['Marketing Strategy', 'Brand Platform']);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(160deg, hsla(202, 100%, 11%, 0.97) 0%, hsla(204, 47%, 28%, 0.95) 100%)',
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 80% 20%, hsla(166, 75%, 61%, 0.08) 0%, transparent 60%)',
        }} />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {t.projects.viewAll}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-medium">{category}</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-2">{title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          {image && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl overflow-hidden mb-12 shadow-xl">
              <img src={image} alt={title} className="w-full h-auto" />
            </motion.div>
          )}

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                {lang === 'uz' ? 'Loyiha haqida' : lang === 'ru' ? 'О проекте' : 'About the project'}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-4">
                {lang === 'uz' ? "Ko'rsatilgan xizmatlar" : lang === 'ru' ? 'Оказанные услуги' : 'Services provided'}
              </h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl p-8 text-center" style={{
            background: 'linear-gradient(135deg, hsla(166, 75%, 61%, 0.06) 0%, hsla(259, 43%, 51%, 0.04) 100%)',
            border: '1px solid hsla(166, 75%, 61%, 0.1)',
          }}>
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">
              {lang === 'uz' ? "Loyihangizni muhokama qilaylik" : lang === 'ru' ? 'Обсудим ваш проект' : "Let's discuss your project"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lang === 'uz' ? "Biz sizning brendingiz uchun eng yaxshi yechimni topamiz" : lang === 'ru' ? 'Мы найдём лучшее решение для вашего бренда' : "We'll find the best solution for your brand"}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))', color: 'hsl(202, 100%, 11%)' }}>
              {t.contact.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectDetailPage;
