import Link from 'next/link';

import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { company } from '~/lib/company';

const facts = [
  { label: 'Для кого', value: 'Застройщики' },
  { label: 'СРО', value: `ПОС № ${company.sro.memberNumber}` },
  { label: 'ОКВЭД', value: company.okved },
];

function RoadScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full origin-bottom-right scale-[1.65] md:origin-center md:scale-100"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="road-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#101114" />
          <stop offset="58%" stopColor="#2c261f" />
          <stop offset="100%" stopColor="#3d342c" />
        </linearGradient>
        <clipPath id="road-sun">
          <circle cx="980" cy="300" r="78" />
        </clipPath>
      </defs>
      <rect width="1200" height="720" fill="url(#road-sky)" />
      <circle cx="980" cy="300" r="78" fill="#C5001C" />
      <g clipPath="url(#road-sun)">
        <rect x="890" y="318" width="180" height="10" fill="#fff" />
        <rect x="890" y="338" width="180" height="10" fill="#fff" />
        <rect x="890" y="358" width="180" height="10" fill="#fff" />
      </g>
      <rect x="0" y="392" width="1200" height="328" fill="#1c1916" />
      <polygon points="430,392 770,392 1040,720 160,720" fill="#4a433c" />
      <polygon points="500,392 700,392 900,720 300,720" fill="#2e2e2e" />
      <polygon points="545,392 655,392 780,720 420,720" fill="#3a3a3a" />
      <g fill="#f4f4f4" opacity="0.85">
        <rect x="586" y="450" width="28" height="8" />
        <rect x="574" y="520" width="52" height="10" />
        <rect x="548" y="610" width="104" height="12" />
      </g>
      <g fill="#111">
        <rect x="210" y="560" width="170" height="32" rx="4" />
        <rect x="230" y="592" width="136" height="18" />
        <rect x="330" y="508" width="52" height="52" />
        <polygon points="382,524 500,470 510,486 392,540" />
        <polygon points="494,468 548,494 528,518 480,488" />
      </g>
      <g fill="#C5001C">
        <rect x="900" y="560" width="110" height="42" />
        <rect x="972" y="522" width="48" height="38" />
        <rect x="884" y="602" width="156" height="26" rx="13" />
        <circle cx="912" cy="628" r="18" fill="#111" />
        <circle cx="1012" cy="628" r="18" fill="#111" />
      </g>
    </svg>
  );
}

export default function HorizonHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111] text-white">
      <RoadScene />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/92 via-[#111]/55 to-[#111]/20 md:bg-gradient-to-r md:from-[#111]/94 md:via-[#111]/62 md:to-[#111]/10" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-14 pb-16 md:pt-20 md:pr-[34%] md:pb-24">
        <p className="font-display text-3xl tracking-[0.22em] text-white md:text-5xl">{company.wordmark}</p>
        <p className="hero-copy mt-4 text-xs tracking-[0.2em] text-white/80 uppercase">
          Для застройщиков · Санкт-Петербург
        </p>
        <h1 className="hero-copy mt-5 max-w-5xl font-display text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.96] font-semibold tracking-[-0.035em] text-white">
          Благоустройство, дороги и наружные сети
        </h1>
        <p className="hero-copy mt-6 max-w-2xl text-lg leading-relaxed text-white md:text-xl">
          Подряд для застройщиков: земляные работы, благоустройство и ландшафт, дорожное строительство, наружные сети
          водоснабжения и канализации.
        </p>
        <div className="hero-copy mt-8 flex flex-col gap-3 sm:flex-row">
          <FeedbackButton className="btn btn-primary">Обратная связь</FeedbackButton>
          <Link
            href="/uslugi"
            className="btn border-white/40 bg-[#111]/40 text-white hover:border-white hover:bg-white hover:text-[#111]"
          >
            Смотреть услуги
          </Link>
        </div>
        <dl className="mt-12 grid gap-6 border-t border-white/25 pt-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs tracking-[0.16em] text-white/70 uppercase">{fact.label}</dt>
              <dd className="mt-2 font-display text-xl tracking-tight text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-md text-xs leading-relaxed text-white/70">
          На заднем плане — стилизованная схема дороги и техники, не фотография объекта компании.
        </p>
      </div>
    </section>
  );
}
