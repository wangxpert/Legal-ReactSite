import * as Actions from './AuthActions';

import { browserHistory } from 'react-router';

// Initial State
const initialState = { user: {}, state: 'NOT_LOGGED' };

const updateProfileSuccess = (state, action) => {
  return { ...state, user: action.result.saved }
}

const updateProfileFailure = (state, action) => {
  return { ...state, err: action.err }
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_LOGIN_STATE:
      return {
        ...state,
        state: action.state
      }

    case Actions.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user
      };

    case Actions.REGISTER_FAILURE:
      return {
        ...state,
        err: action.err,
      }

    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        state: 'LOGGING'
      }

    case Actions.LOGIN_SUCCESS:
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

    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        err: action.err,
        state: 'NOT_LOGGED'
      }

    case Actions.LOGOUT_SUCCESS:
      return {
        ...state,
        state: 'NOT_LOGGED'
      }

    case Actions.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user
      }

    case Actions.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        err: action.err
      }

    case Actions.SET_REDIRECT_URL:
      return {
        ...state,
        redirectUrl: action.url
      }

    case Actions.UPDATE_PROFILE_SUCCESS:
      return updateProfileSuccess(state, action)

    case Actions.UPDATE_PROFILE_FAILURE:
      return updateProfileFailure(state, action)


    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default AuthReducer;
