import { motion } from 'framer-motion';
import { Instagram, Send } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import BrandMark from '@/components/BrandMark';
import FounderSpecialtyChips from '@/components/FounderSpecialtyChips';
import founderHabibullo from '@/assets/founder-habibullo.png';
import { brandbookContent, founderMilestones } from '@/lib/brandbook-content';
import { founderProfile, type FounderLang } from '@/lib/founder-profile';
import { useI18n } from '@/lib/i18n';

const AboutPage = () => {
  const { lang } = useI18n();
  const currentLang = (lang in brandbookContent.aboutPage.platformTitle ? lang : 'uz') as FounderLang;
  const pageContent = brandbookContent.aboutPage;

  return (
    <PageLayout>
      <section className="section-padding overflow-hidden bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="brand-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {pageContent.platformTitle[currentLang]}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-5xl text-4xl font-heading font-bold md:text-6xl"
          >
            {brandbookContent.homeAbout.title[currentLang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary-foreground/72"
          >
            {brandbookContent.homeAbout.description[currentLang]}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-8 py-6 md:px-12">
                <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                  {pageContent.platformTitle[currentLang]}
                </h2>
              </div>
              <div className="px-8 py-10 md:px-12 md:py-12">
                <p className="max-w-5xl text-2xl leading-tight text-foreground md:text-3xl lg:text-[3rem]">
                  {pageContent.platformText[currentLang]}
                </p>
              </div>
            </motion.section>

            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="brand-surface overflow-hidden rounded-[2rem] border border-white/10 p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
              >
                <BrandMark tone="light" size="lg" />
                <h2 className="mt-8 text-2xl font-heading font-bold">{pageContent.foundingTitle[currentLang]}</h2>
                <p className="mt-4 text-base leading-relaxed text-white/74">{pageContent.foundingText[currentLang]}</p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="overflow-hidden rounded-[2rem] border border-border/70 bg-card p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
                  {pageContent.archetypeTitle[currentLang]}
                </h2>
                <h3 className="mt-4 text-3xl font-heading font-bold text-foreground">
                  {pageContent.archetypeName[currentLang]}
                </h3>
                <p className="mt-3 font-accent text-2xl leading-none text-foreground/84">
                  {pageContent.archetypeQuote[currentLang]}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {pageContent.archetypeText[currentLang]}
                </p>
                <ul className="mt-6 space-y-3">
                  {pageContent.archetypeTraits[currentLang].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/82">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[380px] overflow-hidden bg-[#f3efe9] dark:bg-[#141414]">
                <img src={founderHabibullo} alt={founderProfile.name} className="h-full w-full object-cover object-center" />
              </div>

              <div className="p-8 md:p-10 lg:p-14">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                  {founderProfile.intro[currentLang]}
                </span>
                <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {founderProfile.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {founderProfile.role[currentLang]}
                </p>

                <FounderSpecialtyChips tags={founderProfile.tags[currentLang]} className="mt-6" />

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {founderProfile.summary[currentLang]}
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {founderMilestones.map((item) => (
                    <div key={item.label[currentLang]} className="rounded-[1.25rem] border border-border/70 bg-background px-4 py-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
                        {item.label[currentLang]}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/84">{item.text[currentLang]}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={founderProfile.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:bg-secondary/92"
                  >
                    <Send className="h-4 w-4" />
                    t.me/habibullo_sadulloyev
                  </a>
                  <a
                    href={founderProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    @habibullo_sadulloyev
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                {pageContent.forWhomTitle[currentLang]}
              </h2>
            </div>
            <div className="grid gap-6 px-8 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3">
              {pageContent.forWhomItems.map((item) => (
                <div key={item.title[currentLang]} className="rounded-[1.5rem] border border-border/70 bg-background p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground">{item.title[currentLang]}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description[currentLang]}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-8 py-6 md:px-12">
                <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                  {pageContent.useWhenTitle[currentLang]}
                </h2>
              </div>
              <div className="space-y-4 px-8 py-8 md:px-12 md:py-10">
                {pageContent.useWhenItems[currentLang].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/88">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-8 py-6 md:px-12">
                <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                  {pageContent.useHowTitle[currentLang]}
                </h2>
              </div>
              <div className="space-y-4 px-8 py-8 md:px-12 md:py-10">
                {pageContent.useHowItems[currentLang].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/88">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#083b57] text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="border-b border-white/20 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">{pageContent.missionTitle[currentLang]}</h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-5xl text-3xl font-medium leading-tight text-primary md:text-4xl lg:text-[3.25rem]">
                {pageContent.missionText[currentLang]}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.outlookTitle[currentLang]}</h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-6xl text-2xl leading-tight text-foreground md:text-3xl lg:text-[3rem]">
                {pageContent.outlookText[currentLang]}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">{pageContent.valuesTitle[currentLang]}</h2>
            </div>
            <div className="grid gap-x-8 gap-y-10 px-8 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-3">
              {pageContent.values.map((value, index) => (
                <div key={value.title[currentLang]} className={index === pageContent.values.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
                  <h3 className="text-[1.8rem] font-heading font-bold leading-tight text-foreground">
                    {value.title[currentLang]}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{value.description[currentLang]}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                {pageContent.positioningTitle[currentLang]}
              </h2>
            </div>
            <div className="px-8 py-10 md:px-12 md:py-12">
              <p className="max-w-6xl text-2xl leading-tight text-foreground md:text-3xl lg:text-[3rem]">
                {pageContent.positioningLead[currentLang]}
                <strong className="font-semibold">{pageContent.positioningStrongOne[currentLang]}</strong>
                {pageContent.positioningMiddle[currentLang]}
                <strong className="font-semibold">{pageContent.positioningStrongTwo[currentLang]}</strong>
                {pageContent.positioningEnd[currentLang]}
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66 }}
            className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="border-b border-border/70 px-8 py-6 md:px-12">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                {pageContent.audienceTitle[currentLang]}
              </h2>
            </div>
            <div className="px-8 py-8 md:px-12 md:py-10">
              <ul className="space-y-4">
                {pageContent.audienceItems[currentLang].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-foreground/90">
                    <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-8 py-6 md:px-12">
                <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                  {pageContent.toneTitle[currentLang]}
                </h2>
              </div>
              <div className="grid gap-5 px-8 py-8 md:px-12 md:py-10">
                {pageContent.toneItems.map((item) => (
                  <div key={item.title[currentLang]} className="rounded-[1.5rem] border border-border/70 bg-background p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
                      {item.title[currentLang]}
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.description[currentLang]}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-border/70 px-8 py-6 md:px-12">
                <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
                  {pageContent.photoTitle[currentLang]}
                </h2>
              </div>
              <div className="space-y-4 px-8 py-8 md:px-12 md:py-10">
                {pageContent.photoItems[currentLang].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/88">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
