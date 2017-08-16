import immutable from 'seamless-immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = immutable({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function demoAjaxReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      // return state
      //   .set('loading', true)
      //   .set('error', false)
      //   .setIn(['userData', 'repositories'], false);
      return state.merge({
        loading: true,
        error: false,
        currentUser: false,
        userData: {
          repositories: false
        }
      })
    case LOAD_REPOS_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        currentUser: action.username,
        userData: {
          repositories: action.repos
        }
      })

    case LOAD_REPOS_ERROR:
      return state.merge({
        loading: false,
        error: action.error,
      })

    default:
      return state;
  }
}

export default demoAjaxReducer;
