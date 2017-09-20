import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'
import imgMaster from './master.png'
import imgVisa from './visa.png'

class Card extends Component {
  render() {
    let imgBrand = ''
    if (this.props.type === 'VISA') imgBrand = imgVisa
    else if (this.props.type === 'MASTERCARD') imgBrand = imgMaster

    return (
      <div className={ styles.card } onClick={ this.props.onClick }>
        <img className={ styles['card-image'] } src={ imgBrand } alt={ this.props.type }/>
        <div className={ styles['card-number'] } >•••• •••• •••• { this.props.number }</div>
        <div className={ styles['card-expire'] } >Expire: { this.props.expire } </div>
      </div>
    )
  }
}

export default Card
