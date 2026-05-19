import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ExternalLink, Play, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cubicPodcastChannelUrl, cubicPodcastVideos, formatPodcastDate } from '@/lib/cubic-podcast';
import { useI18n, type Language } from '@/lib/i18n';
import { createMainSectionState, readMoreLabel } from '@/lib/source-navigation';

const copy = {
  uz: {
    eyebrow: 'Tadbirlar',
    title: 'Cubic Podcast orqali marketing suhbatlari',
    description:
      'Marketing, biznes, strategiya va jamoa boshqaruvi bo‘yicha foydali suhbatlarni bitta joyda tomosha qiling.',
    channel: 'YouTube kanal',
    viewAll: 'Barcha videolar',
  },
  en: {
    eyebrow: 'Events',
    title: 'Marketing conversations through Cubic Podcast',
    description:
      'Watch useful conversations on marketing, business, strategy, and team management in one place.',
    channel: 'YouTube channel',
    viewAll: 'All videos',
  },
  ru: {
    eyebrow: 'События',
    title: 'Маркетинговые разговоры в Cubic Podcast',
    description:
      'Смотрите полезные разговоры о маркетинге, бизнесе, стратегии и управлении командой в одном месте.',
    channel: 'YouTube-канал',
    viewAll: 'Все видео',
  },
} satisfies Record<Language, Record<string, string>>;

const Events = () => {
  const { lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const labels = copy[lang];
  const eventsPageState = createMainSectionState('events', lang);
  const previewVideos = cubicPodcastVideos.slice(0, 3);

  return (
    <section
      id="events"
      ref={ref}
      className="section-deferred relative scroll-mt-24 overflow-hidden bg-background py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(circle at 14% 20%, hsla(166, 75%, 61%, 0.08), transparent 30%), radial-gradient(circle at 88% 5%, hsla(204, 47%, 28%, 0.10), transparent 34%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          {...getMotionProps({ distance: 24, duration: 0.45 })}
          className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Youtube className="h-4 w-4" />
              {labels.eyebrow}
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {labels.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {labels.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              to="/events"
              state={eventsPageState}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
            >
              {labels.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={cubicPodcastChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              {labels.channel}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {previewVideos.map((video, index) => (
            <motion.div
              key={video.id}
              {...getMotionProps({ distance: 18, delay: index * 0.06, duration: 0.4 })}
            >
              <Link
                to={`/events?video=${video.id}`}
                state={eventsPageState}
                className="group block h-full overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-lg shadow-secondary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/10"
              >
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/25 transition-colors duration-300 group-hover:bg-secondary/10" />
                  <span className="absolute left-4 top-4 rounded-full bg-secondary/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {video.focus[lang]}
                  </span>
                  <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {formatPodcastDate(video.published, lang)}
                  </div>
                  <h3 className="line-clamp-2 min-h-[3.1rem] font-heading text-lg font-bold leading-snug text-foreground">
                    {video.title}
                  </h3>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300 group-hover:gap-3">
                    {readMoreLabel(lang)}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
