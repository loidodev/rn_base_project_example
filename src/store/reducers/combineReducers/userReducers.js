import actions from '@store/actions';
import {reducerDefault} from '@store/reducers/common';

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

export const userInfo = (...props) => {
  return reducerDefault(...props, actions.GET_USER);
};

export const signUp = (...props) => {
  return reducerDefault(...props, actions.SIGN_UP_USER);
};

export const signIn = (...props) => {
  return reducerDefault(...props, actions.SIGN_IN_USER);
};

export const logout = (...props) => {
  return reducerDefault(...props, actions.LOG_OUT_USER);
};

export const updateUser = (...props) => {
  return reducerDefault(...props, actions.UPDATE_USER);
};

export const updatePassword = (...props) => {
  return reducerDefault(...props, actions.UPDATE_PASSWORD);
};
