import { connect } from 'react-redux'

// Import View
import Activity from './activity.js'

// Import Actions
import * as Actions from './actions'
import { restoreStep } from '../../Program/actions'

// import { getCurrentProgram, getCurrentHistory, getCurrentProgress } from './reducer'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    activities: state.activities ? state.activities.activities: []
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchActivities: () => dispatch(Actions.fetchActivities()),
    restoreStep: (info) => dispatch(restoreStep(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)
