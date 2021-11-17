import {all, fork} from 'redux-saga/effects';
import {watchBirthdaySagas} from './birthdaySaga';
import {watchDemoSagas} from './demo';
import {watchPartnerSaga} from './PartnerSaga';
import {watchTokenSagas} from './TokenSaga';
import {watchProductSaga} from './ProductSaga';
import {watchConfigSagas} from './ConfigSaga';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchDemoSagas),
    fork(watchBirthdaySagas),
    fork(watchPartnerSaga),
    fork(watchProductSaga),
    fork(watchConfigSagas),
  ]);
}
