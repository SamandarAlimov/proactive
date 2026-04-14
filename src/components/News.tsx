import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type NewsRow = Tables<'news'>;

type DisplayNewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

const News = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
  const [newsData, setNewsData] = useState<NewsRow[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase.from('news').select('*').eq('published', true).order('created_at', { ascending: false }).limit(3);
      if (data) setNewsData(data);
    };
    fetchNews();
  }, []);

  const displayNews: DisplayNewsItem[] = newsData.length > 0 ? newsData.map((n) => ({
    id: n.id,
    date: n.created_at.slice(0, 10),
    title: lang === 'uz' ? n.title_uz : lang === 'ru' ? n.title_ru : n.title_en,
    excerpt: (lang === 'uz' ? n.excerpt_uz : lang === 'ru' ? n.excerpt_ru : n.excerpt_en) ?? '',
  })) : [
    { id: 'demo-1', date: '2026-03-25', title: lang === 'uz' ? "MARF brendi bilan hamkorlik" : lang === 'ru' ? "Партнёрство с MARF" : "Partnership with MARF", excerpt: lang === 'uz' ? "MARF brendi uchun to'liq brending va marketing strategiyasini muvaffaqiyatli yakunladik." : lang === 'ru' ? "Успешно завершили стратегию брендинга для MARF." : "Successfully completed branding strategy for MARF." },
    { id: 'demo-2', date: '2026-03-15', title: lang === 'uz' ? "Proactive Academy ochildi" : lang === 'ru' ? "Открытие Proactive Academy" : "Proactive Academy launched", excerpt: lang === 'uz' ? "Marketing sohasida onlayn stajirovka dasturimiz ishga tushdi." : lang === 'ru' ? "Запущена программа онлайн-стажировки." : "Our online internship program has launched." },
    { id: 'demo-3', date: '2026-02-28', title: lang === 'uz' ? "MIS loyihasi yakunlandi" : lang === 'ru' ? "Проект MIS завершён" : "MIS project completed", excerpt: lang === 'uz' ? "Milestone International School uchun marketing strategiyasi ishlab chiqildi." : lang === 'ru' ? "Разработана маркетинговая стратегия для MIS." : "Marketing strategy developed for MIS." },
  ];

  return (
    <section id="news" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{t.news.subtitle}</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">{t.news.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayNews.map((news, i) => (
            <motion.div key={news.id} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 * i }}>
              <Link to={`/news/${news.id}`} className="block group">
                <article className="glass-card-light rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                  <div className="h-48 bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-primary/20">P</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground">{news.date}</span>
                    <h3 className="text-lg font-heading font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-300">{news.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{news.excerpt}</p>
                    <span className="inline-block mt-4 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      {t.news.readMore} →
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-12">
          <Link to="/news" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
            {t.news.viewAll} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
