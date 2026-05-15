import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { revealViewport } from '@/lib/motion';
import { Briefcase, Users, ArrowRight, Handshake } from 'lucide-react';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

const CareersPage = () => {
  const { t, lang } = useI18n();
  const seoDescription = t.careers.description;

  const openPositionCopy = {
    title:
      lang === 'uz'
        ? 'Hozircha ochiq vakansiyalar e’lon qilinmagan'
        : lang === 'ru'
          ? 'Сейчас открытые вакансии не опубликованы'
          : 'No open vacancies are currently published',
    desc:
      lang === 'uz'
        ? 'Yangi pozitsiyalar ochilganda shu sahifada e’lon qilamiz. Agar Proactive bilan ishlash yoki hamkorlik qilishni xohlasangiz, qisqa ma’lumot va portfolio yuborishingiz mumkin.'
        : lang === 'ru'
          ? 'Когда появятся новые позиции, мы опубликуем их на этой странице. Если вы хотите работать или сотрудничать с Proactive, отправьте краткую информацию и портфолио.'
          : 'When new roles open, we will publish them on this page. If you want to work or collaborate with Proactive, you can send a short profile and portfolio.',
    cta:
      lang === 'uz'
        ? 'Ma’lumot yuborish'
        : lang === 'ru'
          ? 'Отправить информацию'
          : 'Send details',
  };

  const partnershipTypes = [
    {
      title: lang === 'uz' ? 'Strategik hamkorlik' : lang === 'ru' ? 'Стратегическое партнёрство' : 'Strategic Partnership',
      desc:
        lang === 'uz'
          ? "Biznes egasi yoki marketing jamoasi bilan strategik qarorlar va ijro yo'nalishida hamkorlik qilamiz."
          : lang === 'ru'
            ? 'Работаем с собственником или маркетинговой командой над стратегическими решениями и исполнением.'
            : 'We work with owners or marketing teams on strategic decisions and execution.',
      icon: Handshake,
    },
    {
      title: lang === 'uz' ? 'Pudratchi hamkorlik' : lang === 'ru' ? 'Подрядное сотрудничество' : 'Contractor Collaboration',
      desc:
        lang === 'uz'
          ? 'Dizayn, kontent, video, performance va ishlab chiqish yo‘nalishlarida kuchli mutaxassislar bilan ishlashga ochiqmiz.'
          : lang === 'ru'
            ? 'Открыты к работе с сильными специалистами в дизайне, контенте, видео, performance и разработке.'
            : 'We are open to strong specialists in design, content, video, performance, and development.',
      icon: Users,
    },
    {
      title: lang === 'uz' ? 'Loyiha hamkorligi' : lang === 'ru' ? 'Проектное сотрудничество' : 'Project Collaboration',
      desc:
        lang === 'uz'
          ? 'Mos keladigan loyihalarda agentliklar, studiyalar va ekspertlar bilan birgalikda qiymat yaratamiz.'
          : lang === 'ru'
            ? 'В подходящих проектах создаём ценность вместе с агентствами, студиями и экспертами.'
            : 'For relevant projects, we create value together with agencies, studios, and experts.',
      icon: Briefcase,
    },
  ];

  const perks = [
    lang === 'uz' ? 'Aniq vazifa va mas’uliyat chegarasi' : lang === 'ru' ? 'Чёткие задачи и зоны ответственности' : 'Clear scope and responsibility',
    lang === 'uz' ? 'Strategik fikrlashga tayangan jarayon' : lang === 'ru' ? 'Процесс, основанный на стратегическом мышлении' : 'A process grounded in strategic thinking',
    lang === 'uz' ? 'Natija va sifat mezonlari' : lang === 'ru' ? 'Критерии результата и качества' : 'Result and quality criteria',
    lang === 'uz' ? 'Mutaxassislik bo‘yicha rivojlanish' : lang === 'ru' ? 'Профессиональное развитие' : 'Professional development',
    lang === 'uz' ? 'Hurmatli va ochiq muloqot' : lang === 'ru' ? 'Уважительная и открытая коммуникация' : 'Respectful and open communication',
    lang === 'uz' ? 'Moslashuvchan hamkorlik formati' : lang === 'ru' ? 'Гибкий формат сотрудничества' : 'Flexible collaboration format',
  ];

  return (
    <PageLayout>
      <SEO
        title={t.careers.title}
        description={seoDescription}
        lang={lang}
        path="/careers"
        structuredData={[
          createWebPageSchema({
            title: t.careers.title,
            description: seoDescription,
            lang,
            path: '/careers',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.careers.title, path: '/careers' },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.careers.subtitle}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mt-4 mb-6">{t.careers.title}</h1>
            <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed">{t.careers.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              {t.careers.openPositions}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            className="glass-card-light rounded-3xl p-8 transition-all duration-500 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-xl font-heading font-bold text-foreground">{openPositionCopy.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{openPositionCopy.desc}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                {openPositionCopy.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {lang === 'uz' ? 'Ishlash tamoyillarimiz' : lang === 'ru' ? 'Принципы работы' : 'How We Work'}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ delay: i * 0.08 }}
                className="glass-card-light rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <span className="text-foreground font-medium">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground flex items-center gap-3">
              <Handshake className="w-8 h-8 text-primary" />
              {t.careers.partnership}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card-light rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <pt.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pt.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
