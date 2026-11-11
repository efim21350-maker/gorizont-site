import { IconMail } from '@tabler/icons-react';
import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';

const logo = { src: '/brand/gorizont-logo.jpg', alt: 'ГОРИЗОНТ' };

export const hero2About: HeroProps = {
  title: 'О компании',
  subtitle: 'ООО «Горизонт» — строительная компания в Санкт-Петербурге.',
  callToAction: { text: 'Контакты', href: '/kontakty' },
};

export const statsAbout: StatsProps = {
  items: [
    { title: 'СПб', description: 'Город работ' },
    { title: 'ПОС № 1617', description: 'С 15.09.2026, по выписке от 16.09.2026' },
    { title: '81.30', description: 'ОКВЭД' },
    { title: '[уточнить]', description: 'Название группы' },
  ],
};

export const featuresFourAbout: FeaturesProps = {
  isImageDisplayed: false,
  header: { title: 'Профиль' },
  items: [{ title: 'Благоустройство и ландшафт', description: 'ОКВЭД 81.30.' }],
};

export const featuresFourAboutTwo: FeaturesProps = {
  isImageDisplayed: false,
  header: { title: 'Сети и дороги' },
  items: [{ title: 'Дороги и наружные сети', description: 'Состав — по проекту.' }],
};

export const stepsAbout: StepsProps = {
  isImageDisplayed: false,
  items: [{ title: 'Заявка', description: 'Стоимость рассчитывается по проекту.' }],
};

export const features3About: FeaturesProps = {
  isImageDisplayed: false,
  header: { title: 'Санкт-Петербург' },
  items: [{ title: 'География', description: 'Выезд за пределы города — [уточнить].' }],
};

export const featuresAbout: FeaturesProps = {
  header: { title: 'Реквизиты' },
  items: [
    { title: 'ИНН 7806539746', description: 'КПП 780401001' },
    { title: 'ОГРН 1187847091651', description: 'ОКПО 28116336' },
  ],
};

export const teamAbout: TeamProps = {
  header: { title: 'Директор' },
  teams: [
    {
      name: 'Гросу Иван',
      occupation: 'Генеральный директор',
      image: logo,
      items: [{ title: 'Почта', icon: IconMail, href: 'mailto:ivangrosu127@gmail.com' }],
    },
  ],
};

export const testimonials2About: TestimonialsProps = {
  header: { title: 'Отзывы' },
  testimonials: [
    {
      name: '[уточнить]',
      job: 'Не опубликовано',
      testimonial: 'Отзывы заказчиков на сайте не размещены. [уточнить]',
    },
  ],
};

export const faqsAbout: FAQsProps = {
  items: [
    {
      title: 'Есть ли СРО?',
      description:
        'Да. Ассоциация «ПОС», номер члена 1617, вступление 15.09.2026. Источник — выписка от 16.09.2026, без проверки текущего реестра.',
    },
  ],
};

export const contactAbout: ContactProps = {
  header: { title: 'Контакты' },
  form: {
    inputs: [{ type: 'text', name: 'name', placeholder: 'Имя' }],
    btn: { title: 'Отправить', type: 'submit' },
  },
};
