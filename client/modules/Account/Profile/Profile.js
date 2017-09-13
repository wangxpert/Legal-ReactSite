import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'

import General from './components/General'


class Profile extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchUserProfile()
  }

  render() {
    const { auth: { user } } = this.props

    return (
      <div className={ `container wow fadeIn` }>
        <div className={ `${styles.container} row` }>
          <div className={ `${styles['tab-bar']} col-xs-12` }>
            <div className={ `${ styles.tab } ${ styles.active }` }>
              <i className={ `fa fa-user-o ${ styles['tab-icon'] }` } aria-hidden="true"> </i> &nbsp;User #{ user.id ? user.id.substr(user.id.length - 6, 6) : '' }
            </div>
          </div>

          <div className={ `${styles.content} col-xs-12` }>
            <General user={ user } error={ this.props.errorMessage }
              updateName={ this.props.updateName }
              updateEmail={ this.props.updateEmail }
              updatePassword={ this.props.updatePassword }
              updateAddress={ this.props.updateAddress }
              updatePhone={ this.props.updatePhone } />
          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {

}

export default Profile
