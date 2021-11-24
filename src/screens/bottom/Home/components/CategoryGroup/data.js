import {ICONS} from '@constants';
import {commonRoot, root} from '@navigator/navigationRef';
import router from '@navigator/router';

export const GROUPS = [
  {
    title: 'Mua sắm',
    picture: ICONS.shopping,
    authentication: true,
    onPress: params => {
      root.navigate(router.SHOPPING_SCREEN, params);
    },
  },
  {
    title: 'Quà tặng',
    picture: ICONS.gift,
    authentication: false,
    onPress: () => {},
  },
  {
    title: 'Ngày hội',
    picture: ICONS.day_of_members,
    authentication: false,
    onPress: params => {
      commonRoot.navigate(router.GET_PARTNER_SCREEN, params);
    },
  },
  {
    title: 'Sinh nhật',
    picture: ICONS.happy_birthday,
    authentication: false,
    onPress: params => {
      commonRoot.navigate(router.GET_BIRTHDAY_SCREEN, params);
    },
  },
  {
    title: 'Khuyến mãi',
    picture: ICONS.discount,
    authentication: false,
    onPress: params => {},
  },
  {
    title: 'Combo',
    picture: ICONS.news,
    authentication: false,
    onPress: params => {
      commonRoot.navigate(router.GET_COMBO_SCREEN, params);
    },
  },
  {
    title: 'Đối tác',
    picture: ICONS.heart,
    authentication: false,
    onPress: params => {
      commonRoot.navigate(router.GET_MEMBER_SCREEN, params);
    },
  },
  {
    title: 'Map',
    picture: ICONS.map,
    authentication: false,
    onPress: params => {},
  },
];
