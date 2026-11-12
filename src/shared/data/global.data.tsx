import { AnnouncementProps, FooterProps, HeaderProps } from '~/shared/types';

export const announcementData: AnnouncementProps = {
  title: 'Санкт-Петербург',
  callToAction: {
    text: 'Благоустройство, дороги и наружные сети',
    href: '/uslugi',
  },
};

export const headerData: HeaderProps = {
  links: [
    { label: 'Услуги', href: '/uslugi' },
    { label: 'Компания', href: '/o-kompanii' },
    { label: 'Объекты', href: '/obekty' },
    { label: 'Вакансии', href: '/vakansii' },
  ],
  actions: [],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

const footNote = <span>ООО «Горизонт» · Санкт-Петербург. Сайт основан на TailNext (MIT).</span>;

export const footerData: FooterProps = {
  title: 'Горизонт',
  links: [
    { label: 'Конфиденциальность', href: '/privacy' },
    { label: 'Условия использования', href: '/terms' },
  ],
  columns: [
    {
      title: 'Компания',
      links: [
        { label: 'О компании', href: '/o-kompanii' },
        { label: 'Услуги', href: '/uslugi' },
        { label: 'Объекты', href: '/obekty' },
        { label: 'Вакансии', href: '/vakansii' },
        { label: 'Контакты', href: '/kontakty' },
      ],
    },
  ],
  socials: [],
  footNote,
};

export const footerData2: FooterProps = {
  links: [
    { label: 'Конфиденциальность', href: '/privacy' },
    { label: 'Условия использования', href: '/terms' },
  ],
  columns: [
    {
      title: 'Адрес',
      texts: ['195009, Санкт-Петербург', 'Кондратьевский пр., д.2, к.4, лит.А, пом.5-Н, оф.216/2'],
    },
    {
      title: 'Почта',
      texts: ['gorgros26@mail.ru'],
    },
  ],
  socials: [],
  footNote,
};
