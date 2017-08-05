import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

class Register extends Component {
  render() {
    return (
      <div className={`${styles.page} container-fluid wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={`${styles.container} row`}>
              <a><i className={`fa fa-question-circle ${styles['help-icon']}`} aria-hidden="true"></i></a>
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
                  <input type="text" className={`${styles['input']} form-control`} id="firstname" placeholder="Enter First Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname" className={styles['label']}>Email</label>
                  <input type="text" className={`${styles['input']} form-control`} id="lastname" placeholder="Enter Last Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className={styles['label']}>Email</label>
                  <input type="email" className={`${styles['input']} form-control`} id="email" placeholder="Enter Email Address" required />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles['label']}>Password</label>
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="Must be at least 7 characters" />
                  <input type="password" className={`${styles['input']} form-control`} id="repassword" placeholder="Confirm Password" style={{ marginTop: 6 }} />
                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="javascript:void(0)" className={`${styles['btn-login']} ${styles['btn']}`} onClick={()=>{alert('book')}}>Create Account</a>

                <div style={{marginTop: 20}}><Link className={styles['page-link']} to={'/signin'}>Already have an account? Sign in</Link></div>
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

export default Register;
