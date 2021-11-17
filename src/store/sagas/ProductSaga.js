import Actions, {_onFail, _onSuccess} from '@store/actions';
import API from '@utils/api';
import {hanldeError} from '@utils/handleError';
import {put, takeLatest} from 'redux-saga/effects';

function* getSearch(actions) {
  try {
    const res = yield API.get('getProduct?numshow=12', actions.params);
    yield put({
      type: _onSuccess(Actions.GET_SEARCH_SCREEN),
      data: res.data,
      totalPage: res.total_page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_SEARCH_SCREEN)});
    hanldeError(error);
  }
}
function* getSuggestions(actions) {
  try {
    const res = yield API.get('getSuggestions');
    yield put({
      type: _onSuccess(Actions.GET_SEARCH_SUGGESTIONS),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_SEARCH_SUGGESTIONS)});
    hanldeError(error);
  }
}

export function* watchProductSaga() {
  yield takeLatest(Actions.GET_SEARCH_SCREEN, getSearch);
  yield takeLatest(Actions.GET_SEARCH_SUGGESTIONS, getSuggestions);
}
