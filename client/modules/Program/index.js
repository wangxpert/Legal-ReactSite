import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import View
import Program from './Program.js'

// Import Actions
import * as Actions from './actions'
import { fetchActivities, setSelectedPrograms } from '../Account/Activity/actions'
import { getCurrentProgram, getCurrentHistory, getCurrentProgress } from './reducer'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    program: getCurrentProgram(state),
    history: getCurrentHistory(state),
    progress: getCurrentProgress(state),
    current: state.programs.current,
    showSideBar: state.programs.showSideBar,
    showFinalNode: state.programs.showFinalNode,
    finalKind: state.programs.finalKind,
    finalData: state.programs.finalData,
    activities: state.activities.activities
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    resetPrograms: () => dispatch(Actions.resetPrograms()),
    fetchProgram: (name) => dispatch(Actions.fetchProgram(name)),
    setCurrentProgram: (name) => dispatch(Actions.setCurrentProgram(name)),
    hideFinalNode: () => dispatch(Actions.hideFinalNode()),
    toggleSideBar: () => dispatch(Actions.toggleSideBar()),
    savePlace: (info) => dispatch(Actions.savePlace(info)),
    fetchActivities: () => dispatch(fetchActivities()),
    setSelectedPrograms: (selectedPrograms) => dispatch(setSelectedPrograms(selectedPrograms))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Program)
