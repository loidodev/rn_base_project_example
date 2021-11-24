import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../common';

function* getProduct(payload) {
  try {
    const res = yield api.get(URL_API.product.getProduct, payload.params);
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
    const res = yield api.get(URL_API.product.getSuggestions);
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
  const tokenUser = yield select(state => state.tokenUser);
  try {
    const res = yield api.get(URL_API.product.getProductGroup, {
      user: tokenUser,
    });
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getShopping(payload) {
  try {
    const res = yield api.get(URL_API.product.getShopping);
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
  yield takeLatest(actions.SEARCH_SCREEN, getProduct);
  yield takeLatest(actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
  yield takeLatest(actions.GET_PRODUCT_GROUP_HOME, getProductGroup);
  yield takeLatest(actions.GET_PRODUCT_IS_FOCUS, getProduct);
  yield takeLatest(actions.GET_SHOPPING, getShopping);
}
