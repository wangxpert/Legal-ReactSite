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
      <button className={`${className} ${this.props.className}`} type={ this.props.type ? this.props.type : 'button' }
        onClick={this.props.onClick} style={this.props.style}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
