import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import ServiceIndex from '~/components/site/ServiceIndex';
export const metadata: Metadata = buildMetadata({
  title: 'Услуги',
  description:
    'Благоустройство и ландшафт, земляные работы, дорожное строительство, наружные сети водоснабжения и канализации. Санкт-Петербург.',
  path: '/uslugi',
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Работы по территории, дорогам и сетям"
        lede="Четыре направления, которые компания берёт в Санкт-Петербурге."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <ServiceIndex />
        </div>
      </section>
    </>
  );
}
