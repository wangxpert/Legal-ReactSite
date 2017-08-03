import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['search-box-container']}>
        <input type="text" className={styles['search-box']} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
        <i className={`fa fa-search ${styles['search-icon']}`} aria-hidden="true"></i>
      </div>
    );
  }
}

export default SearchBox;
