import React, { Component } from 'react';
import PropTypes from 'prop-types';

import reactHtmlParser from 'react-html-parser';

import Button from '../Button/Button';

// Import styles
import styles from './styles.css';

function Cover(props) {
  const { title, icon, description, style } = props;

  return (
    <div className={ styles.container } style={ style } onClick={ props.onClick } >
      <div className={ styles.title }>
        { title }
      </div>
      <div className={ styles.icon }>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
      </div>
      <div className={ styles.description }>
        { description }
      </div>
    </div>
  );
}

Cover.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default Cover;
