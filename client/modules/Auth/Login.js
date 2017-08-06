import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import validator from 'validator';
import Notifications from 'react-notification-system-redux';

import styles from './styles.css';

import { loginRequest } from './AuthActions.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.vMessage = {
      empty: {
        title: 'Validation Error',
        message: 'Please input all fields.',
        position: 'br',
        autoDismiss: 3
      },
      email: {
        title: 'Validation Error',
        message: 'Please enter correct email... !',
        position: 'br',
        autoDismiss: 3
      },
      password: {
        title: 'Validation Error',
        message: 'Password length must be greater than 6.',
        position: 'br',
        autoDismiss: 3
      }
    };
  }

  validation() {
    if (this.state.email === '' || this.state.password === '') {
      this.props.dispatch(
        Notifications.error(this.vMessage.empty)
      );
      return false;
    }

    if (!validator.isEmail(this.state.email)) {
      this.props.dispatch(
        Notifications.error(this.vMessage.email)
      );
      return false;
    }

    if (this.state.password.length < 7) {
      this.props.dispatch(
        Notifications.error(this.vMessage.password)
      );
      return false;
    }

    return true;
  }

  login() {
    if (!this.validation()) return;

    if (this.props.auth.isLogging) return;
    this.props.dispatch(loginRequest({
      email: this.state.email,
      password: this.state.password
    }));
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className={`${styles.page} container-fluid wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={`${styles.container} row`}>
              <div className={styles['title-container']}>
                <h1 className={styles['title']}>Member Login</h1>
                <h2 className={styles['description']}>
                  <strong>Welcome back! </strong>
                  Please sign in to access and review your account.
                </h2>
              </div>


              <form className={styles['input-container']}>
                <div className="form-group">
                  <label htmlFor="email" className={styles['label']}>Email</label>
                  <input type="email" className={`${styles['input']} form-control`} id="email" placeholder="" value={this.state.email} onChange={this.onChangeEmail.bind(this)} />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles['label']}>Password</label>
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="" value={this.state.password} onChange={this.onChangePassword.bind(this)}  />
                  <div className={styles['check-container']}><input type="checkbox" className={`${styles['check']}`} value=""/>
                    &nbsp;Remember me
                  <a className={`pull-right`}>Forgot password?</a>
                  </div>

                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="javascript:void(0)" className={`${styles['btn-login']} ${styles['btn']}`} onClick={this.login.bind(this)}>
                  { this.props.auth.isLogging ? '' : 'Login' }
                </a>
                <div className={styles['social-container']}>
                  <a href="/api/auth/google" className={`${styles['btn-facebook']} ${styles['btn']} pull-left`}><i className="fa fa-facebook"></i> Facebook</a>
                  <a href="/api/auth/google" className={`${styles['btn-google']} ${styles['btn']} pull-right`}><i className="fa fa-google"></i> Google</a>
                </div>

                <div style={{marginTop: 20}}><Link className={styles['page-link']} to="/signup">Do not have account? Register</Link></div>
              </div>

              <div className={styles['policy-text']}>
                By clicking Create Account, you agree to our <a className={styles['link']}>License Agreement</a> and <a className={styles['link']}>Privacy Policy.</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Login);
