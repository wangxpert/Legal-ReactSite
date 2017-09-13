// // Import Actions
// import * as Actions from './actions'
//
// // Initial State
// const initialState = {
//
// }
//
// const DocReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Actions.FETCH_DOCS_SUCCESS:
//       return {
//         ...state,
//         state: 'FETCH_DOCS_SUCCESS',
//         docs: action.docs
//       }
//
//     case Actions.FETCH_DOCS_FAILURE:
//       return {
//         ...state,
//         state: 'FETCH_DOCS_FAILURE',
//         err: action.err
//       }
//
//     case Actions.SAVE_DOC_SUCCESS:
//       return {
//         ...state,
//         state: 'SAVE_DOC_SUCCESS'
//       }
//
//     case Actions.SAVE_DOC_FAILURE:
//       return {
//         ...state,
//         state: 'SAVE_DOC_FAILURE',
//         err: action.err
//       }
//
//     default:
//       return state
//   }
// }
//
// /* Selectors */
//
// // Export Reducer
// export default DocReducer
