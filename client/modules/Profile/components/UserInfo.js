import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../components/Button/Button';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderInfo() {
    const icons = ['fa-user', 'fa-envelope', 'fa-phone', 'fa-map-marker', 'fa-briefcase'];
    const info = ['First and Last Name', 'Email Address', 'Phone Contact', 'Address here', 'Occupation'];

    var ele = [];
    for (let i = 0; i < icons.length; i++) {
      ele.push(
        <div key={i} className={`${styles['text-box']}`}>
          <div className={styles['icon']}>
            <i className={`fa ${icons[i]}`} aria-hidden="true"></i>
          </div>
          <span className={styles['text']}>{ info[i] }</span>
        </div>
      );
    }

    return ele;
  }

  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={styles['avatar-container']}>
          <img className={styles.avatar} src="https://cdn.psychologytoday.com/sites/default/files/blogs/46379/2014/07/155585-159667.gif" />
        </div>

        <div className={styles['info-container']}>
          { this.renderInfo() }
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
