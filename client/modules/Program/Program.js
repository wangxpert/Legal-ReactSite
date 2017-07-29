import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Program.css';

// Import Components
import SideBar from '../Form/components/SideBar/SideBar';
import InputBox from './components/InputBox/InputBox';

export function Program(props, context) {
  var inputBox = null;
  if (!context.router.isActive('/', true)) {
    inputBox = (
      <InputBox name={ props.params.name } />
    );
  }

  return (
    <div className={styles.program}>
      <SideBar />
      <div className={`${styles['inputbox-container']}`}>
        { inputBox }
      </div>
    </div>
  );
}

Program.contextTypes = {
  router: React.PropTypes.object,
};

export default Program;
