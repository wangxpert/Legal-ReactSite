import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';

class Conversation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          Conversations
        </div>

        <div className={`${styles['text-box']} col-xs-12`}>
          <span className={styles['text']}>
            Our mavens are here to assist you with all your legal questions.
            Let us know how we may help you, and we will get back to you as soon as possible.
          </span>
        </div>

        <div className={`${styles['button-container2']} col-xs-12`}>
          <Button title={'Ask a Maven'} onClick={this.props.onAsk}/>
          <span className={styles['tip-text']}>
            Click for more access!
          </span>
        </div>

      </div>
    );
  }
}

Conversation.PropTypes = {
  onAsk: PropTypes.func.isRequired
}

export default Conversation;
