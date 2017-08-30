import callApi from '../../../util/apiCaller'
import Notifications from 'react-notification-system-redux'

// Export Constants
export const FETCH_ACTIVITIES_SUCCEEDED = 'FETCH_ACTIVITIES_SUCCEEDED'
export const FETCH_ACTIVITIES_FAILED = 'FETCH_ACTIVITIES_FAILED'

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
