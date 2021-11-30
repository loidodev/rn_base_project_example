import {getUserGift} from '@store/actions/funcActions/userActions';

export const handleApi = (dispatch, payload) => {
  return Promise.all([dispatch(getUserGift(payload))]);
};
