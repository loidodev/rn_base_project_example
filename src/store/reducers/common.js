import {_onFail, _onSuccess, _onUnmount} from '@store/actions';

export const INITIAL_STATE = {
  default: {
    data: null,
    isLoading: false,
  },
  loadMore: {
    data: null,
    total: null,
    totalPage: null,
    isLoading: true,
  },
};

export const reducerDefault = (
  state = INITIAL_STATE.default,
  payload,
  action,
  callback,
) => {
  switch (payload.type) {
    case action:
      return {...state, isLoading: true};

    case _onSuccess(action): {
      const result = {...state, data: payload.data, isLoading: false};

      return callback ? callback(result) : result;
    }

    case _onFail(action):
      return INITIAL_STATE.default;

    case _onUnmount(action):
      return INITIAL_STATE.default;

    default:
      return state;
  }
};

export const reducerAdvance = (
  state = INITIAL_STATE.loadMore,
  payload,
  action,
  callback,
) => {
  switch (payload.type) {
    case action:
      return {...state, isLoading: true};

    case _onSuccess(action): {
      const {data, totalPage, total, isLoadMore} = payload;

      let newData = [];

      if (isLoadMore && state.data?.length) {
        newData = [...state.data, ...data];
      } else {
        newData = Array.isArray(data) ? [...data] : data;
      }

      const result = {
        ...state,
        data: newData,
        totalPage: totalPage,
        total: total,
        isLoading: false,
      };

      return callback ? callback(result) : result;
    }

    case _onFail(action):
      return {...INITIAL_STATE.loadMore, isLoading: false};

    case _onUnmount(action):
      return {...INITIAL_STATE.loadMore, isLoading: false};

    default:
      return state;
  }
};
