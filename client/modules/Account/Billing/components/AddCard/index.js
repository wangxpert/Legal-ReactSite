import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import Button from '../../../../../components/Button/Button'
import Cleave from 'cleave.js/react'
import creditCardType from 'credit-card-type'

class AddCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      number: '',
      expiration: '',
      cvc: '',
      zipCode: '',
      remember: false
    }

    this.onNumber = this.onNumber.bind(this)
    this.onExpiration = this.onExpiration.bind(this)

    this.onChange = this.onChange.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onExpiration(e) {
    let value = e.target.value
    if (value.length === 3 && value.indexOf('/') === -1) value = value.substr(0, 2) + '/' + value.substr(2, 1)
      this.setState({ expiration: value })
  }

  onNumber(e) {
    this.setState({ number: e.target.rawValue })
  }


  onSubmit(e) {
    e.preventDefault()
    let card = Object.assign({}, this.state)
    let type = creditCardType(card.number)
    card.type = type.length ? type[0].type : ''
    this.props.submit(card)
  }

  render() {
    return (
      <div className={ styles.card }>
        <div className="col-xs-12">
          <div className={ styles.title }>Card Information</div>
        </div>
        <form className="row" onSubmit={ this.onSubmit }>
          <div className="col-xs-12">
            <label htmlFor="name">Name On Card</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Full Name on Card"
            name="name" value={ this.state.name } onChange={ this.onChange } autoFocus required />
          </div>
          <div className="col-xs-12">
            <label htmlFor="number">Card Number</label>
            <Cleave options={{ creditCard: true }} className="form-control" id="number" placeholder="Enter Credit Card Number on Card" required
              name="number" onChange={ this.onNumber } />
          </div>
          <div className="col-xs-8">
            <label htmlFor="name">Expiration Date</label>
            <input type="text" className="form-control" id="expiration" placeholder="MM/YY"
            pattern="(\d){2}/(\d){2}" maxLength="5" title="MM/YY" required
            name="expiration" value={ this.state.expiration } onChange={ this.onExpiration } />
          </div>
          <div className="col-xs-4" style={{ paddingLeft: 0 }}>
            <label htmlFor="cvc">CVC</label>
            <input type="text" className="form-control" id="cvc" placeholder="3-digits"
              maxLength="3" pattern="\d{3}" title="Must be 3 digits" required
              name="cvc" value={ this.state.cvc } onChange={ this.onChange } />
          </div>
          <div className="col-xs-12">
            <label htmlFor="zip_code">Billing Zip Code</label>
            <input type="text" className="form-control" id="zip_code" placeholder="Enter Zip Code" required
            name="zipCode" value={ this.state.zipCode } onChange={ this.onChange } />
          </div>

          { this.props.showRemember &&
            <div className="col-xs-12">
              <div className="checkbox">
                <label><input type="checkbox" value={ this.state.remember } onChange={ this.onChange } style={{ height: '26rem' }} /> &nbsp;
                <span style={{ fontSize: '18rem' }}>Remember billing information</span></label>
              </div>
            </div>
          }

          <div className="col-xs-12" style={{ marginTop: '20rem' }}>
            <Button type="submit" style={{ padding: '10rem 0' }} fullWidth><span className={ styles['button-text'] }>{ this.props.buttonTitle }</span></Button>
          </div>
        </form>
      </div>
    )
  }
}

AddCard.propTypes = {
  showRemember: PropTypes.bool,
  buttonTitle: PropTypes.string,

  submit: PropTypes.func
}

export default AddCard
