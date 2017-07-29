import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalTopics.css';

// Import Components
import SearchBox from '../../components/SearchBox/SearchBox';

class LegalTopics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.legaltopics}>
        <div className={styles['search-box-container']}>
          <SearchBox placeholder="Search Legal Topics"/>
        </div>
        <div className={styles['title-container']}>
          <div className={styles['main-title']}>
            Let&apos;s get started, please select a form.
          </div>
        </div>
        <div className={`${styles['main-container']} container`}>

          <div className={styles['category']}>
            <div className={styles['category-title']}>Start-Ups</div>

            <a className={styles['item']} href="/legaltopics/incorporate">Should I incorporate?</a>
            <a className={styles['item']} href="/legaltopics/trademark">Can I trademark?</a>
            <a className={styles['item']} href="/legaltopics/payroll">Do I need to set up payroll?</a>
            <a className={styles['item']} href="">Do I need worker&apos;s compensation insurance?</a>
          </div>

          <div className={styles['category']}>
            <div className={styles['category-title']}>Real Estate</div>

            <a className={styles['item']} href="/legalforms/transfertax">Do I owe transfer tax? (CA only)</a>
            <a className={styles['item']} href="/">Am I entitled to a refund of my security deposit?</a>
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

LegalTopics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LegalTopics);
