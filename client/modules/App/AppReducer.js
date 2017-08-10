// Import Actions
import { TOGGLE_SEARCH_BAR } from './AppActions';

// Initial State
const initialState = {
  showSearchBar: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_BAR:
      return {
        showSearchBar: !state.showSearchBar,
      };

    default:
      return state;
  }
};

/* Selectors */

// Export Reducer
export default AppReducer;
