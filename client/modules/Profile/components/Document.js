import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../components/Button/Button';

class Document extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          My Documents
        </div>

        <div className={`${styles['text-box']} col-xs-12`}>
          <div className={styles['title']}>
            View or start a new document:
          </div>
          <span className={styles['text']}>
            Sed ut perspiciatis unde omnis iste natus error sit volup tatem
accusantium doloremque laudantium, totam rem.
          </span>
        </div>

        <div className={`${styles['button-container2']} col-xs-12`}>
          <Button title={'View All'} onClick={this.props.onView}/>
          <span className={styles['tip-text']}>
            Click to review my documents.
          </span>
        </div>

      </div>
    );
  }
}

Document.PropTypes = {
  onView: PropTypes.func.isRequired
}

export default Document;
