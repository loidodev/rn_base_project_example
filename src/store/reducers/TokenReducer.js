import {reducerDefault} from '@store/common';
import Actions from '../actions';

export const token = (...props) => {
  return reducerDefault(...props, Actions.GET_TOKEN);
};

export const TokenReducer = {token};
