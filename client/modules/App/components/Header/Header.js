import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <FormattedMessage id="appName" />
      </div>
      <div className={styles.nav}>
        <a className={styles['nav-item']}>
          <i className="fa fa-search"></i> &nbsp;Search
        </a>
        <div className={styles['nav-item']}>
          <i className="fa fa-user"></i> &nbsp;My Account
        </div>
        <div className={styles['nav-item']}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {

};

export default Header;
