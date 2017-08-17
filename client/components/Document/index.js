import React, { Component } from 'react';
import PropTypes from 'prop-types';

import reactHtmlParser from 'react-html-parser';

import Button from '../Button/Button';

// Import styles
import styles from './styles.css';
import imgBook from './book.png';

function Document(props) {
  const { title, icon, description, style } = props;

  return (
    <div className={ `${styles.container} ${props.empty ? styles.empty : ''}` } onClick={ props.onClick } >
      { !props.empty && <img className={ styles['back-img'] } src={ imgBook } alt="back-img" /> }
      <div className={ styles['overlay']}/>
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

Document.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default Document;
