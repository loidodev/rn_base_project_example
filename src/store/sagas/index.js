import {all, fork} from 'redux-saga/effects';
import {watchGeneralSagas} from './generalSagas';
import {watchProductSaga} from './productSaga';
import {watchUserSagas} from './userSagas';

export default function* rootSagas() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSaga),
  ]);
}
