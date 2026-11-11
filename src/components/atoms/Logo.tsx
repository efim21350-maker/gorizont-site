'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { company } from '~/lib/company';

export const LOGO_REPLAY_EVENT = 'gorizont-logo-replay';

type LogoMotion = 'reveal' | 'strike';

const useLogoMotion = () => {
  const [run, setRun] = useState(0);
  const [motion, setMotion] = useState<LogoMotion>('reveal');

  useEffect(() => {
    const replay = (event: Event) => {
      const sharp = (event as CustomEvent<{ sharp?: boolean }>).detail?.sharp;
      setMotion(sharp ? 'strike' : 'reveal');
      setRun((value) => value + 1);
    };
    window.addEventListener(LOGO_REPLAY_EVENT, replay);
    return () => window.removeEventListener(LOGO_REPLAY_EVENT, replay);
  }, []);

  return { run, className: motion === 'strike' ? 'logo-strike' : 'logo-reveal' };
};

const Logo = () => {
  const { run, className } = useLogoMotion();

  return (
    <Link
      href="/"
      aria-label="Горизонт, на главную"
      className="inline-flex shrink-0"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(LOGO_REPLAY_EVENT, { detail: { sharp: false } }));
      }}
    >
      <Image
        key={run}
        src="/brand/gorizont-logo.jpg"
        alt="ГОРИЗОНТ"
        width={1717}
        height={585}
        priority
        className={`${className} h-12 w-auto md:h-16`}
      />
    </Link>
  );
};

export function BrandWordmark({ className = '' }: { className?: string }) {
  const { run, className: motionClass } = useLogoMotion();

  return (
    <p key={run} className={`${motionClass} font-display tracking-[0.22em] text-[#111] ${className}`}>
      {company.wordmark}
    </p>
  );
}

export function SunSign({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Показать название Горизонт"
      className={`group relative shrink-0 overflow-hidden rounded-full bg-[#C5001C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] ${className}`}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(LOGO_REPLAY_EVENT, { detail: { sharp: true } }));
      }}
    >
      <span className="absolute inset-x-0 top-[54%] h-[9%] bg-white" />
      <span className="absolute inset-x-0 top-[68%] h-[9%] bg-white" />
      <span className="absolute inset-x-0 top-[82%] h-[9%] bg-white" />
    </button>
  );
}

export default Logo;
