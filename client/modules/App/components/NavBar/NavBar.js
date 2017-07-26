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
          <a href='#'><FormattedMessage id="legalTopics" /></a>

          <ul className={styles.dropdown}>
            <div className={styles.section}>
              <li className={styles['section-title']}><a href=''>Start Ups</a></li>

              <li><a href='/programs/incorporate'>Business Formation</a></li>
              <li><a href='/programs/trademark'>Trademark</a></li>
              <li><a href='/programs/payroll'>Employee Payroll</a></li>
            </div>

            <div className={styles.section}>
              <li className={styles['section-title']}><a href=''>Real Estate</a></li>

              <li><a href='/programs/transfer_tax'>Transfer Tax</a></li>
            </div>
          </ul>
        </div>

        <div className={styles['nav-item']}>
          <a href='#'><FormattedMessage id="legalForms" /></a>

          <ul className={styles.dropdown}>
            <li><a href='/forms/ca_professional_corporation'>Professional Incorporation</a></li>
            <li><a href='/forms/ca_s_corporation'>S-Incorporation</a></li>
          </ul>
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
