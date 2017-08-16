
import {
  COUNTER_INCREMENT,
  COUNTER_DOUBLE_ASYNC_START,
  COUNTER_DOUBLE_ASYNC_SUCCESS
} from './constants';

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}


/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsyncStart = (payload) => {
  return {
    type: COUNTER_DOUBLE_ASYNC_START,
    payload
  }
}

export const doubleAsyncSuccess = (payload) => {
  return {
    type: COUNTER_DOUBLE_ASYNC_SUCCESS,
    payload
  }
}



export const actions = {
  increment,
  doubleAsyncStart
}

