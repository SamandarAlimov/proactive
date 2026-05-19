import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, Play, Sparkles, Youtube } from 'lucide-react';

import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { useI18n, type Language } from '@/lib/i18n';
import { revealViewport } from '@/lib/motion';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

type PodcastVideo = {
  focus: Record<Language, string>;
  id: string;
  published: string;
  title: string;
};

const channelUrl = 'https://www.youtube.com/@Cubic_podcast';

const cubicPodcastVideos: PodcastVideo[] = [
  {
    id: 'PKPNaNzkNbI',
    title: '25 Yoshda Marketing Direktori Bo’lish Yo’li | Cubic Podcast',
    published: '2025-09-20',
    focus: {
      uz: 'Marketing karyerasi',
      en: 'Marketing career',
      ru: 'Карьера в маркетинге',
    },
  },
  {
    id: 'iH1bAJjQBKI',
    title: 'Jamoasiz Marketolog Hech Narsa Qilolmaydi! | Cubic Podcast',
    published: '2025-08-02',
    focus: {
      uz: 'Jamoa va jarayon',
      en: 'Team and process',
      ru: 'Команда и процессы',
    },
  },
  {
    id: 'djBnComskEU',
    title: 'Tadbirkor fikrlashini o‘zgartirmasa, biznes o‘smaydi! | Cubic Podcast',
    published: '2025-07-02',
    focus: {
      uz: 'Biznes fikrlashi',
      en: 'Business mindset',
      ru: 'Мышление предпринимателя',
    },
  },
  {
    id: 'T7wqbhiuy4E',
    title: 'Asaxiyda marketing qanday ishlaydi? | Cubic Podcast',
    published: '2025-06-09',
    focus: {
      uz: 'Marketing tizimi',
      en: 'Marketing system',
      ru: 'Система маркетинга',
    },
  },
  {
    id: 'UAzmFedIaaw',
    title: 'Marketing Nimaga Asoslangan Bo‘lishi kerak? | Cubic Podcast',
    published: '2025-05-24',
    focus: {
      uz: 'Strategiya asoslari',
      en: 'Strategy foundations',
      ru: 'Основы стратегии',
    },
  },
  {
    id: '95ICC4taxR8',
    title: "Nostandart Universitetning Nostandart Marketologi Qanday bo'ladi? | Cubic Podcast",
    published: '2025-05-10',
    focus: {
      uz: 'Ta’lim marketingi',
      en: 'Education marketing',
      ru: 'Маркетинг образования',
    },
  },
  {
    id: 'qfT1Cp-Tp5U',
    title: 'Nega Marketing Natija Bermayapti? | Cubic Podcast',
    published: '2025-04-26',
    focus: {
      uz: 'Natija va tahlil',
      en: 'Results and analysis',
      ru: 'Результат и анализ',
    },
  },
  {
    id: 'V76PizhSPzs',
    title: 'Biznesda Marketolog Vazifasi Nima? Elmurod Raimbaev | Cubic Podcast',
    published: '2025-04-12',
    focus: {
      uz: 'Marketolog roli',
      en: 'Marketer role',
      ru: 'Роль маркетолога',
    },
  },
];

const copy = {
  uz: {
    badge: 'Tadbirlar',
    channel: 'Cubic Podcast kanali',
    channelCta: 'Kanalga o‘tish',
    description:
      'Marketing, biznes, strategiya va jamoa boshqaruvi bo‘yicha Cubic Podcast suhbatlarini shu sahifada tomosha qiling.',
    featured: 'Tanlangan suhbat',
    latest: 'So‘nggi videolar',
    meta: 'E’lon qilingan',
    note: 'Video shu sahifaning o‘zida ochiladi. Xohlasangiz, YouTube kanalida ham davom ettirishingiz mumkin.',
    playlist: 'Video ro‘yxati',
    title: 'Cubic Podcast videolari',
    watchYoutube: 'YouTube’da ochish',
  },
  en: {
    badge: 'Events',
    channel: 'Cubic Podcast channel',
    channelCta: 'Open channel',
    description:
      'Watch Cubic Podcast conversations on marketing, business, strategy, and team management directly on this page.',
    featured: 'Featured conversation',
    latest: 'Latest videos',
    meta: 'Published',
    note: 'The video plays on this page. You can also continue watching on the YouTube channel.',
    playlist: 'Video playlist',
    title: 'Cubic Podcast Videos',
    watchYoutube: 'Open on YouTube',
  },
  ru: {
    badge: 'События',
    channel: 'Канал Cubic Podcast',
    channelCta: 'Открыть канал',
    description:
      'Смотрите выпуски Cubic Podcast о маркетинге, бизнесе, стратегии и управлении командой прямо на этой странице.',
    featured: 'Выбранный выпуск',
    latest: 'Последние видео',
    meta: 'Опубликовано',
    note: 'Видео открывается на этой странице. При желании можно продолжить просмотр на YouTube.',
    playlist: 'Список видео',
    title: 'Видео Cubic Podcast',
    watchYoutube: 'Открыть на YouTube',
  },
} as const;

const localeMap: Record<Language, string> = {
  uz: 'uz-UZ',
  en: 'en-US',
  ru: 'ru-RU',
};

const formatDate = (date: string, lang: Language) =>
  new Intl.DateTimeFormat(localeMap[lang], {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));

const EventsPage = () => {
  const { t, lang } = useI18n();
  const [activeVideoId, setActiveVideoId] = useState(cubicPodcastVideos[0].id);
  const [hasUserSelectedVideo, setHasUserSelectedVideo] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const labels = copy[lang];
  const selectedVideo = useMemo(
    () => cubicPodcastVideos.find((video) => video.id === activeVideoId) ?? cubicPodcastVideos[0],
    [activeVideoId],
  );

  const handleVideoSelect = (videoId: string) => {
    setActiveVideoId(videoId);
    setHasUserSelectedVideo(true);

    window.requestAnimationFrame(() => {
      playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <PageLayout>
      <SEO
        title={t.events.title}
        description={t.events.description}
        lang={lang}
        path="/events"
        structuredData={[
          createWebPageSchema({
            title: t.events.title,
            description: t.events.description,
            lang,
            path: '/events',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.events.title, path: '/events' },
          ]),
        ]}
      />

      <section className="relative overflow-hidden bg-secondary pt-32 pb-16 text-white md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(circle at 18% 20%, hsla(166, 75%, 61%, 0.16), transparent 30%), radial-gradient(circle at 82% 0%, hsla(204, 47%, 48%, 0.32), transparent 35%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-primary/35" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <Youtube className="h-4 w-4" />
              {labels.badge}
            </span>
            <h1 className="mt-6 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {labels.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">
              {labels.description}
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
            >
              {labels.channelCta}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            <motion.div
              ref={playerRef}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-xl shadow-secondary/5 sm:rounded-[2rem]"
            >
              <div className="relative aspect-video bg-secondary">
                <iframe
                  key={selectedVideo.id}
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1&playsinline=1${hasUserSelectedVideo ? '&autoplay=1' : ''}`}
                  title={selectedVideo.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <span>{labels.featured}</span>
                  <span className="h-1 w-1 rounded-full bg-primary/70" />
                  <span>{selectedVideo.focus[lang]}</span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">
                  {selectedVideo.title}
                </h2>
                <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {labels.meta}: {formatDate(selectedVideo.published, lang)}
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-primary transition-colors duration-300 hover:text-primary/75"
                  >
                    {labels.watchYoutube}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[1.5rem] border border-border/70 bg-card p-6 shadow-xl shadow-secondary/5 sm:rounded-[2rem] md:p-8 lg:sticky lg:top-28 lg:self-start"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-foreground">{labels.channel}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{labels.note}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                  <div className="text-2xl font-bold text-foreground">{cubicPodcastVideos.length}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Video
                  </div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                  <div className="text-2xl font-bold text-foreground">YouTube</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Platforma
                  </div>
                </div>
              </div>

              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
                {labels.channelCta}
              </a>
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-16"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{labels.latest}</span>
                <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {labels.playlist}
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cubicPodcastVideos.map((video, index) => {
                const isActive = video.id === selectedVideo.id;

                return (
                  <motion.button
                    key={video.id}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={revealViewport}
                    transition={{ duration: 0.38, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleVideoSelect(video.id)}
                    aria-pressed={isActive}
                    className={`group overflow-hidden rounded-2xl border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10 ${
                      isActive ? 'border-primary/55 ring-2 ring-primary/15' : 'border-border/70'
                    }`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-secondary">
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-secondary/20 transition-colors duration-300 group-hover:bg-secondary/5" />
                      <span className="absolute left-3 top-3 rounded-full bg-secondary/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                        {video.focus[lang]}
                      </span>
                      <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
                        <Play className="ml-0.5 h-5 w-5 fill-current" />
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug text-foreground">
                        {video.title}
                      </h3>
                      <p className="mt-3 text-xs font-medium text-muted-foreground">
                        {formatDate(video.published, lang)}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;
