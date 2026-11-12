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
  roads?: boolean;
};

// Photos are files from samolet.ru, saved in the repo. The place line is only
// what that site states. No contract, volume, date, or price is recorded here.
export const objects: ObjectCard[] = [
  {
    title: '«Живи! В Рыбацком», корпус 39',
    place: 'Санкт-Петербург, Невский район, Усть-Славянка',
    work: 'Благоустройство',
    image: '/objects/zhivi-korpus-39.webp',
    width: 1280,
    height: 853,
    alt: 'Корпус 39 жилого комплекса «Живи! В Рыбацком»',
    credit: 'Изображение: ГК «Самолёт», samolet.ru',
    sourcePage: 'https://samolet.ru/spb/project/zhivi-v-rybackom/',
    sourceFile:
      'https://m.samolet.ru/CACHE/images/dynamic/18_%D0%9A39_Image018_VJmdRMm/86c331c0efa7995f4ae5248d849f6772.jpg',
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
    alt: 'Панорама квартала «Живи! В Рыбацком» со схематичной подсветкой дорог',
    credit: 'Визуализация: ГК «Самолёт», samolet.ru. Подсветка дорог схематичная.',
    sourcePage: 'https://samolet.ru/spb/project/zhivi-v-rybackom/',
    sourceFile:
      'https://m.samolet.ru/project/genplan/%D0%96%D0%B8%D0%B2%D0%B8_%D0%B2_%D0%A0%D1%8B%D0%B1%D0%B0%D1%86%D0%BA%D0%BE%D0%BC_6.1_%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C_%D0%B3%D0%B5%D0%BD%D0%BF%D0%BB%D0%B0%D0%BD_2024-10-08_wew84zA.jpg',
    roads: true,
  },
];

// Centerlines in the original 1920×1079 panorama. Each stroke stays inside
// the asphalt: the highway, the road beside it, the road in front of the
// towers, and one courtyard drive. Widths are viewBox pixels.
export const roadHighlight = [
  { width: 15, points: '1205,680 1198,780 1200,880 1190,980 1178,1060' },
  { width: 12, points: '1078,700 1080,800 1065,900 1052,1000 1055,1070' },
  { width: 10, points: '560,820 650,760 760,700 850,655' },
  { width: 8, points: '980,740 955,790 930,840' },
];
