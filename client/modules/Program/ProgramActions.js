import callApi from '../../util/apiCaller';
import model from './model';

// Export Constants
export const ADD_PROGRAM = 'ADD_PROGRAM';
export const SET_CURRENT_PROGRAM = 'SET_CURRENT_PROGRAM';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SET_FINAL_NODE = 'SET_FINAL_NODE';
export const RESET_PROGRAM = 'RESET_PROGRAM';

// Export Actions
export function addProgram(name, program) {
  return {
    type: ADD_PROGRAM,
    name,
    program
  };
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
      dispatch(addProgram(name, program));
    });*/
    dispatch(addProgram(name, model[name]));
  }
}

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

export function resetProgram() {
  return {
    type: RESET_PROGRAM
  }
}
