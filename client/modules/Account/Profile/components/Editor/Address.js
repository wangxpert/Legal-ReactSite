import React, { Component } from 'react'

import styles from '../../styles.css'

import Button from '../../../../../components/Button/Button'

const btnStyle = {
  margin: '3rem 10rem 0 0',
  width: '100rem',
  padding: '7rem 0'
}

class AddressEditor extends Component {

  constructor(props) {
    super(props)

    let address = props.address ? props.address : { street: '', city: '', state: '', zipCode: '' }

    this.state = {
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.updateAddress(this.state)
    this.props.close()
  }

  render() {
    return (
      <div className={ styles['editor-container'] }>
        <div className="row">
          <form onSubmit={ this.onSubmit }>
            <div className="col-xs-12">
              <p className={ styles['title'] }>Please enter your address.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <input type="text" name="street" placeholder="Street" autoFocus required value={ this.state.street } onChange={ this.onChange }/>
              <input type="text" name="city" placeholder="City" required value={ this.state.city } onChange={ this.onChange }/>
              <input type="text" name="state" placeholder="State" required value={ this.state.state } onChange={ this.onChange }/>
              <input type="text" name="zipCode" placeholder="ZIP Code" required value={ this.state.zipCode } onChange={ this.onChange } pattern=".{5}" title="Must be 5 characters"/>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <Button style={ btnStyle } title="Save" type="submit"/>
              <Button style={ btnStyle } title="Cancel" onClick={ this.props.close }/>
            </div>
          </form>
        </div>
        <hr />
      </div>
    )
  }
}

export default AddressEditor
