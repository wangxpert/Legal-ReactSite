import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED
} from './AuthActions';

import { browserHistory } from 'react-router';

// Initial State
const initialState = { user: {}, isLogging: false };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCEEDED:
      return {
        ...state,
        user: action.user
      };

    case REGISTER_FAILED:
      return {
        ...state,
        err: action.err
      }

    case LOGIN_REQUESTED:
      return {
        ...state,
        isLogging: true
      }

    case LOGIN_SUCCEEDED:
      browserHistory.push('/');
      return {
        ...state,
        user: action.user,
        isLogging: false
      }

    case LOGIN_FAILED:
      return {
        ...state,
        err: action.err,
        isLogging: false
      }

    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default AuthReducer;
