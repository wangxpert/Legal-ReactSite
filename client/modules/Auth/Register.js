import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import validator from 'validator';
import Notifications from 'react-notification-system-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import styles from './styles.css';

import { register, socialLogin, setRedirectUrl } from './AuthActions.js';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
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
      },
      matchPassword: {
        title: 'Validation Error',
        message: 'Password doesn\'t match.',
        position: 'br',
        autoDismiss: 3
      }
    };
  }

  validation() {
    if (this.state.email === '' || this.state.password === '' || this.state.firstName === '' || this.state.lastName === '' || this.state.rePassword === '') {
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

    if (this.state.password !== this.state.rePassword) {
      this.props.dispatch(
        Notifications.error(this.vMessage.matchPassword)
      );
      return false;
    }

    return true;
  }

  register() {
    if (!this.validation()) return;

    this.props.dispatch(setRedirectUrl('/account/profile'));
    this.props.dispatch(register({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }));
  }

  onChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  facebookLogin(response) {
    if (this.props.auth.state === 'LOGGING') return;

    this.props.dispatch(setRedirectUrl('/account/profile'));
    this.props.dispatch(socialLogin('facebook', {
      id: response.id,
      givenName: response.first_name,
      familyName: response.last_name,
      photo: response.picture.data.url,
      email: response.email
    }));
  }

  googleLogin(response) {
    if (typeof response === 'string') { // error occurs
      console.log('Google Login Failure');
      return;
    }

    if (this.props.auth.state === 'LOGGING') return;

    this.props.dispatch(setRedirectUrl('/account/profile'));
    this.props.dispatch(socialLogin('google', {
      id: response.googleId,
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      photo: response.profileObj.imageUrl,
      email: response.profileObj.email
    }));
  }

  render() {
    return (
      <div className={`${styles.page} container-fluid wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={`${styles.container} row`}>
              { /*<a><i className={`fa fa-question-circle ${styles['help-icon']}`} aria-hidden="true"></i></a>*/ }
              <div className={styles['title-container']}>
                <h1 className={styles['title']}>Create Account</h1>
                <h2 className={styles['description']}>
                  <strong>Great choice! </strong>
                  { "Let's create your free account" }
                </h2>
              </div>


              <form className={styles['input-container']}>
                <div className="form-group">
                  <label htmlFor="firstname" className={styles['label']}>First Name</label>
                  <input type="text" className={`${styles['input']} form-control`} id="firstName" placeholder="" value={this.state.firstName} onChange={this.onChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname" className={styles['label']}>Last Name</label>
                  <input type="text" className={`${styles['input']} form-control`} id="lastName" placeholder="" value={this.state.lastName} onChange={this.onChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className={styles['label']}>Email</label>
                  <input type="email" className={`${styles['input']} form-control`} id="email" placeholder="" value={this.state.email} onChange={this.onChange.bind(this)} />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles['label']}>Password</label>
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="Must be at least 7 characters" value={this.state.password} onChange={this.onChange.bind(this)} />
                  <input type="password" className={`${styles['input']} form-control`} id="rePassword" placeholder="Confirm password" style={{ marginTop: 6 }} value={this.state.rePassword} onChange={this.onChange.bind(this)} />
                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="javascript:void(0)" className={`${styles['btn-login']} ${styles['btn']}`} onClick={this.register.bind(this)}>Create Account</a>
                { !(this.props.auth.state === 'LOGGING') &&
                <div className={styles['social-container']}>
                  <FacebookLogin
                    appId="128968304375975"
                    fields="first_name,last_name,email,picture"
                    tag="a"
                    icon="fa-facebook"
                    textButton="Facebook"
                    cssClass={`${styles['btn-facebook']} ${styles['btn']} pull-left`}
                    callback={this.facebookLogin.bind(this)} />

                  <GoogleLogin
                    clientId="1057707658731-er6vr8sf5psl1uh3sjtsio5t2ooaljpi.apps.googleusercontent.com"
                    buttonText="Google"
                    tag="a"
                    className={`${styles['btn-google']} ${styles['btn']} pull-right`}
                    onSuccess={this.googleLogin.bind(this)}
                    onFailure={this.googleLogin.bind(this)}
                  >
                    <i className="fa fa-google"></i>Google
                  </GoogleLogin>
                </div>
                }
                <div style={{marginTop: 20}}><Link className={styles['page-link']} to={'/signin'}>Already have an account? Log in</Link></div>
              </div>

              <div className={styles['policy-text']}>
                By clicking Create Account, you agree to our <br /><a className={styles['link']}>License Agreement</a> and <a className={styles['link']}>Privacy Policy.</a>
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

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Register);
