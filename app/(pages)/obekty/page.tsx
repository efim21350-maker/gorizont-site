import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';

export const metadata: Metadata = buildMetadata({
  title: 'Объекты',
  description: 'Портфолио ООО «Горизонт» ещё не опубликовано. Карточки объектов отмечены как требующие уточнения.',
  path: '/obekty',
});

const slots = ['01', '02', '03', '04'];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Объекты"
        title="Здесь будут работы, а не вымышленные кейсы"
        lede="Фотографий, названий заказчиков и объёмов пока нет. Карточки ниже — места под согласованные объекты, а не примеры выполненных контрактов."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="grid gap-px bg-black/10 md:grid-cols-2">
            {slots.map((slot) => (
              <article key={slot} className="bg-white p-7 md:p-10">
                <div className="relative h-28 overflow-hidden bg-[#111]">
                  <div className="absolute inset-x-0 top-1/2 h-[3px] bg-white" />
                  <div className="absolute top-1/2 right-6 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full bg-[#C5001C]">
                    <span className="absolute inset-x-0 top-[58%] h-[12%] bg-white" />
                    <span className="absolute inset-x-0 top-[76%] h-[12%] bg-white" />
                  </div>
                </div>
                <p className="mt-6 text-xs tracking-[0.16em] text-[#C5001C] uppercase">Объект {slot}</p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">[уточнить]</h2>
                <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">
                  Название, адрес, год, состав работ и фотографии не опубликованы.
                </p>
              </article>
            ))}
          </div>
          <FeedbackButton className="mt-10 btn btn-primary">Обратная связь</FeedbackButton>
        </div>
      </section>
    </>
  );
}
