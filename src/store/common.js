import {_onFail, _onSuccess, _onUnmount} from './actions';

export const stateDefault = {
  data: null,
  isLoading: false,
};

export const stateLoadMore = {
  data: null,
  total: null,
  totalPage: null,
  isLoading: true,
};

export const reducerDefault = (
  state = stateDefault,
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
      return stateDefault;

    case _onUnmount(action):
      return stateDefault;

    default:
      return state;
  }
};

export const reducerAdvance = (
  state = stateLoadMore,
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
        newData = data;
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
      return {...stateLoadMore, isLoading: false};

    case _onUnmount(action):
      return {...stateLoadMore, isLoading: false};

    default:
      return state;
  }
};
