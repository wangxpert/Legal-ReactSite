import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import Navbar from '../NavBar/NavBar';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showSubNav: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const path = nextProps.location.pathname.split('/');
    if (path.length > 2 && (path[1] === 'legalforms' || path[1] === 'legaltopics')) {
      this.setState({ showSubNav: true });
    } else {
      this.setState({ showSubNav: false });
    }
  }

  render() {
    const items = {
      legalTopics: (<li className={styles['nav-item']} ><div><Link href="/legaltopics">Legal Topics</Link></div></li>),
      legalForms: (<li  className={styles['nav-item']} ><div><Link href="/legalforms">Legal Forms</Link></div></li>),
      services: (<li className={styles['nav-item']}><div><a href="">Services</a></div></li>),
      contact: (<li className={styles['nav-item']}><div><a>Contact</a></div></li>),
      search: (
        <li className={styles['nav-item']}>
          <div>
            <Link>
              <i className="fa fa-search"></i> &nbsp;Search
            </Link>
          </div>
        </li>
      ),
      signIn: (
        <li className={styles['nav-item']}>
          <div>
            <Link to="/signin">
              <i className={`fa fa-user`}></i> &nbsp;Sign In &nbsp;
            </Link>
          </div>
        </li>
      ),
      account: (

        <li className={styles['nav-item']}>
          <a href="">
            <i className={`fa fa-user ${styles['icon']}`}></i> &nbsp;Account <i className="fa fa-caret-down"></i>
          </a>

          <ul className={styles['dropdown']}>
            <li><a href="">Account</a></li>
            <li><a href="">Sign Out</a></li>
          </ul>
        </li>
      ),
      setting: (
        <li className={styles['nav-item']}>
          <a>
          <i className={`fa fa-bars ${styles['setting']}`}></i>
          </a>
        </li>
      )
    };
    return (
      /*<div className={styles.header}>
        <a className={styles.logo} href="/">
          Legal Maven
        </a>
        <div className={styles.nav}>
          {!this.state.showSubNav && items.legalTopics}
          {!this.state.showSubNav && items.legalForms}
          {!this.state.showSubNav && items.services}
          {!this.state.showSubNav && items.contact}
          {this.state.showSubNav && items.search}
          {items.account}
          {items.setting}
        </div>
        {this.state.showSubNav && <Navbar />}
      </div>*/
      <div className={styles.header}>
        <nav className={`navbar ${styles.navbar}`} style={{ zIndex: 999 }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className={`navbar-toggle ${styles['navbar-toggle']}`} data-toggle="collapse" data-target="#myNavbar">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <a className={`navbar-brand ${styles.logo}`} href="/">Legal Maven</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">

              <ul className="nav navbar-nav navbar-right">
                {!this.state.showSubNav && items.legalTopics}
                {!this.state.showSubNav && items.legalForms}
                {!this.state.showSubNav && items.services}
                {!this.state.showSubNav && items.contact}
                {this.state.showSubNav && items.search}
                {items.signIn}
              </ul>
            </div>
          </div>
        </nav>
        {this.state.showSubNav && <Navbar />}
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {

};

export default Header;
