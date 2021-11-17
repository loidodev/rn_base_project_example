import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {api} from '@utils/api';
import {hanldeError} from '@utils/handleError';

function* getBirthday() {
  try {
    const res = yield api.get('getBirthday');
    yield put({
      type: _onSuccess(actions.GET_BIRTHDAY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_BIRTHDAY)});
    hanldeError(error);
  }
}

function* getMemBerDay() {
  try {
    const res = yield api.get('getMemberDay');
    yield put({
      type: _onSuccess(actions.GET_PARTNER),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_PARTNER)});
    hanldeError(error);
  }
}

export function* watchGeneralSagas() {
  yield takeLatest(actions.GET_BIRTHDAY, getBirthday);
  yield takeLatest(actions.GET_PARTNER, getMemBerDay);
}
