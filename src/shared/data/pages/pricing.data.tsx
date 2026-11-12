import { ComparisonProps, FAQsProps, HeroProps, PricingProps } from '../../types';

export const heroPricing: HeroProps = {
  title: 'Стоимость',
  subtitle: 'Публичного прайса нет. Стоимость рассчитывается по проекту, отправьте заявку.',
  callToAction: { text: 'Заявка', href: '/kontakty' },
};

export const pricingPricing: PricingProps = {
  header: { title: 'Без тарифов', subtitle: 'Цены на сайте не указаны.' },
  prices: [],
};

export const comparisonPricing: ComparisonProps = {
  header: { title: 'Что нужно для расчёта' },
  columns: [
    {
      title: 'Сведения',
      items: [{ title: 'Вид работ' }, { title: 'Адрес объекта' }, { title: 'Есть ли проект' }],
    },
    {
      title: 'Заявка',
      items: [{ title: 'Опишите' }, { title: 'Укажите' }, { title: 'Отправьте' }],
      callToAction: { text: 'Написать', href: '/kontakty' },
    },
  ],
};

export const faqs3Pricing: FAQsProps = {
  items: [
    { title: 'Почему нет цен?', description: 'Стоимость зависит от проекта. Выдуманные цифры на сайт не ставим.' },
    { title: 'Когда будет расчёт?', description: 'Срок расчёта на сайте не указан.' },
  ],
};
