import React, { Component } from 'react';
import { connect } from 'react-redux';

import reactHtmlParser from 'react-html-parser';

import Button from '../../../../../components/Button/Button';
import Cover from '../../../../../components/Cover';

// Import styles
import styles from './styles.css';

// Import Actions
import { hideFinalNode } from '../../../ProgramActions';

// Import components
import CAForm from '../Document';

const btnStyle = {
  backgroundColor: 'white',
  color: '#02b2fb',
  fontSize: '17rem',
  fontWeight: 400,
  margin: '0rem 10rem',
  padding: '7rem 18rem'
}

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDocument: false
    };
  }

  onView() {
    this.setState({ showDocument: true });
  }

  onEdit() {
    this.props.hide();
  }

  onHideDocument() {
    this.setState({ showDocument: false });
  }

  render() {
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
            <Cover title='VIEW' icon='fa-eye' description='Review your document' onClick={ e => this.onView() } />
            <Cover title='EDIT' icon='fa-pencil' description='Make changes to document' onClick={ e => this.onEdit() } />
            <Cover title='SAVE' icon='fa-save' description='Save document to profile' />
          </div>
        </div>
        <div className={ styles.footer }>
          <div className={ styles.button }>
            <i className="fa fa-download" aria-hidden="true">&nbsp;&nbsp;</i>CHECKOUT TO DOWNLOAD
          </div>
        </div>
        <CAForm show={ this.state.showDocument } close={ this.onHideDocument.bind(this) } data={ this.props.data } />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => dispatch(hideFinalNode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
