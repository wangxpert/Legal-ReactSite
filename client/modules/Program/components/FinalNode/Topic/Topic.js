import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import reactHtmlParser from 'react-html-parser';

import Button from '../../../../../components/Button/Button';
import Document from '../../../../../components/Document';
import TopicDialog from './Dialog';

// Import Actions
import { hideFinalNode, setFinalNode } from '../../../ProgramActions';

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

  onBack() {
    this.props.back();
  }

  onCalcTax() {
    console.log(this.props.calcTaxInfo);
    this.props.setFinalNode('CalculateTax', { calcTaxInfo: this.props.calcTaxInfo });
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
          { to && <Document empty={ false } icon="fa-file" title={ toTitle } description={ toDescription } onClick={ e=> toForm(to) } style={{ margin: '0 0 0rem 30rem', float: 'right' }} /> }
          { reactHtmlParser(message) }
          <br />

          { this.props.calcTaxInfo &&
              <Button title="Calculate Tax" onClick={ this.onCalcTax.bind(this) } />
          }

        </div>
        <div className={ styles.footer }>
          <Button title="Back" style={ btnStyle } onClick={ this.onBack.bind(this) } />

          <div className={ styles['btn-container'] }>
            <span className={ styles['text'] }>Was this helpful? &nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Button title="Yes" style={ btnStyle } onClick={ this.onShowDialog.bind(this) } />
            <Button title="Need Help" style={ btnStyle } onClick={ this.props.showContact } />
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

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    back: () => dispatch(hideFinalNode()),
    setFinalNode: (kind, data) => dispatch(setFinalNode(kind, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
