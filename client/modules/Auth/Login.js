import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class Login extends Component {
  render() {
    return (
      <div className={`${styles.page} container-fluid wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={`${styles.container} row`}>
              <a><i className={`fa fa-question-circle ${styles['help-icon']}`} aria-hidden="true"></i></a>
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
                  <input type="email" className={`${styles['input']} form-control`} id="email" placeholder="Enter Email Address" />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles['label']}>Password</label>
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="Must be at least 7 characters" />
                  <div className={styles['check-container']}><input type="checkbox" className={`${styles['check']}`} value=""/>
                    &nbsp;Remember me
                  <a className={`pull-right`}>Forgot password?</a>
                  </div>

                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="/api/auth/google" className={`${styles['btn-login']} ${styles['btn']}`}>Login</a>
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

export default Login;
