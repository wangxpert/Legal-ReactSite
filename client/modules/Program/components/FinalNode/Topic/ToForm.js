import React, { Component } from 'react';
import PropTypes from 'prop-types';

import reactHtmlParser from 'react-html-parser';

import Button from '../../../../../components/Button/Button';
import Cover from '../../../../../components/Cover';

// Import styles
import styles from './styles.css';

const btnStyle = {
  backgroundColor: 'white',
  color: '#02b2fb',
  fontSize: '17rem',
  fontWeight: 400,
  margin: '0rem 10rem',
  padding: '7rem 18rem'
}

function ToForm(props) {
  const { title, message } = props;

  return (
    <div className={ `${styles.container} wow fadeIn`}>
      <h1 className={ styles.title }>
        { title }
      </h1>
      <div className={ styles.message }>
        <Cover title="Articles of Incorporation" icon="fa-book" description="Let's begin the incorporation process." style={{ margin: '20rem', float: 'right' }} onClick={ e => props.onClick(props.to) } />
        { reactHtmlParser(message) }

      </div>
      <div className={ styles.footer }>
        <span className={ styles['text'] }>Was this helpful?</span>

        <div className={ styles['btn-container'] }>
          <Button title="Yes" style={ btnStyle } />
          <Button title="Need Help" style={ btnStyle } />
        </div>
      </div>
    </div>
  );
}

ToForm.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default ToForm;
