// Import Actions
import * as Actions from './actions'

// Initial State
const initialState = {
  activities: []
}

const ActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ACTIVITIES_SUCCEEDED:
      return {
        ...state,
        state: 'FETCH_ACTIVITIES_SUCCEEDED',
        activities: action.activities
      }

    case Actions.FETCH_ACTIVITIES_FAILED:
      return {
        ...state,
        state: 'FETCH_ACTIVITIES_FAILED',
        err: action.err
      }

    default:
      return state
  }
}

/* Selectors */

// Export Reducer
export default ActivityReducer
