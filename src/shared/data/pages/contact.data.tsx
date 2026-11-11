import { IconMail, IconMapPin } from '@tabler/icons-react';
import { ContactProps, FeaturesProps, HeroProps } from '../../types';

export const heroContact: HeroProps = {
  title: 'Контакты',
  subtitle: '195009, Санкт-Петербург, Кондратьевский пр., д.2, к.4, лит.А, пом.5-Н, оф.216/2',
  callToAction: { text: 'Написать', href: 'mailto:ivangrosu127@gmail.com' },
};

export const contact2Contact: ContactProps = {
  header: { title: 'Обратная связь' },
  items: [
    {
      title: 'Адрес',
      description: ['Кондратьевский пр., д.2, к.4, лит.А, пом.5-Н, оф.216/2'],
      icon: IconMapPin,
    },
    {
      title: 'Почта',
      description: ['ivangrosu127@gmail.com', 'buh.gorizont@internet.ru'],
      icon: IconMail,
    },
  ],
  form: {
    title: 'Заявка',
    inputs: [
      { type: 'text', name: 'name', placeholder: 'Имя' },
      { type: 'tel', name: 'phone', placeholder: 'Телефон' },
      { type: 'email', name: 'email', placeholder: 'Почта' },
    ],
    textarea: { name: 'message', rows: 4, placeholder: 'Сообщение' },
    btn: { title: 'Отправить', type: 'submit' },
  },
};

export const features2Contact: FeaturesProps = {
  header: { title: 'Реквизиты' },
  items: [
    { title: 'ИНН 7806539746', description: 'КПП 780401001' },
    { title: 'ОГРН 1187847091651', description: 'ОКПО 28116336' },
  ],
};
