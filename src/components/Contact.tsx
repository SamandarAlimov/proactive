import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import {
  contactLabelClass,
  contactSelectClass,
  contactTextInputClass,
  contactTextareaClass,
} from '@/components/contact/contactFieldStyles';
import { ContactEmailInput, ContactPhoneInput } from '@/components/contact/ContactFormFields';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  contactSecondaryPhone,
} from '@/lib/contact-details';
import { supabase } from '@/integrations/supabase/client';
import { buildPhoneNumber, DEFAULT_PHONE_COUNTRY } from '@/lib/contact-form';
import { services } from '@/data/services';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { createMainSectionState, readMoreLabel } from '@/lib/source-navigation';

const marketingCourseOption = {
  uz: 'Marketing Maximum kursi',
  en: 'Marketing Maximum Course',
  ru: 'Курс Marketing Maximum',
};

const Contact = () => {
  const { t, lang } = useI18n();
  const { ref, getMotionProps } = useScrollAnimation();
  const contactPageState = createMainSectionState('contact', lang);
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
    { icon: Phone, title: contactPhone, sub: contactSecondaryPhone },
    { icon: Mail, title: contactEmail, sub: 'Email' },
  ];

  const serviceLabel =
    lang === 'uz'
      ? 'Xizmat turini tanlang'
      : lang === 'ru'
        ? 'Выберите тип услуги'
        : 'Select service type';
  const serviceOptions = [
    ...services.map((service) => service.content[lang].title),
    marketingCourseOption[lang],
  ];

  return (
    <section id="contact" className="section-deferred relative overflow-hidden py-24 md:py-32" ref={ref}>
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96"
        style={{
          background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 64%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          {...getMotionProps({ distance: 30, duration: 0.6 })}
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
          <Link
            to="/contact"
            state={contactPageState}
            className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-primary/20 px-5 py-3 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
          >
            {readMoreLabel(lang)}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.88fr)] xl:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            {...getMotionProps({ axis: 'x', distance: 30, duration: 0.6, delay: 0.2 })}
            className="glass-card-light h-full space-y-5 rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-6 md:space-y-7 md:p-10 lg:p-12"
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
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
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

            <div className="grid items-start gap-5">
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
            {...getMotionProps({ axis: 'x', distance: 30, duration: 0.6, delay: 0.4 })}
            className="flex h-full flex-col gap-5 lg:gap-6"
          >
            <motion.a
              href={contactMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glass-card-light block min-h-[240px] flex-1 overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:shadow-lg sm:min-h-[280px] sm:rounded-[1.75rem] lg:min-h-[340px]"
            >
              <div className="relative h-full min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[340px]">
                <iframe
                  title={contactAddressFull}
                  src={contactMapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 via-secondary/45 to-transparent p-5">
                  <p className="font-brand text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    Office address
                  </p>
                  <p className="mt-2 font-heading text-lg font-bold text-white sm:text-xl">{contactAddressLine}</p>
                  <p className="text-sm text-white/75">{contactAddressCity}</p>
                </div>
              </div>
            </motion.a>

            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4 }}
                className="glass-card-light group flex min-h-[82px] items-center gap-3 rounded-[1.5rem] p-4 transition-all duration-300 hover:shadow-lg sm:gap-4 sm:rounded-[1.75rem] sm:p-5 md:p-6"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))',
                  }}
                >
                  <card.icon className="h-6 w-6" style={{ color: 'hsl(202, 100%, 11%)' }} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading text-base font-bold leading-snug text-foreground sm:text-lg">{card.title}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">{card.sub}</p>
                </div>
              </motion.div>
            ))}

            <motion.a
              href={contactInstagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glass-card-light group block min-h-[82px] rounded-[1.5rem] p-4 transition-all duration-300 hover:shadow-lg sm:rounded-[1.75rem] sm:p-5 md:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] bg-secondary transition-transform duration-300 group-hover:scale-105">
                  <Instagram className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading text-base font-bold leading-snug text-foreground sm:text-lg">{contactInstagramHandle}</h4>
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
