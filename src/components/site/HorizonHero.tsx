import Link from 'next/link';

import { BrandWordmark } from '~/components/atoms/Logo';
import { RoadMarkButton } from '~/components/site/RoadMarkButton';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { company } from '~/lib/company';

const facts = [
  { label: 'География', value: company.city },
  { label: 'СРО', value: `ПОС № ${company.sro.memberNumber}` },
  { label: 'ОКВЭД', value: company.okved },
];

function RoadScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="road-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f4ef" />
          <stop offset="70%" stopColor="#efe6da" />
          <stop offset="100%" stopColor="#e7d9c8" />
        </linearGradient>
      </defs>
      <rect width="1200" height="720" fill="url(#road-sky)" />
      <rect x="0" y="338" width="1200" height="4" fill="#111" />
      <rect x="0" y="342" width="1200" height="378" fill="#efe8df" />
      <polygon points="470,342 730,342 1020,720 180,720" fill="#ddd4c8" />
      <polygon points="520,342 680,342 880,720 320,720" fill="#c9c3bb" />
      <polygon points="555,342 645,342 760,720 440,720" fill="#b7b1a8" />
      <g fill="#fff">
        <rect x="590" y="410" width="20" height="8" />
        <rect x="578" y="490" width="44" height="10" />
        <rect x="552" y="590" width="96" height="12" />
      </g>
    </svg>
  );
}

export default function HorizonHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f4f1] text-[#111]">
      <RoadScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f4f1]/95 via-[#f6f4f1]/82 to-[#f6f4f1]/40 md:bg-gradient-to-r md:from-[#f6f4f1]/96 md:via-[#f6f4f1]/78 md:to-[#f6f4f1]/20" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <BrandWordmark className="text-3xl md:text-5xl" />
            <p className="hero-copy mt-4 text-xs tracking-[0.2em] text-[#5c5c5c] uppercase">Санкт-Петербург</p>
          </div>
          <RoadMarkButton className="h-40 w-32 md:h-56 md:w-52" />
        </div>
        <h1 className="hero-copy mt-5 max-w-5xl font-display text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.96] font-semibold tracking-[-0.035em] text-[#111]">
          Благоустройство, дороги и наружные сети
        </h1>
        <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed text-[#222] md:text-xl">
          Земляные работы, благоустройство и ландшафт, дорожное строительство, наружные сети водоснабжения и
          канализации.
        </p>
        <div className="hero-copy mt-8 flex flex-col gap-3 sm:flex-row">
          <FeedbackButton className="btn btn-primary">Обратная связь</FeedbackButton>
          <Link href="/uslugi" className="btn border-[#111] bg-white/80 text-[#111] hover:bg-[#111] hover:text-white">
            Смотреть услуги
          </Link>
        </div>
        <dl className="mt-12 grid gap-6 border-t border-black/15 pt-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs tracking-[0.16em] text-[#6b6b6b] uppercase">{fact.label}</dt>
              <dd className="mt-2 font-display text-xl tracking-tight text-[#111]">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-md text-xs leading-relaxed text-[#5c5c5c]">
          На заднем плане — стилизованная схема дороги, не фотография объекта компании.
        </p>
      </div>
    </section>
  );
}
