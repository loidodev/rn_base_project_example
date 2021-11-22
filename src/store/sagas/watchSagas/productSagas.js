import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';

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

function* getReviewsProduct(payload) {
  try {
    const res = yield api.get('getRatingProduct?numshow=12', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getComboProductDetails(payload) {
  try {
    const res = yield api.get('getCombo?numshow=12', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getProductOption(payload) {
  try {
    const res = yield api.get('getProductOption', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getProductOptionDetail(payload) {
  try {
    const res = yield api.get('getProductOptionDetail', payload.params);
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
  yield takeLatest(actions.GET_PRODUCT_DETAILS, getProduct);
  yield takeLatest(actions.GET_REVIEWS_PRODUCT, getReviewsProduct);
  yield takeLatest(actions.GET_COMBO_PRODUCT_DETAILS, getComboProductDetails);
  yield takeLatest(actions.GET_PRODUCT_OPTION, getProductOption);
  yield takeLatest(actions.GET_PRODUCT_OPTION_DETAILS, getProductOptionDetail);
}
