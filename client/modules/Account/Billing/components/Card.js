import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'
import imgMaster from './master.png'
import imgVisa from './visa.png'

class Card extends Component {
  render() {
    return (
      <div className={ styles.card } onClick={ this.props.onClick }>
        <img className={ styles['card-image'] } src={ this.props.type === 'visa' ? imgVisa : imgMaster } />
        <div className={ styles['card-number'] } >•••• •••• •••• •{ this.props.number }</div>
        <div className={ styles['card-expire'] } >Expire: { this.props.expire } </div>
      </div>
    )
  }
}

export default Card
