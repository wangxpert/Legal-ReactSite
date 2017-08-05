import { ADD_PROGRAM, SET_CURRENT_PROGRAM, TOGGLE_SIDEBAR } from './ProgramActions';

// Initial State
const initialState = { programs: {}, current: '', showSideBar: false };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROGRAM :
      const newPrograms = Object.assign({}, state.programs);
      newPrograms[action.name] = action.program;
      return {
        ...state,
        programs: newPrograms
      };

    case SET_CURRENT_PROGRAM:
      return {
        ...state,
        current: action.name
      }

    case TOGGLE_SIDEBAR:
        return {
          ...state,
          showSideBar: !state.showSideBar
        }

    default:
      return state;
  }
};

/* Selectors */

// Get all programs
export const getPrograms = state => state.programs.programs;

// Get program by name
export const getCurrentProgram = (state) => state.programs.programs[state.programs.current];

// Export Reducer
export default PostReducer;
