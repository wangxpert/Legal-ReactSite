import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './NavBar.css';

export function NavBar(props, context) {
  return (
    <div className={styles.navbar} style={{ zIndex: 999 }}>
      <div className={styles.nav}>

        <div className={styles['nav-item']}>
          <Link to='/legaltopics'><FormattedMessage id="legalTopics" /></Link>
        </div>

        <div className={styles['nav-item']}>
          <Link to='/legalforms'><FormattedMessage id="legalForms" /></Link>
        </div>

        <div className={styles['nav-item']}><FormattedMessage id="services" /></div>

        <div className={styles['nav-item']}><FormattedMessage id="contact" /></div>
      </div>
    </div>
  );
}

NavBar.contextTypes = {
  router: React.PropTypes.object,
};

NavBar.propTypes = {

};

export default NavBar;
