import callApi from '../../../util/apiCaller'
import Notifications from 'react-notification-system-redux'

// Export Constants
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS'
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE'

export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS'
export const UPDATE_ACTIVITY_FAILURE = 'UPDATE_ACTIVITY_FAILURE'

export const DELETE_ACTIVITY_SUCCESS = 'DELETE_ACTIVITY_SUCCESS'
export const DELETE_ACTIVITY_FAILURE = 'DELETE_ACTIVITY_FAILURE'

export const SET_SELECTED_PROGRAMS = 'SET_SELECTED_PROGRAMS'

// Export Actions
export function fetchActivitiesSucceeded(activities) {
  return {
    type: FETCH_ACTIVITIES_SUCCESS,
    activities
  }
}

export function fetchActivitiesFailed(err) {
  return {
    type: FETCH_ACTIVITIES_FAILURE,
    err
  }
}

export function fetchActivities() {
  return (dispatch) => {
    return callApi('activities')
      .then(res => {
        dispatch(fetchActivitiesSucceeded(res.activities))
      }, err => {
        dispatch(fetchActivitiesFailed(err))
      })
  }
}

export function setSelectedPrograms(selectedPrograms) {
  return {
    type: SET_SELECTED_PROGRAMS,
    selectedPrograms
  }
}

export function updateActivitySucceeded(id, data) {
  return {
    type: UPDATE_ACTIVITY_SUCCESS,
    id, data
  }
}

export function updateActivityFailed(err) {
  return {
    type: UPDATE_ACTIVITY_FAILURE,
    err
  }
}

export function updateActivity(id, data) {
  return (dispatch) => {
    return callApi(`activities/${ id }`, 'PUT', data)
      .then(res => {
        dispatch(updateActivitySucceeded(id, data))
      }, err => {
        dispatch(updateActivityFailed(err))
      })
  }
}

export function deleteActivitySucceeded(id) {
  return {
    type: DELETE_ACTIVITY_SUCCESS,
    id
  }
}

export function deleteActivityFailed() {
  return {
    type: DELETE_ACTIVITY_FAILURE
  }
}

export function deleteActivity(id) {
  return (dispatch) => {
    return callApi(`activities/${ id }`, 'DELETE')
      .then(res => {
        dispatch(deleteActivitySucceeded(id))
      }, err => {
        dispatch(deleteActivityFailed(err))
      })
  }
}
