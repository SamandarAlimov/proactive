# Proactive

`Proactive` - bu premium agency website va marketing platforma. Loyiha `React + Vite + TypeScript + Tailwind CSS + Framer Motion` stackida yozilgan. Platforma public marketing sahifalari, portfolio/case-study sahifalari, academy sahifasi, contact lead formasi va `Supabase` bilan ishlaydigan admin panelni o'z ichiga oladi.

## Loyiha haqida

Platformaning asosiy maqsadi:

- Proactive agentligining public landing page va korporativ presentatsiya platformasi bo'lish
- xizmatlar, loyihalar va jamoani premium ko'rinishda namoyish qilish
- contact form orqali lead yig'ish
- admin panel orqali kontaktlar va news yozuvlarini boshqarish
- `uz / en / ru` tillarida ishlash
- light / dark theme qo'llab-quvvatlash
- SEO uchun canonical, meta, Open Graph, Twitter Card, JSON-LD va sitemap qatlamiga ega bo'lish

## Hozirgi asosiy imkoniyatlar

- Hero-led landing page
- Strategik marketing agency positioning
- `About`, `Services`, `Projects`, `Team`, `Academy`, `Events`, `Careers`, `Internship`, `Contact` sahifalari
- service detail sahifalari
- project detail / case-study sahifalari
- founder va team showcase bloklari
- contact form orqali lead yuborish
- admin login va admin dashboard
- SEO component orqali page-level meta management
- static `robots.txt`, `sitemap.xml`, OG image
- Vercel uchun SPA routing fallback

## Texnologik stack

- `React 18`
- `Vite 5`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `React Router DOM`
- `@tanstack/react-query`
- `Supabase`
- `next-themes`
- `lucide-react`
- `Vitest`
- `ESLint`

## Arxitektura overview

Loyiha bir nechta qatlamga bo'lingan:

- `src/pages/` - route-level sahifalar
- `src/components/` - reusable section va UI komponentlar
- `src/components/contact/` - contact form field system
- `src/components/ui/` - shadcn/ui asosidagi primitive komponentlar
- `src/lib/` - i18n, SEO, motion, config va helper qatlamlari
- `src/hooks/` - scroll/motion va boshqa custom hooklar
- `src/integrations/supabase/` - Supabase client va generated types
- `public/` - static SEO fayllar (`robots.txt`, `sitemap.xml`, OG image, favicon)
- `supabase/migrations/` - database migrationlar

## Muhim funksional qatlamlar

### 1. Routing

Routing [src/App.tsx](src/App.tsx) ichida `react-router-dom` orqali boshqariladi.

Hozir routerga ulangan public route'lar:

- `/`
- `/about`
- `/services`
- `/services/:slug`
- `/projects`
- `/projects/:slug`
- `/team`
- `/academy`
- `/events`
- `/careers`
- `/internship`
- `/contact`
- `/admin`
- `/admin/login`
- `*` (`NotFound`)

Muhim izoh:

- `src/pages/NewsPage.tsx` va `src/pages/NewsArticlePage.tsx` fayllari codebase ichida bor
- lekin hozir `App.tsx` ichida routerga ulanmagan
- shu sabab ular hozir public route sifatida aktiv emas

### 2. SEO

SEO uchun alohida reusable qatlam ishlatiladi:

- [src/components/SEO.tsx](src/components/SEO.tsx)
- [src/lib/seo.ts](src/lib/seo.ts)

Bu qatlam quyidagilarni boshqaradi:

- `title`
- `meta description`
- `keywords`
- `robots`
- `canonical`
- `Open Graph`
- `Twitter Card`
- `JSON-LD structured data`
- `html lang`

Static SEO fayllar:

- [public/robots.txt](public/robots.txt)
- [public/sitemap.xml](public/sitemap.xml)
- [public/og-proactive.svg](public/og-proactive.svg)

### 3. Theme

Theme system:

- `light / dark mode`
- `next-themes`
- shared theme tokens `index.css` va `tailwind.config.ts` orqali

Asosiy theme komponentlar:

- [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx)
- [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx)

### 4. i18n

Til tizimi `uz / en / ru` uchun yozilgan:

- [src/lib/i18n.tsx](src/lib/i18n.tsx)

Ba'zi sahifalar va qatlamlarda localized data config ko'rinishida ham saqlanadi:

- [src/lib/service-config.ts](src/lib/service-config.ts)
- [src/lib/team-members.ts](src/lib/team-members.ts)
- [src/lib/founder-profile.ts](src/lib/founder-profile.ts)
- [src/locales/academy.ru.json](src/locales/academy.ru.json)

### 5. Motion / Scroll animation

Scroll animation va reveal system reusable tarzda ajratilgan:

- [src/lib/motion.ts](src/lib/motion.ts)
- [src/hooks/useScrollAnimation.ts](src/hooks/useScrollAnimation.ts)
- [src/hooks/useRevealOnScroll.ts](src/hooks/useRevealOnScroll.ts)
- [src/hooks/useScrollDirection.ts](src/hooks/useScrollDirection.ts)

### 6. Contact va lead form

Contact formning asosiy qatlamlari:

- [src/components/Contact.tsx](src/components/Contact.tsx)
- [src/pages/ContactPage.tsx](src/pages/ContactPage.tsx)
- [src/components/contact/ContactFormFields.tsx](src/components/contact/ContactFormFields.tsx)
- [src/components/contact/contactFieldStyles.ts](src/components/contact/contactFieldStyles.ts)
- [src/lib/contact-form.ts](src/lib/contact-form.ts)
- [src/lib/contact-details.ts](src/lib/contact-details.ts)

### 7. Supabase integration

Supabase client va types:

- [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts)
- [src/integrations/supabase/types.ts](src/integrations/supabase/types.ts)

Supabase hozir asosan quyidagilar uchun ishlatiladi:

- contact lead'larni saqlash
- admin login/auth
- admin panelda kontakt va news yozuvlarini boshqarish

## To'liq strukturasi

Quyida projectning hozirgi real strukturasi soddalashtirilgan, lekin batafsil ko'rinishda berilgan:

```text
Proactive/
|-- public/
|   |-- favicon.ico
|   |-- og-proactive.svg
|   |-- placeholder.svg
|   |-- robots.txt
|   `-- sitemap.xml
|-- src/
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   |-- vite-env.d.ts
|   |-- assets/
|   |   |-- academy-speaker.jpg
|   |   |-- founder-habibullo.png
|   |   |-- founder-photo.jpg
|   |   |-- hero-bg.jpg
|   |   |-- marf-project.png
|   |   |-- mis-project.png
|   |   |-- proactive-logo.jpg
|   |   |-- team-hover.png
|   |   |-- team-photo.png
|   |   |-- team/
|   |   |   |-- member-1.png
|   |   |   |-- member-1-hover.png
|   |   |   |-- member-2.png
|   |   |   |-- member-2-hover.png
|   |   |   |-- member-3.png
|   |   |   |-- member-3-hover.png
|   |   |   |-- member-4.png
|   |   |   |-- member-4-hover.png
|   |   |   |-- member-5.png
|   |   |   |-- member-5-hover.png
|   |   |   |-- member-6.png
|   |   |   |-- member-6-hover.png
|   |   |   |-- member-7.png
|   |   |   |-- member-7-hover.png
|   |   |   |-- member-8.png
|   |   |   |-- member-8-hover.png
|   |   |   |-- member-9.png
|   |   |   |-- member-9-hover.png
|   |   |   |-- member-10.png
|   |   |   `-- member-10-hover.png
|   |   `-- projects/
|   |       |-- aurus/
|   |       |   |-- aurus-hero.webp
|   |       |   |-- aurus-gallery-01.webp
|   |       |   |-- aurus-gallery-02.webp
|   |       |   |-- aurus-gallery-03.webp
|   |       |   |-- aurus-gallery-04.webp
|   |       |   |-- aurus-gallery-05.webp
|   |       |   |-- aurus-gallery-06.webp
|   |       |   |-- aurus-gallery-07.webp
|   |       |   `-- aurus-gallery-08.webp
|   |       |-- marf/
|   |       |   |-- marf-gallery-01.webp
|   |       |   |-- marf-gallery-02.webp
|   |       |   |-- marf-gallery-03.webp
|   |       |   |-- marf-gallery-04.webp
|   |       |   |-- marf-gallery-05.webp
|   |       |   |-- marf-gallery-06.webp
|   |       |   `-- marf-gallery-07.webp
|   |       `-- milestone/
|   |           |-- milestone-hero.webp
|   |           |-- milestone-gallery-01.webp
|   |           |-- milestone-gallery-02.webp
|   |           |-- milestone-gallery-03.webp
|   |           |-- milestone-gallery-04.webp
|   |           |-- milestone-gallery-05.webp
|   |           |-- milestone-gallery-06.webp
|   |           |-- milestone-gallery-07.webp
|   |           |-- milestone-gallery-08.webp
|   |           |-- milestone-gallery-09.webp
|   |           `-- milestone-gallery-10.webp
|   |-- components/
|   |   |-- About.tsx
|   |   |-- Clients.tsx
|   |   |-- Contact.tsx
|   |   |-- ContactSection.tsx
|   |   |-- EmailInput.tsx
|   |   |-- Footer.tsx
|   |   |-- FounderSpecialtyChips.tsx
|   |   |-- Hero.tsx
|   |   |-- Internship.tsx
|   |   |-- Navbar.tsx
|   |   |-- NavLink.tsx
|   |   |-- News.tsx
|   |   |-- PageLayout.tsx
|   |   |-- PhoneInput.tsx
|   |   |-- Projects.tsx
|   |   |-- SEO.tsx
|   |   |-- Services.tsx
|   |   |-- Team.tsx
|   |   |-- TeamShowcaseStrip.tsx
|   |   |-- ThemeProvider.tsx
|   |   |-- ThemeToggle.tsx
|   |   |-- contact/
|   |   |   |-- ContactFormFields.tsx
|   |   |   `-- contactFieldStyles.ts
|   |   `-- ui/
|   |       |-- accordion.tsx
|   |       |-- alert.tsx
|   |       |-- alert-dialog.tsx
|   |       |-- aspect-ratio.tsx
|   |       |-- avatar.tsx
|   |       |-- badge.tsx
|   |       |-- breadcrumb.tsx
|   |       |-- button.tsx
|   |       |-- calendar.tsx
|   |       |-- card.tsx
|   |       |-- carousel.tsx
|   |       |-- chart.tsx
|   |       |-- checkbox.tsx
|   |       |-- collapsible.tsx
|   |       |-- command.tsx
|   |       |-- context-menu.tsx
|   |       |-- dialog.tsx
|   |       |-- drawer.tsx
|   |       |-- dropdown-menu.tsx
|   |       |-- form.tsx
|   |       |-- hover-card.tsx
|   |       |-- input.tsx
|   |       |-- input-otp.tsx
|   |       |-- label.tsx
|   |       |-- menubar.tsx
|   |       |-- navigation-menu.tsx
|   |       |-- pagination.tsx
|   |       |-- popover.tsx
|   |       |-- progress.tsx
|   |       |-- radio-group.tsx
|   |       |-- resizable.tsx
|   |       |-- scroll-area.tsx
|   |       |-- select.tsx
|   |       |-- separator.tsx
|   |       |-- sheet.tsx
|   |       |-- sidebar.tsx
|   |       |-- skeleton.tsx
|   |       |-- slider.tsx
|   |       |-- sonner.tsx
|   |       |-- switch.tsx
|   |       |-- table.tsx
|   |       |-- tabs.tsx
|   |       |-- textarea.tsx
|   |       |-- toast.tsx
|   |       |-- toaster.tsx
|   |       |-- toggle.tsx
|   |       |-- toggle-group.tsx
|   |       |-- tooltip.tsx
|   |       `-- use-toast.ts
|   |-- hooks/
|   |   |-- use-mobile.tsx
|   |   |-- use-toast.ts
|   |   |-- useRevealOnScroll.ts
|   |   |-- useScrollAnimation.ts
|   |   `-- useScrollDirection.ts
|   |-- integrations/
|   |   `-- supabase/
|   |       |-- client.ts
|   |       `-- types.ts
|   |-- lib/
|   |   |-- client-list.ts
|   |   |-- contact-details.ts
|   |   |-- contact-form.ts
|   |   |-- founder-profile.ts
|   |   |-- i18n.tsx
|   |   |-- motion.ts
|   |   |-- seo.ts
|   |   |-- service-config.ts
|   |   |-- team-members.ts
|   |   |-- team-showcase-config.ts
|   |   `-- utils.ts
|   |-- locales/
|   |   `-- academy.ru.json
|   |-- pages/
|   |   |-- AboutPage.tsx
|   |   |-- AcademyPage.tsx
|   |   |-- Admin.tsx
|   |   |-- AdminLogin.tsx
|   |   |-- CareersPage.tsx
|   |   |-- ContactPage.tsx
|   |   |-- EventsPage.tsx
|   |   |-- Index.tsx
|   |   |-- InternshipPage.tsx
|   |   |-- NewsArticlePage.tsx        # codebase'da bor, routerga ulanmagan
|   |   |-- NewsPage.tsx               # codebase'da bor, routerga ulanmagan
|   |   |-- NotFound.tsx
|   |   |-- ProjectDetailPage.tsx
|   |   |-- ProjectsPage.tsx
|   |   |-- ServiceDetailPage.tsx
|   |   |-- ServicesPage.tsx
|   |   `-- TeamPage.tsx
|   `-- test/
|       |-- example.test.ts
|       `-- setup.ts
|-- supabase/
|   |-- config.toml
|   `-- migrations/
|       |-- 20260330153128_ab67b1e3-4425-4343-b313-3f44889268e6.sql
|       `-- 20260401073549_31f1f5ba-cbb6-463c-ab5f-33230e417ade.sql
|-- postcss.config.js
|-- tailwind.config.ts
|-- vite.config.ts
|-- vercel.json
|-- package.json
`-- README.md
```

## Aktiv route'lar

Quyidagi route'lar hozir `App.tsx` ichida aktiv:

| Route | Sahifa |
|---|---|
| `/` | Landing page |
| `/about` | Biz haqimizda |
| `/services` | Xizmatlar ro'yxati |
| `/services/:slug` | Xizmat detail |
| `/projects` | Loyiha ro'yxati |
| `/projects/:slug` | Loyiha detail / case-study |
| `/team` | Jamoa sahifasi |
| `/academy` | Academy / kurs sahifasi |
| `/events` | Tadbirlar |
| `/careers` | Ish va hamkorlik |
| `/internship` | Internship |
| `/contact` | Bog'lanish |
| `/admin` | Admin panel |
| `/admin/login` | Admin login |
| `*` | 404 page |

## Lokal ishga tushirish

### 1. Dependency o'rnatish

```bash
npm install
```

### 2. `.env` tayyorlash

Root'da `.env` fayl yarating:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SITE_URL=https://your-domain.com
```

Izoh:

- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase anon/public key
- `VITE_SITE_URL` - SEO canonical URL uchun tavsiya etiladi

Muhim:

- `VITE_SITE_URL` berilmasa, SEO canonical fallback runtime origin yoki `https://proactive.agency.uz` bo'ladi
- `contact`, `admin` va Supabase bilan bog'liq oqimlar uchun env kerak

### 3. Development server

```bash
npm run dev
```

Vite config bo'yicha local manzil:

```text
http://localhost:8080
```

## Scriptlar

```bash
npm run dev         # development server
npm run build       # production build
npm run build:dev   # development-mode build
npm run preview     # build preview
npm run lint        # eslint
npm run test        # vitest
npm run test:watch  # vitest watch
```

## Build

Production build:

```bash
npm run build
```

Natija:

- `dist/` papkasiga chiqadi

## Supabase haqida

Hozirgi Supabase oqimlari:

- `contacts` jadvaliga lead saqlash
- admin login/auth
- admin panel orqali `contacts` va `news` yozuvlarini boshqarish

Muhim fayllar:

- [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts)
- [src/integrations/supabase/types.ts](src/integrations/supabase/types.ts)
- `supabase/migrations/`

Migration qo'llash:

```bash
supabase db push
```

Yoki jamoa workflow'siga ko'ra migration SQL'larini Supabase project'ga deploy qiling.

## SEO haqida

Platformada SEO optimizatsiyasi quyidagi qatlamlar orqali ishlaydi:

- page-level `<SEO />` component
- `canonical`
- `robots`
- `Open Graph`
- `Twitter Card`
- `JSON-LD schema`
- `sitemap.xml`
- `robots.txt`

Muhim eslatma:

- yangi public route qo'shsangiz:
  - `src/App.tsx` yangilanishi kerak
  - kerak bo'lsa `public/sitemap.xml` ham yangilanishi kerak
  - page uchun `<SEO />` qo'shilishi kerak

## Vercel deploy

Loyiha Vercel uchun tayyorlangan.

[vercel.json](vercel.json) ichidagi hozirgi routing:

- avval real static fayllarni `filesystem` orqali beradi
- keyin SPA route'larni `index.html`ga rewrite qiladi

Bu `BrowserRouter` bilan ishlaydigan Vite SPA uchun kerak.

### Tavsiya etilgan deploy oqimi

1. Repository'ni Vercel'ga ulang
2. Framework sifatida `Vite` tanlang
3. Build command:

```bash
npm run build
```

4. Output directory:

```text
dist
```

5. Environment variable'larni kiriting:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SITE_URL`

## BrowserRouter / SPA routing eslatmasi

Loyiha `BrowserRouter` ishlatadi. Shu sabab quyidagi URL'lar refresh qilinganda ham ishlashi kerak:

- `/projects/marf`
- `/projects/aurus-pharm`
- `/services/marketing-strategy`
- `/team`
- `/contact`

Bu muammo [vercel.json](vercel.json) ichida hal qilingan.

## Theme va typography

Project:

- `light / dark mode` qo'llaydi
- brand tokenlar `index.css` va `tailwind.config.ts` orqali boshqariladi
- asosiy shrift oilalari:
  - `heading`: `Golos Text`
  - `body`: `Golos Text`
  - `brand`: `Manrope`

Muhim fayllar:

- [src/index.css](src/index.css)
- [tailwind.config.ts](tailwind.config.ts)

## Team va content config qatlamlari

Saytdagi ko'p kontent shared config shaklida turadi:

- [src/lib/service-config.ts](src/lib/service-config.ts)
- [src/lib/team-members.ts](src/lib/team-members.ts)
- [src/lib/founder-profile.ts](src/lib/founder-profile.ts)
- [src/lib/client-list.ts](src/lib/client-list.ts)
- [src/lib/contact-details.ts](src/lib/contact-details.ts)

Bu qatlamlarni ishlatish tavsiya qilinadi, chunki:

- content bir joydan boshqariladi
- sahifalar orasida bir xil ma'lumot ishlatiladi
- keyinchalik o'zgartirish kiritish osonlashadi

## Admin haqida

Admin sahifalari:

- `/admin/login`
- `/admin`

Admin panel imkoniyatlari:

- kontaktlarni ko'rish
- kontakt statusini o'zgartirish
- news yozuvlarini qo'shish
- news yozuvlarini tahrirlash
- news yozuvlarini o'chirish
- admin parolini yangilash

Muhim izoh:

- public `news` route hozir routerga ulanmagan
- lekin admin ichida `news` data management flow mavjud

## Troubleshooting

### 1. Route refresh paytida 404 chiqsa

Tekshiring:

- `vercel.json` root'da bormi
- deploy yangilangandimi
- output `dist` bo'lib turibdimi

### 2. Canonical / SEO domen noto'g'ri chiqsa

Tekshiring:

- `.env` ichida `VITE_SITE_URL` berilganmi

### 3. Contact yoki admin ishlamasa

Tekshiring:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- Supabase migrationlar apply qilinganmi
- `contacts` va `news` bilan bog'liq jadval/schema mavjudmi

### 4. Bo'sh sahifa yoki runtime error bo'lsa

Tekshiring:

- `npm run build` o'tyaptimi
- browser console'da error bormi
- env variable'lar to'g'rimi

## Tavsiya etilgan development tartibi

Development paytida:

1. `npm install`
2. `.env` tayyorlash
3. `npm run dev`
4. o'zgarishlardan keyin `npm run lint`
5. kerak bo'lsa `npm run test`
6. release oldidan `npm run build`

Deploy oldidan:

1. `npm run lint`
2. `npm run build`
3. Supabase migrationlar holatini tekshirish
4. `VITE_SITE_URL` production domen bilan to'g'ri berilganini tekshirish
5. `robots.txt` va `sitemap.xml` public route'lar bilan mosligini tekshirish

## Muhim eslatmalar

- Yangi public sahifa qo'shsangiz, `App.tsx`, SEO va sitemap qatlamlarini birga yangilang.
- Admin va Supabase bilan bog'liq o'zgarishlarda `types.ts` va migrationlar mos bo'lishi kerak.
- `NewsPage.tsx` va `NewsArticlePage.tsx` codebase'da bor, lekin hozir public routerga ulanmagan.
- `README` doim repo'ning haqiqiy joriy holatiga mos yangilanib borilishi kerak.

## Qisqa xulosa

Bu repo:

- premium agency landing page
- service + project detail platforma
- founder/team showcase
- academy va corporate pages
- contact lead form
- Supabase asosidagi admin panel
- SEO-ready Vite SPA

ko'rinishidagi to'liq web platforma hisoblanadi.
