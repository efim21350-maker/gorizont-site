import type { Metadata } from 'next';
import Link from 'next/link';

import { buildMetadata } from '~/utils/metadata';
import HorizonHero from '~/components/site/HorizonHero';
import ServiceIndex from '~/components/site/ServiceIndex';
import ContactRequestForm from '~/components/feedback/ContactRequestForm';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { company, sroSummary } from '~/lib/company';

export const metadata: Metadata = buildMetadata({
  description:
    'ООО «Горизонт» в Санкт-Петербурге: благоустройство и ландшафт, земляные работы, дороги и наружные сети.',
});

const steps = [
  {
    num: '01',
    title: 'Опишите объект',
    text: 'Напишите, какие работы нужны и где находится площадка. Для этого есть форма и почта компании.',
  },
  {
    num: '02',
    title: 'Передайте исходные данные',
    text: 'Если есть проект или техническое задание, их можно обсудить после первого сообщения. Обязательный комплект документов — [уточнить].',
  },
];

export default function Page() {
  return (
    <>
      <HorizonHero />

      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#C5001C] uppercase">Услуги</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-[#111] md:text-5xl">
                Четыре направления, одно поле работ
              </h2>
            </div>
            <Link href="/uslugi" className="text-sm font-medium underline decoration-[#C5001C] underline-offset-4">
              Все услуги
            </Link>
          </div>
          <ServiceIndex />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.2em] text-[#C5001C] uppercase">О компании</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[#111] md:text-5xl">
              Строительная компания в Санкт-Петербурге
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-[#222]">
              {company.fullName} ведёт благоустройство и ландшафт, земляные работы, дорожное строительство и наружные
              сети водоснабжения и канализации. Компания позиционируется как строительная операционная компания группы.
              Название группы — [уточнить].
            </p>
            <dl className="mt-8">
              <div className="border-t border-black/10 pt-4">
                <dt className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">СРО</dt>
                <dd className="mt-2 text-base leading-relaxed">{sroSummary}</dd>
              </div>
            </dl>
            <Link
              href="/o-kompanii"
              className="mt-8 inline-flex text-sm font-medium underline decoration-[#C5001C] underline-offset-4"
            >
              Реквизиты и подробности
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <p className="text-xs tracking-[0.2em] text-[#C5001C] uppercase">Как начать</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight text-[#111] md:text-5xl">
            Как отправить заявку
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.num} className="border-t border-[#111] pt-5">
                <span className="font-display text-sm tracking-[0.16em] text-[#C5001C]">{step.num}</span>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/50 uppercase">Объекты</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Три объекта</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Названия, место и тип работ. Фотографии — с сайта ГК «Самолёт». Объёмы, сроки и суммы не указаны.
            </p>
            <Link
              href="/obekty"
              className="mt-8 inline-flex border border-white/30 px-5 py-3 text-sm hover:bg-white hover:text-[#111]"
            >
              Смотреть объекты
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              ['Благоустройство', '«Живи! В Рыбацком», корпус 39'],
              ['Благоустройство', '«Южная Нева»'],
              ['Улично-дорожная сеть', '«Живи! В Рыбацком»'],
            ].map(([work, name]) => (
              <div key={name} className="border border-white/15 p-5">
                <p className="text-xs tracking-[0.16em] text-[#C5001C]">{work}</p>
                <p className="mt-2 font-display text-2xl">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="zayavka">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.2em] text-[#C5001C] uppercase">Контакты</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[#111] md:text-5xl">Напишите</h2>
            <p className="mt-5 text-base leading-relaxed text-[#3a3a3a]">{company.address}</p>
            <ul className="mt-4 space-y-1">
              {company.emails.map((email) => (
                <li key={email}>
                  <a className="underline decoration-[#C5001C] underline-offset-4" href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[#5c5c5c]">Режим работы — [уточнить].</p>
            <FeedbackButton className="mt-8 btn btn-primary md:hidden">Обратная связь</FeedbackButton>
          </div>
          <div className="md:col-span-7">
            <ContactRequestForm idPrefix="home" />
          </div>
        </div>
      </section>
    </>
  );
}
