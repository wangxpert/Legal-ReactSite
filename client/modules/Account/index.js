import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import styles
import styles from './styles.css'

// Import Components
import NavBar from './components/NavBar/NavBar'

// Import Actions

class Account extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <NavBar location={ this.props.location }/>
        { this.props.children }
      </div>
    )
  }
}

export default Account
