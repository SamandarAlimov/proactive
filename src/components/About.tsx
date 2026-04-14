import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, TrendingUp, Users, Award, Send } from 'lucide-react';
import proactiveLogo from '@/assets/proactive-logo.jpg';
import founderPhoto from '@/assets/founder-photo.jpg';

const About = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: '50+', label: t.about.stats.projects, icon: Target },
    { number: '30+', label: t.about.stats.clients, icon: Users },
    { number: '5+', label: t.about.stats.experience, icon: TrendingUp },
    { number: '15+', label: t.about.stats.team, icon: Award },
  ];

  const founderName = 'Habibullo Sadulloyev';
  const founderRole = lang === 'uz' ? 'Asoschi & CEO' : lang === 'ru' ? 'Основатель & CEO' : 'Founder & CEO';
  const founderTags = [
    { emoji: '📔', text: 'Marketolog' },
    { emoji: '📈', text: 'Analitik' },
    { emoji: '📝', text: 'Trener' },
  ];
  const founderBio = lang === 'uz'
    ? "12+ yil marketing tajribasi. Proactive marketing agentligi va Cubic ekotizimi hamasoschisi. TSUE (Bakalavr va Magistratura), UJC (PMP), Academy of Applied Arts (New Delhi)."
    : lang === 'ru'
    ? 'Более 12 лет опыта в маркетинге. Сооснователь агентства Proactive и экосистемы Cubic. TSUE, UJC (PMP), Academy of Applied Arts (New Delhi).'
    : '12+ years of marketing experience. Co-founder of Proactive marketing agency and Cubic ecosystem. TSUE, UJC (PMP), Academy of Applied Arts (New Delhi).';

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{
        background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 70%)', filter: 'blur(80px)',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'hsla(166, 75%, 61%, 0.08)', color: 'hsl(166, 75%, 50%)', border: '1px solid hsla(166, 75%, 61%, 0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.about.subtitle}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-6 tracking-tight">{t.about.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">{t.about.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }} className="relative rounded-2xl p-6 text-center group cursor-default overflow-hidden transition-all duration-300 glass-card-light">
                  <stat.icon className="w-7 h-7 text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110 relative z-10" />
                  <div className="text-3xl font-heading font-bold text-foreground relative z-10">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1 relative z-10 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center"
              style={{ background: 'linear-gradient(160deg, hsla(204, 47%, 28%, 0.95) 0%, hsla(202, 100%, 11%, 0.98) 100%)' }}>
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.12) 0%, transparent 70%)' }} />
              <div className="absolute bottom-12 left-12 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, hsla(259, 43%, 51%, 0.1) 0%, transparent 70%)' }} />
              <div className="text-center relative z-10">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl mx-auto mb-6 overflow-hidden shadow-2xl ring-2 ring-white/10">
                  <img src={proactiveLogo} alt="Proactive Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">Proactive</h3>
                <p className="text-white/50 text-sm tracking-wide">Marketing Agency</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founder & CEO */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }} className="mt-20 md:mt-28">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
            style={{ background: 'linear-gradient(135deg, hsla(204, 47%, 28%, 0.06) 0%, hsla(166, 75%, 61%, 0.04) 100%)', border: '1px solid hsla(166, 75%, 61%, 0.1)' }}>
            <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none" style={{
              background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 70%)', filter: 'blur(60px)',
            }} />

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              <div className="relative flex-shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-xl">
                  <img src={founderPhoto} alt={founderName} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-4 border-background bg-primary" />
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{founderName}</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary w-fit mx-auto md:mx-0">
                    {founderRole}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {founderTags.map(tag => (
                    <span key={tag.text} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {tag.emoji} {tag.text}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mb-5">{founderBio}</p>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <a href="https://t.me/habibullo_sadulloyev" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-300">
                    <Send className="w-4 h-4" /> Telegram
                  </a>
                  <a href="https://www.instagram.com/habibullo_sadulloyev/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-300">
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
