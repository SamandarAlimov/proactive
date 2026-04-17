import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

import {
  contactLabelClass,
  contactSelectClass,
  contactTextInputClass,
  contactTextareaClass,
} from '@/components/contact/contactFieldStyles';
import { ContactEmailInput, ContactPhoneInput } from '@/components/contact/ContactFormFields';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import {
  contactAddressCity,
  contactAddressFull,
  contactAddressLine,
  contactEmail,
  contactInstagram,
  contactInstagramHandle,
  contactMapEmbedUrl,
  contactMapUrl,
  contactPhone,
} from '@/lib/contact-details';
import { supabase } from '@/integrations/supabase/client';
import { buildPhoneNumber, DEFAULT_PHONE_COUNTRY } from '@/lib/contact-form';
import { useI18n } from '@/lib/i18n';
import {
  createBreadcrumbSchema,
  createOrganizationSchema,
  createWebPageSchema,
} from '@/lib/seo';
import { cn } from '@/lib/utils';

const serviceOptions = [
  { uz: 'Marketing strategiyasi', en: 'Marketing Strategy', ru: 'Маркетинговая стратегия' },
  { uz: 'Brend platformasi', en: 'Brand Platform', ru: 'Бренд-платформа' },
  { uz: 'Mahsulot strategiyasi', en: 'Product Strategy', ru: 'Продуктовая стратегия' },
  { uz: 'Kommunikatsiya', en: 'Communication', ru: 'Коммуникация' },
  { uz: "Marketing bo'limini qurish", en: 'Marketing Team Building', ru: 'Построение отдела маркетинга' },
  { uz: 'Konsultatsiya', en: 'Consulting', ru: 'Консультация' },
  { uz: 'Tahlil va audit', en: 'Analysis & Audit', ru: 'Анализ и аудит' },
  { uz: 'Marketing Maximum kursi', en: 'Marketing Maximum Course', ru: 'Курс Marketing Maximum' },
];

const ContactPage = () => {
  const { t, lang } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    phoneCountry: DEFAULT_PHONE_COUNTRY,
    phone: '',
    email: '',
    message: '',
    service: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullMessage = formData.service ? `[${formData.service}] ${formData.message}` : formData.message;
    const { error } = await supabase.from('contacts').insert([
      {
        name: formData.name,
        phone: buildPhoneNumber(formData.phone, formData.phoneCountry),
        email: formData.email || null,
        message: fullMessage,
      },
    ]);

    if (error) {
      toast.error('Xatolik yuz berdi');
    } else {
      toast.success(t.contact.success);
      setFormData({
        name: '',
        phoneCountry: DEFAULT_PHONE_COUNTRY,
        phone: '',
        email: '',
        message: '',
        service: '',
      });
    }

    setLoading(false);
  };

  const contactCards = [
    { icon: MapPin, title: contactAddressLine, sub: contactAddressCity },
    { icon: Phone, title: contactPhone, sub: '24/7' },
    { icon: Mail, title: contactEmail, sub: 'Email' },
  ];

  const serviceLabel =
    lang === 'uz'
      ? 'Xizmat turini tanlang'
      : lang === 'ru'
        ? 'Выберите тип услуги'
        : 'Select service type';
  const seoDescription = `${t.contact.subtitle}. ${contactAddressLine}, ${contactAddressCity}. Email: ${contactEmail}.`;

  return (
    <PageLayout>
      <SEO
        title={t.contact.title}
        description={seoDescription}
        lang={lang}
        path="/contact"
        type="ContactPage"
        structuredData={[
          createOrganizationSchema(lang),
          createWebPageSchema({
            title: t.contact.title,
            description: seoDescription,
            lang,
            path: '/contact',
            type: 'ContactPage',
          }),
          createBreadcrumbSchema([
            { name: 'Proactive', path: '/' },
            { name: t.contact.title, path: '/contact' },
          ]),
        ]}
      />
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t.contact.title}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-heading text-4xl font-bold md:text-6xl"
          >
            {t.contact.subtitle}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.88fr)] xl:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-light space-y-6 rounded-[2rem] p-8 md:space-y-7 md:p-10 lg:p-12"
          >
            <div>
              <label className={contactLabelClass} htmlFor="contact-page-service">
                {serviceLabel}
              </label>
              <div className="relative">
                <select
                  id="contact-page-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={cn(contactSelectClass, 'pr-12')}
                >
                  <option value="">-</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.en} value={opt[lang]}>
                      {opt[lang]}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label className={contactLabelClass} htmlFor="contact-page-name">
                {t.contact.name}
              </label>
              <input
                id="contact-page-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={contactTextInputClass}
              />
            </div>

            <div className="grid items-start gap-5">
              <div>
                <label className={contactLabelClass} htmlFor="contact-page-phone">
                  {t.contact.phone}
                </label>
                <ContactPhoneInput
                  id="contact-page-phone"
                  required
                  lang={lang}
                  country={formData.phoneCountry}
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value })}
                  onCountryChange={(phoneCountry) =>
                    setFormData({ ...formData, phoneCountry, phone: '' })
                  }
                />
              </div>

              <div>
                <label className={contactLabelClass} htmlFor="contact-page-email">
                  {t.contact.email}
                </label>
                <ContactEmailInput
                  id="contact-page-email"
                  lang={lang}
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                />
              </div>
            </div>

            <div>
              <label className={contactLabelClass} htmlFor="contact-page-message">
                {t.contact.message}
              </label>
              <textarea
                id="contact-page-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={contactTextareaClass}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-[1.35rem] py-4 font-heading text-lg font-semibold transition-all duration-300 hover:scale-[1.01] disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                color: 'hsl(202, 100%, 11%)',
              }}
            >
              <Send className="h-5 w-5" />
              {loading ? '...' : t.contact.send}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-5 lg:space-y-6"
          >
            <motion.a
              href={contactMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glass-card-light block overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-[244px] overflow-hidden">
                <iframe
                  title={contactAddressFull}
                  src={contactMapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 via-secondary/45 to-transparent p-5">
                  <p className="font-brand text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
                    Office address
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-white">{contactAddressLine}</p>
                  <p className="text-sm text-white/76">{contactAddressCity}</p>
                </div>
              </div>
            </motion.a>

            {contactCards.map((card) => (
              <div
                key={card.title}
                className="glass-card-light group flex items-center gap-4 rounded-[1.75rem] p-5 transition-all duration-300 hover:shadow-lg md:p-6"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                  }}
                >
                  <card.icon className="h-6 w-6" style={{ color: 'hsl(202, 100%, 11%)' }} />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground">{card.title}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">{card.sub}</p>
                </div>
              </div>
            ))}

            <a
              href={contactInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-light group block rounded-[1.75rem] p-5 transition-all duration-300 hover:shadow-lg md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] bg-secondary transition-transform duration-300 group-hover:scale-110">
                  <Instagram className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground">{contactInstagramHandle}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">Instagram</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
