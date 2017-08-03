import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Home.css';

// Import Components
import Footer from './Footer.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.home} wow fadeIn`}>
        <div className={`${styles['main-container']} container wow zoomIn`} data-wow-delay="0.2s" data-wow-duration="0.5s">
          <div className='row'>
            <div className={`${styles['title']} col-xs-12`}>
              Legal Maven
            </div>
            <div className={`${styles['description']} col-xs-12`}>
              Get to the right answer. Faster.
            </div>

            <div className={`${styles['search-box-container']} col-sm-push-2 col-sm-8 col-xs-push-1 col-xs-10`}>
              <input type="text" className={styles['search-box']} placeholder="How may we help you today?" />
              <i className={`fa fa-search ${styles['search-icon']}`} aria-hidden="true"></i>
            </div>
          </div>
        </div>

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
