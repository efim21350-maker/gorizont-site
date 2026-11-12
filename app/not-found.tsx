import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24 sm:py-32">
      <p className="text-xs tracking-[0.18em] text-[#C5001C] uppercase">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Такой страницы нет</h1>
      <p className="mt-4 text-lg text-[#3a3a3a]">Ссылка устарела или адрес набран с ошибкой.</p>
      <Link href="/" className="mt-8 btn btn-primary">
        На главную
      </Link>
    </section>
  );
}
