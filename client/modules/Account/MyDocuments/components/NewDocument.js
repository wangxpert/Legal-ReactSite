import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';

class NewDocument extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ `${ styles.container } row` }>
        <div className={`${styles['container-title']} col-xs-12`}>
          New Document
        </div>

        <div className={ `${ styles['text-box'] } col-xs-12` }>
          <span className={styles['text']}>
            Sed ut perspiciatis unde omnis iste natus error sit volup tatem
accusantium doloremque laudantium, totam rem.
          </span>
        </div>

        <div className={ `${ styles['button-container2'] } col-xs-12` }>
          <Button title={ 'New Document' } onClick={ this.props.onNewDocument }/>
          <span className={ styles['tip-text'] }>
            Click to review my documents.
          </span>
        </div>

      </div>
    );
  }
}

NewDocument.PropTypes = {
  onNewDocument: PropTypes.func.isRequired
}

export default NewDocument;
