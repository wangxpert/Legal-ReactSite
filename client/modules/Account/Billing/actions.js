import callApi from '../../../util/apiCaller'
import Notifications from 'react-notification-system-redux'

// Export Constants
export const PAY_REQUEST = 'PAY_REQUEST'
export const PAY_SUCCESS = 'PAY_SUCCESS'
export const PAY_FAILURE = 'PAY_FAILURE'

export const GET_CUSTOMER_REQUEST = 'GET_CUSTOMER_REQUEST'
export const GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS'
export const GET_CUSTOMER_FAILURE = 'GET_CUSTOMER_FAILURE'

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST'
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE'

export const SET_CARD = 'SET_CARD'

// Export Actions
export function pay(nonce, amount) {
  return (dispatch) => {
    dispatch(payRequest(nonce, amount))
    return callApi('pay', 'POST', {
      nonce,
      amount
    })
    .then(res =>
      dispatch(paySuccess(res)),
    err =>
      dispatch(payFailure(err))
    )
  }
}

export const payRequest = (nonce, amount) =>
  ({ type: PAY_REQUEST, nonce, amount })

export const paySuccess = (result) =>
  ({ type: PAY_SUCCESS, result })

export const payFailure = (err) =>
  ({ type: PAY_FAILURE, err })

export function getCustomer(customerId) {
  return (dispatch) => {
    dispatch(getCustomerRequest())
    return callApi('pay/customers', 'POST', {
      customer_id: customerId
    })
    .then(res =>
      dispatch(getCustomerSuccess(res)),
    err =>
      dispatch(getCustomerFailure(err))
    )
  }
}

export const getCustomerRequest = (customerId) =>
  ({ type: GET_CUSTOMER_REQUEST, customerId })

export const getCustomerSuccess = (result) =>
  ({ type: GET_CUSTOMER_SUCCESS, result })

export const getCustomerFailure = (err) =>
  ({ type: GET_CUSTOMER_FAILURE, err })


export function addCard(customerId, nonce, billingAddress, holderName) {
  return (dispatch) => {
    dispatch(addCardRequest())
    return callApi('pay/customers/cards', 'POST', {
      customer_id: customerId,
      card_nonce: nonce,
      billing_address: billingAddress,
      cardholder_name: holderName
    })
    .then(res =>
      dispatch(addCardSuccess(res)),
    err =>
      dispatch(addCardFailure(err))
    )
  }
}

export const addCardRequest = (nonce, billingAddress, holderName) =>
  ({ type: ADD_CARD_REQUEST, nonce, billingAddress, holderName })

export const addCardSuccess = (result) =>
  ({ type: ADD_CARD_SUCCESS, result })

export const addCardFailure = (err) =>
  ({ type: ADD_CARD_FAILURE, err })

export const setCard = (card) =>
  ({ type: SET_CARD, card })
