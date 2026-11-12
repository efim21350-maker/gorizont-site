'use client';

import { useEffect, useRef, useState } from 'react';

const MARK = '/brand/gorizont-mark.png';
const LINE = '/brand/gorizont-line.png';
const ARC = '/brand/gorizont-arc.png';
const DISK = '/brand/gorizont-disk.png';
const LETTERS_SRC = '/brand/gorizont-letters.png';

const LETTERS = [
  [190, 266],
  [270, 380],
  [386, 478],
  [482, 582],
  [586, 676],
  [682, 794],
  [798, 900],
  [902, 1000],
] as const;

const PLAY_MS = 2480;
const REDUCED_MS = 700;

const clip = (x0: number, x1: number) => {
  const top = (400 / 691) * 100;
  const right = ((1920 - x1) / 1920) * 100;
  const bottom = ((691 - 540) / 691) * 100;
  const left = (x0 / 1920) * 100;
  return `inset(${top}% ${right}% ${bottom}% ${left}%)`;
};

export function LogoAssemble() {
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const playingRef = useRef(false);
  const reducedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      reducedRef.current = media.matches;
      setReduced(media.matches);
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || playingRef.current) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (
        target.closest(
          'a, button, input, textarea, select, option, label, summary, [role="button"], [role="link"], [contenteditable="true"]',
        )
      ) {
        return;
      }
      playingRef.current = true;
      setRun((value) => value + 1);
      setPlaying(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(
        () => {
          playingRef.current = false;
          setPlaying(false);
        },
        reducedRef.current ? REDUCED_MS : PLAY_MS,
      );
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  if (!playing) return null;

  return (
    <div
      className="pointer-events-none fixed top-1/2 left-1/2 z-50 w-[min(88vw,920px)] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        key={run}
        className={`assemble-stage relative aspect-[1920/691] w-full ${reduced ? 'is-reduced' : 'is-playing'}`}
      >
        {reduced ? (
          <img src={MARK} alt="" width={1920} height={691} className="absolute inset-0 h-full w-full" />
        ) : (
          <>
            <img src={LINE} alt="" width={1920} height={691} className="assemble-layer assemble-line" />
            <img src={ARC} alt="" width={1920} height={691} className="assemble-layer assemble-arc" />
            <img src={DISK} alt="" width={1920} height={691} className="assemble-layer assemble-disk" />
            {LETTERS.map(([x0, x1], index) => (
              <img
                key={`${x0}-${x1}`}
                src={LETTERS_SRC}
                alt=""
                width={1920}
                height={691}
                className="assemble-layer assemble-letter"
                style={{ clipPath: clip(x0, x1), animationDelay: `${1.12 + index * 0.08}s` }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
