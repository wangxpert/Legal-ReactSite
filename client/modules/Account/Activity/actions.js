import callApi from '../../../util/apiCaller'
import Notifications from 'react-notification-system-redux'

// Export Constants
export const FETCH_ACTIVITIES_SUCCEEDED = 'FETCH_ACTIVITIES_SUCCEEDED'
export const FETCH_ACTIVITIES_FAILED = 'FETCH_ACTIVITIES_FAILED'

export const UPDATE_ACTIVITY_SUCCEEDED = 'UPDATE_ACTIVITY_SUCCEEDED'
export const UPDATE_ACTIVITY_FAILED = 'UPDATE_ACTIVITY_FAILED'

export const DELETE_ACTIVITY_SUCCEEDED = 'DELETE_ACTIVITY_SUCCEEDED'
export const DELETE_ACTIVITY_FAILED = 'DELETE_ACTIVITY_FAILED'

export const SET_SELECTED_PROGRAMS = 'SET_SELECTED_PROGRAMS'

// Export Actions
export function fetchActivitiesSucceeded(activities) {
  return {
    type: FETCH_ACTIVITIES_SUCCEEDED,
    activities
  }
}

export function fetchActivitiesFailed(err) {
  return {
    type: FETCH_ACTIVITIES_FAILED,
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
    type: UPDATE_ACTIVITY_SUCCEEDED,
    id, data
  }
}

export function updateActivityFailed(err) {
  return {
    type: UPDATE_ACTIVITY_FAILED,
    err
  }
}

export function updateActivity(id, data) {
  return (dispatch) => {
    console.log(id, data)
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
    type: DELETE_ACTIVITY_SUCCEEDED,
    id
  }
}

export function deleteActivityFailed() {
  return {
    type: DELETE_ACTIVITY_FAILED
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
