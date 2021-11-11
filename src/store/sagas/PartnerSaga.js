import Actions, {_onFail, _onSuccess} from '@store/actions';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';

function* PartnerSaga(actions) {
  try {
    const res = yield API.get('getMemberDay');
    yield put({
      type: _onSuccess(Actions.GET_PARTNER),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PARTNER)});
    hanldeError(error);
  }
}

export function* watchPartnerSaga() {
  yield takeLatest(Actions.GET_PARTNER, PartnerSaga);
}
