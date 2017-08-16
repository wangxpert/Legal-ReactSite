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

function Form(props) {
  return (
    <div className={ `${styles.container} wow fadeIn` }>
      <div className={ styles.header }>
        Congratulations !
      </div>
      <div className={ styles.content }>
        <span className={ styles.message }>
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          &nbsp;&nbsp;Your document is ready to go!
        </span>
        <div className={ styles['actions'] }>
          <Cover title='VIEW' icon='fa-eye' description='Review your document' />
          <Cover title='EDIT' icon='fa-pencil' description='Make changes to document' />
          <Cover title='SAVE' icon='fa-save' description='Save document to profile' />
        </div>
      </div>
      <div className={ styles.footer }>
        <div className={ styles.button }>
          <i className="fa fa-download" aria-hidden="true">&nbsp;&nbsp;</i>CHECKOUT TO DOWNLOAD
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string
};

export default Form;
