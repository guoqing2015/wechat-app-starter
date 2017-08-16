import {combineReducers} from 'redux';

 import loginReducer from './login/reducer';
// import userReducer from './user/reducer';
import demoAjaxReducer from './demoAjax/reducer';
import demoCouterReducer from './demoCouter/reducer';

const rootReducer = combineReducers({
   login: loginReducer,
  // user: userReducer,
  demoAjax: demoAjaxReducer,
  counter: demoCouterReducer,
});


export default rootReducer;
