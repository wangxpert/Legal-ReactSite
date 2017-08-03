import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.button} onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

export default Button;
