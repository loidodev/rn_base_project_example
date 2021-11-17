import actions from '@store/actions';
import {reducerDefault} from '@store/common';

export const token = (...props) => {
  return reducerDefault(...props, actions.GET_TOKEN);
};

export const signUp = (...props) => {
  return reducerDefault(...props, actions.SIGN_UP_USER);
};
