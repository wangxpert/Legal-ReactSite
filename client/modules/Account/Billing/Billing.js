import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'
import SecurityPolicy from './components/SecurityPolicy'
import NewCard from './components/NewCard'
import AddCard from './components/AddCard'
import Card from './components/Card'

class Billing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAddCard: false,
    }

    this.onAddCard = this.onAddCard.bind(this)
  }

  componentWillMount() {
    this.props.fetchUserProfile()
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user && nextProps.user) {
      if (nextProps.user.customerId) this.props.getCustomer(nextProps.user.customerId)
    }

    if (nextProps.state !== this.props.state && nextProps.state === 'ADD_CARD_SUCCESS') {
      this.props.getCustomer(nextProps.user.customerId)
    }
  }

  onAddCard(nonce, data, remember) {
    this.props.addCard(this.props.user.customerId, nonce, { postal_code: data.billing_postal_code, country: 'US' })
    this.setState({ showAddCard: false })
  }

  render() {
    let cards = null
    if (this.props.customer && this.props.customer.cards) {
      cards = this.props.customer.cards.map((e, index) =>
        <Card key={ index } type={ e.card_brand } number={ e.last_4 } expire={ `${e.exp_month} / ${e.exp_year}` } onClick={ e => this.setState({ showAddCard: true }) } />
      )
    }
    return (
      <div className={ `container wow fadeIn` }>
        <SecurityPolicy />
        <div className={ `${styles.container} row` }>
          <div className={ `${styles['tab-bar']} col-xs-12` }>
            <div className={ `${ styles.tab } ${ styles.active }` }>
              <i className={ `fa fa-credit-card ${ styles['tab-icon'] }` } aria-hidden="true"> </i> &nbsp;Wallet
            </div>
          </div>

          <div className="col-xs-4">
            <NewCard onClick={ e => this.setState({ showAddCard: true }) }/>
            { cards }
          </div>
          <div className="col-xs-8">
            { this.state.showAddCard &&
              <div style={{ padding: '20rem 0' }}>
                <AddCard buttonTitle="Add Card to Wallet" submit={ this.onAddCard }/>
              </div>
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Billing
