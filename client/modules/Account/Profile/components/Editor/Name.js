import React, { Component } from 'react'

import styles from '../../styles.css'

import Button from '../../../../../components/Button/Button'

const btnStyle = {
  margin: '3rem 10rem 0 0',
  width: '100rem',
  padding: '7rem 0'
}

class NameEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: props.name.givenName,
      lastName: props.name.familyName
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.updateName(this.state)
    this.props.close()
  }

  render() {
    return (
      <div className={ styles['editor-container'] }>
        <div className="row">
          <form onSubmit={ this.onSubmit }>
            <div className="col-xs-12">
              <p className={ styles['title'] }>Please enter your name.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <input type="text" name="firstName" placeholder="First Name" autoFocus required value={ this.state.firstName } onChange={ this.onChange }/>
              <input type="text" name="lastName" placeholder="Last Name" required value={ this.state.lastName } onChange={ this.onChange }/>
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

export default NameEditor
