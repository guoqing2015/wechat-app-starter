import immutable from 'seamless-immutable';

import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants';

// 初始state
export const INITIAL_STATE = immutable({
  userId: null,
  error: null,
  fetching: false
});

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return state.merge({ fetching: true })
    case LOGOUT:
      return INITIAL_STATE;
    case LOGIN_SUCCESS:
      return state.merge({ fetching: false, error: null, userId: action.payload.userId });
    case LOGIN_FAILURE:
      return state.merge({ fetching: false, error: action.payload.error });
    default:
      return state;
  }
}


