import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './Profile.css';

// Import Components
import Button from '../../components/Button/Button';
import UserInfo from './components/UserInfo';
import Membership from './components/Membership';
import Conversation from './components/Conversation';
import Activity from './components/Activity';
import Document from './components/Document';

// Import Actions
import { fetchUserProfileRequested } from '../Auth/AuthActions';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchUserProfileRequested());
  }

  onUpdateInfo() {
    alert('Update Information');
  }

  onUpgradeMembership() {
    alert('Upgrade')
  }

  onViewAll() {
    alert('View All');
  }

  onAsk() {
    alert('Ask a Maven');
  }

  render() {
    return (
      <div className={`${styles.profile} container wow fadeIn`}>
        <div className='row'>
          <div className='col-md-4 col-xs-12'>
            <UserInfo user={this.props.auth.user} onUpdate={this.onUpdateInfo.bind(this)}/>
          </div>
          <div className='col-md-8 col-xs-12'>
            <Membership onUpgrade={this.onUpgradeMembership.bind(this)}/>

          </div>
          <div className='col-md-8 col-xs-12'>
            <Document onView={this.onViewAll.bind(this)}/>
            </div>
          <div className='col-xs-12'>
            <Activity />
          </div>
          <div className='col-xs-12'>
            <Conversation onAsk={this.onAsk.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    auth: store.auth
  };
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Profile);
