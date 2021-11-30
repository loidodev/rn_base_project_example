import {MANAGEMENT_TYPE} from '@constants';
import {
  getCommission,
  getUserWCoinLog,
  swapCommissionLog,
} from '@store/actions/funcActions/userActions';
import moment from 'moment';

export const DATE_TYPE = {
  begin: 'begin',
  end: 'end',
};

export const formatDate = date => {
  return date ? moment(date).format('DD/MM/YYYY') : '';
};

export const getTimeForDate = date => {
  return new Date(date).getTime();
};

export const handleApi = (dispatch, type, payload) => {
  switch (type) {
    case MANAGEMENT_TYPE.point:
      return Promise.all([dispatch(getUserWCoinLog(payload))]);

    case MANAGEMENT_TYPE.history_point:
      return Promise.all([dispatch(swapCommissionLog(payload))]);

    case MANAGEMENT_TYPE.rose:
      return Promise.all([dispatch(getCommission(payload))]);

    default:
      return Promise.all([dispatch(getUserWCoinLog(payload))]);
  }
};

export const handleFilter = ({point, historyPoint, rose, type}) => {
  switch (type) {
    case MANAGEMENT_TYPE.point:
      return {...point};

    case MANAGEMENT_TYPE.history_point:
      return {...historyPoint};

    case MANAGEMENT_TYPE.rose:
      return {...rose};

    default:
      return {};
  }
};
