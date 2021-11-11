import Actions, {_onFail, _onSuccess} from '@store/actions';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';

function* birthdaySaga(actions) {
  try {
    const res = yield API.get('getBirthday');
    yield put({
      type: _onSuccess(Actions.GET_BIRTHDAY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_BIRTHDAY)});
    hanldeError(error);
  }
}

export function* watchBirthdaySagas() {
  yield takeLatest(Actions.GET_BIRTHDAY, birthdaySaga);
}
