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
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          My Documents
        </div>

        <div className={`${styles['doc-container']} row`}>
          <div className={`col-xs-3`}>
            <Document empty={ false } icon="fa-plus" title="Create New" />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="Create New" />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="Create New" />
          </div>
          <div className={`col-xs-3`}>
            <Document empty={ true } icon="fa-plus" title="Create New" />
          </div>
        </div>

        <div className={`${styles['button-container2']} col-xs-12`}>
          <Button title={'Upgrade'} onClick={this.props.onUpgrade} />
          <span className={styles['tip-text']}>
            Click for more success!
          </span>
        </div>

      </div>
    );
  }
}

MyDocuments.PropTypes = {

}

export default MyDocuments;
