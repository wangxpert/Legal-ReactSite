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

    const path = props.location.pathname.split('/');
    if (path.length > 2 && (path[1] === 'legalforms' || path[1] === 'legaltopics')) {
      this.state.showSubNav = true;
    }
  }

  render() {
    const items = {
      legalTopics: (<li className={styles['nav-item']} ><a href="/legaltopics">Legal Topics</a></li>),
      legalForms: (<li  className={styles['nav-item']} ><a href="/legalforms">Legal Forms</a></li>),
      services: (<li className={styles['nav-item']}><a>Services</a></li>),
      contact: (<li className={styles['nav-item']}><a>Contact</a></li>),
      search: (
        <li className={styles['nav-item']}>
          <a>
            <i className="fa fa-search"></i> &nbsp;Search
          </a>
        </li>
      ),
      signIn: (
        <li className={styles['nav-item']}>
          <a href="/signin">
            <i className={`fa fa-user`}></i> &nbsp;Sign In &nbsp;
          </a>
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
      <div className={styles.header} style={{ zIndex: 999 }}>
        <nav className={`navbar ${styles.navbar}`}>
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
