import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
  }

  register() {
    this.props.dispatch(registerRequest({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
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
                  <input type="text" className={`${styles['input']} form-control`} id="firstname" placeholder="" value={this.state.firstName} onChange={e=>this.setState({firstName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname" className={styles['label']}>Last Name</label>
                  <input type="text" className={`${styles['input']} form-control`} id="lastname" placeholder="" value={this.state.lastName} onChange={e=>this.setState({lastName: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className={styles['label']}>Email</label>
                  <input type="email" className={`${styles['input']} form-control`} id="email" placeholder="" value={this.state.email} onChange={e=>this.setState({email: e.target.value})} />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles['label']}>Password</label>
                  <input type="password" className={`${styles['input']} form-control`} id="password" placeholder="" value={this.state.password} onChange={e=>this.setState({password: e.target.value})} />
                  <input type="password" className={`${styles['input']} form-control`} id="repassword" placeholder="" style={{ marginTop: 6 }} value={this.state.rePassword} onChange={e=>this.setState({rePassword: e.target.value})} />
                </div>

              </form>

              <div className={styles['button-container']}>
                <a href="javascript:void(0)" className={`${styles['btn-login']} ${styles['btn']}`} onClick={this.register.bind(this)}>Create Account</a>

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

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Register);
