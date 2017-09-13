import React, { Component } from 'react'

import styles from '../../styles.css'

import Button from '../../../../../components/Button/Button'

const btnStyle = {
  margin: '3rem 10rem 0 0',
  width: '100rem',
  padding: '7rem 0'
}

class PhoneEditor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phone: props.phone
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.updatePhone(this.state.phone)
    this.props.close()
  }

  render() {
    return (
      <div className={ styles['editor-container'] }>
        <div className="row">
          <form onSubmit={ this.onSubmit }>
            <div className="col-xs-12">
              <p className={ styles['title'] }>Please enter your phone number.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <input type="text" name="phone" placeholder="xxx-xxx-xxxx" autoFocus required value={ this.state.phone } onChange={ this.onChange } pattern="(\d){3}-(\d){3}-(\d){4}" title="XXX-XXX-XXXX"/>
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

export default PhoneEditor
