import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import type { Language } from '@/lib/i18n';
import {
  buildAbsoluteUrl,
  defaultSeoImage,
  localizedSiteKeywords,
  seoLocaleMap,
  siteConfig,
  type SeoStructuredData,
  withSiteName,
} from '@/lib/seo';

type SEOProps = {
  title: string;
  description: string;
  lang: Language;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noindex?: boolean;
  structuredData?: SeoStructuredData[];
};

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

const upsertMetaTag = ({
  content,
  name,
  property,
}: {
  content: string;
  name?: string;
  property?: string;
}) => {
  if (typeof document === 'undefined' || (!name && !property)) {
    return;
  }

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let node = document.head.querySelector<HTMLMetaElement>(selector);

  if (!node) {
    node = document.createElement('meta');
    if (name) {
      node.setAttribute('name', name);
    }
    if (property) {
      node.setAttribute('property', property);
    }
    document.head.appendChild(node);
  }

  node.setAttribute('content', content);
};

const upsertLinkTag = ({
  href,
  rel,
}: {
  href: string;
  rel: string;
}) => {
  if (typeof document === 'undefined') {
    return;
  }

  let node = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', rel);
    document.head.appendChild(node);
  }

  node.setAttribute('href', href);
};

const removeSeoScripts = () => {
  if (typeof document === 'undefined') {
    return;
  }

  document
    .querySelectorAll('script[data-seo-script="true"]')
    .forEach((node) => node.remove());
};

const SEO = ({
  description,
  image,
  keywords,
  lang,
  noindex = false,
  path,
  structuredData = [],
  title,
  type = 'website',
}: SEOProps) => {
  const location = useLocation();

  const resolvedPath = path || location.pathname;
  const canonicalUrl = useMemo(
    () => buildAbsoluteUrl(resolvedPath),
    [resolvedPath],
  );
  const imageUrl = useMemo(() => {
    if (!image) {
      return defaultSeoImage;
    }

    return isAbsoluteUrl(image) ? image : buildAbsoluteUrl(image);
  }, [image]);

  const resolvedTitle = withSiteName(title);
  const keywordsContent = (keywords?.length ? keywords : localizedSiteKeywords[lang]).join(
    ', ',
  );
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : siteConfig.defaultRobots;
  const serializedStructuredData = useMemo(
    () => JSON.stringify(structuredData),
    [structuredData],
  );

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.title = resolvedTitle;
    document.documentElement.lang = lang;

    upsertMetaTag({ name: 'description', content: description });
    upsertMetaTag({ name: 'keywords', content: keywordsContent });
    upsertMetaTag({ name: 'robots', content: robotsContent });
    upsertMetaTag({ name: 'author', content: siteConfig.name });
    upsertMetaTag({ name: 'application-name', content: siteConfig.name });
    upsertMetaTag({ name: 'theme-color', content: '#082233' });

    upsertMetaTag({ property: 'og:title', content: resolvedTitle });
    upsertMetaTag({ property: 'og:description', content: description });
    upsertMetaTag({ property: 'og:type', content: type });
    upsertMetaTag({ property: 'og:url', content: canonicalUrl });
    upsertMetaTag({ property: 'og:image', content: imageUrl });
    upsertMetaTag({ property: 'og:site_name', content: siteConfig.name });
    upsertMetaTag({ property: 'og:locale', content: seoLocaleMap[lang] });

    upsertMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMetaTag({ name: 'twitter:title', content: resolvedTitle });
    upsertMetaTag({ name: 'twitter:description', content: description });
    upsertMetaTag({ name: 'twitter:image', content: imageUrl });

    upsertLinkTag({ rel: 'canonical', href: canonicalUrl });

    removeSeoScripts();

    structuredData.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoScript = 'true';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      removeSeoScripts();
    };
  }, [
    canonicalUrl,
    description,
    imageUrl,
    keywordsContent,
    lang,
    noindex,
    resolvedTitle,
    robotsContent,
    serializedStructuredData,
    structuredData,
    type,
  ]);

  return null;
};

export default SEO;
