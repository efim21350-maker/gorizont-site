import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import { company, sroSummary } from '~/lib/company';

export const metadata: Metadata = buildMetadata({
  title: 'Вопросы',
  description: 'Короткие ответы об ООО «Горизонт»: география, услуги и СРО.',
  path: '/voprosy',
});

const items = [
  {
    q: 'Где вы работаете?',
    a: 'В Санкт-Петербурге с 2018 года. Также выполняем работы за пределами города, в Ленинградской области.',
  },
  {
    q: 'Какие работы выполняете?',
    a: 'Благоустройство и ландшафт, земляные работы, дорожное строительство, наружные сети водоснабжения и канализации.',
  },
  {
    q: 'Есть ли допуск СРО?',
    a: sroSummary,
  },
  {
    q: 'Как отправить заявку?',
    a: `Кнопка «Обратная связь», форма на странице контактов или почта ${company.emails.join(' и ')}.`,
  },
];

export default function QuestionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Вопросы"
        title="То, что уже можно сказать точно"
        lede="Короткие ответы о компании, работах и СРО."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <dl className="divide-y divide-black/10 border-y border-black/10">
            {items.map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-display text-2xl tracking-tight">{item.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-[#333]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
