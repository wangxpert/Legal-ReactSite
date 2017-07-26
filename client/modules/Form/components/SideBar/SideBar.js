import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './SideBar.css';

export function SideBar(props) {
  return (
    <div className={styles.sidebar}>
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
          <a className={styles.link}><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp; Send us a message </a>
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
  );
}

SideBar.propTypes = {

};

export default SideBar;
