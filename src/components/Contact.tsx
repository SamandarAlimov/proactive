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
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/integrations/supabase/client';
import { buildPhoneNumber, DEFAULT_PHONE_COUNTRY } from '@/lib/contact-form';
import { useI18n } from '@/lib/i18n';
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

const Contact = () => {
  const { t, lang } = useI18n();
  const { ref, isVisible } = useScrollAnimation();
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
    { icon: MapPin, title: "Toshkent, O'zbekiston", sub: 'Office address' },
    { icon: Phone, title: '+998 90 123 45 67', sub: '24/7' },
    { icon: Mail, title: 'info@proactive.uz', sub: 'Email' },
  ];

  const serviceLabel =
    lang === 'uz'
      ? 'Xizmat turini tanlang'
      : lang === 'ru'
        ? 'Выберите тип услуги'
        : 'Select service type';

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96"
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
          className="mb-16 text-center"
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
            {t.contact.title}
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-foreground md:text-5xl">
            {t.contact.subtitle}
          </h2>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.88fr)] xl:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-light space-y-6 rounded-[2rem] p-8 md:space-y-7 md:p-10 lg:p-12"
          >
            <div>
              <label className={contactLabelClass} htmlFor="contact-service">
                {serviceLabel}
              </label>
              <div className="relative">
                <select
                  id="contact-service"
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
              <label className={contactLabelClass} htmlFor="contact-name">
                {t.contact.name}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={contactTextInputClass}
              />
            </div>

            <div className="grid items-start gap-6 xl:grid-cols-2">
              <div>
                <label className={contactLabelClass} htmlFor="contact-phone">
                  {t.contact.phone}
                </label>
                <ContactPhoneInput
                  id="contact-phone"
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
                <label className={contactLabelClass} htmlFor="contact-email">
                  {t.contact.email}
                </label>
                <ContactEmailInput
                  id="contact-email"
                  lang={lang}
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                />
              </div>
            </div>

            <div>
              <label className={contactLabelClass} htmlFor="contact-message">
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
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
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5 lg:space-y-6"
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
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
              </motion.div>
            ))}

            <motion.a
              href="https://www.instagram.com/proactive.agencyuz/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glass-card-light group block rounded-[1.75rem] p-5 transition-all duration-300 hover:shadow-lg md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] bg-secondary transition-transform duration-300 group-hover:scale-110">
                  <Instagram className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground">@proactive.agencyuz</h4>
                  <p className="text-sm leading-6 text-muted-foreground">Instagram</p>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
