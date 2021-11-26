import {GET_PRODUCT_TYPE} from '@constants';
import actions from '@store/actions';

export const getProductViewed = payload => {
  return {
    type: actions.GET_PRODUCT_VIEWED,
    isLoadMore: payload.isLoadMore,
    params: {
      type: GET_PRODUCT_TYPE.list_viewed,
      ...payload.params,
    },
  };
};

export const getProductByLate = payload => {
  return {
    type: actions.GET_PRODUCT_BY_LATE,
    isLoadMore: payload.isLoadMore,
    params: {
      type: GET_PRODUCT_TYPE.save_for_late,
      ...payload.params,
    },
  };
};

export const getFavorite = payload => {
  return {
    type: actions.GET_FAVORITE,
    isLoadMore: payload.isLoadMore,
    params: payload.params,
  };
};
