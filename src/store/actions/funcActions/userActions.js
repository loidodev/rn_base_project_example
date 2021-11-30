import actions from '@store/actions';

export const getUserWCoinLog = payload => {
  return {
    type: actions.GET_USER_W_COIN_LOG,
    isLoadMore: payload.isLoadMore,
    params: payload.params,
  };
};

export const swapCommissionLog = payload => {
  return {
    type: actions.SWAP_COMMISSION_LOG,
    isLoadMore: payload.isLoadMore,
    params: payload.params,
  };
};

export const swapCommission = (body, params) => {
  return {
    type: actions.SWAP_COMMISSION,
    body,
    params,
  };
};

export const getCommission = payload => {
  return {
    type: actions.GET_COMMISSION,
    isLoadMore: payload.isLoadMore,
    params: payload.params,
  };
};

export const getUserGift = (params, isLoadMore) => {
  return {
    type: actions.GET_USER_GIFT,
    params,
    isLoadMore,
  };
};

export const getUserGiftDetails = params => {
  return {
    type: actions.GET_USER_GIFT_DETAILS,
    params,
  };
};
