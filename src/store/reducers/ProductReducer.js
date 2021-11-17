import {reducerAdvance, reducerDefault} from '@store/common';
import Actions from '../actions';

export const search = (...props) => {
  return reducerAdvance(...props, Actions.GET_SEARCH_SCREEN);
};
export const suggestions = (...props) => {
  return reducerDefault(...props, Actions.GET_SEARCH_SUGGESTIONS);
};

export const PartnerReducers = {search, suggestions};
