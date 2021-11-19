import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './userSagas';
import {watchGeneralSagas} from './generalSagas';
import {watchProductSagas} from './productSagas';

export default function* rootSagas() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSagas),
  ]);
}
