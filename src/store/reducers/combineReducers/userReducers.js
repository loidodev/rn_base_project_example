import actions from '@store/actions';
import {reducerAdvance, reducerDefault} from '@store/reducers/common';

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

export const userWCoinLog = (...props) => {
  return reducerAdvance(
    ...props,
    actions.GET_USER_W_COIN_LOG,
    (state, payload) => {
      return {
        ...state,
        info: payload.info,
      };
    },
  );
};

export const swapCommission = (...props) => {
  return reducerDefault(...props, actions.SWAP_COMMISSION);
};

export const commission = (...props) => {
  return reducerAdvance(...props, actions.GET_COMMISSION, (state, payload) => {
    return {
      ...state,
      info: payload.info,
    };
  });
};

export const userGift = (...props) => {
  return reducerAdvance(...props, actions.GET_USER_GIFT);
};

export const userGiftDetails = (...props) => {
  return reducerAdvance(...props, actions.GET_USER_GIFT_DETAILS);
};
