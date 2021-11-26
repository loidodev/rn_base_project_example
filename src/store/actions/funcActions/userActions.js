import actions from '@store/actions';

export const getUserWCoinLog = payload => {
  return {
    type: actions.GET_USER_W_COIN_LOG,
    isLoadMore: payload.isLoadMore,
    params: payload.params,
  };
};
