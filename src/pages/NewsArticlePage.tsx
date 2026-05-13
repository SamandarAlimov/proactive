import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useI18n } from '@/lib/i18n';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import PageLayout from '@/components/PageLayout';

type Article = {
  title: string;
  content: string | null;
  excerpt?: string | null;
  date: string;
  image?: string | null;
};

const NewsArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useI18n();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id || id.startsWith('demo-')) {
        setArticle(getDemoArticle(id || '', lang));
        setLoading(false);
        return;
      }
      const { data } = await supabase.from('news').select('*').eq('id', id).single();
      if (data) setArticle({
        title: lang === 'uz' ? data.title_uz : lang === 'ru' ? data.title_ru : data.title_en,
        content: lang === 'uz' ? data.content_uz : lang === 'ru' ? data.content_ru : data.content_en,
        excerpt: lang === 'uz' ? data.excerpt_uz : lang === 'ru' ? data.excerpt_ru : data.excerpt_en,
        date: data.created_at.slice(0, 10),
        image: data.image_url,
      });
      setLoading(false);
    };
    fetchArticle();
  }, [id, lang]);

  if (loading) return <PageLayout><div className="section-padding text-center"><p className="text-foreground">Loading...</p></div></PageLayout>;
  if (!article) return <PageLayout><div className="section-padding text-center"><h1 className="text-3xl font-heading font-bold text-foreground">404</h1></div></PageLayout>;

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <Link to="/news" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> {t.news.backToNews}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-secondary-foreground/60">{article.date}</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mt-2">{article.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {article.image && (
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={article.image} alt={article.title} className="w-full rounded-3xl mb-8 object-cover max-h-[400px]" />
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-muted-foreground leading-relaxed">{article.content || article.excerpt}</p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

function getDemoArticle(id: string, lang: string): Article | null {
  const demos: Record<string, Article> = {
    'demo-1': { date: '2026-03-25', title: lang === 'uz' ? "MARF brendi bilan hamkorlik" : lang === 'ru' ? "Партнёрство с MARF" : "Partnership with MARF", content: lang === 'uz' ? "MARF brendi uchun to'liq brending va marketing strategiyasini muvaffaqiyatli yakunladik. Bozor tahlili, raqobatchilar tahlili va brend platformasini ishlab chiqdik." : lang === 'ru' ? "Успешно завершили полную стратегию брендинга и маркетинга для MARF." : "Successfully completed a full branding and marketing strategy for MARF." },
    'demo-2': { date: '2026-03-15', title: lang === 'uz' ? "Proactive Academy ochildi" : lang === 'ru' ? "Открытие Proactive Academy" : "Proactive Academy launched", content: lang === 'uz' ? "Marketing sohasida onlayn stajirovka dasturimiz ishga tushdi." : lang === 'ru' ? "Запущена программа онлайн-стажировки в маркетинге." : "Our online marketing internship program has launched." },
    'demo-3': { date: '2026-02-28', title: lang === 'uz' ? "MIS loyihasi yakunlandi" : lang === 'ru' ? "Проект MIS завершён" : "MIS project completed", content: lang === 'uz' ? "Milestone International School uchun marketing strategiyasi ishlab chiqildi." : lang === 'ru' ? "Разработана маркетинговая стратегия для MIS." : "Marketing strategy developed for MIS." },
  };
  return demos[id] || null;
}

export default NewsArticlePage;
