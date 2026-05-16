import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Users, Rocket } from 'lucide-react';
import { createMainSectionState, readMoreLabel } from '@/lib/source-navigation';

const Internship = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const internshipPageState = createMainSectionState('internship', lang);

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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            {...getMotionProps({ axis: 'x', distance: 30, duration: 0.6 })}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.internship.title}</span>
            <h2 className="mt-3 mb-6 font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">{t.internship.subtitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.internship.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/internship"
                state={internshipPageState}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-8 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
              >
                {readMoreLabel(lang)}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                <GraduationCap className="h-5 w-5 shrink-0" />
                {t.internship.cta}
              </Link>
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...getMotionProps({ axis: 'x', distance: 30, delay: 0.2 + i * 0.15, duration: 0.5 })}
                whileHover={{ x: 6 }}
                className="glass-card-light group flex min-w-0 items-start gap-4 rounded-2xl p-5 transition-shadow duration-300 hover:shadow-lg sm:gap-5 sm:p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
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
