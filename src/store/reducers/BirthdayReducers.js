import {reducerDefault} from '@store/common';
import Actions from '../actions';

export const birthday = (...props) => {
  return reducerDefault(...props, Actions.GET_BIRTHDAY);
};

export const birthdayReducers = {birthday};
