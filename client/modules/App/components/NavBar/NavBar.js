import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './NavBar.css';

export function NavBar(props, context) {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles['nav-item']}>
          <a href='#'><FormattedMessage id="legalTopics" /></a>

          <ul className={styles.dropdown}>
            <li><a href='/programs/incorporate'>Business Formation</a></li>
            <li><a href='/programs/trademark'>Trademark</a></li>
            <li><a href='/programs/employee'>Employee Payroll</a></li>

          </ul>
        </div>
        <div className={styles['nav-item']}><FormattedMessage id="legalForms" /></div>

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
