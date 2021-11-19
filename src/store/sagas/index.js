import {all, fork} from 'redux-saga/effects';
import {watchGeneralSagas} from './generalSagas';
import {watchProductSaga} from './productSaga';
import {watchTokenSagas} from './TokenSaga';
import {watchUserSagas} from './userSagas';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSaga),
  ]);
}
