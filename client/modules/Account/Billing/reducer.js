// Import Actions
import * as Actions from './actions'

// Initial State
const initialState = {
  card: {},
  state: ''
}

const payRequest = (state, action) => {
  return { ...state, state: 'PAY_REQUEST' }
}

const paySuccess = (state, action) => {
  return { ...state, state: 'PAY_SUCCESS', result: action.result }
}

const payFailure = (state, action) => {
  return { ...state, state: 'PAY_FAILURE', err: action.err }
}

const getCustomerRequest = (state, action) => {
  return { ...state, state: 'GET_CUSTOMER_REQUEST' }
}

const getCustomerSuccess = (state, action) => {
  return { ...state, state: 'GET_CUSTOMER_SUCCESS', customer: action.result.customer }
}

const getCustomerFailure = (state, action) => {
  return { ...state, state: 'GET_CUSTOMER_FAILURE', err: action.err.err }
}

const addCardRequest = (state, action) => {
  return { ...state, state: 'ADD_CARD_REQUEST' }
}

const addCardSuccess = (state, action) => {
  return { ...state, state: 'ADD_CARD_SUCCESS', result: action.result }
}

const addCardFailure = (state, action) => {
  return { ...state, state: 'ADD_CARD_FAILURE', err: action.err }
}

const setCard = (state, action) => {
  return { ...state, state: 'SET_CARD', card: action.card }
}

const saveTransactionRequest = (state, action) => {
  return { ...state, state: 'SAVE_TRANSACTION_REQUEST' }
}

const saveTransactionSuccess = (state, action) => {
  return { ...state, state: 'SAVE_TRANSACTION_SUCCESS', transaction: action.result.transaction, result: action.result }
}

const saveTransactionFailure = (state, action) => {
  return { ...state, state: 'SAVE_TRANSACTION_FAILURE', err: action.err }
}

const sendOutputByEmailRequest = (state, action) => {
  return { ...state, state: 'SEND_OUTPUT_BY_EMAIL_REQUEST' }
}

const sendOutputByEmailSuccess = (state, action) => {
  return { ...state, state: 'SEND_OUTPUT_BY_EMAIL_SUCCESS', result: action.result }
}

const sendOutputByEmailFailure = (state, action) => {
  return { ...state, state: 'SEND_OUTPUT_BY_EMAIL_FAILURE', err: action.err }
}

const PayReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAY_REQUEST:
      return payRequest(state, action)

    case Actions.PAY_SUCCESS:
      return paySuccess(state, action)

    case Actions.PAY_FAILURE:
      return payFailure(state, action)

    case Actions.SET_CARD:
      return setCard(state, action)

    case Actions.GET_CUSTOMER_REQUEST:
      return getCustomerRequest(state, action)

    case Actions.GET_CUSTOMER_SUCCESS:
      return getCustomerSuccess(state, action)

    case Actions.GET_CUSTOMER_FAILURE:
      return getCustomerFailure(state, action)

    case Actions.ADD_CARD_REQUEST:
      return addCardRequest(state, action)

    case Actions.ADD_CARD_SUCCESS:
      return addCardSuccess(state, action)

    case Actions.ADD_CARD_FAILURE:
      return addCardFailure(state, action)

    case Actions.SAVE_TRANSACTION_REQUEST:
      return saveTransactionRequest(state, action)

    case Actions.SAVE_TRANSACTION_SUCCESS:
      return saveTransactionSuccess(state, action)

    case Actions.SAVE_TRANSACTION_FAILURE:
      return saveTransactionFailure(state, action)

    case Actions.SEND_OUTPUT_BY_EMAIL_REQUEST:
      return sendOutputByEmailRequest(state, action)

    case Actions.SEND_OUTPUT_BY_EMAIL_SUCCESS:
      return sendOutputByEmailSuccess(state, action)

    case Actions.SEND_OUTPUT_BY_EMAIL_FAILURE:
      return sendOutputByEmailFailure(state, action)

    default:
      return state
  }
}

/* Selectors */

// Export Reducer
export default PayReducer
