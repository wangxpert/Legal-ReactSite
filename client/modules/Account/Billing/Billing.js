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
      cards: []
    }

    this.onAddCard = this.onAddCard.bind(this)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onAddCard(data) {
    let cards = this.state.cards.slice()
    cards.push(data)
    console.log(cards)
    this.setState({ showAddCard: false, cards: cards })
  }

  render() {
    const cards = this.state.cards.map((e, index) =>
      <Card key={ index } type={ e.type } number={ e.cvc } expire={ e.expiration } onClick={ e => this.setState({ showAddCard: true }) } />
    )
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
