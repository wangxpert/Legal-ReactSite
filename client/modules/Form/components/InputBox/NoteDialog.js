import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

// Import Style
import styles from './InputBox.css';

export default class NoteDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header bsClass={styles['modal-header']} closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass={styles['modal-body']}>
          <p>{ ReactHtmlParser(this.props.content) }</p>
        </Modal.Body>
        <Modal.Footer bsClass={styles['modal-footer']}>
          <span style={{float:'left', marginTop: 6}}>Was this helpful?</span>
          <div className={`${styles.button} ${styles.note}`} onClick={this.props.close}>
            Yes
          </div>
          <div className={`${styles.button} ${styles.note}`} onClick={this.props.close}>
            Need Help
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}
