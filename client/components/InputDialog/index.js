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
      <Modal show={ this.props.show } onHide={ this.props.close } >
        <Modal.Header bsClass={ styles['header'] } closeButton>
          <Modal.Title bsClass={ styles['title'] }> { this.props.title } </Modal.Title>
        </Modal.Header>
        <form onSubmit={ this.onSubmit }>
        <Modal.Body bsClass={ styles['content'] }>
          { this.props.description }
          <input type="text" className={`${styles.input}`} name="name" value={ this.state.name } onChange={ this.onChange } required autoFocus/>
        </Modal.Body>
        <Modal.Footer bsClass={ styles['footer'] }>
          <button className={ styles.button } type="submit">
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>{ this.props.buttonTitle }
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

InputDialog.propTypes = {
  save: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default InputDialog
