import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchGeneralSagas} from './watchSagas/generalSagas';
import {watchProductSagas} from './watchSagas/productSagas';

export default function* rootSagas() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSagas),
  ]);
}
