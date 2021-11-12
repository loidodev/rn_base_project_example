import {all, fork} from 'redux-saga/effects';
import {watchBirthdaySagas} from './birthdaySaga';
import {watchDemoSagas} from './demo';
import {watchMenberSaga} from './MenberSaga';
import {watchPartnerSaga} from './PartnerSaga';
import {watchTokenSagas} from './TokenSaga';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchDemoSagas),
    fork(watchBirthdaySagas),
    fork(watchPartnerSaga),
    fork(watchMenberSaga),
  ]);
}
