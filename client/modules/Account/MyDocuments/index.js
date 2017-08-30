import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './styles.css';

// Import Components
import { browserHistory } from 'react-router';

import Button from '../../../components/Button/Button';
import MyDocuments from './components/MyDocuments';
import ContinueDocument from './components/ContinueDocument';
import NewDocument from './components/NewDocument';
import NeedHelp from './components/NeedHelp';

// Import Actions
import { fetchUserProfileRequested } from '../../Auth/AuthActions';
import { fetchDocs } from './actions';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchUserProfileRequested());
    this.props.dispatch(fetchDocs());
  }

  onViewAll() {
    alert('View All');
  }

  onAsk() {
    alert('On Ask');
  }

  onNewDocument() {
    browserHistory.push('/legalforms');
  }

  render() {
    return (
      <div className={`${styles['page-container']} container wow fadeIn`}>
        <div className='row'>
          <div className='col-xs-12'>
            <MyDocuments docs={ this.props.documents.docs } />
          </div>
          <div className='col-xs-12'>
            <ContinueDocument onView={ this.onViewAll.bind(this) } />
          </div>
          <div className='col-xs-6'>
            <NewDocument onNewDocument={ this.onNewDocument.bind(this) } />
          </div>
          <div className='col-xs-6'>
            <NeedHelp onAsk={ this.onAsk.bind(this) } />
          </div>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    auth: store.auth,
    documents: store.documents
  };
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Profile);
