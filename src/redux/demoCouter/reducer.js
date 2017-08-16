import immutable from 'seamless-immutable';

// ------------------------------------
// Reducer
// ------------------------------------

import {
  COUNTER_INCREMENT,
  COUNTER_DOUBLE_ASYNC_SUCCESS
} from './constants';

const initialState = immutable(0);

export default function counterReducer (state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      // return { ...state, githubUser: action.payload };
      //return state.merge(state + action.payload)
      return state + action.payload;
    case COUNTER_DOUBLE_ASYNC_SUCCESS:
      return state * action.payload;
    default:
      return state;
  }
}


