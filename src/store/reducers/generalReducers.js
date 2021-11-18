import actions from '../actions';
import {reducerDefault} from '@store/common';

export const birthday = (...props) => {
  return reducerDefault(...props, actions.GET_BIRTHDAY);
};

export const partner = (...props) => {
  return reducerDefault(...props, actions.GET_PARTNER);
};

export const config = (...props) => {
  return reducerDefault(...props, actions.GET_CONFIG);
};
