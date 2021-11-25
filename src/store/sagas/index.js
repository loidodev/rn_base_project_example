import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchGeneralSagas} from './watchSagas/generalSagas';
import {watchProductSagas} from './watchSagas/productSagas';
import {watchPaymentSagas} from './watchSagas/paymentSagas';

export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchGeneralSagas),
    fork(watchProductSagas),
    fork(watchPaymentSagas),
  ]);
}
