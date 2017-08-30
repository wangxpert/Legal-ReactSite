import * as Actions from './actions'

// Initial State
export const initialState = {
  programs: {},
  current: '',
  history: {},
  progress: {},
  showSideBar: true,
  showFinalNode: false
};

const resetPrograms = () => {
  return initialState
}

const addProgram = (state, action) => {
  const programs = Object.assign({}, state.programs)
  programs[action.name] = action.program
  return {
    ...state,
    programs
  };
}

const setCurrentProgram = (state, action) => {
  const history = Object.assign({}, state.history)
  const current = action.name

  if (!history[current])
    history[current] = []

  return {
    ...state,
    current: action.name,
    history: history
  };
}

const stepNext = (state, action) => {
  const history = Object.assign({}, state.history)
  const progress = Object.assign({}, state.progress)

  history[state.current].push(action.data)
  progress[state.current] = action.next

  return {
    ...state,
    history: history,
    progress: progress
  }
}

const restoreStep = (state, action) => {

  const info = action.info
  const history = Object.assign({}, state.history)
  const progress = Object.assign({}, state.progress)

  history[info.name] = info.history
  progress[info.name] = info.progress

  return {
    ...state,
    history: history,
    progress: progress
  }
}

const stepBack = (state, action) => {
  const history = Object.assign({}, state.history)
  const progress = Object.assign({}, state.progress)

  progress[state.current] = (history[state.current].pop()).current

  return {
    ...state,
    history: history,
    progress: progress
  }
}

const ProgramReducer = (state = initialState, action) => {
  switch (action.type) {

    case Actions.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: !state.showSideBar
      }

    case Actions.SET_FINAL_NODE:
      return {
        ...state,
        showFinalNode: true,
        finalKind: action.finalKind,
        finalData: action.finalData
      }

    case Actions.HIDE_FINAL_NODE:
      return {
        ...state,
        showFinalNode: false
      }

    case Actions.RESET_PROGRAMS:        return resetPrograms()
    case Actions.ADD_PROGRAM:           return addProgram(state, action)
    case Actions.SET_CURRENT_PROGRAM:   return setCurrentProgram(state, action)
    case Actions.STEP_NEXT:             return stepNext(state, action)
    case Actions.STEP_BACK:             return stepBack(state, action)
    case Actions.RESTORE_STEP:          return restoreStep(state, action)

    default:
      return state;
  }
};

/* Selectors */

// Get all programs
export const getPrograms = state => state.programs.programs

// Get program by name
export const getCurrentProgram = state => state.programs.programs[state.programs.current]

// Get Current history
export const getCurrentHistory = state => {
  return state.programs.history ? state.programs.history[state.programs.current] : undefined
}

// Get Current progress
export const getCurrentProgress = state => {
  return state.programs.progress ? state.programs.progress[state.programs.current] : undefined
}

// Export Reducer
export default ProgramReducer
