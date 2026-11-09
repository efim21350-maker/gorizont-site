import Link from 'next/link';

import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { company } from '~/lib/company';

const facts = [
  { label: 'География', value: company.city },
  { label: 'Допуск', value: 'Член СРО' },
  { label: 'ОКВЭД', value: company.okved },
];

export default function HorizonHero() {
  return (
    <section className="relative overflow-hidden bg-[#111] text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="hero-copy text-xs tracking-[0.22em] text-white/55 uppercase">
          {company.shortName} · строительная компания
        </p>
        <h1 className="hero-copy mt-5 max-w-5xl font-display text-[clamp(2.7rem,6.4vw,5.6rem)] leading-[0.94] font-semibold tracking-[-0.035em]">
          Благоустройство, дороги и наружные сети
        </h1>
        <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          Земляные работы, благоустройство и ландшафт, дорожное строительство, наружные сети водоснабжения и канализации
          в Санкт-Петербурге. Стоимость считаем по проекту.
        </p>
        <div className="hero-copy mt-8 flex flex-col gap-3 sm:flex-row">
          <FeedbackButton className="btn btn-primary">Обратная связь</FeedbackButton>
          <Link
            href="/uslugi"
            className="btn border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#111]"
          >
            Смотреть услуги
          </Link>
        </div>

        <div className="relative mt-16 h-44 md:mt-24 md:h-72">
          <div className="horizon-sun absolute top-1/2 right-0 h-40 w-40 overflow-hidden rounded-full bg-[#C5001C] md:right-8 md:h-64 md:w-64">
            <span className="absolute inset-x-0 top-[54%] h-[8%] bg-white" />
            <span className="absolute inset-x-0 top-[67%] h-[8%] bg-white" />
            <span className="absolute inset-x-0 top-[80%] h-[8%] bg-white" />
          </div>
          <div className="horizon-line absolute inset-x-0 top-1/2 z-10 h-[5px] -translate-y-1/2 bg-white" />
          <p className="hero-copy absolute bottom-0 left-0 font-display text-sm tracking-[0.42em] text-white/80 md:text-base">
            {company.wordmark}
          </p>
        </div>

        <dl className="mt-10 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs tracking-[0.16em] text-white/45 uppercase">{fact.label}</dt>
              <dd className="mt-2 font-display text-xl tracking-tight">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
