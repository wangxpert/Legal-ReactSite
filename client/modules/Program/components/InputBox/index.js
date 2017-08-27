import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import View
import InputBox from './InputBox.js'

// Import Actions
import * as Actions from '../../actions'

// Retrieve data from store as props
function mapStateToProps(dispatch, ownProps) {
  return {

  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    stepNext: (data) => dispatch(Actions.stepNext(data)),
    stepBack: () => dispatch(Actions.stepBack()),
    stepSave: () => dispatch(Actions.stepSave()),
    setFinalNode: (kind, data) => dispatch(Actions.setFinalNode(kind, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox)
