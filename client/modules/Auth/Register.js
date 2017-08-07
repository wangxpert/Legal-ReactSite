import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import validator from 'validator';
import Notifications from 'react-notification-system-redux';

import styles from './styles.css';

import { registerRequest } from './AuthActions.js';


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

    this.props.dispatch(registerRequest({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }));
  }

  onChange(e) {
    this.setState({[e.target.id]: e.target.value});
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
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="" value={this.state.password} onChange={this.onChange.bind(this)} />
                  <input type="password" className={`${styles['input']} form-control`} id="rePassword" placeholder="" style={{ marginTop: 6 }} value={this.state.rePassword} onChange={this.onChange.bind(this)} />
                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="javascript:void(0)" className={`${styles['btn-login']} ${styles['btn']}`} onClick={this.register.bind(this)}>Create Account</a>

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

  };
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Register);
