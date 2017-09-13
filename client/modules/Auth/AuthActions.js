import callApi from '../../util/apiCaller'

import Notifications from 'react-notification-system-redux'

// Export Constants
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const SET_REDIRECT_URL = 'SET_REDIRECT_URL'

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS'
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE'

export const UPDATE_NAME_REQUEST = 'UPDATE_NAME_REQUEST'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE'

import { browserHistory } from 'react-router'

// Export Actions
export function setLoginState(state) {
  return {
    type: SET_LOGIN_STATE,
    state
  }

}

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user: user
  }
}

export function registerFailure(err) {
  return {
    type: REGISTER_FAILURE,
    err: err
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user
  }
}

export function loginFailure(err) {
  return {
    type: LOGIN_FAILURE,
    err: err
  }
}

export function logoutSuccess() {
  browserHistory.push('/')
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function setRedirectUrl(url) {
  return {
    type: SET_REDIRECT_URL,
    url: url
  }
}

export function checkLoginState() {
  return (dispatch) => {
    callApi('auth/profile', 'get')
    .then(res => dispatch(setLoginState('LOGGED')),
          err => dispatch(fetchUserProfileFailure('NOT_LOGGED'))
    )
  }
}

export function register(user) {
  return (dispatch) => {
    return callApi('auth/register', 'post', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }).then(res => {
      dispatch(registerSuccess(res.user))
      dispatch(login(user))
      /*dispatch(Notifications.success({
        title: 'Welcome',
        message: `You created account. Enjoy yourself.`,
        position: 'br',
        autoDismiss: 3
      })*/
    }, err => {
      dispatch(registerFailure(err))
      dispatch(Notifications.error({
        title: 'SignUp Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })

  }
}

function handleLogin(dispatch, promise) {
  promise.then(res => {
    dispatch(loginSuccess(res.user))
    dispatch(Notifications.success({
      title: 'Welcome',
      message: `Welcome, ${res.user.name.givenName} ${res.user.name.familyName}`,
      position: 'br',
      autoDismiss: 3
    }))
  }, err => {
    dispatch(loginFailure(err))
    dispatch(Notifications.error({
      title: 'Login Failure',
      message: 'Invalid crendential ! Please try again.',
      position: 'br',
      autoDismiss: 3
    }))
  })
}

export function login(user) {
  return (dispatch) => {
    dispatch(loginRequest())
    handleLogin(dispatch, callApi('auth/login', 'post', {
      email: user.email,
      password: user.password
    }))

  }
}

export function socialLogin(provider, user) {
  return (dispatch) => {
    dispatch(loginRequest())

    handleLogin(dispatch, callApi(`auth/${provider}`, 'post', {
      [provider]: user
    }))

  }
}

export function logout() {
  return (dispatch) => {
    callApi('auth/logout', 'get')
    .then(res => {
      dispatch(logoutSuccess())
      dispatch(Notifications.success({
        title: 'Logout',
        message: `Bye`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {

    })

  }
}

// Fetch User Profile
export function fetchUserProfile() {
  return (dispatch) => {
    callApi('auth/profile', 'get')
    .then(res => dispatch(fetchUserProfileSuccess(res.user)),
          err => dispatch(fetchUserProfileFailure(err))
    )
  }
}

export function fetchUserProfileSuccess(user) {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    user: user
  }
}

export function fetchUserProfileFailure(err) {
  return {
    type: FETCH_USER_PROFILE_FAILURE,
    err: err
  }
}

// Update Name
export function updateProfileSuccess(result) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    result
  }
}

export function updateProfileFailure(err) {
  return {
    type: UPDATE_PROFILE_FAILURE,
    err
  }
}

export function updateName(name) {
  return (dispatch) => {
    return callApi('auth/name', 'put', {
      name: { givenName: name.firstName, familyName: name.lastName }
    }).then(res => {
      dispatch(updateProfileSuccess(res))
      dispatch(Notifications.success({
        title: 'Success',
        message: `Successfully Changed.`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {
      dispatch(updateProfileFailure(err))
      dispatch(Notifications.error({
        title: 'Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })
  }
}

export function updateEmail(email) {
  return (dispatch) => {
    return callApi('auth/email', 'put', {
      email: email
    }).then(res => {
      dispatch(updateProfileSuccess(res))
      dispatch(Notifications.success({
        title: 'Success',
        message: `Successfully Changed.`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {
      dispatch(updateProfileFailure(err))
      dispatch(Notifications.error({
        title: 'Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })
  }
}

export function updatePassword(oldPassword, newPassword) {
  return (dispatch) => {
    return callApi('auth/password', 'put', {
      oldPassword, newPassword
    }).then(res => {
      dispatch(updateProfileSuccess(res))
      dispatch(Notifications.success({
        title: 'Success',
        message: `Successfully Changed.`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {
      dispatch(updateProfileFailure(err))
      dispatch(Notifications.error({
        title: 'Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })
  }
}

export function updateAddress(address) {
  return (dispatch) => {
    return callApi('auth/address', 'put', {
      address: address
    }).then(res => {
      dispatch(updateProfileSuccess(res))
      dispatch(Notifications.success({
        title: 'Success',
        message: `Successfully Changed.`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {
      dispatch(updateProfileFailure(err))
      dispatch(Notifications.error({
        title: 'Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })
  }
}

export function updatePhone(phone) {
  return (dispatch) => {
    return callApi('auth/phone', 'put', {
      phone: phone
    }).then(res => {
      dispatch(updateProfileSuccess(res))
      dispatch(Notifications.success({
        title: 'Success',
        message: `Successfully Changed.`,
        position: 'br',
        autoDismiss: 3
      }))
    }, err => {
      dispatch(updateProfileFailure(err))
      dispatch(Notifications.error({
        title: 'Failure',
        message: err.message,
        position: 'br',
        autoDismiss: 3
      }))
    })
  }
}
