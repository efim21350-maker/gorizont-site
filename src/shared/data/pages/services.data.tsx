import { CallToActionProps, ContentProps, FAQsProps, FeaturesProps, HeroProps, TestimonialsProps } from '../../types';

export const heroServices: HeroProps = {
  title: 'Услуги',
  subtitle: 'Благоустройство, земляные работы, дороги и наружные сети в Санкт-Петербурге.',
  callToAction: { text: 'Заявка', href: '/kontakty' },
};

export const features2Services: FeaturesProps = {
  items: [
    { title: 'Благоустройство и ландшафт', description: 'ОКВЭД 81.30.' },
    { title: 'Земляные работы', description: 'Объёмы — по проекту.' },
    { title: 'Дорожное строительство', description: 'Без публичного прайса.' },
    { title: 'Наружные сети', description: 'Водоснабжение и канализация.' },
  ],
};

export const contentServicesOne: ContentProps = {
  content: 'Состав работ на объекте задаёт проект. Типовой сметы на сайте нет.',
  items: [{ title: 'По проекту', description: 'Стоимость рассчитывается отдельно.' }],
};

export const contentServicesTwo: ContentProps = {
  content: 'География, которую можно указать точно, — Санкт-Петербург.',
  items: [{ title: 'Город', description: 'Санкт-Петербург и Ленинградская область.' }],
  isReversed: true,
};

export const features4Services: FeaturesProps = {
  isImageDisplayed: false,
  header: { title: 'Как считаем' },
  items: [{ title: 'Без прайса', description: 'Отправьте описание объекта.' }],
};

export const testimonialsServices: TestimonialsProps = {
  testimonials: [
    {
      name: 'Не опубликовано',
      job: 'Кейс не размещён',
      testimonial: 'Кейсы с цифрами на сайте не публикуются.',
    },
  ],
};

export const faqsServices: FAQsProps = {
  items: [{ title: 'Есть ли цены?', description: 'Нет. Стоимость рассчитывается по проекту.' }],
};

export const callToActionServices: CallToActionProps = {
  title: 'Нужен расчёт',
  subtitle: 'Опишите объект. Прайс-листа нет.',
  callToAction: { text: 'Контакты', href: '/kontakty' },
};
