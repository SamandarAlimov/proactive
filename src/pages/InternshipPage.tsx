import { motion } from 'framer-motion';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';
import { GraduationCap, BookOpen, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const InternshipPage = () => {
  const { t, lang } = useI18n();
  const currentLang = (lang in brandbookContent.pageLeads.internship ? lang : 'uz') as keyof typeof brandbookContent.pageLeads.internship;

  const features = [
    { icon: BookOpen, title: lang === 'uz' ? 'Amaliy bilimlar' : lang === 'ru' ? 'Практические знания' : 'Practical Knowledge', desc: lang === 'uz' ? 'Real loyihalarda ishlash tajribasi' : lang === 'ru' ? 'Опыт работы на реальных проектах' : 'Experience on real projects' },
    { icon: Users, title: lang === 'uz' ? 'Mentorlik' : lang === 'ru' ? 'Менторство' : 'Mentorship', desc: lang === 'uz' ? 'Professional mutaxassislar bilan ishlash' : lang === 'ru' ? 'Работа с профессионалами' : 'Working with professionals' },
    { icon: Rocket, title: lang === 'uz' ? "Karera o'sishi" : lang === 'ru' ? 'Карьерный рост' : 'Career Growth', desc: lang === 'uz' ? "Ish joyi olish imkoniyati" : lang === 'ru' ? 'Возможность трудоустройства' : 'Employment opportunity' },
  ];

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-primary uppercase tracking-widest">{t.internship.title}</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-heading font-bold mt-4">{t.internship.subtitle}</motion.h1>
          </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{brandbookContent.pageLeads.internship[currentLang]}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                <GraduationCap className="w-5 h-5" />
                {t.internship.cta}
              </Link>
            </motion.div>

            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="glass-card-light rounded-2xl p-6 flex items-start gap-5 group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground text-lg">{f.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InternshipPage;
