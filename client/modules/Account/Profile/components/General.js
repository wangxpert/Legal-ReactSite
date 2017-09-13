import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import styles
import styles from '../styles.css'

// Import Components
import NameEditor from './Editor/Name'
import EmailEditor from './Editor/Email'
import PasswordEditor from './Editor/Password'
import AddressEditor from './Editor/Address'
import PhoneEditor from './Editor/Phone'

class General extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isNameEditing: false,
      isEmailEditing: false,
      isPasswordEditing: false,
      isAddressEditing: false,
      isPhoneEditing: false,
    }

    this.toggleName = this.toggleName.bind(this)
    this.toggleEmail = this.toggleEmail.bind(this)
    this.togglePassword = this.togglePassword.bind(this)
    this.toggleAddress = this.toggleAddress.bind(this)
    this.togglePhone = this.togglePhone.bind(this)
  }

  toggleName() {
    this.setState({ isNameEditing: !this.state.isNameEditing })
  }

  toggleEmail() {
    this.setState({ isEmailEditing: !this.state.isEmailEditing })
  }

  togglePassword() {
    this.setState({ isPasswordEditing: !this.state.isPasswordEditing })
  }

  toggleAddress() {
    this.setState({ isAddressEditing: !this.state.isAddressEditing })
  }

  togglePhone() {
    this.setState({ isPhoneEditing: !this.state.isPhoneEditing })
  }

  render() {
    const { user } = this.props

    let name = user.name ? `${user.name.givenName} ${user.name.familyName}` : ''

    return (
      <div className="row">

        {/* Avatar */}
        <div className="col-xs-12 col-sm-4 col-md-3">
          <div className={styles['avatar-container']}>
            <img className={styles.avatar} src={(user && user.photo) ? user.photo : "https://cdn.psychologytoday.com/sites/default/files/blogs/46379/2014/07/155585-159667.gif"} />
          </div>
        </div>

        {/* Information */}
        <div className="col-xs-12 col-sm-8 col-md-9">
          <div className={styles['info-container']}>

            { this.state.isNameEditing ?
              <NameEditor close={ this.toggleName } name={ user.name } updateName={ this.props.updateName } />
            : <div className={ `${styles['info']} ${styles['name']}` } onClick={ this.toggleName }>
                { name ? name : 'Add Your Name' }
              </div>
            }

            { this.state.isEmailEditing ?
              <EmailEditor close={ this.toggleEmail } email={ user.email } updateEmail={ this.props.updateEmail } />
            : <div className={styles['info']} onClick={ this.toggleEmail }>
                <i className={'fa fa-envelope'} aria-hidden="true">&nbsp;</i>
                { user.email ? user.email: 'Add your email' }
              </div>
            }

            { user.password && (this.state.isPasswordEditing ?
              <PasswordEditor close={ this.togglePassword } error={ this.props.error } updatePassword={ this.props.updatePassword }  />
            : <div className={styles['info']} onClick={ this.togglePassword }>
                <i className={'fa fa-key'} aria-hidden="true">&nbsp;</i>
                ***********
              </div>)
            }

            { this.state.isAddressEditing ?
              <AddressEditor close={ this.toggleAddress } address={ user.address } updateAddress={ this.props.updateAddress } />
            : <div className={styles['info']} onClick={ this.toggleAddress }>
                <i className={'fa fa-home'} aria-hidden="true">&nbsp;</i>
                { user.address ? <div className={styles.address}>{ user.address.street }<br />{ user.address.city }, { user.address.state }, { user.address.zipCode }</div> : 'Add your address' }
              </div>
            }

            { this.state.isPhoneEditing ?
              <PhoneEditor close={ this.togglePhone } phone={ user.phone } updatePhone={ this.props.updatePhone } />
            : <div className={styles['info']} onClick={ this.togglePhone }>
                <i className={'fa fa-phone'} aria-hidden="true">&nbsp;</i>
                { user.phone ? user.phone : 'Add your phone number' }
              </div>
            }

          </div>
        </div>
      </div>
    )
  }
}

General.propTypes = {
  user: PropTypes.object.isRequired,

  updateName: PropTypes.func.isRequired,
}

export default General
