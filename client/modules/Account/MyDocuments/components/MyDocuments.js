import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';
import Document from '../../../../components/Document';

class MyDocuments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`} onClick={ e => this.props.onClick() } style={ this.props.style } >
        <div className={`${styles['container-title']} text-center col-xs-12`}>
          My Documents
        </div>

        <div className={`${styles['doc-container']} col-xs-12`}>
          <div className={`col-xs-3`}>
            <Document empty={ false } icon="fa-plus" title="Articles of Professional Incorporation" description="Let's begin the professional incorporation process." />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="<br />Create New" />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="<br />Create New" />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="<br />Create New" />
          </div>
        </div>
      </div>
    );
  }
}

MyDocuments.PropTypes = {
  onClick: PropTypes.func
}

export default MyDocuments;
