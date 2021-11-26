import {GET_PRODUCT_TYPE, ICONS, MANAGEMENT_TYPE} from '@constants';
import locale from '@locale';
import {commonRoot} from '@navigator/navigationRef';
import router from '@router';

export const MANAGER_LIST = [
  {
    image: ICONS.promotion,
    title: locale.t('profileScreen.code'),
    navigation: router.DISCOUNT_MANAGEMENT,
    param: {type: 'profile'},
  },
  {
    image: ICONS.hand_gesture,
    title: locale.t('profileScreen.pointManagement'),
    onPress: params => {
      commonRoot.navigate(router.MANAGEMENT_BY_TYPE_SCREEN, {
        ...params,
        type: MANAGEMENT_TYPE.point,
      });
    },
  },
  {
    image: ICONS.exchange,
    title: locale.t('profileScreen.pointHistory'),
    onPress: params => {
      commonRoot.navigate(router.MANAGEMENT_BY_TYPE_SCREEN, {
        ...params,
        type: MANAGEMENT_TYPE.history_point,
      });
    },
  },
];

export const GENERAL_LIST = [
  {
    image: ICONS.heart_pink,
    title: locale.t('profileScreen.likeProduct'),
    onPress: params => {
      commonRoot.navigate(router.PRODUCT_BY_TYPE_SCREEN, {
        ...params,
        type: GET_PRODUCT_TYPE.favorite,
      });
    },
  },
  {
    image: ICONS.eye,
    title: locale.t('profileScreen.viewProduct'),
    onPress: params => {
      commonRoot.navigate(router.PRODUCT_BY_TYPE_SCREEN, {
        ...params,
        type: GET_PRODUCT_TYPE.list_viewed,
      });
    },
  },
  {
    image: ICONS.shopping_history,
    title: locale.t('profileScreen.productLate'),
    onPress: params => {
      commonRoot.navigate(router.PRODUCT_BY_TYPE_SCREEN, {
        ...params,
        type: GET_PRODUCT_TYPE.save_for_late,
      });
    },
  },
  {
    image: ICONS.income_fee,
    title: locale.t('profileScreen.commission'),
  },
  {
    image: ICONS.gift_box,
    title: locale.t('profileScreen.gift'),
    navigation: router.MY_GIFT,
  },
  {
    image: ICONS.placeholder,
    title: locale.t('profileScreen.info'),
    navigation: router.ADDRESS_DETAILS,
    params: {
      isShow: true,
    },
  },
  {
    image: ICONS.affiliate,
    title: locale.t('profileScreen.affiliate'),
    navigation: router.ACCOUNT_AFFILIATE,
  },
  {
    image: ICONS.referred_people,
    title: locale.t('profileScreen.referrerTitle'),
    navigation: router.REFERRED_PEOPLE,
  },
];

export const SUPPORT_LIST = [
  {
    image: ICONS.star,
    title: locale.t('profileScreen.evaluation'),
    navigation: router.EVALUATE_MANAGEMENT,
  },
];
