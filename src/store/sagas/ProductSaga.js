import actions, {_onFail, _onSuccess} from '@store/actions';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';

function* getSearch(payload) {
  try {
    const res = yield API.get('getProduct?numshow=12', payload.params);
    yield put({
      type: _onSuccess(actions.GET_SEARCH_SCREEN),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: payload.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_SEARCH_SCREEN)});
    hanldeError(error);
  }
}
function* getSuggestions() {
  try {
    const res = yield API.get('getSuggestions');
    yield put({
      type: _onSuccess(actions.GET_SEARCH_SUGGESTIONS),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_SEARCH_SUGGESTIONS)});
    hanldeError(error);
  }
}

export function* watchProductSaga() {
  yield takeLatest(actions.GET_SEARCH_SCREEN, getSearch);
  yield takeLatest(actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
}
