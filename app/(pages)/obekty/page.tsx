import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';
import PageIntro from '~/components/site/PageIntro';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { objects, roadHighlight } from '~/lib/objects';

export const metadata: Metadata = buildMetadata({
  title: 'Объекты',
  description:
    'Три объекта ООО «Горизонт»: благоустройство корпуса 39 «Живи! В Рыбацком», благоустройство «Южной Невы» и улично-дорожная сеть в Рыбацком. Фотографии с сайта ГК «Самолёт».',
  path: '/obekty',
});

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Объекты"
        title="Три объекта в Петербурге и области"
        lede="На карточках — название, место и короткий тип работ. Фотографии скачаны с сайта ГК «Самолёт». Объёмы, сроки, суммы и номера договоров здесь не указаны."
      />
      <section className="bg-[#f6f4f1]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="grid gap-8">
            {objects.map((item) => (
              <article key={item.title} className="bg-white">
                <figure>
                  <div className={item.roads ? 'relative aspect-[1920/1079]' : 'relative'}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className={item.roads ? 'absolute inset-0 h-full w-full object-fill' : 'block h-auto w-full'}
                    />
                    {item.roads ? (
                      <svg
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        viewBox="0 0 1920 1079"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        {roadHighlight.map((road, index) => (
                          <g key={road.points}>
                            {[
                              { stroke: '#fff', opacity: 0.92, width: road.width + 4 },
                              { stroke: '#C5001C', opacity: 0.62, width: road.width },
                            ].map((layer) => (
                              <polyline
                                key={layer.stroke}
                                points={road.points}
                                fill="none"
                                stroke={layer.stroke}
                                strokeOpacity={layer.opacity}
                                strokeWidth={layer.width}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                pathLength={1}
                                className="road-draw"
                                style={{ animationDelay: `${index * 0.18}s` }}
                              />
                            ))}
                          </g>
                        ))}
                      </svg>
                    ) : null}
                  </div>
                  <figcaption className="px-5 pt-3 text-xs leading-relaxed text-[#6b6b6b] md:px-8">
                    {item.credit}
                  </figcaption>
                </figure>
                <div className="px-5 pt-5 pb-8 md:px-8 md:pb-10">
                  <p className="text-xs tracking-[0.16em] text-[#C5001C] uppercase">{item.work}</p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-[#111] md:text-4xl">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
          <FeedbackButton className="mt-10 btn btn-primary">Обратная связь</FeedbackButton>
        </div>
      </section>
    </>
  );
}
