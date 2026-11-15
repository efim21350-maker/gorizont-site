'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32">
      <p className="text-xs tracking-[0.18em] text-[#C5001C] uppercase">Ошибка</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Страница не открылась</h1>
      <p className="mt-4 text-lg text-[#3a3a3a]">Попробуйте ещё раз. Если повторится, напишите нам через контакты.</p>
      {error.digest ? <p className="mt-2 text-sm text-[#6b6b6b]">Код: {error.digest}</p> : null}
      <button type="button" onClick={reset} className="mt-8 btn btn-primary">
        Повторить
      </button>
    </section>
  );
}
