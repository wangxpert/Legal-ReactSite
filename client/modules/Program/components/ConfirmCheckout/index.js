import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import Button from '../../../../components/Button/Button'

class ConfirmCheckout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      receiveOption: 'download'
    }
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className="row">
          <div className="col-xs-12">
            <div className={ styles.title }>Order Confirmation</div>
          </div>
          <div className="col-xs-12">
            <div className={ styles.description }>How would you like to recieve your document?</div>
          </div>
          <div className="col-xs-12 text-center">
            <div className={ `${ styles.option } ${ this.state.receiveOption === 'download' ? styles.active : '' }` } onClick={ () => this.setState({ receiveOption: 'download' }) }>
              <i className="fa fa-download" aria-hidden="true"></i>
              <div>Download</div>
            </div>
            <div className={ `${ styles.option } ${ this.state.receiveOption === 'email' ? styles.active : '' }` } onClick={ () => this.setState({ receiveOption: 'email' }) }>
              <i className="fa fa-envelope-square" aria-hidden="true"></i>
              <div>Email</div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className={ styles['info-container'] }>
              <div className={ styles['info'] }>
                <span className={ styles['info-title'] }>Document:</span>&nbsp; { this.props.form }
              </div>
              <div className={ styles['info'] }>
                <span className={ styles['info-title'] }>Order Number:</span>&nbsp; { this.props.order }
              </div>
              <div className={ styles['info'] }>
                <span className={ styles['info-title'] }>Date:</span>&nbsp; { this.props.date }
              </div>
              <div className={ styles['info'] }>
                <span className={ styles['info-title'] }>Amount Due:</span>&nbsp; ${ this.props.amount }
              </div>
            </div>
          </div>
          <div className="col-xs-12" style={{ margin: '10rem 0' }}>
            <Button fullWidth className={ styles['button-text'] } onClick={ this.props.checkout }>
              <div>
                Confirm and Checkout
              </div>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

ConfirmCheckout.propTypes = {
  checkout: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default ConfirmCheckout
