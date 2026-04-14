import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { serviceAccentClasses, serviceIcons, serviceKeys, type ServiceContent } from '@/lib/service-config';
import PageLayout from '@/components/PageLayout';

const ServicesPage = () => {
  const { t } = useI18n();

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t.services.subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-heading font-bold md:text-6xl"
          >
            {t.services.title}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services[key] as ServiceContent;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link to={`/services/${key}`} className="group block h-full">
                  <div className="glass-card-light h-full rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${serviceAccentClasses[key]} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-7 w-7 text-white dark:text-secondary-foreground" />
                    </div>
                    <h3 className="mb-3 text-xl font-heading font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-muted-foreground">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                      {t.common.learnMore} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
