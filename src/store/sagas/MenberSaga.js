import Actions, {_onFail, _onSuccess} from '@store/actions';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';

function* MenberSaga(actions) {
  try {
    const res = yield API.get('getStores');
    yield put({
      type: _onSuccess(Actions.GET_MENBER),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_MENBER)});
    hanldeError(error);
  }
}

export function* watchMenberSaga() {
  yield takeLatest(Actions.GET_MENBER, MenberSaga);
}
