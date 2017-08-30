import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

// Import styles
import styles from './styles.css'

// Import Components

// Import Actions

// Import Assets

class SaveStepDialog extends Component {

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
    this.props.close()
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
          <Modal.Title bsClass={ styles['title'] }>Save Place</Modal.Title>
        </Modal.Header>
        <form onSubmit={ this.onSubmit }>
        <Modal.Body bsClass={ styles['content'] }>
            Enter the Name :
            <input type="text" className={`${styles.input}`} name="name" value={ this.state.name } onChange={ this.onChange } required/>
        </Modal.Body>
        <Modal.Footer bsClass={ styles['footer'] }>
          <button className={ styles.button } type="submit">
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>SAVE PLACE
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

SaveStepDialog.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(SaveStepDialog)
