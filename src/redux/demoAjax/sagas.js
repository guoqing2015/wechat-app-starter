
import { actionChannel, call, take, put, race, fork } from 'redux-saga/effects'

import {
  LOAD_REPOS,
} from './constants';


import {
  reposLoaded,
  repoLoadingError
} from './actions';


import {
  getRepos
} from './api';


// 写法一
function* handleRequestRepos() {
  while (true) {
    const { payload } = yield take(LOAD_REPOS);
    const { response, error } = yield call(getRepos, payload);
    if (response && !error) {
      yield put(reposLoaded(response, payload));
    } else {
      yield put(repoLoadingError(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestRepos);
}


// 写法二
/*function* handleRequestRepos(payload) {
    try {
      const githubUser = yield call(getRepos, payload);
      yield put({type: LOAD_USER_SUCCESS, githubUser});
    } catch (error) {
      throw error;
    }
}

export default function* rootSaga() {
  yield takeEvery(handleRequestRepos);
}*/




