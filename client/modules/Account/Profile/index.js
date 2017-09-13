import { connect } from 'react-redux'

// Import View
import Profile from './Profile'

// Import Actions
import * as Actions from '../../Auth/AuthActions'
import { error } from 'react-notification-system-redux';

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    errorMessage: (option) => dispatch(error(option)),
    fetchUserProfile: () => dispatch(Actions.fetchUserProfile()),
    updateName: (name) => dispatch(Actions.updateName(name)),
    updateEmail: (email) => dispatch(Actions.updateEmail(email)),
    updatePassword: (oldPassword, newPassword) => dispatch(Actions.updatePassword(oldPassword, newPassword)),
    updateAddress: (address) => dispatch(Actions.updateAddress(address)),
    updatePhone: (phone) => dispatch(Actions.updatePhone(phone))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
