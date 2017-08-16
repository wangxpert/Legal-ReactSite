import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { logoutRequested } from '../../../Auth/AuthActions';

import { toggleSearchBar } from '../../AppActions';

// Import Components

// Import Style
import styles from './Header.css';
import Navbar from '../NavBar/NavBar';
import select_img from './select.png';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillReceiveProps(nextProps) {
    /*const path = nextProps.location.pathname.split('/');
    if (path.length > 2 && (path[1] === 'legalforms' || path[1] === 'legaltopics')) {
      this.setState({ showSubNav: true });
    } else {
      this.setState({ showSubNav: false });
    }*/
  }

  onLogout() {
    this.props.dispatch(logoutRequested());
  }

  onSearch() {
    const { dispatch } = this.props;
    dispatch(toggleSearchBar());
  }

  render() {
    var search_back_url = '';
    if (this.props.app.showSearchBar)
      search_back_url = `url('${select_img}')`;

    const items = {
      legalTopics: (<li className={styles['nav-item']} ><div><Link to="/legaltopics">Legal Topics</Link></div></li>),
      legalForms: (<li  className={styles['nav-item']} ><div><Link to="/legalforms">Legal Forms</Link></div></li>),
      services: (<li className={styles['nav-item']}><div><a href="">Services</a></div></li>),
      contact: (<li className={styles['nav-item']}><div><a>Contact</a></div></li>),
      search: (
        <li className={`${styles['nav-item-search']}`} style={{backgroundImage: search_back_url}}>
          <div onClick={this.onSearch.bind(this)}>
              <i className="fa fa-search"></i>
          </div>
        </li>
      ),
      signIn: (
        <li className={`${styles['nav-item']} ${styles['circular-border']} ${styles['signin']}`}>
          <Link to="/signin">
            Sign In
          </Link>
        </li>
      ),
      signUp: (
        <li className={`${styles['nav-item']} ${styles['circular-border']} ${styles['signup']}`}>
          <Link to="/signup">
            Sign Up
          </Link>
        </li>
      ),
      account: (
        <li className={styles['nav-item']}>
          <div>
            <a href="">
              <i className={`fa fa-user ${styles['icon']}`}></i> &nbsp;Account <i className="fa fa-caret-down"></i>
            </a>
          </div>

          <ul className={styles['dropdown']}>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/mydocuments">Documents</Link></li>
            <li><a href="javascript:void(0)" onClick={this.onLogout.bind(this)}>Log Out</a></li>
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

    const isLogged = (this.props.auth.state === 'LOGGED');
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
                {items.legalTopics}
                {items.legalForms}
                {items.services}
                {items.contact}
                {items.search}
                {!isLogged && items.signIn}
                {!isLogged && items.signUp}
                {isLogged && items.account}
              </ul>
            </div>
          </div>
        </nav>
        <div>
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    app: store.app,
    auth: store.auth
  };
}

export default connect(mapStateToProps)(Header);
