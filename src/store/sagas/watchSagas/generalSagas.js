import {put, takeLatest} from '@redux-saga/core/effects';
import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {URL_API} from '../common';

function* getConfig() {
  try {
    const res = yield api.get(URL_API.general.getConfigApp);
    yield put({type: _onSuccess(actions.GET_CONFIG), data: res.data});
  } catch (error) {
    yield put({type: _onFail(actions.GET_CONFIG)});
    handleApiError(error);
  }
}

function* getBirthday() {
  try {
    const res = yield api.get(URL_API.general.getBirthday);
    yield put({
      type: _onSuccess(actions.GET_BIRTHDAY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_BIRTHDAY)});
    handleApiError(error);
  }
}

function* getMemBerDay(payload) {
  try {
    const res = yield api.get(URL_API.general.getMemberDay);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getTermsOfUse(payload) {
  try {
    const res = yield api.get(URL_API.general.getTermsOfUse);
    yield put({
      type: _onSuccess(payload.type),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(payload.type)});
    handleApiError(error);
  }
}

function* getBannerById(payload) {
  try {
    const res = yield api.get(URL_API.general.getBannerByID, payload.params);
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
  yield takeLatest(actions.GET_CONFIG, getConfig);
  yield takeLatest(actions.GET_BIRTHDAY, getBirthday);
  yield takeLatest(actions.GET_PARTNER, getMemBerDay);
  yield takeLatest(actions.GET_TERMS_OF_USE, getTermsOfUse);
  yield takeLatest(actions.GET_BANNER_BY_ID_HOME, getBannerById);
  yield takeLatest(actions.GET_MEMBER, getMemBerDay);
  yield takeLatest(actions.GET_BANNER_BY_ID_SHOPPING, getBannerById);
}
