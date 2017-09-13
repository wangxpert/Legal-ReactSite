// Import Actions
import * as Actions from './actions'

// Initial State
const initialState = {
  activities: []
}

const ActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        state: 'FETCH_ACTIVITIES_SUCCESS',
        activities: action.activities
      }

    case Actions.FETCH_ACTIVITIES_FAILURE:
      return {
        ...state,
        state: 'FETCH_ACTIVITIES_FAILURE',
        err: action.err
      }

    case Actions.SET_SELECTED_PROGRAMS:
      return {
        ...state,
        selectedPrograms: action.selectedPrograms
      }

    case Actions.UPDATE_ACTIVITY_SUCCESS:
      var activities = state.activities.slice()
      let activity = activities.find(e => e._id === action.id)
      let data = action.data
      for (let key in data) {
        activity[key] = data[key]
      }
      return {
        ...state,
        activities: activities
      }

    case Actions.UPDATE_ACTIVITY_FAILURE:
      return {
        ...state,
        err: action.err
      }

    case Actions.DELETE_ACTIVITY_SUCCESS:
      var activities = state.activities.slice()
      activities.splice(activities.findIndex(e => e._id === action.id), 1)
      return {
        ...state,
        activities: activities
      }

    case Actions.DELETE_ACTIVITY_FAILURE:
      return {
        ...state,
        err: action.err
      }

    default:
      return state
  }
}

/* Selectors */

// Export Reducer
export default ActivityReducer
