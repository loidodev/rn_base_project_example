import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';

function* getBirthday() {
  try {
    const res = yield api.get('getBirthday');
    yield put({
      type: _onSuccess(actions.GET_BIRTHDAY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_BIRTHDAY)});
    handleApiError(error);
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
    handleApiError(error);
  }
}

function* getTermsOfUse(payload) {
  try {
    const res = yield api.get('getTermsOfUse');
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

export function* watchGeneralSagas() {
  yield takeLatest(actions.GET_BIRTHDAY, getBirthday);
  yield takeLatest(actions.GET_PARTNER, getMemBerDay);
  yield takeLatest(actions.GET_TERMS_OF_USE, getTermsOfUse);
}
