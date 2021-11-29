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
