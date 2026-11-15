export type ObjectCard = {
  title: string;
  place: string;
  work: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  sourcePage: string;
  sourceFile: string;
};

// Photos are files from samolet.ru, saved in the repo. The place line is only
// what that site states. No contract, volume, date, or price is recorded here.
export const objects: ObjectCard[] = [
  {
    title: '«Живи! В Рыбацком», корпус 39',
    place: 'Санкт-Петербург, Невский район, Усть-Славянка',
    work: 'Благоустройство',
    image: '/objects/zhivi-blagoustroystvo.webp',
    width: 1600,
    height: 708,
    alt: 'Визуализация двора жилого комплекса «Живи! В Рыбацком», корпус 39',
    credit: 'Визуализация: ГК «Самолёт», samolet.ru',
    sourcePage: 'https://samolet.ru/spb/project/zhivi-v-rybackom/',
    sourceFile: 'https://m.samolet.ru/project/images/2-4096-2048-max-1-1.jpg',
  },
  {
    title: '«Южная Нева»',
    place: 'Ленинградская область, Всеволожский район, деревня Новосаратовка',
    work: 'Благоустройство',
    image: '/objects/yuzhnaya-neva.webp',
    width: 1600,
    height: 800,
    alt: 'Визуализация двора жилого комплекса «Южная Нева»',
    credit: 'Визуализация: ГК «Самолёт», samolet.ru',
    sourcePage: 'https://samolet.ru/spb/project/yuzhnaya-neva/',
    sourceFile: 'https://m.samolet.ru/project/images/4096-2048-max-1_evLYQ8X.jpg',
  },
  {
    title: 'Улично-дорожная сеть, «Живи! В Рыбацком»',
    place: 'Санкт-Петербург, Невский район, Усть-Славянка',
    work: 'Улично-дорожная сеть',
    image: '/objects/zhivi-panorama.webp',
    width: 1600,
    height: 899,
    alt: 'Панорама квартала «Живи! В Рыбацком»',
    credit: 'Визуализация: ГК «Самолёт», samolet.ru',
    sourcePage: 'https://samolet.ru/spb/project/zhivi-v-rybackom/',
    sourceFile:
      'https://m.samolet.ru/project/genplan/%D0%96%D0%B8%D0%B2%D0%B8_%D0%B2_%D0%A0%D1%8B%D0%B1%D0%B0%D1%86%D0%BA%D0%BE%D0%BC_6.1_%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C_%D0%B3%D0%B5%D0%BD%D0%BF%D0%BB%D0%B0%D0%BD_2024-10-08_wew84zA.jpg',
  },
];
