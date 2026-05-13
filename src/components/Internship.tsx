import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Rocket } from 'lucide-react';

const Internship = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();

  const features = [
    {
      icon: BookOpen,
      title: lang === 'uz' ? 'Amaliy bilimlar' : lang === 'ru' ? 'Практические знания' : 'Practical Knowledge',
      desc: lang === 'uz' ? 'Real loyihalarda ishlash tajribasi' : lang === 'ru' ? 'Опыт работы на реальных проектах' : 'Experience on real projects',
    },
    {
      icon: Users,
      title: lang === 'uz' ? 'Mentorlik' : lang === 'ru' ? 'Менторство' : 'Mentorship',
      desc: lang === 'uz' ? 'Professional mutaxassislar bilan ishlash' : lang === 'ru' ? 'Работа с профессионалами' : 'Working with professionals',
    },
    {
      icon: Rocket,
      title: lang === 'uz' ? "Karera o'sishi" : lang === 'ru' ? 'Карьерный рост' : 'Career Growth',
      desc: lang === 'uz' ? "Ish joyi olish imkoniyati" : lang === 'ru' ? 'Возможность трудоустройства' : 'Employment opportunity',
    },
  ];

  return (
    <section id="internship" className="section-padding section-deferred relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...getMotionProps({ axis: 'x', distance: 30, duration: 0.6 })}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.internship.title}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">{t.internship.subtitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.internship.description}</p>
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
                {...getMotionProps({ axis: 'x', distance: 30, delay: 0.2 + i * 0.15, duration: 0.5 })}
                whileHover={{ x: 6 }}
                className="glass-card-light group flex items-start gap-5 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-lg"
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
  );
};

export default Internship;
