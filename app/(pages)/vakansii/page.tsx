import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import { VacancyApply } from '~/components/site/VacancyApply';

export const metadata: Metadata = buildMetadata({
  title: 'Вакансии',
  description: 'Вакансия «Дорожный мастер». Санкт-Петербург и Ленинградская область.',
  path: '/vakansii',
});

export default function VacanciesPage() {
  return (
    <>
      <PageIntro eyebrow="Вакансии" title="Вакансии" lede="Открыта одна позиция." />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <article className="max-w-xl bg-white p-7 md:p-10">
            <h2 className="font-display text-3xl tracking-tight text-[#111] md:text-4xl">Дорожный мастер</h2>
            <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">Санкт-Петербург и Ленинградская область</p>
            <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">Условия обсудим на собеседовании.</p>
            <div className="mt-8">
              <VacancyApply />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
