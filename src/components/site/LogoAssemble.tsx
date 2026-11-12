'use client';

import { useEffect, useRef, useState } from 'react';

const LINE = '/brand/gorizont-line.png';
const ARC = '/brand/gorizont-arc.png';
const DISK = '/brand/gorizont-disk.png';
const LETTERS_SRC = '/brand/gorizont-letters.png';
const PLAYED_KEY = 'gorizont-logo-played';
const PLAY_MS = 2480;

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

let playedInMemory = false;

const clip = (x0: number, x1: number) => {
  const top = (400 / 691) * 100;
  const right = ((1920 - x1) / 1920) * 100;
  const bottom = ((691 - 540) / 691) * 100;
  const left = (x0 / 1920) * 100;
  return `inset(${top}% ${right}% ${bottom}% ${left}%)`;
};

const alreadyPlayed = () => {
  if (playedInMemory) return true;
  try {
    return window.sessionStorage.getItem(PLAYED_KEY) === '1';
  } catch {
    return false;
  }
};

const markPlayed = () => {
  playedInMemory = true;
  try {
    window.sessionStorage.setItem(PLAYED_KEY, '1');
  } catch {
    // The in-memory flag still blocks another play in this tab.
  }
};

export function LogoAssemble() {
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (alreadyPlayed()) playedInMemory = true;

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || playingRef.current || alreadyPlayed()) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (
        target.closest(
          'a, button, input, textarea, select, option, label, summary, [role="button"], [role="link"], [contenteditable="true"]',
        )
      ) {
        return;
      }
      markPlayed();
      playingRef.current = true;
      setPlaying(true);
      timerRef.current = window.setTimeout(() => {
        playingRef.current = false;
        setPlaying(false);
      }, PLAY_MS);
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
      <div className="assemble-stage is-playing relative aspect-[1920/691] w-full">
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
      </div>
    </div>
  );
}
