import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var className = styles.button;
    if (this.props.isFullWidth) {
      className += ` ${styles['full-width']}`
    }
    return (
      <div className={className} onClick={this.props.onClick} style={this.props.style}>
        {this.props.title}
      </div>
    );
  }
}

export default Button;
