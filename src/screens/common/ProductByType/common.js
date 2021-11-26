import {GET_PRODUCT_TYPE} from '@constants';
import {
  getFavorite,
  getProductByLate,
  getProductViewed,
} from '@store/actions/funcActions/productActions';

export const handleApi = (dispatch, type, payload) => {
  switch (type) {
    case GET_PRODUCT_TYPE.list_viewed:
      return Promise.all([dispatch(getProductViewed(payload))]);

    case GET_PRODUCT_TYPE.save_for_late:
      return Promise.all([dispatch(getProductByLate(payload))]);

    case GET_PRODUCT_TYPE.favorite:
      return Promise.all([dispatch(getFavorite(payload))]);

    default:
      return Promise.all([dispatch(getProductViewed(payload))]);
  }
};

export const handleFilter = ({viewed, byLate, favorite, type}) => {
  switch (type) {
    case GET_PRODUCT_TYPE.list_viewed:
      return {...viewed};

    case GET_PRODUCT_TYPE.save_for_late:
      return {...byLate};

    case GET_PRODUCT_TYPE.favorite:
      return {...favorite};

    default:
      return {};
  }
};
