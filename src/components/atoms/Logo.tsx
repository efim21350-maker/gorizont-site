'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { company } from '~/lib/company';

export const LOGO_REPLAY_EVENT = 'gorizont-logo-replay';

const Logo = () => {
  const [run, setRun] = useState(0);

  return (
    <Link
      href="/"
      aria-label="Горизонт, на главную"
      className="inline-flex shrink-0"
      onClick={() => {
        setRun((value) => value + 1);
        window.dispatchEvent(new Event(LOGO_REPLAY_EVENT));
      }}
    >
      <Image
        key={run}
        src="/brand/gorizont-logo.jpg"
        alt="ГОРИЗОНТ"
        width={1717}
        height={585}
        priority
        className="logo-reveal h-12 w-auto md:h-16"
      />
    </Link>
  );
};

export function BrandWordmark({ className = '' }: { className?: string }) {
  const [run, setRun] = useState(0);

  useEffect(() => {
    const replay = () => setRun((value) => value + 1);
    window.addEventListener(LOGO_REPLAY_EVENT, replay);
    return () => window.removeEventListener(LOGO_REPLAY_EVENT, replay);
  }, []);

  return (
    <p key={run} className={`logo-reveal font-display tracking-[0.22em] text-[#111] ${className}`}>
      {company.wordmark}
    </p>
  );
}

export default Logo;
