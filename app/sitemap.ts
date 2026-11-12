import type { MetadataRoute } from 'next';

import { SITE } from '~/config';

const STATIC_ROUTES = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/uslugi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/o-kompanii', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/obekty', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/vakansii', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/kontakty', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/voprosy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
] as const;

const buildUrl = (path: string) => {
  const base = `${SITE.origin}${SITE.basePathname}`.replace(/\/$/, '');
  const url = `${base}${path}`;
  return SITE.trailingSlash && path !== '' ? `${url}/` : url;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: buildUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
