import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderInfo(icon, info) {
    // const icons = ['fa-user', 'fa-envelope', 'fa-phone', 'fa-map-marker', 'fa-briefcase'];
    // const user = this.props.user;
    // if (user) {
    // const info = [ `${ user.name.givenName } ${ user.name.familyName }`,
    //   user.emails[0].value, user.address, user.occupation ]


    return (
      <div className={`${styles['text-box']}`}>
        <div className={styles['icon']}>
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </div>
        <span className={styles['text']}>{ info }</span>
      </div>
    );
  }

  render() {
    const user = this.props.user;
    console.log(user);
    return (
      <div className={`${styles.container}`}>
        <div className={styles['avatar-container']}>
          <img className={styles.avatar} src={(user && user.photo) ? user.photo : "https://cdn.psychologytoday.com/sites/default/files/blogs/46379/2014/07/155585-159667.gif"} />
        </div>

        <div className={styles['info-container']}>
          { this.renderInfo('fa-user', (user && user.name) ? `${user.name.givenName} ${user.name.familyName}` : '') }
          { this.renderInfo('fa-envelope', (user && user.emails) ? user.emails[0].value : '') }
          { this.renderInfo('fa-phone', (user && user.phone) ? user.phone : '') }
          { this.renderInfo('fa-map-marker', (user && user.address) ? user.address : '') }
          { this.renderInfo('fa-briefcase', (user && user.occupation) ? user.occupation : '') }
        </div>

        <div className={`${styles['button-container']}`}>
          <Button title={'Update Info'} onClick={this.props.onUpdate}/>
        </div>
      </div>
    );
  }
}

UserInfo.PropTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default UserInfo;
