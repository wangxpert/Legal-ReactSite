import { connect } from 'react-redux'

// Import View
import Billing from './Billing.js'

// Import Actions
import * as Actions from './actions'
import { fetchUserProfile } from '../../Auth/AuthActions'

import Notifications from 'react-notification-system-redux'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.auth.user,
    customer: state.pay.customer,
    state: state.pay.state
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getCustomer: (customerId) => dispatch(Actions.getCustomer(customerId)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    addCard: (customerId, nonce, billingAddress, holderName) => dispatch(Actions.addCard(customerId, nonce, billingAddress, holderName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
