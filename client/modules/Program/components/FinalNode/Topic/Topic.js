import React, { Component } from 'react';
import PropTypes from 'prop-types';

import reactHtmlParser from 'react-html-parser';

import Button from '../../../../../components/Button/Button';
import Cover from '../../../../../components/Cover';
import TopicDialog from './Dialog';

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

class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false
    }
  }

  onCloseDialog() {
    this.setState({ showDialog: false });
  }

  onShowDialog() {
    this.setState({ showDialog: true });
  }

  render() {
    const { title, message, to, toForm } = this.props;
    var toTitle = '';
    var toDescription = '';

    if (to === 'Corp') {
      toTitle = 'Articles of Professional Incorporation';
      toDescription = "Let's begin the professional incorporation process.";
    } else if (to === 'S-Corp') {
      toTitle = 'Articles of Incorporation';
      toDescription = "Let's begin the incorporation process.";
    }

    return (
      <div className={ `${styles.container} wow fadeIn`}>
        <h1 className={ styles.title }>
          { title }
        </h1>
        <div className={ styles.message }>
          { to && <Cover title={ toTitle } icon="fa-book" description={ toDescription } style={{ margin: '20rem', float: 'right' }} onClick={ e => toForm(to) } /> }
          { reactHtmlParser(message) }

        </div>
        <div className={ styles.footer }>
          <span className={ styles['text'] }>Was this helpful?</span>

          <div className={ styles['btn-container'] }>
            <Button title="Yes" style={ btnStyle } onClick={ e=> this.onShowDialog() } />
            <Button title="Need Help" style={ btnStyle } />
          </div>
        </div>
        <TopicDialog show={ this.state.showDialog } close={ this.onCloseDialog.bind(this) }/>
      </div>
    );
  }
}

Topic.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  to: PropTypes.string,
  toForm: PropTypes.func
};

export default Topic;
