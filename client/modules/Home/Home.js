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
      <div className={styles.home}>
        <div className={styles['main-container']}>
          <div className={styles['title']}>
            Legal Maven
          </div>
          <div className={styles['description']}>
            Get to the right answer. Faster.
          </div>


          <div className={styles['search-box-container']}>
            <input type="text" className={styles['search-box']} placeholder="How may we help you today?" />
            <i className={`fa fa-search ${styles['search-icon']}`} aria-hidden="true"></i>
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
