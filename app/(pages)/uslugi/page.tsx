import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import ServiceIndex from '~/components/site/ServiceIndex';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';

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
        lede="Четыре направления, которые компания берёт в Санкт-Петербурге. Цены и типовые сметы здесь не приводятся: стоимость считается по проекту."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <ServiceIndex />
          <div className="mt-12 flex flex-col items-start gap-4 border border-black/10 bg-white p-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-[#222]">
              Нужен расчёт по объекту — опишите работы. Прайс-листа на сайте нет.
            </p>
            <FeedbackButton className="btn btn-primary">Обратная связь</FeedbackButton>
          </div>
        </div>
      </section>
    </>
  );
}
