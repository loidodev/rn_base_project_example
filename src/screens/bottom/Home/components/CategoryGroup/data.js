import {ICONS} from '@constants';
import router from '@navigator/router';

export const GROUPS = [
  {
    title: 'Mua sắm',
    picture: ICONS.shopping,
    screenName: '',
  },
  {title: 'Quà tặng', picture: ICONS.gift, screenName: ''},
  {
    title: 'Ngày hội',
    picture: ICONS.day_of_members,
    screenName: router.GET_PARTNER_SCREEN,
  },
  {
    title: 'Sinh nhật',
    picture: ICONS.happy_birthday,
    screenName: router.GET_BIRTHDAY_SCREEN,
  },
  {
    title: 'Khuyến mãi',
    picture: ICONS.discount,
    screenName: '',
  },
  {title: 'Cẩm nang', picture: ICONS.news, screenName: ''},
  {title: 'Đối tác', picture: ICONS.heart, screenName: ''},
  {title: 'Map', picture: ICONS.map, screenName: ''},
];
