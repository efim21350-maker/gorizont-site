import Link from 'next/link';

import { company, mapHref, nav } from '~/lib/company';

const Footer2 = () => (
  <footer className="border-t border-black/10 bg-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="font-display text-2xl tracking-[0.18em]">{company.wordmark}</p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#3a3a3a]">
          Строительная компания в Санкт-Петербурге. Благоустройство, земляные работы, дороги и наружные сети.
        </p>
      </div>
      <div className="md:col-span-2">
        <p className="text-xs tracking-[0.16em] text-[#8a8a8a] uppercase">Разделы</p>
        <ul className="mt-4 space-y-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-[#C5001C]">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/kontakty" className="hover:text-[#C5001C]">
              Контакты
            </Link>
          </li>
          <li>
            <Link href="/voprosy" className="hover:text-[#C5001C]">
              Вопросы
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <p className="text-xs tracking-[0.16em] text-[#8a8a8a] uppercase">Контакты</p>
        <p className="mt-4 text-sm leading-relaxed">{company.address}</p>
        <ul className="mt-3 space-y-1 text-sm">
          {company.emails.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`} className="hover:text-[#C5001C]">
                {email}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm">
          <a href={mapHref} className="underline decoration-[#C5001C] underline-offset-4">
            На карте
          </a>
        </p>
      </div>
      <div className="md:col-span-3">
        <p className="text-xs tracking-[0.16em] text-[#8a8a8a] uppercase">Реквизиты</p>
        <p className="mt-4 text-sm leading-relaxed">
          {company.shortName}
          <br />
          ИНН {company.inn}
          <br />
          КПП {company.kpp}
          <br />
          ОГРН {company.ogrn}
          <br />
          ОКПО {company.okpo}
          <br />
          ОКВЭД {company.okved}
        </p>
        <p className="mt-3 text-sm text-[#5c5c5c]">Банковские реквизиты на сайте не публикуются.</p>
      </div>
    </div>
    <div className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-[#5c5c5c] md:flex-row md:items-center md:justify-between">
        <p>© {company.shortName}.</p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/privacy" className="hover:text-[#111]">
            Конфиденциальность
          </Link>
          <Link href="/terms" className="hover:text-[#111]">
            Условия использования
          </Link>
          <a href="https://github.com/arthelokyo/tailnext" className="hover:text-[#111]">
            Основано на TailNext (MIT)
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer2;
