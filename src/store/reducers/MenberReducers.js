import {reducerDefault} from '@store/common';
import Actions from '../actions';

export const menber = (...props) => {
  return reducerDefault(...props, Actions.GET_MENBER);
};

export const MenberReducers = {menber};
