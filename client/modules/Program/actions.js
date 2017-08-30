import callApi from '../../util/apiCaller'
import model from './model'

// Export Constants

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const SET_FINAL_NODE = 'SET_FINAL_NODE'
export const HIDE_FINAL_NODE = 'HIDE_FINAL_NODE'

export const RESET_PROGRAMS = 'RESET_PROGRAMS'
export const ADD_PROGRAM = 'ADD_PROGRAM'
export const SET_CURRENT_PROGRAM = 'SET_CURRENT_PROGRAM'

export const STEP_NEXT      = 'STEP_NEXT'
export const STEP_BACK      = 'STEP_BACK'
export const STEP_SAVE      = 'STEP_SAVE'
export const RESTORE_STEP = 'RESTORE_STEP'

// Export Actions


export function toggleSideBar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function setFinalNode(finalKind, finalData) {
  return {
    type: SET_FINAL_NODE,
    finalKind: finalKind,
    finalData: finalData
  }
}

export function hideFinalNode() {
  return {
    type: HIDE_FINAL_NODE
  }
}

export function resetPrograms() {
  return {
    type: RESET_PROGRAMS
  }
}

export function addProgram(name, program) {
  return {
    type: ADD_PROGRAM,
    name,
    program
  }
}

export function setCurrentProgram(name) {
  return {
    type: SET_CURRENT_PROGRAM,
    name
  }
}

export function fetchProgram(name) {
  return (dispatch) => {
    /*return callApi(`programs/${name}`).then(program => {
      dispatch(addProgram(name, program))
    })*/
    dispatch(addProgram(name, model[name]))
  }
}

export function stepNext(data, next) {
  return {
    type: STEP_NEXT,
    data,
    next
  }
}

export function stepBack() {
  return {
    type: STEP_BACK
  }
}

export function savePlace(info) {
  return (dispatch) => {
    return callApi(`activities`, 'post', info).then(response => {
      console.log(response)
    })
  }
}

export function restoreStep(info) {
  return {
    type: RESTORE_STEP,
    info
  }
}
