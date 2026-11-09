import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import ContactRequestForm from '~/components/feedback/ContactRequestForm';

export const metadata: Metadata = buildMetadata({
  title: 'Стоимость',
  description: 'Стоимость работ ООО «Горизонт» рассчитывается по проекту. Публичного прайс-листа нет.',
  path: '/stoimost',
});

export default function PricePage() {
  return (
    <>
      <PageIntro
        eyebrow="Стоимость"
        title="Считаем по проекту, не по прайсу"
        lede="На сайте нет цен, тарифов и пакетов. Смета появляется после описания объекта и, если он есть, проекта."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-tight tracking-tight text-[#111] md:text-4xl">
              Стоимость рассчитывается по проекту. Отправьте заявку.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#3a3a3a]">
              Срок подготовки расчёта — [уточнить]. Аванс, гарантийные удержания и порядок оплаты в договоре —
              [уточнить].
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactRequestForm idPrefix="price" />
          </div>
        </div>
      </section>
    </>
  );
}
