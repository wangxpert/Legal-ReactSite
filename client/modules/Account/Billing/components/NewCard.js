import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'

class NewCard extends Component {
  render() {
    return (
      <div className={ styles.card } onClick={ this.props.onClick }>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
        Credit Card
      </div>
    )
  }
}

export default NewCard
