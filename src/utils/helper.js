import {STORAGE_KEYS} from '@constants';
import locale from '@locale';
import {commonRoot} from '@navigator/navigationRef';
import router from '@navigator/router';
import store from '@store';
import actions, {_onUnmount} from '@store/actions';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import Toast from 'react-native-simple-toast';
import storage from './storage';

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

export const handleFormData = objectBody => {
  const keys = Object.keys(objectBody);
  const values = Object.values(objectBody);

  const formData = new FormData();

  keys.map((key, index) => {
    formData.append(key, values[index]);
  });

  return formData;
};

export const handleAuthentication = callBackSuccess => {
  if (store.getState().tokenUser) {
    callBackSuccess && callBackSuccess();
  } else {
    commonRoot.navigate(router.GET_START_SCREEN);
  }
};
