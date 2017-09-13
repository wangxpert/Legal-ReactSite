import React, { Component } from 'react'

import styles from '../../styles.css'

import Button from '../../../../../components/Button/Button'

const btnStyle = {
  margin: '3rem 10rem 0 0',
  width: '100rem',
  padding: '7rem 0'
}

class PasswordEditor extends Component {

  constructor(props) {
    super(props)

    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    if (this.state.newPassword !== this.state.confirmPassword) {
      this.props.error({
        title: 'Error...',
        message: "Confirm Password doesn't match",
        position: 'br'
      })
      return
    }

    this.props.updatePassword(this.state.oldPassword, this.state.newPassword)
    this.props.close()
  }

  render() {
    return (
      <div className={ styles['editor-container'] }>
        <div className="row">
          <form onSubmit={ this.onSubmit }>
            <div className="col-xs-12">
              <p className={ styles['title'] }>Please enter your old and new Password. <br /><small>Password must be at least 7 characters.</small></p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <input type="password" name="oldPassword" placeholder="Old Password" autoFocus required value={ this.state.oldPassword } onChange={ this.onChange }/>
              <input type="password" name="newPassword" placeholder="New Password" required value={ this.state.newPassword } onChange={ this.onChange } pattern=".{7,}" title="Must be at least 7 characters"/>
              <input type="password" name="confirmPassword" placeholder="Confirm Passsword" required value={ this.state.confirmPassword } onChange={ this.onChange } pattern=".{7,}" title="Must be at least 7 characters"/>
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

export default PasswordEditor
