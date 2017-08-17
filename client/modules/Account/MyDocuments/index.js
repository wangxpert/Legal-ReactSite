import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../components/Button/Button';
import UserInfo from './components/UserInfo';
import MyDocuments from './components/MyDocuments';
import Conversation from './components/Conversation';
import Activity from './components/Activity';
import ContinueDocument from './components/ContinueDocument';

// Import Actions
import { fetchUserProfileRequested } from '../../Auth/AuthActions';

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
      <div className={`${styles['page-container']} container wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <MyDocuments />
          </div>
          <div className='col-xs-12'>
            <ContinueDocument onView={this.onViewAll.bind(this)}/>
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
