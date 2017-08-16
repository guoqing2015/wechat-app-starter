import wx from 'labrador';
import request from 'al-request';
import { takeLatest, takeEvery} from 'redux-saga';
import { actionChannel, call, take, put, race, fork } from 'redux-saga/effects'

import {
  COUNTER_DOUBLE_ASYNC_START
} from './constants';

import {
  doubleAsyncSuccess
} from './actions';


import {
  sendRequest
} from './api';




function* handleCounterdoubleAsyncStart( payload) {
  while (true) {
    yield take(COUNTER_DOUBLE_ASYNC_START);

    const {data, error} = yield call(sendRequest, payload);
    if(data && !error) {
      yield put(doubleAsyncSuccess(data));
    } else {

    }
  }
}


export default function* rootSaga() {
  yield fork(handleCounterdoubleAsyncStart);
}

