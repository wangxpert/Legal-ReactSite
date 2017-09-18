import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components

import Button from '../../../../components/Button/Button'
import imgCheck from '../../../../assets/green_check.png'
import StarRatingComponent from 'react-star-rating-component'

class ConfirmCheckout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rate: 3
    }

    this.ratingChanged = this.ratingChanged.bind(this)
  }

  ratingChanged(newValue, oldValue, name) {
    this.setState({ rate: newValue })
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className="row">
          <div className="col-xs-12 text-center">
            <img src={ imgCheck } className={ styles['check-image'] } />
          </div>
          <div className="col-xs-12">
            <div className={ styles.title }>Order Confirmed!</div>
          </div>
          <div className="col-xs-12 text-center">
            <div className={ styles.description }>Thank you for choosing Legal Maven!</div>
            How would you rate our servcie?<br/>Let us know how we can improve our customer service!
            <hr className={ styles['hr'] }/>
          </div>
          <div className="col-xs-12 text-center">
            <div className={ styles['rating'] }>
              <StarRatingComponent
                name="Rating LegalMaven"
                value={ this.state.rate }
                starCount={ 5 }
                starColor={ '#02b2fb' }
                onStarClick={ this.ratingChanged }
              />
            </div>
          </div>
          <div className="col-xs-12 text-center">
            <Button style={{ margin: '0 10rem' }} onClick={ this.props.noThanks }>No thanks</Button>
            <Button style={{ margin: '0 10rem' }} onClick={ () => this.props.comment(this.state.rate) }>Comment</Button>
          </div>
        </div>
      </div>
    )
  }
}

ConfirmCheckout.propTypes = {
  noThanks: PropTypes.func.isRequired,
  comment: PropTypes.func.isRequired
}

export default ConfirmCheckout
