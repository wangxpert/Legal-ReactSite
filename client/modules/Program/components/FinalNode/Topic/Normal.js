import React, { Component } from 'react';
import PropTypes from 'prop-types';

import reactHtmlParser from 'react-html-parser';

// Import Components
import Button from '../../../../../components/Button/Button';
import TopicDialog from './Topic';

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

class Normal extends Component {
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
    const { title, message } = this.props;
    return (
      <div className={ `${styles.container} wow fadeIn`}>
        <h1 className={ styles.title }>
          { title }
        </h1>
        <div className={ styles.message }>
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

Normal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default Normal;
