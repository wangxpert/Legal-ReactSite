import {
  SET_LOGIN_STATE,
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  LOGOUT_SUCCEEDED,
  FETCH_USER_PROFILE_SUCCEEDED,
  FETCH_USER_PROFILE_FAILED,
  SET_REDIRECT_URL
} from './AuthActions';

import { browserHistory } from 'react-router';

// Initial State
const initialState = { user: {}, state: 'NOT_LOGGED' };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        ...state,
        state: action.state
      }

    case REGISTER_SUCCEEDED:
      return {
        ...state,
        user: action.user
      };

    case REGISTER_FAILED:
      return {
        ...state,
        err: action.err,
      }

    case LOGIN_REQUESTED:
      return {
        ...state,
        state: 'LOGGING'
      }

    case LOGIN_SUCCEEDED:
      if (state.redirectUrl) {
        browserHistory.push(state.redirectUrl);
      } else {
        browserHistory.push('/');
      }

      return {
        ...state,
        user: action.user,
        state: 'LOGGED'
      }

    case LOGIN_FAILED:
      return {
        ...state,
        err: action.err,
        state: 'NOT_LOGGED'
      }

    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        state: 'NOT_LOGGED'
      }

    case FETCH_USER_PROFILE_SUCCEEDED:
      return {
        ...state,
        user: action.user
      }

    case FETCH_USER_PROFILE_FAILED:
      return {
        ...state,
        err: action.err
      }

    case SET_REDIRECT_URL:
      return {
        ...state,
        redirectUrl: action.url
      }


    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default AuthReducer;
