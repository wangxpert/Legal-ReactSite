import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './NavBar.css';

export function NavBar(props, context) {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>

        <div className={styles['nav-item']}>
          <a href='/legaltopics'><FormattedMessage id="legalTopics" /></a>
        </div>

        <div className={styles['nav-item']}>
          <a href='/legalforms'><FormattedMessage id="legalForms" /></a>
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
