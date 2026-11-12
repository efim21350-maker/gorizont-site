const originFromEnv = () => {
  if (process.env.NEXT_PUBLIC_SITE_ORIGIN) return process.env.NEXT_PUBLIC_SITE_ORIGIN;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

export const SITE = {
  name: 'ООО «Горизонт»',
  origin: originFromEnv(),
  basePathname: '/',
  trailingSlash: false,
  title: 'ООО «Горизонт» — благоустройство, дороги и наружные сети в Санкт-Петербурге',
  description:
    'Строительная компания в Санкт-Петербурге: благоустройство и ландшафт, земляные работы, дорожное строительство, наружные сети водоснабжения и канализации.',
} as const;
