import callApi from '../../util/apiCaller';

// Export Constants
export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// Export Actions
export function registerSucceeded(user) {
  return {
    type: REGISTER_SUCCEEDED,
    user: user
  };
}

export function registerFailed(err) {
  return {
    type: REGISTER_FAILED,
    err: err
  }
}

export function loginRequested() {
  return {
    type: LOGIN_REQUESTED
  }
}

export function loginSucceeded(user) {
  return {
    type: LOGIN_SUCCEEDED,
    user: user
  };
}

export function loginFailed(err) {
  return {
    type: LOGIN_FAILED,
    err: err
  }
}

export function registerRequest(user) {
  return (dispatch) => {
    return callApi('auth/register', 'post', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    }).then(res => {
      dispatch(registerSucceeded(res.user))

    }, err => {
      dispatch(registerFailed(err));
    });

  };
}

export function loginRequest(user) {
  return (dispatch) => {
    callApi('auth/login', 'post', {
      email: user.email,
      password: user.password
    }).then(res => {
      sessionStorage.clientId = res.user.id;
      dispatch(loginSucceeded(res.user))
    }, err => {
      dispatch(loginFailed(err));
    });

  };
}
