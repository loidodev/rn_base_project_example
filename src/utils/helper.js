import {STORAGE_KEYS} from '@constants';
import locale from '@locale';
import store from '@store';
import actions, {_onUnmount} from '@store/actions';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import Toast from 'react-native-simple-toast';
import storage from './storage';

export const ADD_CART = 'ADD_CART';

export const BUY_NOW = 'BUY_NOW';

export const convertCurrency = (currency, suffix = '') => {
  if (currency == null) {
    return 0;
  }
  if (typeof currency !== 'string') {
    currency = currency.toString();
  }
  if (currency === '0') {
    return '0';
  }
  let result = '';
  if (currency.length >= 3) {
    result = currency;
  }
  if (currency.length >= 4) {
    result = `${currency.substr(0, currency.length - 3)}.${currency.substr(
      currency.length - 3,
      currency.length,
    )}`;
  }
  if (currency.length >= 7) {
    result = `${currency.substr(0, currency.length - 6)}.${currency.substr(
      currency.length - 6,
      3,
    )}.${currency.substr(currency.length - 3, currency.length)}`;
  }
  if (currency.length >= 10) {
    result = `${currency.substr(0, currency.length - 9)}.${currency.substr(
      currency.length - 9,
      3,
    )}.${currency.substr(currency.length - 6, 3)}.${currency.substr(
      currency.length - 3,
      currency.length,
    )}`;
  }

  return `${result}${suffix}`;
};

export const CustomToast = (toast = '', hasDev = false) => {
  hasDev
    ? Toast.show(locale.t('handleError.developing'))
    : Toast.show(locale.t(toast, {defaultValue: toast}));
};

export const handleTokenUser = tokenUser => {
  if (tokenUser) {
    storage.setItem(STORAGE_KEYS.tokenUser, tokenUser);
    store.dispatch({type: actions.TOKEN_USER, data: tokenUser});
  } else {
    storage.removeItem(STORAGE_KEYS.tokenUser);
    store.dispatch({type: actions.TOKEN_USER, data: null});
    store.dispatch({type: _onUnmount(actions.GET_USER)});
  }
};

export const handleApiError = (error, hasToastWhenErr) => {
  const {code, message} = error?.data || {};

  if (code === 401) {
    Alert.alert(
      'Phiên bản đăng nhập hết hạn',
      'Khỏi động lại ứng dụng của bạn',
      [
        {
          text: 'Đồng ý',
          onPress: () => RNRestart.Restart(),
        },
      ],
      {cancelable: false},
    );
  } else if (code === 403) {
    Alert.alert(
      'Phiên bản đăng nhập hết hạn',
      'Vui lòng đăng nhập lại tài khoản của bạn',
      [
        {
          text: 'Đồng ý',
          onPress: () => handleTokenUser(),
        },
      ],
      {cancelable: false},
    );
  } else {
    hasToastWhenErr && CustomToast(message);
  }
};

export const useComboInfo = (array = [], isComboGift = true) => {
  const newArr = array?.length ? array?.map(({item_id}) => item_id) : [];
  const str = newArr?.length > 1 ? newArr?.join(',') : `${newArr[0]}`;
  const bonus = newArr?.length ? str : '0';
  const result = isComboGift ? {gift_id: bonus} : {include_id: bonus};
  return JSON.stringify(result);
};

export const addCartToLocal = ({
  cart,
  productQty,
  details,
  optionId,
  combo_info,
  is_combo,
  arr_gift,
  arr_include,
  gift_info,
  include_info,
}) => {
  const index = cart?.findIndex(({option_id}) => option_id === optionId);

  if (index !== -1) {
    cart[index] = {
      ...cart[index],
      quantity: cart[index]?.quantity + productQty,
    };
  } else {
    const newItem = {
      ...details,
      combo_info,
      is_combo,
      arr_gift,
      arr_include,
      gift_info,
      include_info,
      quantity: productQty,
      option_id: optionId,
    };
    cart = [...cart, newItem];
  }

  return cart;
};

export const createDataTemplate = arrayLength => {
  if (arrayLength) {
    let arrayTemplate = [];
    for (let index = 0; index < arrayLength; index++) {
      arrayTemplate = [...arrayTemplate, {}];
    }
    return arrayTemplate;
  } else {
    return [];
  }
};

export const convertOption = (arr_option_tmp, option1, option2, option3) => {
  return arr_option_tmp?.find(value => {
    const checkOption1 = value.Option1 === option1;
    const checkOption2 = value.Option2 === option2;
    const checkOption3 = value.Option3 === option3;
    return checkOption1 && checkOption2 && checkOption3;
  });
};
export const handleFormData = objectBody => {
  const keys = Object.keys(objectBody);
  const values = Object.values(objectBody);

  const formData = new FormData();

  keys.map((key, index) => {
    formData.append(key, values[index]);
  });

  return formData;
};
