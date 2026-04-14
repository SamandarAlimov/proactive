import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';
import { Briefcase, Users, ArrowRight, MapPin, Clock, Handshake, Star, Zap } from 'lucide-react';

const CareersPage = () => {
  const { t, lang } = useI18n();
  const currentLang = (lang in brandbookContent.pageLeads.careers ? lang : 'uz') as keyof typeof brandbookContent.pageLeads.careers;

  const positions = [
    {
      title: lang === 'uz' ? 'Marketing menejer' : lang === 'ru' ? 'Маркетинг-менеджер' : 'Marketing Manager',
      type: lang === 'uz' ? 'To\'liq ish kuni' : lang === 'ru' ? 'Полная занятость' : 'Full-time',
      location: 'Toshkent',
      desc: lang === 'uz' ? 'Marketing strategiyalarni ishlab chiqish va amalga oshirish. Mijozlar bilan ishlash va jamoani boshqarish.' : lang === 'ru' ? 'Разработка и реализация маркетинговых стратегий.' : 'Developing and implementing marketing strategies.',
    },
    {
      title: lang === 'uz' ? 'SMM mutaxassisi' : lang === 'ru' ? 'SMM-специалист' : 'SMM Specialist',
      type: lang === 'uz' ? 'To\'liq ish kuni' : lang === 'ru' ? 'Полная занятость' : 'Full-time',
      location: 'Toshkent',
      desc: lang === 'uz' ? 'Ijtimoiy tarmoqlarda kontent yaratish va auditoriyani boshqarish.' : lang === 'ru' ? 'Создание контента и управление аудиторией в соцсетях.' : 'Content creation and audience management on social media.',
    },
    {
      title: lang === 'uz' ? 'Grafik dizayner' : lang === 'ru' ? 'Графический дизайнер' : 'Graphic Designer',
      type: lang === 'uz' ? 'To\'liq ish kuni' : lang === 'ru' ? 'Полная занятость' : 'Full-time',
      location: 'Toshkent / Remote',
      desc: lang === 'uz' ? 'Kreativ dizayn yechimlari yaratish — logotiplar, bannerlar, brend materiallari.' : lang === 'ru' ? 'Создание креативных дизайн-решений.' : 'Creating creative design solutions — logos, banners, brand materials.',
    },
    {
      title: lang === 'uz' ? 'Video operator / Editor' : lang === 'ru' ? 'Видеооператор / Монтажёр' : 'Videographer / Editor',
      type: lang === 'uz' ? 'To\'liq ish kuni' : lang === 'ru' ? 'Полная занятость' : 'Full-time',
      location: 'Toshkent',
      desc: lang === 'uz' ? 'Professional video kontentlar yaratish va montaj qilish.' : lang === 'ru' ? 'Создание и монтаж профессионального видеоконтента.' : 'Creating and editing professional video content.',
    },
  ];

  const partnershipTypes = [
    {
      title: lang === 'uz' ? 'Biznes hamkorlik' : lang === 'ru' ? 'Бизнес-партнёрство' : 'Business Partnership',
      desc: lang === 'uz' ? 'Birgalikda loyihalar ustida ishlash va o\'zaro foyda olish.' : lang === 'ru' ? 'Совместная работа над проектами.' : 'Working together on projects for mutual benefit.',
      icon: Handshake,
    },
    {
      title: lang === 'uz' ? 'Referral dasturi' : lang === 'ru' ? 'Реферальная программа' : 'Referral Program',
      desc: lang === 'uz' ? 'Mijozlarni tavsiya eting va komissiya oling.' : lang === 'ru' ? 'Рекомендуйте клиентов и получайте комиссию.' : 'Refer clients and earn commission.',
      icon: Star,
    },
    {
      title: lang === 'uz' ? 'Freelancer hamkorlik' : lang === 'ru' ? 'Фриланс партнёрство' : 'Freelancer Partnership',
      desc: lang === 'uz' ? 'Freelancer sifatida loyihalarni birgalikda bajaring.' : lang === 'ru' ? 'Выполняйте проекты совместно как фрилансер.' : 'Work on projects together as a freelancer.',
      icon: Zap,
    },
  ];

  const perks = [
    lang === 'uz' ? 'Raqobatbardosh maosh' : lang === 'ru' ? 'Конкурентная зарплата' : 'Competitive salary',
    lang === 'uz' ? 'Zamonaviy ofis' : lang === 'ru' ? 'Современный офис' : 'Modern office',
    lang === 'uz' ? 'Professional rivojlanish' : lang === 'ru' ? 'Профессиональное развитие' : 'Professional development',
    lang === 'uz' ? 'Moslashuvchan ish jadvali' : lang === 'ru' ? 'Гибкий график' : 'Flexible schedule',
    lang === 'uz' ? 'Jamoa tadbirlari' : lang === 'ru' ? 'Командные мероприятия' : 'Team events',
    lang === 'uz' ? 'Kreativ muhit' : lang === 'ru' ? 'Креативная среда' : 'Creative environment',
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.careers.subtitle}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mt-4 mb-6">{t.careers.title}</h1>
            <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-3xl leading-relaxed">{brandbookContent.pageLeads.careers[currentLang]}</p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-primary" />
              {t.careers.openPositions}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card-light rounded-2xl p-8 group hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">{pos.title}</h3>
                    <p className="text-muted-foreground mt-2">{pos.desc}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> {pos.type}</span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> {pos.location}</span>
                    </div>
                  </div>
                  <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 flex-shrink-0">
                    {t.careers.apply} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            {lang === 'uz' ? 'Afzalliklar' : lang === 'ru' ? 'Преимущества' : 'Perks & Benefits'}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card-light rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
