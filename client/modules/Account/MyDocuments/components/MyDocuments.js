import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';
import Document from '../../../../components/Document';

class MyDocuments extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      ['ca_form_articles_of_professional_incorporation_1']: 'fa-book',
      ['ca_form_articles_of_professional_incorporation_2']: 'fa-book'
    }
  }

  getIcon(docKind) {
    return this.icons[docKind] ? this.icons[docKind] : 'fa-file'
  }

  renderDocs() {
    if (!this.props.docs)
      return null;
    return this.props.docs.map((doc, index) => (
      <div key={ index } className={ `col-xs-3` }>
        <Document empty={ false } icon={ this.getIcon(doc.kind) } title={ doc.title } description={ doc.description } onClick={ e => alert('book') } style={{ marginTop: '20rem' }} />
      </div>
    ));
  }

  render() {
    return (
      <div className={ `${ styles.container } row` } style={ this.props.style } >
        <div className={ `${ styles['container-title'] } text-center col-xs-12` }>
          My Documents
        </div>

        <div className={ `${ styles['doc-container'] } col-xs-12` }>
          { this.renderDocs() }

          <div className={ `col-xs-3` } style={{ marginTop: '20rem' }} >
            <Document empty={ true } icon="fa-plus" title="<br />Create New" />
          </div>
        </div>
      </div>
    );
  }
}

MyDocuments.PropTypes = {
  docs: PropTypes.array.required
}

export default MyDocuments;
