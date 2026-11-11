import { IconMail, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';

const logo = { src: '/brand/gorizont-logo.jpg', alt: 'ГОРИЗОНТ' };

export const heroHome: HeroProps = {
  title: 'Благоустройство, дороги и наружные сети',
  subtitle: 'ООО «Горизонт» — строительная компания в Санкт-Петербурге. Стоимость считается по проекту.',
  callToAction: { text: 'Услуги', href: '/uslugi' },
  callToAction2: { text: 'Контакты', href: '/kontakty' },
};

export const socialProofHome: SocialProofProps = {
  images: [{ ...logo, link: '/' }],
};

export const featuresHome: FeaturesProps = {
  header: { title: 'Направления', subtitle: 'Без типового прайса: состав работ задаёт проект.' },
  items: [
    { title: 'Благоустройство и ландшафт', description: 'ОКВЭД 81.30. Состав — по проекту.' },
    { title: 'Земляные работы', description: 'В контуре благоустройства, дорог и сетей.' },
    { title: 'Дорожное строительство', description: 'Отдельным фронтом или вместе с территорией.' },
    {
      title: 'Наружные сети',
      description: 'Водоснабжение и канализация. Диаметры и узлы — по проекту.',
    },
  ],
};

export const contentHomeOne: ContentProps = {
  header: { title: 'О компании' },
  content:
    'ООО «Горизонт» — строительная операционная компания группы в Санкт-Петербурге. Название группы — [уточнить].',
  items: [
    { title: 'Директор', description: 'Гросу Иван' },
    {
      title: 'СРО',
      description:
        'Член Ассоциации «ПОС», номер 1617, вступление 15.09.2026. По выписке от 16.09.2026; текущий реестр не проверялся.',
    },
  ],
};

export const contentHomeTwo: ContentProps = {
  content: 'Портфолио на сайте не опубликовано. Карточки объектов помечены как [уточнить].',
  items: [{ title: 'Объекты', description: '[уточнить]' }],
  isReversed: true,
};

export const stepsHome: StepsProps = {
  isImageDisplayed: false,
  header: { title: 'Как отправить заявку' },
  items: [
    { title: 'Опишите объект', description: 'Вид работ и район в Санкт-Петербурге.' },
    { title: 'Исходные данные', description: 'Комплект документов — [уточнить].' },
    { title: 'Расчёт', description: 'Стоимость рассчитывается по проекту.' },
  ],
};

export const testimonialsHome: TestimonialsProps = {
  header: { title: 'Отзывы', subtitle: 'Публичных отзывов пока нет.' },
  testimonials: [
    {
      name: '[уточнить]',
      job: 'Отзыв не опубликован',
      testimonial: 'Тексты заказчиков будут добавлены после согласования. [уточнить]',
    },
  ],
};

export const faqs2Home: FAQsProps = {
  header: { title: 'Вопросы' },
  items: [
    { title: 'Где работаете?', description: 'В Санкт-Петербурге. Выезд за город — [уточнить].' },
    { title: 'Сколько стоит?', description: 'Стоимость рассчитывается по проекту. Прайс-листа нет.' },
  ],
};

export const pricingHome: PricingProps = {
  header: {
    title: 'Стоимость',
    subtitle: 'Публичных цен нет. Стоимость рассчитывается по проекту, отправьте заявку.',
  },
  prices: [],
};

export const teamHome: TeamProps = {
  header: { title: 'Руководитель' },
  teams: [
    {
      name: 'Гросу Иван',
      occupation: 'Генеральный директор',
      image: logo,
      items: [
        { title: 'Почта', icon: IconMail, href: 'mailto:ivangrosu127@gmail.com' },
        { title: 'Телефон', icon: IconPhoneCall, href: 'tel:+79111350336' },
      ],
    },
  ],
};

export const contactHome: ContactProps = {
  header: { title: 'Контакты', subtitle: 'Санкт-Петербург' },
  content: 'Заявка, телефон или почта компании.',
  items: [
    {
      title: 'Адрес',
      description: ['195009, Санкт-Петербург, Кондратьевский пр., д.2, к.4, лит.А, пом.5-Н, оф.216/2'],
      icon: IconMapPin,
    },
    {
      title: 'Связь',
      description: ['8 (911) 135-03-36', 'ivangrosu127@gmail.com', 'buh.gorizont@internet.ru'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Обратная связь',
    inputs: [
      { type: 'text', name: 'name', label: 'Имя', placeholder: 'Имя' },
      { type: 'email', name: 'email', label: 'Почта', placeholder: 'Почта' },
    ],
    textarea: { name: 'message', rows: 5, placeholder: 'Сообщение' },
    btn: { title: 'Отправить', type: 'submit' },
  },
};

export const callToAction2Home: CallToActionProps = {
  title: 'Стоимость по проекту',
  subtitle: 'Прайс-листа нет. Опишите объект, и мы посчитаем работы отдельно.',
  callToAction: { text: 'Контакты', href: '/kontakty' },
  items: [
    { title: 'Услуги', description: 'Четыре направления работ.', href: '/uslugi' },
    { title: 'Объекты', description: 'Портфолио ещё не опубликовано.', href: '/obekty' },
  ],
};
