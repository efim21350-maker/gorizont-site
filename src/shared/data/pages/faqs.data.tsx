import { CallToActionProps, FAQsProps, HeroProps } from '../../types';

export const heroFaqs: HeroProps = {
  title: 'Вопросы',
  subtitle: 'Только проверенные ответы. Остальное помечено [уточнить].',
};

export const faqs4Faqs: FAQsProps = {
  items: [
    { title: 'Где работаете?', description: 'В Санкт-Петербурге.' },
    { title: 'Кто директор?', description: 'Гросу Иван.' },
    { title: 'Есть ли СРО?', description: 'Да. Номер записи — [уточнить].' },
    { title: 'Сколько стоит?', description: 'Стоимость рассчитывается по проекту.' },
  ],
};

export const callToActionFaqs: CallToActionProps = {
  title: 'Остался вопрос',
  subtitle: 'Напишите или позвоните 8 (911) 135-03-36.',
  callToAction: { text: 'Контакты', href: '/kontakty' },
};
