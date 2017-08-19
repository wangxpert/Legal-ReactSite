import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

// Import styles
import styles from './styles.css';

// Import Components

// Import Actions

// Import Assets

class ContactDialog extends Component {

  constructor(props) {
    super(props);
}

  componentDidMount() {

  }

  onSubmit(e) {
    e.preventDefault();
    alert('onSubmit');
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close} >
        <Modal.Header bsClass={styles['header']} closeButton>
          <Modal.Title bsClass={styles['title']}>How can we help?</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass={styles['content']}>
            Enter your email:
            <input type="email" className={`${styles.input}`} name="email"/>
            Enter Message :
            <textarea className={`${styles.input} ${styles.textarea}`} name="message"/>
        </Modal.Body>
        <Modal.Footer bsClass={styles['footer']}>
          <div className={ styles.button }>
            <i className="fa fa-envelop" aria-hidden="true">&nbsp;&nbsp;</i>SEND MESSAGE
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
}

ContactDialog.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  };
}

export default connect(mapStateToProps)(ContactDialog);
