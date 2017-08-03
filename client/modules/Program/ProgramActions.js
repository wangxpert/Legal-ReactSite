import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_PROGRAM = 'ADD_PROGRAM';
export const SET_CURRENT_PROGRAM = 'SET_CURRENT_PROGRAM';

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
    return callApi(`programs/${name}`).then(program => {
      dispatch(addProgram(name, program));
    });
  }
}
