import {all, fork} from 'redux-saga/effects';
import {watchDemoSagas} from './demo';

export default function* rootSaga() {
  yield all([fork(watchDemoSagas)]);
}
