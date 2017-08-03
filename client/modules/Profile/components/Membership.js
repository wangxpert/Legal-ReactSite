import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../components/Button/Button';

class Membership extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          Membership Details
        </div>

        <div className={`${styles['text-box']} col-xs-12`}>
          <span className={styles['title']}>
            Status:
          </span>
          <span className={styles['text']}>
            Free Membership
          </span>
        </div>

        <div className={`${styles['text-box']} col-xs-12`}>
          <span className={styles['title']}>
            Services Available:
          </span>
          <span className={styles['text']}>
            Access to programs, glossary, most forms, current events, interactions with our Mavens.
          </span>
        </div>

        <div className={`${styles['button-container2']} col-xs-12`}>
          <Button title={'Upgrade'} onClick={this.props.onUpgrade}/>
          <span className={styles['tip-text']}>
            Click for more success!
          </span>
        </div>

      </div>
    );
  }
}

Membership.PropTypes = {
  onUpgrade: PropTypes.func.isRequired
}

export default Membership;
