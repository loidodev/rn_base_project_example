import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';

function* getProduct(payload) {
  try {
    const res = yield api.get('getProduct', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: payload.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getSuggestions() {
  try {
    const res = yield api.get('getSuggestions');
    yield put({
      type: _onSuccess(actions.GET_SEARCH_SUGGESTIONS),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_SEARCH_SUGGESTIONS)});
    handleApiError(error);
  }
}

function* getProductGroup(payload) {
  try {
    const res = yield api.get('getProductGroup');
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

export function* watchProductSagas() {
  yield takeLatest(actions.GET_SEARCH_SCREEN, getProduct);
  yield takeLatest(actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
  yield takeLatest(actions.GET_PRODUCT_GROUP_HOME, getProductGroup);
  yield takeLatest(actions.GET_PRODUCT_IS_FOCUS, getProduct);
}
