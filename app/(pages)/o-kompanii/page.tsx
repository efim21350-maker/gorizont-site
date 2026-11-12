import type { Metadata } from 'next';
import Link from 'next/link';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import { company, companyProfile, sroSummary } from '~/lib/company';

export const metadata: Metadata = buildMetadata({
  title: 'О компании',
  description: companyProfile.join(' '),
  path: '/o-kompanii',
});

const requisites = [
  ['Полное наименование', company.fullName],
  ['Сокращённое наименование', company.shortName],
  ['ИНН', company.inn],
  ['КПП', company.kpp],
  ['ОГРН', company.ogrn],
  ['ОКПО', company.okpo],
  ['ОКВЭД', `${company.okved} — ${company.okvedTitle}`],
  ['Юридический и фактический адрес', company.address],
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="О компании" title="Строительная компания" lede={companyProfile.join(' ')} />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-12">
            <div className="border border-black/10 bg-white p-6">
              <p className="text-xs tracking-[0.16em] text-[#C5001C] uppercase">СРО</p>
              <p className="mt-3 text-base leading-relaxed">{sroSummary}</p>
              <p className="mt-3 text-base leading-relaxed">
                В выписке № {company.sro.extractNo} отмечен первый уровень ответственности компенсационного фонда
                возмещения вреда: стоимость работ по одному договору не превышает 90 млн руб. Уровни компенсационного
                фонда договорных обязательств не отмечены. Допуска к особо опасным, технически сложным и уникальным
                объектам и к объектам использования атомной энергии в этой выписке нет.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Реквизиты</h2>
          <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {requisites.map(([label, value]) => (
              <div key={label} className="grid gap-2 py-4 md:grid-cols-12">
                <dt className="text-sm text-[#6b6b6b] md:col-span-4">{label}</dt>
                <dd className="text-base text-[#111] md:col-span-8">{value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/kontakty" className="mt-10 btn btn-primary">
            Контакты
          </Link>
        </div>
      </section>
    </>
  );
}
