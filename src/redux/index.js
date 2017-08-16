import { combineReducers } from 'redux';
import configureStore from './createStore';
import rootSaga from './sagas';
import rootReducer from './reducers';

function createStore() {
  return configureStore(rootReducer, rootSaga);
}

export default createStore();
