import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, MapPin, Phone, Mail, Instagram, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

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
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', service: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const fullMessage = formData.service ? `[${formData.service}] ${formData.message}` : formData.message;
    const { error } = await supabase.from('contacts').insert([{
      name: formData.name, phone: formData.phone, email: formData.email || null, message: fullMessage,
    }]);
    if (error) toast.error('Xatolik yuz berdi');
    else { toast.success(t.contact.success); setFormData({ name: '', phone: '', email: '', message: '', service: '' }); }
    setLoading(false);
  };

  const contactCards = [
    { icon: MapPin, title: 'Toshkent, O\'zbekiston', sub: 'Office address' },
    { icon: Phone, title: '+998 90 123 45 67', sub: '24/7' },
    { icon: Mail, title: 'info@proactive.uz', sub: 'Email' },
  ];

  const serviceLabel = lang === 'uz' ? 'Xizmat turini tanlang' : lang === 'ru' ? 'Выберите тип услуги' : 'Select service type';

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{
        background: 'radial-gradient(circle, hsla(166, 75%, 61%, 0.06) 0%, transparent 70%)', filter: 'blur(80px)',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'hsla(166, 75%, 61%, 0.08)', color: 'hsl(166, 75%, 50%)', border: '1px solid hsla(166, 75%, 61%, 0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.contact.title}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-6">{t.contact.subtitle}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-light rounded-3xl p-8 md:p-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{serviceLabel}</label>
              <div className="relative">
                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground appearance-none">
                  <option value="">—</option>
                  {serviceOptions.map(opt => (
                    <option key={opt.en} value={opt[lang]}>{opt[lang]}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.name}</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.contact.phone}</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.contact.email}</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.message}</label>
              <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none text-foreground" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))', color: 'hsl(202, 100%, 11%)' }}>
              <Send className="w-5 h-5" />
              {loading ? '...' : t.contact.send}
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="space-y-6">
            {contactCards.map((card) => (
              <motion.div key={card.title} whileHover={{ y: -4 }}
                className="glass-card-light rounded-2xl p-6 flex items-center gap-4 group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, hsl(166, 75%, 61%), hsl(181, 100%, 50%))' }}>
                  <card.icon className="w-6 h-6" style={{ color: 'hsl(202, 100%, 11%)' }} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">{card.title}</h4>
                  <p className="text-muted-foreground text-sm">{card.sub}</p>
                </div>
              </motion.div>
            ))}

            <motion.a href="https://www.instagram.com/proactive.agencyuz/" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }} className="glass-card-light rounded-2xl p-6 flex items-center gap-4 group hover:shadow-lg transition-all duration-300 block">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Instagram className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">@proactive.agencyuz</h4>
                <p className="text-muted-foreground text-sm">Instagram</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
