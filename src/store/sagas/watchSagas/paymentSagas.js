import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import queryString from 'query-string';

function* add_viewedProduct(payload) {
  try {
    const res = yield api.get('viewedProduct?user=', payload.params);
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

function* getCart(payload) {
  try {
    const res = yield api.get('getCart', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data || [],
      total_payment: res.total_payment || 0,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* updateCart(payload) {
  try {
    const body = queryString.stringify(payload.body);
    const res = yield api.post('updateCart', body, payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
    yield put({
      type: actions.GET_CART,
      params: {
        user: payload.params.user,
      },
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

export function* watchPaymentSagas() {
  yield takeLatest(actions.ADD_PRODUCT_VIEWED, add_viewedProduct);
  yield takeLatest(actions.GET_CART, getCart);
  yield takeLatest(actions.UPDATE_CART, updateCart);
}
