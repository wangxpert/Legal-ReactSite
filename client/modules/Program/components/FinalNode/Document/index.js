import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import CAFormProfessionalIncorporate2 from './CAFormProfessionalIncorporate2';
import CAFormProfessionalIncorporate1 from './CAFormProfessionalIncorporate1';
import CAFormIncorporate2 from './CAFormIncorporate2';
import CAFormIncorporate1 from './CAFormIncorporate1';

import CAFormDEIncorporate2 from './DEFormIncorporate2';
import CAFormDEIncorporate1 from './DEFormIncorporate1';
import DEFormProfessionalIncorporate2 from './DEFormProfessionalIncorporate2';
import DEFormProfessionalIncorporate1 from './DEFormProfessionalIncorporate1';

// Import Style
import styles from './styles.css';

export default class DocumentDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>

          { this.props.data.form === 'ca_form_articles_of_professional_incorporation_1' && <CAFormProfessionalIncorporate1 data={this.props.data} /> }
          { this.props.data.form === 'ca_form_articles_of_professional_incorporation_2' && <CAFormProfessionalIncorporate2 data={this.props.data} /> }
          { this.props.data.form === 'ca_form_articles_of_incorporation_1' && <CAFormIncorporate1 data={this.props.data} /> }
          { this.props.data.form === 'ca_form_articles_of_incorporation_2' && <CAFormIncorporate2 data={this.props.data} /> }

          { this.props.data.form === 'de_form_articles_of_professional_incorporation_1' && <DEFormProfessionalIncorporate1 data={this.props.data} /> }
          { this.props.data.form === 'de_form_articles_of_professional_incorporation_2' && <DEFormProfessionalIncorporate2 data={this.props.data} /> }
          { this.props.data.form === 'de_form_articles_of_incorporation_1' && <DEFormIncorporate1 data={this.props.data} /> }
          { this.props.data.form === 'de_form_articles_of_incorporation_2' && <DEFormIncorporate2 data={this.props.data} /> }

      </Modal>
    );
  }
}
