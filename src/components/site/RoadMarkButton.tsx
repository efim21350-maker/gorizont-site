'use client';

import { useEffect, useState } from 'react';

const LETTERS = ['Г', 'О', 'Р', 'И', 'З', 'О', 'Н', 'Т'] as const;

export function RoadMarkButton({ className = '' }: { className?: string }) {
  const [run, setRun] = useState(0);
  const [built, setBuilt] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  const play = () => {
    setBuilt(false);
    window.setTimeout(() => {
      setRun((value) => value + 1);
      setBuilt(true);
    }, 40);
  };

  return (
    <button
      type="button"
      aria-label={built ? 'Повторить сборку знака Горизонт' : 'Собрать знак Горизонт'}
      onClick={play}
      className={`relative shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] ${className}`}
    >
      <span key={run} className={`road-mark ${built ? 'is-built' : ''} ${reduced ? 'is-reduced' : ''}`}>
        <span className="road-mark-stage" aria-hidden={built ? undefined : true}>
          <span data-part="line" className="road-mark-line" />
          <span className="road-mark-disk-slot">
            <span data-part="disk" className="road-mark-disk">
              <span data-part="stripe" className="road-mark-stripe" style={{ animationDelay: '0.86s' }} />
              <span data-part="stripe" className="road-mark-stripe" style={{ animationDelay: '0.98s' }} />
              <span data-part="stripe" className="road-mark-stripe" style={{ animationDelay: '1.1s' }} />
            </span>
          </span>
          <span className="road-mark-name" aria-hidden="true">
            {LETTERS.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                data-part="letter"
                className="road-mark-letter"
                style={{ animationDelay: `${1.28 + index * 0.07}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
        <span data-part="road" className="road-mark-road" aria-hidden="true">
          <span className="road-mark-dashes" />
        </span>
      </span>
    </button>
  );
}
