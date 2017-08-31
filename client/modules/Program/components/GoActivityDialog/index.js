import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

// Import styles
import styles from './styles.css'

// Import Components

// Import Actions

// Import Assets

class GoActivityDialog extends Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

  }

  onSubmit(e) {
    e.preventDefault()
    this.props.go()
    this.props.close()
  }

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.close } >
        <Modal.Header bsClass={ styles['header'] } closeButton>
          <Modal.Title bsClass={ styles['title'] }>Activity</Modal.Title>
        </Modal.Header>
        <form onSubmit={ this.onSubmit }>
        <Modal.Body bsClass={ styles['content'] }>
            There is a saved activity for this program.
            <br/>
            Do you want to continue?
            <br />
            <br />
        </Modal.Body>
        <Modal.Footer bsClass={ styles['footer'] }>
          <button className={ styles.button } type="submit">
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>Yes
          </button>
          <button className={ styles.button } type="button" onClick={ this.props.close }>
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>No
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

GoActivityDialog.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(GoActivityDialog)
