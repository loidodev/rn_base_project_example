import Actions from '../actions';
import {reducerDefault} from '@store/common';

export const birthday = (...props) => {
  return reducerDefault(...props, Actions.GET_BIRTHDAY);
};

export const partner = (...props) => {
  return reducerDefault(...props, Actions.GET_PARTNER);
};