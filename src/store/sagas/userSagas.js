import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import api from '@utils/api';
import {hanldeError} from '@utils/handleError';
import queryString from 'query-string';
import Config from 'react-native-config';

function* getToken() {
  const data = {
    username: Config.ACCESS_USERNAME,
    password: Config.ACCESS_PASSWORD,
  };

  const body = queryString.stringify(data);

  try {
    const res = yield api.post('getToken', body);
    yield put({type: _onSuccess(actions.GET_TOKEN), data: res.token});
  } catch (error) {
    yield put({type: _onFail(actions.GET_TOKEN)});
    hanldeError(error);
  }
}

function* signUpUser(payload) {
  try {
    const body = queryString.stringify(payload.body);
    const res = yield api.post('signupUser', body, payload.params);
    yield put({
      type: _onSuccess(actions.SIGN_UP_USER),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.SIGN_UP_USER)});
    hanldeError(error);
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.GET_TOKEN, getToken);
  yield takeLatest(actions.SIGN_UP_USER, signUpUser);
}
