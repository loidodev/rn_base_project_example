import actions from '@store/actions';
import {reducerAdvance, reducerDefault} from '@store/common';

export const birthday = (...props) => {
  return reducerDefault(...props, actions.GET_BIRTHDAY);
};

export const partner = (...props) => {
  return reducerDefault(...props, actions.GET_PARTNER);
};

export const termsOfUse = (...props) => {
  return reducerAdvance(...props, actions.GET_TERMS_OF_USE);
};
