import { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';

import { SITE } from '~/config';
import { company } from '~/lib/company';

import JsonLd from '~/components/common/JsonLd';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';
import { FeedbackProvider } from '~/components/feedback/FeedbackProvider';
import { LogoAssemble } from '~/components/site/LogoAssemble';

import '~/assets/styles/base.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope', display: 'swap' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  openGraph: {
    locale: 'ru_RU',
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="ru"
      className={`motion-safe:scroll-smooth ${inter.variable} ${manrope.variable} font-sans`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-[#f6f4f1] tracking-tight text-[#161616] antialiased">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'GeneralContractor',
            name: company.shortName,
            legalName: company.fullName,
            url: SITE.origin,
            email: [...company.emails],
            taxID: company.inn,
            address: {
              '@type': 'PostalAddress',
              postalCode: company.postalCode,
              addressLocality: company.city,
              streetAddress: company.street,
              addressCountry: 'RU',
            },
          }}
        />
        <Providers>
          <FeedbackProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-[#111] focus:shadow-lg"
            >
              К содержанию
            </a>
            <Header />
            <LogoAssemble />
            <main id="main">{children}</main>
            <Footer2 />
          </FeedbackProvider>
        </Providers>
      </body>
    </html>
  );
}
