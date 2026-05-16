import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useParams } from 'react-router-dom';
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

type ArticleBackState = {
  from?: string;
  fromLabel?: string;
};

const isSafeInternalPath = (value: unknown): value is string =>
  typeof value === 'string' && value.startsWith('/') && !value.startsWith('//');

const NewsArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { t, lang } = useI18n();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const navigationState = location.state as ArticleBackState | null;
  const backPath = isSafeInternalPath(navigationState?.from) ? navigationState.from : '/news';
  const backLabel = navigationState?.fromLabel || t.news.backToNews;

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
  if (!article) {
    return (
      <PageLayout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground">404</h1>
          <Link to={backPath} className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4" /> {backLabel}
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <Link to={backPath} className="mb-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80">
            <ArrowLeft className="h-4 w-4 shrink-0" /> {backLabel}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm text-secondary-foreground/60">{article.date}</span>
            <h1 className="mt-2 font-heading text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {article.image && (
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={article.image} alt={article.title} className="mb-8 max-h-[400px] w-full rounded-[1.5rem] object-cover sm:rounded-3xl" />
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{article.content || article.excerpt}</p>
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
