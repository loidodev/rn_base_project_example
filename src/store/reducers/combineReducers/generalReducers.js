import actions from '@store/actions';
import {reducerAdvance, reducerDefault} from '@store/reducers/common';

export const birthday = (...props) => {
  return reducerDefault(...props, actions.GET_BIRTHDAY);
};

export const partner = (...props) => {
  return reducerDefault(...props, actions.GET_PARTNER);
};

export const config = (...props) => {
  return reducerDefault(...props, actions.GET_CONFIG);
};

export const termsOfUse = (...props) => {
  return reducerAdvance(...props, actions.GET_TERMS_OF_USE);
};

export const bannerByIdHome = (...props) => {
  return reducerAdvance(...props, actions.GET_BANNER_BY_ID_HOME);
};

export const member = (...props) => {
  return reducerDefault(...props, actions.GET_MEMBER);
};

export const bannerByIdShopping = (...props) => {
  return reducerAdvance(...props, actions.GET_BANNER_BY_ID_SHOPPING);
};
