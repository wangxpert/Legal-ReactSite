import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

// Import Style
import styles from './NavBar.css'

export function NavBar(props) {

  const path = props.location.pathname.split('/')
  const selected = path[path.length - 1]
  console.log(selected)

  return (
    <div className={styles.navbar} style={{ zIndex: 1 }}>
      <div className={styles.nav}>

        <div className={ `${ styles['nav-item'] } ${ selected === 'profile' ? styles.active: '' } ` }><Link to='/account/profile'>Profile</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'membership' ? styles.active: '' } ` }><Link to='/account/membership'>Membership</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'mydocuments' ? styles.active: '' } ` }><Link to='/account/mydocuments'>My Documents</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'history' ? styles.active: '' } ` }><Link to='/account/history'>My History</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'checkout' ? styles.active: '' } ` }><Link to='/account/checkout'>Checkout</Link></div>

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
