import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, ClipboardList, GraduationCap, Search } from 'lucide-react';
import { createMainSectionState, readMoreLabel } from '@/lib/source-navigation';
import { jobOpenings } from '@/lib/job-openings';

const Internship = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const careersPageState = createMainSectionState('internship', lang);

  const sectionCopy = {
    eyebrow:
      lang === 'uz'
        ? 'Ish va hamkorlik'
        : lang === 'ru'
          ? 'Работа и партнёрство'
          : 'Careers & Partnership',
    title:
      lang === 'uz'
        ? 'Proactive jamoasida 3 ta ochiq yo‘nalish bor'
        : lang === 'ru'
          ? 'В команде Proactive открыты 3 направления'
          : 'Proactive has 3 open directions',
    description:
      lang === 'uz'
        ? 'Stajorlik, PM va tadqiqotchi yo‘nalishlari bo‘yicha arizalar qabul qilinmoqda. Har bir yo‘nalishda narx emas, moslik, mas’uliyat va rivojlanish salohiyati muhim.'
        : lang === 'ru'
          ? 'Мы принимаем заявки на направления: стажировка, PM и исследователь. Важно соответствие роли, ответственность и потенциал роста.'
          : 'We are accepting applications for internship, PM, and researcher directions. Fit, responsibility, and growth potential matter most.',
    apply:
      lang === 'uz'
        ? 'Ariza berish'
        : lang === 'ru'
          ? 'Подать заявку'
          : 'Apply',
  };

  const roleIcons = [GraduationCap, BriefcaseBusiness, Search];

  return (
    <section id="internship" className="section-padding section-deferred relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            {...getMotionProps({ axis: 'x', distance: 30, duration: 0.6 })}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{sectionCopy.eyebrow}</span>
            <h2 className="mt-3 mb-6 font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">{sectionCopy.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{sectionCopy.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/careers"
                state={careersPageState}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-8 py-4 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
              >
                {readMoreLabel(lang)}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/careers#application"
                state={careersPageState}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                <ClipboardList className="h-5 w-5 shrink-0" />
                {sectionCopy.apply}
              </Link>
            </div>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, i) => {
              const Icon = roleIcons[i] ?? BriefcaseBusiness;

              return (
              <motion.div
                key={job.id}
                {...getMotionProps({ axis: 'x', distance: 30, delay: 0.2 + i * 0.15, duration: 0.5 })}
                whileHover={{ x: 6 }}
                className="glass-card-light group flex min-w-0 items-start gap-4 rounded-2xl p-5 transition-shadow duration-300 hover:shadow-lg sm:gap-5 sm:p-6"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-foreground text-lg">{job.title[lang]}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{job.summary[lang]}</p>
                  <Link
                    to={`/careers?role=${job.id}#application`}
                    state={careersPageState}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                  >
                    {sectionCopy.apply} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
