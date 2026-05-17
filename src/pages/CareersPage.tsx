import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  GraduationCap,
  Handshake,
  Search,
  Send,
  Users,
} from 'lucide-react';

import {
  contactLabelClass,
  contactSelectClass,
  contactTextInputClass,
  contactTextareaClass,
} from '@/components/contact/contactFieldStyles';
import { ContactEmailInput, ContactPhoneInput } from '@/components/contact/ContactFormFields';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import SourceBackLink from '@/components/SourceBackLink';
import { supabase } from '@/integrations/supabase/client';
import { buildPhoneNumber, DEFAULT_PHONE_COUNTRY } from '@/lib/contact-form';
import { useI18n, type Language } from '@/lib/i18n';
import { getJobOpeningById, jobOpenings, type JobOpeningId } from '@/lib/job-openings';
import { revealViewport } from '@/lib/motion';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

const roleIcons = [GraduationCap, BriefcaseBusiness, Search];

const pageCopy = {
  uz: {
    openLead: 'Hozirda 3 ta ochiq yo‘nalish bo‘yicha arizalar qabul qilinmoqda.',
    apply: 'Ariza berish',
    formTitle: 'Ariza topshirish',
    formDescription:
      'Qaysi yo‘nalishga mos kelishingizni tanlang va qisqa ma’lumot qoldiring. Arizalar admin panelda alohida ko‘rinadi.',
    selectRole: 'Yo‘nalishni tanlang',
    name: 'Ismingiz',
    phone: 'Telefon raqamingiz',
    email: 'Email',
    portfolio: 'Telegram yoki portfolio havolasi',
    portfolioPlaceholder: '@username yoki portfolio link',
    message: 'Nega aynan shu yo‘nalish?',
    messagePlaceholder: 'Tajribangiz, qiziqishingiz va mosligingiz haqida qisqacha yozing.',
    send: 'Arizani yuborish',
    sending: 'Yuborilmoqda...',
    success: 'Arizangiz yuborildi!',
    note: 'Narx ko‘rsatilmaydi. Jarayon moslik, mas’uliyat va rivojlanish salohiyati asosida ko‘riladi.',
    workPrinciples: 'Ishlash tamoyillarimiz',
    partnershipTitle: 'Hamkorlik formatlari',
  },
  en: {
    openLead: 'We are currently accepting applications for 3 open directions.',
    apply: 'Apply',
    formTitle: 'Submit an application',
    formDescription:
      'Choose the direction that fits you and leave a short profile. Applications appear separately in the admin panel.',
    selectRole: 'Select direction',
    name: 'Your name',
    phone: 'Phone number',
    email: 'Email',
    portfolio: 'Telegram or portfolio link',
    portfolioPlaceholder: '@username or portfolio link',
    message: 'Why this direction?',
    messagePlaceholder: 'Briefly share your experience, interest, and fit.',
    send: 'Submit application',
    sending: 'Sending...',
    success: 'Your application has been sent!',
    note: 'No price is shown. The process is reviewed by fit, responsibility, and growth potential.',
    workPrinciples: 'How we work',
    partnershipTitle: 'Collaboration formats',
  },
  ru: {
    openLead: 'Сейчас мы принимаем заявки по 3 открытым направлениям.',
    apply: 'Подать заявку',
    formTitle: 'Отправить заявку',
    formDescription:
      'Выберите подходящее направление и оставьте краткую информацию. Заявки отображаются отдельно в админ-панели.',
    selectRole: 'Выберите направление',
    name: 'Ваше имя',
    phone: 'Телефон',
    email: 'Email',
    portfolio: 'Telegram или ссылка на портфолио',
    portfolioPlaceholder: '@username или ссылка на портфолио',
    message: 'Почему это направление?',
    messagePlaceholder: 'Кратко напишите об опыте, интересе и соответствии роли.',
    send: 'Отправить заявку',
    sending: 'Отправляется...',
    success: 'Ваша заявка отправлена!',
    note: 'Цена не указывается. Мы оцениваем соответствие, ответственность и потенциал развития.',
    workPrinciples: 'Принципы работы',
    partnershipTitle: 'Форматы сотрудничества',
  },
} satisfies Record<Language, Record<string, string>>;

const CareersPage = () => {
  const { t, lang } = useI18n();
  const [searchParams] = useSearchParams();
  const text = pageCopy[lang];
  const seoDescription = t.careers.description;
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedJobId, setSelectedJobId] = useState<JobOpeningId>(
    getJobOpeningById(searchParams.get('role')).id,
  );
  const [formData, setFormData] = useState({
    name: '',
    phoneCountry: DEFAULT_PHONE_COUNTRY,
    phone: '',
    email: '',
    portfolio: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const selectedJob = getJobOpeningById(selectedJobId);

  useEffect(() => {
    const requestedJob = getJobOpeningById(searchParams.get('role'));
    setSelectedJobId(requestedJob.id);

    if (window.location.hash === '#application') {
      window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [searchParams]);

  const partnershipTypes = [
    {
      title: lang === 'uz' ? 'Strategik hamkorlik' : lang === 'ru' ? 'Стратегическое партнёрство' : 'Strategic Partnership',
      desc:
        lang === 'uz'
          ? "Biznes egasi yoki marketing jamoasi bilan strategik qarorlar va ijro yo'nalishida hamkorlik qilamiz."
          : lang === 'ru'
            ? 'Работаем с собственником или маркетинговой командой над стратегическими решениями и исполнением.'
            : 'We work with owners or marketing teams on strategic decisions and execution.',
      icon: Handshake,
    },
    {
      title: lang === 'uz' ? 'Pudratchi hamkorlik' : lang === 'ru' ? 'Подрядное сотрудничество' : 'Contractor Collaboration',
      desc:
        lang === 'uz'
          ? 'Dizayn, kontent, video, performance va ishlab chiqish yo‘nalishlarida kuchli mutaxassislar bilan ishlashga ochiqmiz.'
          : lang === 'ru'
            ? 'Открыты к работе с сильными специалистами в дизайне, контенте, видео, performance и разработке.'
            : 'We are open to strong specialists in design, content, video, performance, and development.',
      icon: Users,
    },
    {
      title: lang === 'uz' ? 'Loyiha hamkorligi' : lang === 'ru' ? 'Проектное сотрудничество' : 'Project Collaboration',
      desc:
        lang === 'uz'
          ? 'Mos keladigan loyihalarda agentliklar, studiyalar va ekspertlar bilan birgalikda qiymat yaratamiz.'
          : lang === 'ru'
            ? 'В подходящих проектах создаём ценность вместе с агентствами, студиями и экспертами.'
            : 'For relevant projects, we create value together with agencies, studios, and experts.',
      icon: Briefcase,
    },
  ];

  const perks = [
    lang === 'uz' ? 'Aniq vazifa va mas’uliyat chegarasi' : lang === 'ru' ? 'Чёткие задачи и зоны ответственности' : 'Clear scope and responsibility',
    lang === 'uz' ? 'Strategik fikrlashga tayangan jarayon' : lang === 'ru' ? 'Процесс, основанный на стратегическом мышлении' : 'A process grounded in strategic thinking',
    lang === 'uz' ? 'Natija va sifat mezonlari' : lang === 'ru' ? 'Критерии результата и качества' : 'Result and quality criteria',
    lang === 'uz' ? 'Mutaxassislik bo‘yicha rivojlanish' : lang === 'ru' ? 'Профессиональное развитие' : 'Professional development',
    lang === 'uz' ? 'Hurmatli va ochiq muloqot' : lang === 'ru' ? 'Уважительная и открытая коммуникация' : 'Respectful and open communication',
    lang === 'uz' ? 'Moslashuvchan hamkorlik formati' : lang === 'ru' ? 'Гибкий формат сотрудничества' : 'Flexible collaboration format',
  ];

  const handleApplyClick = (jobId: JobOpeningId) => {
    setSelectedJobId(jobId);
    window.history.replaceState(window.history.state, '', `/careers?role=${jobId}#application`);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const applicationMessage = [
      `[JOB_APPLICATION:${selectedJob.id}]`,
      `Yo'nalish: ${selectedJob.title.uz}`,
      `Ko'rsatilgan nom: ${selectedJob.title[lang]}`,
      `Telegram/portfolio: ${formData.portfolio || '-'}`,
      '',
      formData.message,
    ].join('\n');

    const { error } = await supabase.from('contacts').insert([
      {
        name: formData.name,
        phone: buildPhoneNumber(formData.phone, formData.phoneCountry),
        email: formData.email || null,
        message: applicationMessage,
      },
    ]);

    if (error) {
      toast.error('Xatolik yuz berdi');
    } else {
      toast.success(text.success);
      setFormData({
        name: '',
        phoneCountry: DEFAULT_PHONE_COUNTRY,
        phone: '',
        email: '',
        portfolio: '',
        message: '',
      });
    }

    setLoading(false);
  };

  return (
    <PageLayout>
      <SEO
        title={t.careers.title}
        description={seoDescription}
        lang={lang}
        path="/careers"
        structuredData={[
          createWebPageSchema({
            title: t.careers.title,
            description: seoDescription,
            lang,
            path: '/careers',
            type: 'CollectionPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.careers.title, path: '/careers' },
          ]),
        ]}
      />

      <section className="section-padding relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <SourceBackLink variant="dark" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t.careers.subtitle}</span>
            <h1 className="mb-6 mt-4 font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">{t.careers.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 md:text-xl">{t.careers.description}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/70">{text.openLead}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="mb-12">
            <h2 className="flex flex-col gap-3 font-heading text-3xl font-bold leading-tight text-foreground sm:flex-row sm:items-center md:text-4xl">
              <Briefcase className="h-8 w-8 shrink-0 text-primary" />
              {t.careers.openPositions}
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {jobOpenings.map((job, index) => {
              const Icon = roleIcons[index] ?? BriefcaseBusiness;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card-light group flex min-w-0 flex-col rounded-[1.5rem] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-7"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Open
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{job.title[lang]}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{job.summary[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.focus.map((item) => (
                      <span key={item[lang]} className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                        {item[lang]}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleApplyClick(job.id)}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                  >
                    {text.apply} <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="application" ref={formRef} className="section-padding scroll-mt-28 bg-muted/25">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="lg:sticky lg:top-28">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.28em] text-primary">{text.formTitle}</span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {selectedJob.title[lang]}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{text.formDescription}</p>
            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm leading-6 text-foreground">
              <CheckCircle2 className="mr-2 inline h-4 w-4 text-primary" />
              {text.note}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            onSubmit={handleSubmit}
            className="glass-card-light space-y-5 rounded-[1.5rem] p-5 sm:rounded-3xl sm:p-8"
          >
            <div>
              <label className={contactLabelClass} htmlFor="career-role">
                {text.selectRole}
              </label>
              <div className="relative mt-2">
                <select
                  id="career-role"
                  value={selectedJobId}
                  onChange={(event) => setSelectedJobId(event.target.value as JobOpeningId)}
                  className={cn(contactSelectClass, 'pr-12')}
                >
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.id} className="bg-background text-foreground">
                      {job.title[lang]}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={contactLabelClass} htmlFor="career-name">
                  {text.name}
                </label>
                <input
                  id="career-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className={cn(contactTextInputClass, 'mt-2')}
                />
              </div>

              <div>
                <label className={contactLabelClass} htmlFor="career-phone">
                  {text.phone}
                </label>
                <ContactPhoneInput
                  id="career-phone"
                  lang={lang}
                  country={formData.phoneCountry}
                  onCountryChange={(country) => setFormData({ ...formData, phoneCountry: country })}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={contactLabelClass} htmlFor="career-email">
                  {text.email}
                </label>
                <ContactEmailInput
                  id="career-email"
                  lang={lang}
                  value={formData.email}
                  onChange={(email) => setFormData({ ...formData, email })}
                  className="mt-2"
                />
              </div>

              <div>
                <label className={contactLabelClass} htmlFor="career-portfolio">
                  {text.portfolio}
                </label>
                <input
                  id="career-portfolio"
                  type="text"
                  value={formData.portfolio}
                  onChange={(event) => setFormData({ ...formData, portfolio: event.target.value })}
                  placeholder={text.portfolioPlaceholder}
                  className={cn(contactTextInputClass, 'mt-2')}
                />
              </div>
            </div>

            <div>
              <label className={contactLabelClass} htmlFor="career-message">
                {text.message}
              </label>
              <textarea
                id="career-message"
                required
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder={text.messagePlaceholder}
                className={cn(contactTextareaClass, 'mt-2')}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {loading ? text.sending : text.send}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="mb-12 text-center font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {text.workPrinciples}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div key={perk} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ delay: i * 0.08 }}
                className="glass-card-light rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg sm:p-6">
                <span className="font-medium text-foreground">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} className="mb-12">
            <h2 className="flex flex-col gap-3 font-heading text-3xl font-bold leading-tight text-foreground sm:flex-row sm:items-center md:text-4xl">
              <Handshake className="h-8 w-8 shrink-0 text-primary" />
              {text.partnershipTitle}
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {partnershipTypes.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="glass-card-light group min-w-0 rounded-[1.5rem] p-5 text-center transition-all duration-500 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary transition-transform duration-300 group-hover:scale-105">
                  <pt.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{pt.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pt.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 px-6 py-3 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
            >
              {t.nav.contact} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
