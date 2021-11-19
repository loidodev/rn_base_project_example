import {all, fork} from 'redux-saga/effects';
import {watchGeneralSagas} from './generalSagas';
import {watchProductSaga} from './productSagas';
import {watchUserSagas} from './userSagas';

export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSaga),
  ]);
}
