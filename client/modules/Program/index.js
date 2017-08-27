import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import View
import Program from './Program.js'

// Import Actions
import * as Actions from './actions'
import { getCurrentProgram, getCurrentHistory } from './reducer'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    program: getCurrentProgram(state),
    history: getCurrentHistory(state),
    showSideBar: state.programs.showSideBar,
    showFinalNode: state.programs.showFinalNode,
    finalKind: state.programs.finalKind,
    finalData: state.programs.finalData,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    resetPrograms: () => dispatch(Actions.resetPrograms),
    fetchProgram: (name) => dispatch(Actions.fetchProgram(name)),
    setCurrentProgram: (name) => dispatch(Actions.setCurrentProgram(name)),
    toggleSideBar: () => dispatch(Actions.toggleSideBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Program)
