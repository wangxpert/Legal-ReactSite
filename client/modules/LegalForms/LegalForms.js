import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalForms.css';

// Import Components
import SearchBox from '../../components/SearchBox/SearchBox';

class LegalForms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.legalforms}>
        <div className={styles['search-box-container']}>
          <SearchBox placeholder="Search Legal Forms"/>
        </div>
        <div className={styles['title-container']}>
          <div className={styles['main-title']}>
            Let&apos;s get started, please select a form.
          </div>
        </div>
        <div className={`${styles['main-container']} container`}>
          <div className={styles['category']}>
            <div className={styles['category-title']}>
              Business Corporation
            </div>
            <a className={styles['item']} href="/legalforms/ca_professional_corporation">
              CA - Professional Corporation
            </a>
            <a className={styles['item']} href="/legalforms/ca_s_corporation">
              CA - S-Corporation
            </a>
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

LegalForms.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LegalForms);
