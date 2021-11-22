import actions from '@store/actions';
import {reducerAdvance, reducerDefault} from '@store/common';

export const cart = (...props) => {
  return reducerAdvance(...props, actions.GET_CART);
};

export const updateCart = (...props) => {
  return reducerDefault(...props, actions.UPDATE_CART);
};
