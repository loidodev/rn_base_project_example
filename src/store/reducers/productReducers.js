mport {reducerAdvance, reducerDefault} from '@store/common';
import actions from '../actions';

export const search = (...props) => {
  return reducerAdvance(...props, actions.GET_SEARCH_SCREEN);
};
export const suggestions = (...props) => {
  return reducerDefault(...props, actions.GET_SEARCH_SUGGESTIONS);
};