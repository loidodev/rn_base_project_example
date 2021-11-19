import {put, select, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {CustomToast, handleApiError, handleTokenUser} from '@utils';
import api from '@utils/api';
import queryString from 'query-string';
import Config from 'react-native-config';

const ACCOUNT_IMS = {
  username: Config.ACCESS_USERNAME,
  password: Config.ACCESS_PASSWORD,
};

function* getToken() {
  try {
    const body = yield queryString.stringify(ACCOUNT_IMS);
    const res = yield api.post('getToken', body);
    yield put({type: _onSuccess(actions.GET_TOKEN), data: res.token});
  } catch (error) {
    yield put({type: _onFail(actions.GET_TOKEN)});
    handleApiError(error);
  }
}

function* signUpUser(payload) {
  try {
    const body = yield queryString.stringify(payload.body);
    const res = yield api.post('signupUser', body, payload.params);
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
    const res = yield api.post('signinUser', body, payload.params);
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

function* getUser(payload) {
  try {
    const tokenUser = yield select(state => state.tokenUser);
    const res = yield api.get('getUser', {
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

export function* watchUserSagas() {
  yield takeLatest(actions.GET_TOKEN, getToken);
  yield takeLatest(actions.SIGN_UP_USER, signUpUser);
  yield takeLatest(actions.SIGN_IN_USER, signInUser);
  yield takeLatest(actions.GET_USER, getUser);
}
