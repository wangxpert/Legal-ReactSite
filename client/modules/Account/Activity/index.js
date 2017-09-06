import { connect } from 'react-redux'

// Import View
import Activity from './activity.js'

// Import Actions
import * as Actions from './actions'
import { restoreStep } from '../../Program/actions'

import Notifications from 'react-notification-system-redux'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    activities: state.activities ? state.activities.activities: [],
    selectedPrograms: state.activities.selectedPrograms
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchActivities: () => dispatch(Actions.fetchActivities()),
    restoreStep: (info) => dispatch(restoreStep(info)),
    updateActivity: (id, data) => dispatch(Actions.updateActivity(id, data)),
    deleteActivity: (id) => dispatch(Actions.deleteActivity(id)),
    errorMessage: (option) => dispatch(Notifications.error(option))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
