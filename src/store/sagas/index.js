import {all, fork} from 'redux-saga/effects';
import {watchConfigSagas} from './ConfigSaga';
import {watchGeneralSagas} from './generalSagas';
import {watchProductSaga} from './ProductSaga';
import {watchUserSagas} from './userSagas';

export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSaga),
    fork(watchConfigSagas),
  ]);
}
