// Import Actions
import * as Actions from './actions';

// Initial State
const initialState = {

};

const DocReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_DOCS_SUCCEEDED:
      return {
        ...state,
        state: 'FETCH_DOCS_SUCCEEDED',
        docs: action.docs
      }

    case Actions.FETCH_DOCS_FAILED:
      return {
        ...state,
        state: 'FETCH_DOCS_FAILED',
        err: action.err
      }

    case Actions.SAVE_DOC_SUCCEEDED:
      return {
        ...state,
        state: 'SAVE_DOC_SUCCEEDED'
      }

    case Actions.SAVE_DOC_FAILED:
      return {
        ...state,
        state: 'SAVE_DOC_FAILED',
        err
      }

    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default DocReducer;
