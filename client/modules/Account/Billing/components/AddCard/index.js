import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import Button from '../../../../../components/Button/Button'
import SquarePaymentForm from 'react-square-hosted-fields'

// Import Config
import { SQUAREUP_APP_ID } from '../../../../../config'

class AddCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      remember: false
    }

    this.onChange = this.onChange.bind(this)

    this.onNonceGenerated = this.onNonceGenerated.bind(this)
    this.onNonceError = this.onNonceError.bind(this)
  }

  onNonceGenerated(nonce, cardData) {
    console.log(this.state.remember)
    this.props.submit(nonce, cardData, this.state.remember)
  }

  onNonceError(errors) {
    console.log(errors)
  }

  onChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <SquarePaymentForm appId={ SQUAREUP_APP_ID }
        buttonWrapperClass={ styles.buttonWrapper } inputStyles={ [{ fontSize: '15px', fontWeight: 500 }] }
        submitText={ this.props.buttonTitle }
        onNonceGenerated={ this.onNonceGenerated }
        onNonceError={ this.onNonceError }
        >
        <div className={ styles.card }>
          <div className="col-xs-12">
            <div className={ styles.title }>Card Information</div>
          </div>
          <div className="col-xs-12">
            <label className={ styles['label'] } htmlFor="sq-card-number">Card Number</label>
            <div className={ styles['input'] } id="sq-card-number"></div>
          </div>
          <div className="col-xs-12">
            <label className={ styles['label'] } htmlFor="sq-cvv">CVV</label>
            <div className={ styles['input'] } id="sq-cvv"></div>
          </div>
          <div className="col-xs-12">
            <label className={ styles['label'] } htmlFor="sq-expiration-date">Expiration Date</label>
            <div className={ styles['input'] } id="sq-expiration-date"></div>
          </div>
          <div className="col-xs-12">
            <label className={ styles['label'] } htmlFor="sq-postal-code">Postal Code</label>
            <div className={ styles['input'] } id="sq-postal-code"></div>
          </div>

          { this.props.showRemember &&
            <div className="col-xs-12">
              <div className="checkbox">
                <label><input type="checkbox" value={ this.state.remember } name="remember" onChange={ this.onChange } /> &nbsp;
                <span style={{ fontSize: '18rem' }}>Remember billing information</span></label>
              </div>
            </div>
          }
        </div>
      </SquarePaymentForm>
    )
  }
}

AddCard.propTypes = {
  showRemember: PropTypes.bool,
  buttonTitle: PropTypes.string,

  submit: PropTypes.func
}

export default AddCard
