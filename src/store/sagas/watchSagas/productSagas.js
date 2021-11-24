import actions, {_onFail, _onSuccess, _onUnmount} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../common';
import queryString from 'query-string';
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

function* getReviewsProduct(payload) {
  try {
    const res = yield api.get(URL_API.product.getSuggestions);
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

function* checkFavorite(payload) {
  try {
    const body = queryString.stringify(payload.body);
    const res = yield api.post('checkFavorite?user=', body, payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });

    if (payload.isGetData) {
      yield put({
        type: _onUnmount(actions.GET_SHOW_FAVORITE_PRODUCT),
      });
      yield put({
        type: actions.GET_SHOW_FAVORITE_PRODUCT,
        params: {
          user: payload.params.user,
        },
      });
    }

    if (payload.check) {
      yield put({
        type: _onUnmount(actions.GET_SHOW_FAVORITE_PRODUCT),
      });
      yield put({
        type: actions.GET_SHOW_FAVORITE_PRODUCT,
        params: {
          user: payload.params.user,
        },
      });
    }
  } catch (error) {
    yield put({type: _onFail(payload.type)});
  }
}

function* showFavorite(payload) {
  try {
    const res = yield api.get('getFavorite?numshow=12', payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
      totalPage: res.total_page,
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
  yield takeLatest(actions.GET_PRODUCT_GROUP_HOME, getProductGroup);
  yield takeLatest(actions.GET_PRODUCT_IS_FOCUS, getProduct);
  yield takeLatest(actions.GET_SHOPPING, getShopping);
  yield takeLatest(actions.CHECK_FAVORITE, checkFavorite);
  yield takeLatest(actions.GET_SHOW_FAVORITE_PRODUCT, showFavorite);
}
