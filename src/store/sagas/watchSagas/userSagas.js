import {put, select, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {
  CustomToast,
  handleApiError,
  handleFormData,
  handleTokenUser,
} from '@utils';
import api from '@utils/api';
import queryString from 'query-string';
import {ACCOUNT_IMS, URL_API} from '../common';

function* getToken() {
  try {
    const body = yield queryString.stringify(ACCOUNT_IMS);
    const res = yield api.post(URL_API.user.getToken, body);
    yield put({type: _onSuccess(actions.GET_TOKEN), data: res.token});
  } catch (error) {
    yield put({type: _onFail(actions.GET_TOKEN)});
    handleApiError(error);
  }
}

function* getUser(payload) {
  try {
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.get(URL_API.user.getUser, {
      user: payload.params?.tokenUser || tokenUser,
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

function* signUpUser(payload) {
  try {
    const body = yield queryString.stringify(payload.body);
    const res = yield api.post(URL_API.user.signupUser, body, payload.params);
    yield put({
      type: _onSuccess(actions.SIGN_UP_USER),
      data: res.token,
    });
    yield put({
      type: actions.GET_USER,
      params: {tokenUser: res.token},
    });
    payload.onSuccess && payload.onSuccess();
    CustomToast(res.message);
    handleTokenUser(res.token);
  } catch (error) {
    yield put({type: _onFail(actions.SIGN_UP_USER)});
    payload.onFail && payload.onFail();
    handleApiError(error, true);
  }
}

function* signInUser(payload) {
  try {
    const body = yield queryString.stringify(payload.body);
    const res = yield api.post(URL_API.user.signinUser, body, payload.params);
    yield put({
      type: _onSuccess(payload.type),
      data: res.token,
    });
    yield put({
      type: actions.GET_USER,
      params: {tokenUser: res.token},
    });
    payload.onSuccess && payload.onSuccess();
    CustomToast(res.message);
    handleTokenUser(res.token);
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    payload.onFail && payload.onFail();
    handleApiError(error, true);
  }
}

function* logoutUser(payload) {
  try {
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.get(URL_API.user.logoutUser, {user: tokenUser});
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
    CustomToast(res.message);
    handleTokenUser();
    payload.onSuccess && payload.onSuccess();
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* updateUser(payload) {
  try {
    const body = handleFormData(payload.body);
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.post(URL_API.user.updateUser, body, {
      user: tokenUser,
    });
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
    yield put({type: actions.GET_USER});
    CustomToast(res.message);
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error, true);
  }
}

function* updatePassword(payload) {
  try {
    const body = handleFormData(payload.body);
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.post(URL_API.user.updatePassword, body, {
      user: tokenUser,
    });
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
    CustomToast(res.message);
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error, true);
  }
}

function* getUserWCoinLog(payload) {
  const {type, params, isLoadMore} = payload || {};
  try {
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.get(URL_API.user.getUserWcoinLog, {
      user: tokenUser,
      ...params,
    });
    yield put({
      type: _onSuccess(type),
      data: res.data,
      totalPage: res.total_page,
      info: res.info,
      isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(type)});
    handleApiError(error);
  }
}

function* swapCommissionLog(payload) {
  const {type, params, isLoadMore} = payload || {};
  try {
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.get(URL_API.user.swapCommissionLog, {
      user: tokenUser,
      ...params,
    });
    yield put({
      type: _onSuccess(type),
      data: res.data,
      totalPage: res.total_page,
      info: res.info,
      isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(type)});
    handleApiError(error);
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.GET_TOKEN, getToken);
  yield takeLatest(actions.GET_USER, getUser);
  yield takeLatest(actions.SIGN_UP_USER, signUpUser);
  yield takeLatest(actions.SIGN_IN_USER, signInUser);
  yield takeLatest(actions.LOG_OUT_USER, logoutUser);
  yield takeLatest(actions.UPDATE_USER, updateUser);
  yield takeLatest(actions.UPDATE_PASSWORD, updatePassword);
  yield takeLatest(actions.GET_USER_W_COIN_LOG, getUserWCoinLog);
  yield takeLatest(actions.SWAP_COMMISSION_LOG, swapCommissionLog);
}
