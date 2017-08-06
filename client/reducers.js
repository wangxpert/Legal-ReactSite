/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import programs from './modules/Program/ProgramReducer';
import auth from './modules/Auth/AuthReducer';

import { reducer as notifications } from 'react-notification-system-redux';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  programs,
  auth,
  notifications
});
