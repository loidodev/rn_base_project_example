import actions, {_onFail, _onSuccess} from '@store/actions';
import {handleApiError} from '@utils';
import api from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';

function* getSearch(payload) {
  try {
    const res = yield api.get('getProduct?numshow=12', payload.params);
    yield put({
      type: _onSuccess(actions.GET_SEARCH_SCREEN),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: payload.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_SEARCH_SCREEN)});
    handleApiError(error);
  }
}
function* getSuggestions() {
  try {
    const res = yield api.get('getSuggestions');
    yield put({
      type: _onSuccess(actions.GET_SEARCH_SUGGESTIONS),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(actions.GET_SEARCH_SUGGESTIONS)});
    handleApiError(error);
  }
}

export function* watchProductSaga() {
  yield takeLatest(actions.GET_SEARCH_SCREEN, getSearch);
  yield takeLatest(actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
}
