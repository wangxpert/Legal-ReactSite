import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

// Import Style
import styles from './NavBar.css'

export function NavBar(props, context) {
  return (
    <div className={styles.navbar} style={{ zIndex: 999 }}>
      <div className={styles.nav}>

        <div className={styles['nav-item']}><Link to='/profile'>Profile</Link></div>
        <div className={styles['nav-item']}><Link to='/profile'>Membership</Link></div>
        <div className={styles['nav-item']}><Link to='/profile'>My Documents</Link></div>
        <div className={styles['nav-item']}><Link to='/profile'>My History</Link></div>
        <div className={styles['nav-item']}><Link to='/profile'>Checkout</Link></div>

      </div>
    </div>
  );
}

NavBar.contextTypes = {
  router: React.PropTypes.object,
};

NavBar.propTypes = {

};

export default NavBar
