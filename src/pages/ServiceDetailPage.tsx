import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { brandbookContent } from '@/lib/brandbook-content';
import { useI18n } from '@/lib/i18n';
import { isServiceKey, serviceIcons, type ServiceContent } from '@/lib/service-config';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const currentLang = (lang in brandbookContent.hero.primaryCta ? lang : 'uz') as keyof typeof brandbookContent.hero.primaryCta;

  if (!slug || !isServiceKey(slug)) {
    return (
      <PageLayout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">404</h1>
        </div>
      </PageLayout>
    );
  }

  const service = t.services[slug] as ServiceContent;
  const Icon = serviceIcons[slug];

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/services"
            className="mb-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> {t.services.viewAll}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-heading font-bold md:text-6xl">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
            <div className="glass-card-light rounded-3xl p-8 md:p-12">
              <p className="text-lg leading-relaxed text-foreground">{service.fullDescription}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              {brandbookContent.hero.primaryCta[currentLang]}
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceDetailPage;
