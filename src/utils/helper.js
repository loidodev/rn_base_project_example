import Toast from 'react-native-simple-toast';
import locale from '@locale';

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
