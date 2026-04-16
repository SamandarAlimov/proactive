import { motion } from 'framer-motion';
import {
  Compass,
  Layers3,
  Lightbulb,
  Send,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import founderPhoto from '@/assets/founder-photo.jpg';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';

const About = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const founderLang = (lang in founderProfile.tags ? lang : 'uz') as FounderLang;

  const founderName = 'Habibullo Sadulloyev';
  const founderRole = lang === 'uz' ? 'Asoschi' : lang === 'ru' ? 'Основатель' : 'Founder';
  const founderBio =
    lang === 'uz'
      ? "12+ yil marketing tajribasi. Proactive marketing agentligi va Cubic ekotizimi hamasoschisi. TSUE (Bakalavr va Magistratura), UJC (PMP), Academy of Applied Arts (New Delhi)."
      : lang === 'ru'
        ? 'Более 12 лет опыта в маркетинге. Сооснователь агентства Proactive и экосистемы Cubic. TSUE, UJC (PMP), Academy of Applied Arts (New Delhi).'
        : '12+ years of marketing experience. Co-founder of Proactive marketing agency and Cubic ecosystem. TSUE, UJC (PMP), Academy of Applied Arts (New Delhi).';

  const capabilityCards =
    lang === 'uz'
      ? [
          {
            title: 'Strategik yo‘nalish',
            text: 'Bozorga chiqish, pozitsiya va uzoq muddatli o‘sish yo‘lini aniqlash.',
            icon: Compass,
          },
          {
            title: 'Tizim qurish',
            text: 'Marketingni alohida kampaniyalar emas, yagona boshqaruv tizimi sifatida ishlatish.',
            icon: Workflow,
          },
          {
            title: 'Brend platformasi',
            text: 'Brendning qadriyati, xabari va farqlanish nuqtalarini aniq belgilash.',
            icon: Layers3,
          },
          {
            title: 'Amaliy yechimlar',
            text: 'Strategiyani real jamoa, jarayon va bozorda ishlaydigan formatga tushirish.',
            icon: Lightbulb,
          },
        ]
      : lang === 'ru'
        ? [
            {
              title: 'Стратегическое направление',
              text: 'Определяем путь выхода на рынок, позиционирование и долгосрочную траекторию роста.',
              icon: Compass,
            },
            {
              title: 'Построение системы',
              text: 'Собираем маркетинг не как набор кампаний, а как единую управленческую систему.',
              icon: Workflow,
            },
            {
              title: 'Бренд-платформа',
              text: 'Фиксируем ценность бренда, ключевое сообщение и точки отличия.',
              icon: Layers3,
            },
            {
              title: 'Практические решения',
              text: 'Переводим стратегию в формат, который работает внутри команды и на рынке.',
              icon: Lightbulb,
            },
          ]
        : [
            {
              title: 'Strategic direction',
              text: 'We define market path, positioning, and the long-term direction of growth.',
              icon: Compass,
            },
            {
              title: 'System building',
              text: 'We structure marketing not as scattered campaigns, but as one operating system.',
              icon: Workflow,
            },
            {
              title: 'Brand platform',
              text: 'We clarify brand value, core message, and meaningful differentiation.',
              icon: Layers3,
            },
            {
              title: 'Practical execution',
              text: 'We turn strategy into a format that works inside the team and in the market.',
              icon: Lightbulb,
            },
          ];

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px]"
        style={{
          background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            {t.about.subtitle}
          </span>

          <h2 className="mt-6 text-3xl font-heading font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t.about.description}
            </p>

            <div className="relative grid gap-4 sm:grid-cols-2">
              {capabilityCards.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/90 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-heading font-bold text-foreground md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="pointer-events-none absolute -left-10 top-12 hidden h-24 w-24 rounded-full border border-primary/10 bg-primary/5 blur-xl lg:block"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div
              className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl"
              style={{
                background:
                  'linear-gradient(160deg, hsla(204, 47%, 28%, 0.95) 0%, hsla(202, 100%, 11%, 0.98) 100%)',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute left-1/2 top-[12%] h-3 w-3 -translate-x-1/2 rounded-full bg-primary/70 shadow-[0_0_20px_rgba(82,230,200,0.55)]" />
                <div className="absolute right-[14%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white/50" />
                <div className="absolute bottom-[14%] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary/40" />
                <div className="absolute left-[14%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/35" />
              </motion.div>

              <div
                className="absolute right-8 top-8 h-32 w-32 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, hsla(166, 75%, 61%, 0.12) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute bottom-12 left-12 h-48 w-48 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, hsla(259, 43%, 51%, 0.1) 0%, transparent 70%)',
                }}
              />

              <div className="absolute inset-[14%] rounded-full border border-white/10" />
              <div className="absolute inset-[24%] rounded-full border border-white/8" />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/10 md:h-36 md:w-36"
                >
                  <img src={proactiveLogo} alt="Proactive Logo" className="h-full w-full object-cover" />
                </motion.div>

                <h3 className="mb-2 text-2xl font-heading font-bold text-white md:text-3xl">
                  Proactive
                </h3>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Marketing Agency
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 md:mt-28"
        >
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
            style={{
              background:
                'linear-gradient(135deg, hsla(204, 47%, 28%, 0.06) 0%, hsla(166, 75%, 61%, 0.04) 100%)',
              border: '1px solid hsla(166, 75%, 61%, 0.1)',
            }}
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-80 w-80"
              style={{
                background:
                  'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="relative flex-shrink-0">
                <div className="h-36 w-36 overflow-hidden rounded-2xl ring-2 ring-primary/20 shadow-xl md:h-44 md:w-44">
                  <img src={founderPhoto} alt={founderName} className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-background bg-primary" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground md:text-3xl">
                    {founderName}
                  </h3>
                  <span className="mx-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:mx-0">
                    {founderRole}
                  </span>
                </div>

                <FounderSpecialtyChips
                  tags={founderProfile.tags[founderLang]}
                  className="mb-4 justify-center md:justify-start"
                />

                <p className="mb-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderBio}
                </p>

                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <a
                    href="https://t.me/habibullo_sadulloyev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:bg-secondary/90"
                  >
                    <Send className="h-4 w-4" /> Telegram
                  </a>
                  <a
                    href="https://www.instagram.com/habibullo_sadulloyev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:bg-secondary/90"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;