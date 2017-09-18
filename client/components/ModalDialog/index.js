import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

// Import styles
import styles from './styles.css'

// Import Components

// Import Actions

// Import Assets

class InputDialog extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

  }

  onSubmit(e) {
    e.preventDefault()
    this.props.save(this.state.name)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.close }>
        <Modal.Body bsClass={ styles['content'] }>
          <div className={ styles['close-button'] }>
            <i className="fa fa-times float-right" aria-hidden="true" onClick={ this.props.close }></i>
          </div>
          { this.props.children }
        </Modal.Body>
      </Modal>
    )
  }
}

InputDialog.propTypes = {
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default InputDialog
