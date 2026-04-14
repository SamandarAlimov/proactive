import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { Tables, TablesInsert } from '@/integrations/supabase/types';
import { toast } from 'sonner';
import {
  LogOut, MessageSquare, Newspaper, Filter, Plus, Eye, Trash2,
  Settings, Bell, Search, Clock, CheckCircle2,
  AlertCircle, X, Save, Lock, User, RefreshCw, Mail, Phone, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

type Tab = 'contacts' | 'news' | 'settings';
type ContactStatus = 'all' | 'new' | 'in_progress' | 'done';
type ContactRow = Tables<'contacts'>;
type NewsRow = Tables<'news'>;
type NewsFormState = Pick<
  TablesInsert<'news'>,
  | 'title_uz'
  | 'title_en'
  | 'title_ru'
  | 'excerpt_uz'
  | 'excerpt_en'
  | 'excerpt_ru'
  | 'content_uz'
  | 'content_en'
  | 'content_ru'
  | 'published'
>;
type NewsTextField = Exclude<keyof NewsFormState, 'published'>;

const statusColors: Record<string, string> = {
  new: 'bg-primary/15 text-primary border-primary/20',
  in_progress: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20',
  done: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
};

const statusLabels: Record<string, string> = {
  all: 'Hammasi',
  new: 'Yangi',
  in_progress: 'Jarayonda',
  done: 'Bajarildi',
};

const titleFields: { key: Extract<NewsTextField, 'title_uz' | 'title_en' | 'title_ru'>; label: string }[] = [
  { key: 'title_uz', label: 'UZ' },
  { key: 'title_en', label: 'EN' },
  { key: 'title_ru', label: 'RU' },
];

const excerptFields: { key: Extract<NewsTextField, 'excerpt_uz' | 'excerpt_en' | 'excerpt_ru'>; label: string }[] = [
  { key: 'excerpt_uz', label: 'UZ' },
  { key: 'excerpt_en', label: 'EN' },
  { key: 'excerpt_ru', label: 'RU' },
];

const contentFields: { key: Extract<NewsTextField, 'content_uz' | 'content_en' | 'content_ru'>; label: string }[] = [
  { key: 'content_uz', label: 'UZ' },
  { key: 'content_en', label: 'EN' },
  { key: 'content_ru', label: 'RU' },
];

const createEmptyNewsForm = (): NewsFormState => ({
  title_uz: '',
  title_en: '',
  title_ru: '',
  excerpt_uz: '',
  excerpt_en: '',
  excerpt_ru: '',
  content_uz: '',
  content_en: '',
  content_ru: '',
  published: false,
});

const Admin = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('contacts');
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [news, setNews] = useState<NewsRow[]>([]);
  const [filterStatus, setFilterStatus] = useState<ContactStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewContact, setViewContact] = useState<ContactRow | null>(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  const [newsForm, setNewsForm] = useState<NewsFormState>(createEmptyNewsForm());

  const updateNewsField = <K extends keyof NewsFormState>(key: K, value: NewsFormState[K]) => {
    setNewsForm((prev) => ({ ...prev, [key]: value }));
  };

  const checkAuth = useCallback(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate('/admin/login');
    else setLoading(false);
  }, [navigate]);

  const fetchContacts = useCallback(async () => {
    const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (data) setContacts(data);
  }, []);

  const fetchNews = useCallback(async () => {
    const { data } = await supabase.from('news').select('*').order('created_at', { ascending: false });
    if (data) setNews(data);
  }, []);

  useEffect(() => {
    checkAuth();
    fetchContacts();
    fetchNews();
  }, [checkAuth, fetchContacts, fetchNews]);

  useEffect(() => {
    const channel = supabase
      .channel('admin-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, () => fetchContacts())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'news' }, () => fetchNews())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [fetchContacts, fetchNews]);

  const updateContactStatus = async (id: string, status: string) => {
    await supabase.from('contacts').update({ status }).eq('id', id);
    toast.success('Status yangilandi');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      const { error } = await supabase.from('news').update(newsForm).eq('id', editingNews.id);
      if (error) toast.error(error.message);
      else { toast.success('Yangilik yangilandi'); setEditingNews(null); setShowNewsForm(false); resetNewsForm(); }
    } else {
      const { error } = await supabase.from('news').insert([newsForm]);
      if (error) toast.error(error.message);
      else { toast.success("Yangilik qo'shildi"); setShowNewsForm(false); resetNewsForm(); }
    }
  };

  const resetNewsForm = () => {
    setNewsForm(createEmptyNewsForm());
  };

  const editNews = (item: NewsRow) => {
    setEditingNews(item);
    setNewsForm({
      title_uz: item.title_uz, title_en: item.title_en, title_ru: item.title_ru,
      excerpt_uz: item.excerpt_uz || '', excerpt_en: item.excerpt_en || '', excerpt_ru: item.excerpt_ru || '',
      content_uz: item.content_uz || '', content_en: item.content_en || '', content_ru: item.content_ru || '',
      published: item.published,
    });
    setShowNewsForm(true);
  };

  const deleteNews = async (id: string) => {
    if (!confirm("O'chirishni tasdiqlaysizmi?")) return;
    await supabase.from('news').delete().eq('id', id);
    toast.success("O'chirildi");
  };

  const togglePublish = async (id: string, published: boolean) => {
    await supabase.from('news').update({ published: !published }).eq('id', id);
    toast.success(published ? 'Nashrdan olindi' : 'Nashr qilindi');
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { toast.error('Parollar mos kelmaydi'); return; }
    if (newPassword.length < 6) { toast.error('Parol kamida 6 ta belgidan iborat bo\'lishi kerak'); return; }
    setChangingPassword(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.email) { toast.error('Sessiya topilmadi'); setChangingPassword(false); return; }
    const { error: signInError } = await supabase.auth.signInWithPassword({ email: session.user.email, password: currentPassword });
    if (signInError) { toast.error('Joriy parol noto\'g\'ri'); setChangingPassword(false); return; }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) { toast.error(error.message); }
    else { toast.success('Parol muvaffaqiyatli o\'zgartirildi'); setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }
    setChangingPassword(false);
  };

  const filteredContacts = contacts.filter((c) => {
    const matchStatus = filterStatus === 'all' || c.status === filterStatus;
    const matchSearch = !searchQuery ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchStatus && matchSearch;
  });

  const newCount = contacts.filter(c => c.status === 'new').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const inputCls = "w-full px-3 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
  const cardCls = "glass-card-light rounded-2xl p-5 hover:shadow-lg transition-all";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card-light border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/10">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div>
              <h1 className="font-bold text-sm text-foreground">Proactive Admin</h1>
              <p className="text-[10px] text-muted-foreground">Boshqaruv paneli</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {newCount > 0 && (
              <div className="relative">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full text-[8px] font-bold flex items-center justify-center text-primary-foreground">
                  {newCount}
                </span>
              </div>
            )}
            <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all text-xs">
              <LogOut className="w-3.5 h-3.5" /> Chiqish
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Jami kontaktlar', value: contacts.length, icon: MessageSquare, color: 'text-primary' },
            { label: 'Yangi xabarlar', value: newCount, icon: AlertCircle, color: 'text-primary' },
            { label: 'Jarayonda', value: contacts.filter(c => c.status === 'in_progress').length, icon: Clock, color: 'text-amber-500' },
            { label: 'Yangiliklar', value: news.length, icon: Newspaper, color: 'text-secondary' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className={cardCls}>
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mb-6 glass-card-light rounded-xl p-1 w-fit">
          {[
            { id: 'contacts' as Tab, label: 'Kontaktlar', icon: MessageSquare },
            { id: 'news' as Tab, label: 'Yangiliklar', icon: Newspaper },
            { id: 'settings' as Tab, label: 'Sozlamalar', icon: Settings },
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                tab === item.id ? 'bg-primary/15 text-primary border border-primary/20' : 'text-muted-foreground hover:text-foreground'
              }`}>
              <item.icon className="w-3.5 h-3.5" /> {item.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Contacts */}
          {tab === 'contacts' && (
            <motion.div key="contacts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Qidirish..."
                    className={`${inputCls} pl-10`} />
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                  {(['all', 'new', 'in_progress', 'done'] as ContactStatus[]).map(s => (
                    <button key={s} onClick={() => setFilterStatus(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                        filterStatus === s ? 'bg-primary/15 text-primary border-primary/20' : 'text-muted-foreground border-transparent hover:text-foreground'
                      }`}>
                      {statusLabels[s]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {filteredContacts.map((contact, i) => (
                  <motion.div key={contact.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    className={`${cardCls} cursor-pointer group`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm">{contact.name}</h3>
                            <p className="text-[11px] text-muted-foreground">{contact.phone} {contact.email && `• ${contact.email}`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-muted-foreground hidden sm:inline">
                          {new Date(contact.created_at).toLocaleDateString('uz', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                        <button onClick={() => setViewContact(contact)}
                          className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all" title="Ko'rish">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <select
                          value={contact.status}
                          onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border outline-none cursor-pointer bg-transparent ${statusColors[contact.status] || 'text-muted-foreground border-border'}`}>
                          <option value="new" className="bg-background text-foreground">Yangi</option>
                          <option value="in_progress" className="bg-background text-foreground">Jarayonda</option>
                          <option value="done" className="bg-background text-foreground">Bajarildi</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {filteredContacts.length === 0 && (
                  <div className="text-center py-16">
                    <MessageSquare className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">Kontaktlar topilmadi</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* News */}
          {tab === 'news' && (
            <motion.div key="news" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => { if (showNewsForm && !editingNews) { setShowNewsForm(false); } else { setEditingNews(null); resetNewsForm(); setShowNewsForm(true); } }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
                  {showNewsForm ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  {showNewsForm ? 'Bekor qilish' : "Yangilik qo'shish"}
                </button>
              </div>

              <AnimatePresence>
                {showNewsForm && (
                  <motion.form initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleNewsSubmit} className={`${cardCls} mb-6 space-y-5`}>
                    <h3 className="text-sm font-semibold text-foreground mb-4">{editingNews ? 'Yangilikni tahrirlash' : "Yangi yangilik qo'shish"}</h3>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Sarlavhalar</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {titleFields.map((f) => (
                          <div key={f.key}><label className="block text-[10px] text-muted-foreground mb-1">{f.label}</label>
                            <input required value={newsForm[f.key] ?? ''} onChange={e => updateNewsField(f.key, e.target.value)} className={inputCls} /></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Qisqacha</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {excerptFields.map((f) => (
                          <div key={f.key}><label className="block text-[10px] text-muted-foreground mb-1">{f.label}</label>
                            <textarea value={newsForm[f.key] ?? ''} onChange={e => updateNewsField(f.key, e.target.value)} className={`${inputCls} resize-none`} rows={2} /></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">To'liq matn</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {contentFields.map((f) => (
                          <div key={f.key}><label className="block text-[10px] text-muted-foreground mb-1">{f.label}</label>
                            <textarea value={newsForm[f.key] ?? ''} onChange={e => updateNewsField(f.key, e.target.value)} className={`${inputCls} resize-none`} rows={4} /></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={newsForm.published} onChange={e => updateNewsField('published', e.target.checked)}
                          className="rounded border-border bg-background text-primary focus:ring-primary/20" />
                        <span className="text-xs text-muted-foreground">Nashr qilish</span>
                      </label>
                      <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium hover:shadow-lg hover:shadow-primary/20 transition-all">
                        <Save className="w-3.5 h-3.5" /> {editingNews ? 'Yangilash' : 'Saqlash'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="space-y-3">
                {news.map((item, i) => (
                  <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                    className={`${cardCls} group`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-sm">{item.title_uz}</h3>
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                            item.published ? 'bg-primary/10 text-primary border-primary/20' : 'bg-muted text-muted-foreground border-border'
                          }`}>{item.published ? 'Nashr' : 'Qoralama'}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">{new Date(item.created_at).toLocaleDateString('uz', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => editNews(item)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"><Settings className="w-3.5 h-3.5" /></button>
                        <button onClick={() => togglePublish(item.id, item.published)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"><Eye className="w-3.5 h-3.5" /></button>
                        <button onClick={() => deleteNews(item.id)} className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {news.length === 0 && (
                  <div className="text-center py-16">
                    <Newspaper className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">Yangiliklar yo'q</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Settings */}
          {tab === 'settings' && (
            <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-lg">
              <div className={cardCls}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Parolni o'zgartirish</h3>
                    <p className="text-[11px] text-muted-foreground">Xavfsizlik uchun parolni yangilang</p>
                  </div>
                </div>
                <form onSubmit={handleChangePassword} className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Joriy parol</label>
                    <input type="password" required value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Yangi parol</label>
                    <input type="password" required value={newPassword} onChange={e => setNewPassword(e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Parolni tasdiqlash</label>
                    <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className={inputCls} />
                  </div>
                  <button type="submit" disabled={changingPassword}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60 active:scale-[0.98]">
                    {changingPassword ? (
                      <span className="flex items-center justify-center gap-2"><RefreshCw className="w-3.5 h-3.5 animate-spin" /> O'zgartirilmoqda...</span>
                    ) : "Parolni o'zgartirish"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contact View Modal */}
      <AnimatePresence>
        {viewContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setViewContact(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-card-light rounded-3xl p-8 w-full max-w-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{viewContact.name}</h3>
                    <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-lg text-[11px] font-medium border ${statusColors[viewContact.status] || ''}`}>
                      {statusLabels[viewContact.status] || viewContact.status}
                    </span>
                  </div>
                </div>
                <button onClick={() => setViewContact(null)} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{viewContact.phone}</span>
                </div>
                {viewContact.email && (
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{viewContact.email}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {new Date(viewContact.created_at).toLocaleDateString('uz', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Xabar</p>
                  <p className="text-foreground leading-relaxed">{viewContact.message}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <select
                  value={viewContact.status}
                  onChange={(e) => { updateContactStatus(viewContact.id, e.target.value); setViewContact({ ...viewContact, status: e.target.value }); }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium border outline-none cursor-pointer bg-transparent ${statusColors[viewContact.status] || 'text-muted-foreground border-border'}`}>
                  <option value="new" className="bg-background text-foreground">Yangi</option>
                  <option value="in_progress" className="bg-background text-foreground">Jarayonda</option>
                  <option value="done" className="bg-background text-foreground">Bajarildi</option>
                </select>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
