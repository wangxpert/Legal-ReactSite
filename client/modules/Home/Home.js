import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { NotificationContainer, NotificationManager } from 'react-notifications';

// Import Style
import styles from './Home.css';

// Import Components
import Footer from './Footer.js';

import bg from './bg.png';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  createNotification = (type) => {
  alert('book');
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <div className={`${styles.home} wow fadeIn`} style={{ background: `#FFF url(${bg}) repeat` }}>
        <div className={`${styles['main-container']} container wow zoomIn`} data-wow-delay="0.2s" data-wow-duration="0.5s">
          <div className='row'>
            <div className={`${styles['title']} col-xs-12`}>
              Legal Maven
            </div>
            <div className={`${styles['description']} col-xs-12`} onClick={e=>this.createNotification('info').bind(this)}>
              Get to the right answer. Faster.
            </div>

            <div className={`${styles['search-box-container']} col-sm-push-2 col-sm-8 col-xs-push-1 col-xs-10`}>
              <input type="text" className={styles['search-box']} placeholder="How may we help you today?" />
              <i className={`fa fa-search ${styles['search-icon']}`} aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <NotificationContainer/>
        <Footer />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
