import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import ContactRequestForm from '~/components/feedback/ContactRequestForm';
import { company, mapHref } from '~/lib/company';

export const metadata: Metadata = buildMetadata({
  title: 'Контакты',
  description: 'Адрес и почта ООО «Горизонт» в Санкт-Петербурге. Форма обратной связи.',
  path: '/kontakty',
});

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Офис на Кондратьевском"
        lede="Юридический и фактический адрес совпадают. Банковские реквизиты по запросу, на этой странице их нет."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl tracking-tight">Как связаться</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">Адрес</dt>
                <dd className="mt-2 text-base leading-relaxed">{company.address}</dd>
                <dd className="mt-2">
                  <a className="text-sm underline decoration-[#C5001C] underline-offset-4" href={mapHref}>
                    Открыть адрес на Яндекс Картах
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">Почта</dt>
                <dd className="mt-2 space-y-1">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      className="block underline decoration-[#C5001C] underline-offset-4"
                      href={`mailto:${email}`}
                    >
                      {email}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">Реквизиты</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#333]">
                  ИНН {company.inn}
                  <br />
                  КПП {company.kpp}
                  <br />
                  ОГРН {company.ogrn}
                  <br />
                  ОКПО {company.okpo}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">Режим</dt>
                <dd className="mt-2">[уточнить]</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-7">
            <h2 className="mb-6 font-display text-3xl tracking-tight">Обратная связь</h2>
            <ContactRequestForm idPrefix="contacts" />
          </div>
        </div>
      </section>
    </>
  );
}
