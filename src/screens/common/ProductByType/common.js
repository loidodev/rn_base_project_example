import {GET_PRODUCT_TYPE} from '@constants';
import {
  getProductByLate,
  getProductViewed,
} from '@store/actions/funcActions/productActions';

export const handleApi = (dispatch, type, payload) => {
  switch (type) {
    case GET_PRODUCT_TYPE.list_viewed:
      return Promise.all([dispatch(getProductViewed(payload))]);

    case GET_PRODUCT_TYPE.save_for_late:
      return Promise.all([dispatch(getProductByLate(payload))]);

    default:
      return Promise.all([dispatch(getProductViewed(payload))]);
  }
};

export const handleFilter = ({viewed, byLate, type}) => {
  switch (type) {
    case GET_PRODUCT_TYPE.list_viewed:
      return {...viewed};
    case GET_PRODUCT_TYPE.save_for_late:
      return {...byLate};

    default:
      return {};
  }
};
