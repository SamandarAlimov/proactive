import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const EventsPage = () => {
  const { t, lang } = useI18n();

  const upcomingEvents = [
    {
      title: lang === 'uz' ? 'Digital Marketing Forum 2026' : lang === 'ru' ? 'Digital Marketing Forum 2026' : 'Digital Marketing Forum 2026',
      date: '2026-05-15',
      time: '10:00 - 18:00',
      location: 'Toshkent, Hilton Hotel',
      desc: lang === 'uz' ? 'O\'zbekistonning eng yirik marketing forumi. 20+ spiker, 500+ ishtirokchi.' : lang === 'ru' ? 'Крупнейший маркетинговый форум Узбекистана. 20+ спикеров, 500+ участников.' : 'Uzbekistan\'s largest marketing forum. 20+ speakers, 500+ attendees.',
      attendees: 500,
      type: 'Forum',
    },
    {
      title: lang === 'uz' ? 'Brending Masterclass' : lang === 'ru' ? 'Мастеркласс по брендингу' : 'Branding Masterclass',
      date: '2026-06-01',
      time: '14:00 - 17:00',
      location: 'Online / Zoom',
      desc: lang === 'uz' ? 'Brendni noldan qurish bo\'yicha amaliy masterclass.' : lang === 'ru' ? 'Практический мастеркласс по созданию бренда с нуля.' : 'Hands-on masterclass on building a brand from scratch.',
      attendees: 100,
      type: 'Masterclass',
    },
    {
      title: lang === 'uz' ? 'SMM Networking Night' : 'SMM Networking Night',
      date: '2026-06-20',
      time: '19:00 - 22:00',
      location: 'Toshkent, CoWorking Space',
      desc: lang === 'uz' ? 'SMM mutaxassislari uchun networking tadbir.' : lang === 'ru' ? 'Нетворкинг мероприятие для SMM-специалистов.' : 'Networking event for SMM specialists.',
      attendees: 50,
      type: 'Networking',
    },
  ];

  const pastEvents = [
    {
      title: lang === 'uz' ? 'Marketing Conference 2025' : lang === 'ru' ? 'Маркетинг конференция 2025' : 'Marketing Conference 2025',
      date: '2025-12-10',
      attendees: 350,
      type: 'Conference',
    },
    {
      title: lang === 'uz' ? 'Content Creation Workshop' : lang === 'ru' ? 'Воркшоп по созданию контента' : 'Content Creation Workshop',
      date: '2025-11-05',
      attendees: 80,
      type: 'Workshop',
    },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.events.subtitle}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mt-4 mb-6">{t.events.title}</h1>
            <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed">{t.events.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.events.upcoming}</h2>
          </motion.div>

          <div className="space-y-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card-light rounded-3xl p-8 md:p-10 group hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">{new Date(event.date).getDate()}</span>
                    <span className="text-xs text-primary/70 uppercase">{new Date(event.date).toLocaleDateString(lang, { month: 'short' })}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{event.type}</span>
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-3 group-hover:text-primary transition-colors duration-300">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{event.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" /> {event.time}</span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> {event.location}</span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Users className="w-4 h-4" /> {event.attendees}+</span>
                    </div>
                    <a href="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
                      {t.events.register} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t.events.past}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-light rounded-2xl p-6 group"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="w-10 h-10 text-primary/40" />
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span>{new Date(event.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{event.attendees}+ {lang === 'uz' ? 'ishtirokchi' : lang === 'ru' ? 'участников' : 'attendees'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;
