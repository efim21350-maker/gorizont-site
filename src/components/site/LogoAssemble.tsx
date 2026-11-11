'use client';

import { useEffect, useState } from 'react';

const SRC = '/brand/gorizont-original.jpg';
const LETTERS = [
  [190, 268],
  [270, 380],
  [388, 478],
  [482, 582],
  [588, 678],
  [680, 794],
  [798, 898],
  [900, 1000],
] as const;

const clip = (x0: number, y0: number, x1: number, y1: number) => {
  const top = (y0 / 691) * 100;
  const right = ((1920 - x1) / 1920) * 100;
  const bottom = ((691 - y1) / 691) * 100;
  const left = (x0 / 1920) * 100;
  return `inset(${top}% ${right}% ${bottom}% ${left}%)`;
};

const lineClip = clip(110, 312, 1810, 372);
const diskClip = clip(1036, 72, 1590, 410);
const stripeClips = [clip(1036, 411, 1590, 479), clip(1036, 480, 1590, 552), clip(1036, 553, 1590, 626)];

export function LogoAssemble() {
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a, button, input, textarea, select, label, summary, [role="button"], [role="link"]')) {
        return;
      }
      setPlaying(false);
      window.setTimeout(() => {
        setRun((value) => value + 1);
        setPlaying(true);
      }, 30);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!playing) return null;

  return (
    <div
      className="pointer-events-none fixed top-1/2 left-1/2 z-50 w-[min(88vw,920px)] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div key={run} className={`relative aspect-[1920/691] w-full ${reduced ? 'is-reduced' : 'is-playing'}`}>
        {reduced ? (
          <img src={SRC} alt="" width={1920} height={691} className="absolute inset-0 h-full w-full" />
        ) : (
          <>
            <img
              src={SRC}
              alt=""
              width={1920}
              height={691}
              className="assemble-layer assemble-line"
              style={{ clipPath: lineClip }}
            />
            <img
              src={SRC}
              alt=""
              width={1920}
              height={691}
              className="assemble-layer assemble-disk"
              style={{ clipPath: diskClip }}
            />
            {stripeClips.map((path, index) => (
              <img
                key={path}
                src={SRC}
                alt=""
                width={1920}
                height={691}
                className="assemble-layer assemble-stripe"
                style={{ clipPath: path, animationDelay: `${0.78 + index * 0.16}s` }}
              />
            ))}
            {LETTERS.map(([x0, x1], index) => (
              <img
                key={`${x0}-${x1}`}
                src={SRC}
                alt=""
                width={1920}
                height={691}
                className="assemble-layer assemble-letter"
                style={{ clipPath: clip(x0, 400, x1, 540), animationDelay: `${1.3 + index * 0.07}s` }}
              />
            ))}
            <img src={SRC} alt="" width={1920} height={691} className="assemble-layer assemble-full" />
          </>
        )}
      </div>
    </div>
  );
}
