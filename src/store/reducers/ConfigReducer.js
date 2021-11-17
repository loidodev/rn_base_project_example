import {reducerDefault} from '@store/common';
import Actions from '../actions';

export const config = (...props) => {
  return reducerDefault(...props, Actions.GET_CONFIG);
};

export const ConfigReducer = {config};
