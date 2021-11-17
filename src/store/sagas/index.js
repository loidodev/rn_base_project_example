import {all, fork} from 'redux-saga/effects';
import {watchGeneralSagas} from './generalSagas';
import {watchUserSagas} from './userSagas';

export default function* rootSaga() {
  yield all([fork(watchUserSagas), fork(watchGeneralSagas)]);
}
