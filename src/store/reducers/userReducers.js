import actions from '@store/actions';
import {reducerDefault} from '@store/common';

export const tokenUser = (state = null, payload) => {
  switch (payload.type) {
    case actions.TOKEN_USER:
      return payload.data;

    default:
      return state;
  }
};

export const token = (...props) => {
  return reducerDefault(...props, actions.GET_TOKEN);
};

export const signUp = (...props) => {
  return reducerDefault(...props, actions.SIGN_UP_USER);
};

export const userInfo = (...props) => {
  return reducerDefault(...props, actions.GET_USER);
};
