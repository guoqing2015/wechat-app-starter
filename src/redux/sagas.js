import { takeLatest, takeEvery} from 'redux-saga';
import { fork } from 'redux-saga/effects';
import  loginSaga from '../redux/login/sagas';
import  demoAjaxSaga from '../redux/demoAjax/sagas';
import  demoCouterSaga from '../redux/demoCouter/sagas';



// 当action触发时，执行特定saga
export default function* root() {

  // yield fork(watch(LOAD_USER_REQUEST, demoAjaxSaga)); //创建一个监听“进程”
  yield fork(loginSaga);
  yield fork(demoAjaxSaga);
  yield fork(demoCouterSaga);
}



// Watches for LOAD_USER_REQUEST action type and call loadUserDetails with supplied arguments.
// takeEvery is a Saga helper API built using take and fork.
// take and fork are effect creators. 
// take instructs the middleware to wait for a specified action on the Store
// fork instructs the middleware to perform non blocking operation
/*
function* watchRequest() {
  yield* takeLatest('LOAD_USER_REQUEST', loadUserDetails);

// Store setup
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchRequest);
  }*/
