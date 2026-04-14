import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { serviceGradientColors, serviceIcons, serviceKeys, type ServiceContent } from '@/lib/service-config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Card3D = ({ children, delay, isVisible }: { children: React.ReactNode; delay: number; isVisible: boolean }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX((y - rect.height / 2) / 20);
    setRotateY((rect.width / 2 - x) / 20);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsla(210, 28%, 96%, 0.5) 0%, hsla(210, 28%, 96%, 0) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'hsla(166, 75%, 61%, 0.08)',
              color: 'hsl(166, 75%, 50%)',
              border: '1px solid hsla(166, 75%, 61%, 0.15)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.services.subtitle}
          </span>
          <h2 className="mt-6 text-3xl font-heading font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, index) => {
            const service = t.services[key] as ServiceContent;
            const Icon = serviceIcons[key];
            const colors = serviceGradientColors[key];

            return (
              <Card3D key={key} delay={0.1 * index} isVisible={isVisible}>
                <Link to={`/services/${key}`} className="block h-full">
                  <div
                    className="group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl"
                    style={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsla(166, 75%, 61%, 0.08)',
                      boxShadow: '0 4px 24px hsla(202, 100%, 11%, 0.04)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}08 0%, ${colors.to}05 100%)`,
                      }}
                    />
                    <div
                      className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        boxShadow: `0 8px 24px ${colors.from}30`,
                      }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="relative z-10 mb-3 text-xl font-heading font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="relative z-10 leading-relaxed text-muted-foreground">{service.description}</p>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                      style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
                    />
                  </div>
                </Link>
              </Card3D>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, hsla(166, 75%, 61%, 0.1) 0%, hsla(181, 100%, 50%, 0.05) 100%)',
              color: 'hsl(166, 75%, 50%)',
              border: '1px solid hsla(166, 75%, 61%, 0.2)',
            }}
          >
            {t.services.viewAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
