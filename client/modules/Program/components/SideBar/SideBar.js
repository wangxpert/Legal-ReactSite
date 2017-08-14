import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './SideBar.css';

export function SideBar(props) {
  const arrow = props.show ? 'fa-arrow-left' : 'fa-arrow-right';

  return (
    <div className={`${styles.sidebar} ${props.show ? '' : styles.hide}`}>
    <div className={styles['content-container']}>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.title}>
            Save Place
          </div>
          <div className={styles.text}>
            Running out of time? Make sure to click "Save Place" to save and come back later.
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>
            Need Help?
          </div>
          <div className={styles.text}>
            Not sure what to do? Click here and let us know how we can help! We would love to hear from you.
          </div>
          <div>
            <a className={styles.link} onClick={ props.showContact }><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; Send us a message </a>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.title}>
            Need more information?
          </div>
          <div className={styles.text}>
          </div>
          <div>
            <a className={styles.link}><i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp; Click for more info. </a>
          </div>
        </div>
      </div>

      <div className={styles['hover-icon']} onClick={ props.toggle }>
        <i className={`fa ${arrow}`} aria-hidden="true"></i>
      </div>
    </div>
    </div>
  );
}

SideBar.propTypes = {
  showContact: PropTypes.func.isRequired
};

export default SideBar;
