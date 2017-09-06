import { connect } from 'react-redux'

// Import View
import Documents from './Documents.js'

// Import Actions
import * as Actions from './actions'

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    auth: state.auth,
    documents: state.documents
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchDocs: (info) => dispatch(Actions.fetchDocs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents)
