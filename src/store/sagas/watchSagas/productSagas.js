import actions, {_onFail, _onSuccess, _onUnmount} from '@store/actions';
import {handleApiError} from '@utils';
import {CustomToast} from '@utils/helper';
import api from '@utils/api';
import queryString from 'query-string';
import {delay, put, select, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../common';

function* getSuggestions(payload) {
  try {
    const res = yield api.get(URL_API.product.getSuggestions);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
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
    const res = yield api.get(URL_API.product.getCombo, payload.params);
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
    const res = yield api.get(URL_API.product.getProductOption, payload.params);
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
    const res = yield api.get(
      URL_API.product.getProductOptionDetail,
      payload.params,
    );
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
    const res = yield api.post(
      URL_API.product.checkFavorite,
      body,
      payload.params,
    );
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
    const res = yield api.get(URL_API.product.checkFavorite, payload.params);
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

function* ratingProduct(payload) {
  try {
    const res = yield api.postFormData(
      `ratingProduct?user=${payload.user}`,
      payload.formData,
    );
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
    yield put({
      type: actions.GET_REVIEWS_PRODUCT,
      params: {
        item_id: payload.item_id,
        p: 1,
      },
    });
    yield put({
      type: actions.GET_PRODUCT_DETAILS,
      params: {
        item_id: payload.item_id,
      },
    });
  } catch (error) {
    yield delay(1000);
    CustomToast(error.data.message);
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getCombo(payload) {
  try {
    const res = yield api.get(URL_API.product.getCombo, payload.params);
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
export function* watchProductSagas() {
  yield takeLatest(actions.SEARCH_SCREEN, getProduct);
  yield takeLatest(actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
  yield takeLatest(actions.GET_PRODUCT_DETAILS, getProduct);
  yield takeLatest(actions.GET_REVIEWS_PRODUCT, getReviewsProduct);
  yield takeLatest(actions.GET_COMBO_PRODUCT_DETAILS, getComboProductDetails);
  yield takeLatest(actions.GET_PRODUCT_OPTION, getProductOption);
  yield takeLatest(actions.GET_PRODUCT_OPTION_DETAILS, getProductOptionDetail);
  yield takeLatest(actions.GET_PRODUCT_GROUP_HOME, getProductGroup);
  yield takeLatest(actions.GET_PRODUCT_IS_FOCUS, getProduct);
  yield takeLatest(actions.GET_SHOPPING, getShopping);
  yield takeLatest(actions.GET_PRODUCT_VIEWED, getProduct);
  yield takeLatest(actions.GET_PRODUCT_BY_LATE, getProduct);
  yield takeLatest(actions.CHECK_FAVORITE, checkFavorite);
  yield takeLatest(actions.GET_SHOW_FAVORITE_PRODUCT, showFavorite);
  yield takeLatest(actions.RATING_PRODUCT, ratingProduct);
  yield takeLatest(actions.GET_COMBO, getCombo);
}
