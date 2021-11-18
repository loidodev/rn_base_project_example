import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
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
    payload.onSuccess && payload.onSuccess(res.token);
  } catch (error) {
    yield put({type: _onFail(actions.SIGN_UP_USER)});
    payload.onFail && payload.onFail();
    handleApiError(error, true);
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.GET_TOKEN, getToken);
  yield takeLatest(actions.SIGN_UP_USER, signUpUser);
}
