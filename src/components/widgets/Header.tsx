'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '~/components/atoms/Logo';
import ToggleMenu from '~/components/atoms/ToggleMenu';
import { FeedbackButton } from '~/components/feedback/FeedbackProvider';
import { nav } from '~/lib/company';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-4 px-4 md:px-5">
        <span className="shrink-0" onClick={close}>
          <Logo />
        </span>
        <nav className="ml-6 hidden items-center gap-6 lg:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`text-sm font-medium ${pathname === item.href ? 'text-[#C5001C]' : 'text-[#111] hover:text-[#C5001C]'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <FeedbackButton className="btn btn-primary px-4 py-2 text-sm md:px-5">Обратная связь</FeedbackButton>
          <div className="lg:hidden">
            <ToggleMenu handleToggleMenuOnClick={() => setIsOpen((value) => !value)} isToggleMenuOpen={isOpen} />
          </div>
        </div>
      </div>
      {isOpen ? (
        <nav className="border-t border-black/10 bg-white lg:hidden" aria-label="Мобильное меню">
          <ul className="mx-auto max-w-7xl px-4 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="block py-3 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
