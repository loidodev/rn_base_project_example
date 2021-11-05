import actions from '@store/actions';
import {takeLatest} from 'redux-saga/effects';

function* demo() {}

export function* watchDemoSagas() {
  yield takeLatest(actions.DEMO, demo);
}
