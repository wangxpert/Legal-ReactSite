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
      legalTopics: (<a className={styles['nav-item']} href="/legaltopics">Legal Topics</a>),
      legalForms: (<a className={styles['nav-item']} href="/legalforms">Legal Forms</a>),
      services: (<a className={styles['nav-item']}>Services</a>),
      contact: (<a className={styles['nav-item']}>Contact</a>),
      search: (
        <a className={styles['nav-item']}>
          <i className="fa fa-search"></i> &nbsp;Search
        </a>
      ),
      account: (
        <div className={styles['nav-item']}>
          <i className="fa fa-user"></i> &nbsp;Sign In &nbsp;
          <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
        </div>
      ),
      setting: (
        <div className={styles['nav-item']}>
          <i className={`fa fa-bars ${styles['setting']}`}></i>
        </div>
      )
    };
    return (
      <div className={styles.header}>
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
