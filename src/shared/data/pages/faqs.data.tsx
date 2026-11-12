import { CallToActionProps, FAQsProps, HeroProps } from '../../types';

export const heroFaqs: HeroProps = {
  title: 'Вопросы',
  subtitle: 'Короткие ответы о компании, работах и СРО.',
};

export const faqs4Faqs: FAQsProps = {
  items: [
    { title: 'Где работаете?', description: 'В Санкт-Петербурге.' },
    {
      title: 'Есть ли СРО?',
      description:
        'Да. Ассоциация «ПОС», номер 1617, с 15.09.2026. По выписке от 16.09.2026; текущий реестр не проверялся.',
    },
  ],
};

export const callToActionFaqs: CallToActionProps = {
  title: 'Остался вопрос',
  subtitle: 'Напишите на почту компании или через форму.',
  callToAction: { text: 'Контакты', href: '/kontakty' },
};
