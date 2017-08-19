import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import reactHtmlParser from 'react-html-parser';

import Cover from '../../../../../../components/Cover';

// Import styles
import styles from './styles.css';

// Import Actions

// Import components

class Topic extends Component {

  constructor(props) {
    super(props);

  }

  onHome() {
    browserHistory.push('/');
  }

  onView() {
    browserHistory.push('/legaltopics');
  }

  onSave() {
    alert('save');
  }

  render() {
    return (
      <div className={ `${styles.container} wow fadeIn` }>
        <div className={ styles.header }>
          Thank you!
        </div>
        <div className={ styles.content }>
          <span className={ styles.message }>
            We hope you enjoyed your experience with us. Is there something else we may help you with?
          </span>
          <div className={ styles['actions'] }>
            <Cover title='NO' icon='fa-home' description='Go back to home page' onClick={ e => this.onHome() } />
            <Cover title='YES' icon='fa-tasks' description='View other legal topics' onClick={ e => this.onView() } />
            <Cover title='SAVE' icon='fa-user' description='Save results and open profile' onClick={ e => this.onSave() } />
          </div>
        </div>
        <div className={ styles.footer }>
          <div className={ styles.button }>
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>LEAVE A COMMENT/MESSAGE
          </div>
        </div>
      </div>
    );
  }
}

Topic.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}
export default connect(mapStateToProps)(Topic);
