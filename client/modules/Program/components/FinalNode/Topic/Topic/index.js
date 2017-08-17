import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import Topic from './Topic';

// Import Style
import styles from './styles.css';

export default class TopicDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.close } bsSize="sm" dialogClassName={ styles['modal'] }>
        <Topic />
      </Modal>
    );
  }
}
