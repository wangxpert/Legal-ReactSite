import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';

class NeedHelp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          Need Help ?
        </div>

        <div className={`${styles['text-box']} col-xs-12`}>
          <span className={styles['title']}>
            Have a question or need help?
          </span>
          <span className={styles['text']}>
            Our mavens are here to assist you with all your legal questions! How may we assist you?
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

NeedHelp.PropTypes = {
  onAsk: PropTypes.func.isRequired
}

export default NeedHelp;
