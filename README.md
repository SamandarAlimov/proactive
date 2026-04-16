# Proactive

Proactive uchun yaratilgan premium agency website. Loyiha `React + Vite + TypeScript + Tailwind CSS + Framer Motion` stackida yozilgan va public marketing sayti, portfolio sahifalari, yangiliklar moduli hamda Supabase bilan ishlaydigan admin oqimini o'z ichiga oladi.

## Asosiy imkoniyatlar

- Founder-led agency landing page
- UZ / EN / RU til qo'llovi
- Xizmatlar va loyiha detail sahifalari
- Premium `Team` section va alohida `Team` page
- News/blog bo'limi
- Contact form orqali lead yig'ish
- Supabase asosidagi admin panel
- Light / dark theme
- Vercel uchun SPA routing fallback
- `sitemap.xml` uchun Supabase Edge Function rewrite

## Stack

- `React 18`
- `Vite 5`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `React Router DOM`
- `@tanstack/react-query`
- `Supabase`

## Muhim papkalar

```text
src/
  components/        UI va section komponentlar
  content/           Typed content layer
  integrations/      Supabase client va generated types
  lib/               i18n, utils va boshqa yordamchi qatlam
  pages/             Route-level page komponentlari
supabase/
  migrations/        DB migrationlar
vercel.json          Vercel routing va rewrite config

## Struktura

```text
Proactive/
  public/
    favicon.ico
    placeholder.svg
    robots.txt
  src/
    App.tsx
    App.css
    assets/
      proactive-logo.jpg
      hero-bg.jpg
      founder-photo.jpg
      founder-habibullo.png
      academy-speaker.jpg
      team-photo.png
      team-hover.png
      team/
        member-1.png
        member-1-hover.png
        member-2.png
        member-2-hover.png
        member-3.png
        member-3-hover.png
        member-4.png
        member-4-hover.png
        member-5.png
        member-5-hover.png
        member-6.png
        member-6-hover.png
        member-7.png
        member-7-hover.png
        member-8.png
        member-8-hover.png
        member-9.png
        member-9-hover.png
        member-10.png
        member-10-hover.png
      projects/
        marf-project.png
        mis-project.png
        milestone/
          milestone-hero.webp
          milestone-gallery-01.webp
          milestone-gallery-02.webp
          milestone-gallery-03.webp
          milestone-gallery-04.webp
          milestone-gallery-05.webp
          milestone-gallery-06.webp
          milestone-gallery-07.webp
          milestone-gallery-08.webp
          milestone-gallery-09.webp
          milestone-gallery-10.webp
        marf/
          marf-gallery-01.webp
          marf-gallery-02.webp
          marf-gallery-03.webp
          marf-gallery-04.webp
          marf-gallery-05.webp
          marf-gallery-06.webp
          marf-gallery-07.webp
        aurus/
          aurus-hero.webp
          aurus-gallery-01.webp
          aurus-gallery-02.webp
          aurus-gallery-03.webp
          aurus-gallery-04.webp
          aurus-gallery-05.webp
          aurus-gallery-06.webp
          aurus-gallery-07.webp
          aurus-gallery-08.webp
    content/
    integrations/
      supabase/
        client.ts
        types.ts
    lib/
      i18n.tsx
      team-members.ts
      founder-profile.ts
      utils.ts
      contact-form.ts
    pages/
      AcademyPage.tsx
      AboutPage.tsx
      ContactPage.tsx
      TeamPage.tsx
      ServicesPage.tsx
      ServiceDetailPage.tsx
      ProjectsPage.tsx
      ProjectDetailPage.tsx
      NewsPage.tsx
      NewsArticlePage.tsx
      InternshipPage.tsx
      Index.tsx
      EventsPage.tsx
      CareersPage.tsx
      AdminLogin.tsx
      Admin.tsx
  supabase/
    migrations/
      20260401073549_31f1f5ba-cbb6-463c-ab5f-33230e417ade.sql
      20260330153128_ab67b1e3-4425-4343-b313-3f44889268e6.sql
    config.toml
  vercel.json
  README.md
  .env
```

## Struktura

Proactive/
  public/
    favicon.ico
    placeholder.svg
    robots.txt
  src/
    App.tsx
    App.css
    assets/
      proactive-logo.jpg
      hero-bg.jpg
      founder-photo.jpg
      founder-habibullo.png
      academy-speaker.jpg
      team-photo.png
      team-hover.png
      team/
        member-1.png
        member-1-hover.png
        member-2.png
        member-2-hover.png
        member-3.png
        member-3-hover.png
        member-4.png
        member-4-hover.png
        member-5.png
        member-5-hover.png
        member-6.png
        member-6-hover.png
        member-7.png
        member-7-hover.png
        member-8.png
        member-8-hover.png
        member-9.png
        member-9-hover.png
        member-10.png
        member-10-hover.png
      projects/
        marf-project.png
        mis-project.png
        milestone/
          milestone-hero.webp
          milestone-gallery-01.webp
          milestone-gallery-02.webp
          milestone-gallery-03.webp
          milestone-gallery-04.webp
          milestone-gallery-05.webp
          milestone-gallery-06.webp
          milestone-gallery-07.webp
          milestone-gallery-08.webp
          milestone-gallery-09.webp
          milestone-gallery-10.webp
    content/
    integrations/
      supabase/
        client.ts
        generated-types.ts
    lib/
      i18n.tsx
    pages/
  supabase/
    migrations/
      20260401073549_31f1f5ba-cbb6-463c-ab5f-33230e417ade.sql
      20260330153128_ab67b1e3-4425-4343-b313-3f44889268e6.sql
    config.toml
  vercel.json
  .env

## Struktura

```text
src/
  App.tsx
  App.css
  components/
  assets/
  content/
  integrations/
  lib/
  pages/
supabase/
  migrations/
  config.toml
vercel.json
README.md
.env
```
```

## Route'lar

Saytda hozir quyidagi asosiy route'lar bor:

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
- `/news`
- `/news/:id`
- `/internship`
- `/contact`
- `/admin`
- `/admin/login`

## Lokal ishga tushirish

### 1. Dependency o'rnatish

```bash
npm install
```

### 2. `.env` fayl tayyorlash

Loyiha root'ida `.env` fayl bo'lishi kerak:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

Izoh:

- public sahifalarning bir qismi Supabase env bo'lmasa ham ochiladi
- lekin `news`, `contact`, `admin` oqimlari Supabase env talab qiladi

### 3. Dev server

```bash
npm run dev
```

Default local manzil:

```text
http://localhost:8080
```

## Scriptlar

```bash
npm run dev         # local development
npm run build       # production build
npm run build:dev   # development mode build
npm run preview     # built app preview
npm run lint        # eslint
npm run test        # vitest
```

## Build

Production build:

```bash
npm run build
```

Natija `dist/` papkasiga chiqadi.

## Supabase

Supabase quyidagi oqimlarda ishlatiladi:

- contact lead'larni saqlash
- news post'larni o'qish
- admin login
- admin panel orqali news/contact boshqaruvi

Client fayli:

- [src/integrations/supabase/client.ts](src/integrations/supabase/client.ts)

DB migrationlar:

- `supabase/migrations/`

### Migration qo'llash

Agar schema o'zgargan bo'lsa, migrationlarni Supabase loyihangizga apply qiling:

```bash
supabase db push
```

Yoki team ichidagi workflow bo'yicha SQL migrationlarni Supabase project'ga deploy qiling.

## Vercel deploy

Loyiha Vercel uchun tayyorlangan. Root'da `vercel.json` bor va u quyidagilarni hal qiladi:

- `sitemap.xml` ni Supabase Edge Function'ga yo'naltiradi
- real static fayllarni buzmaydi
- client-side route refresh/direct open holatida `index.html` fallback beradi

Config fayli:

- [vercel.json](vercel.json)

### Tavsiya etilgan deploy oqimi

1. Repository'ni Vercel'ga ulang
2. Framework preset sifatida `Vite` tanlang
3. Build command:

```bash
npm run build
```

4. Output directory:

```text
dist
```

5. Environment variables qo'shing:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## SPA routing eslatmasi

Loyiha `BrowserRouter` ishlatadi. Shu sabab:

- `/projects/marf`
- `/team`
- `/services/marketing-strategy`

kabi URL'lar brauzer refresh qilinganda server tomonidan `index.html`ga tushishi kerak. Bu muammo `vercel.json` ichida hal qilingan.

## Theme va i18n

Loyiha:

- light/dark mode'ni qo'llaydi
- `uz`, `en`, `ru` tillarini qo'llaydi

Asosiy i18n va typed content layer:

- [src/lib/i18n.tsx](src/lib/i18n.tsx)
- `src/content/`

## Admin haqida

Admin sahifalari:

- `/admin/login`
- `/admin`

Admin orqali:

- news post qo'shish
- news post tahrirlash
- contact lead statuslarini ko'rish

Supabase env bo'lmasa admin oqimi ishlamaydi.

## Troubleshooting

### 1. Refresh qilganda route 404 bo'lyapti

Tekshiring:

- `vercel.json` root'da bormi
- Vercel deploy yangilangandimi
- Output `dist` bo'lib turibdimi

### 2. Bo'sh sahifa chiqyapti

Tekshiring:

- `npm run build` o'tyaptimi
- browser console'da runtime error yo'qmi
- `.env` dagi Supabase qiymatlar to'g'rimi

### 3. News yoki Contact ishlamayapti

Tekshiring:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- Supabase jadval va migrationlar apply qilinganmi

## Tavsiya etilgan ish tartibi

Development paytida:

1. `npm install`
2. `.env` tayyorlash
3. `npm run dev`
4. o'zgarishdan keyin `npm run build`
5. kerak bo'lsa `npm run test`

Deploy oldidan:

1. `npm run lint`
2. `npm run build`
3. Supabase migrationlar holatini tekshirish
4. Vercel env va routing config'ni tekshirish

## Eslatma

Bu loyiha content-heavy portfolio sayt bo'lgani uchun:

- `src/content/` ichidagi typed data layer'ni buzmasdan ishlash tavsiya qilinadi
- yangi route qo'shsangiz `App.tsx` va kerak bo'lsa `vercel.json`ni ham tekshiring
- Supabase bilan bog'liq o'zgarishlarda migration va generated types birga yangilanishi kerak
