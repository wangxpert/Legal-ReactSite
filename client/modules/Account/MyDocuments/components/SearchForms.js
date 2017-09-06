import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'

// Import Components
import Button from '../../../../components/Button/Button';

class SearchForms extends Component {

  render() {
    return (
      <div className={ `${ styles.container } row` } style={ this.props.style } >
        <div className={ `col-xs-12 col-md-4 ${ styles['title-big'] }` }>
          <i className={ `fa fa-file-text-o ${ styles.icon } ${ styles['icon-big'] }`}> </i>&nbsp; Not sure what form to use?
        </div>
        <div className={ `col-xs-12 col-sm-7 col-md-5 ${ styles.text }` } style={{ paddingTop: '5rem' }}>
          <strong>Click here to search our forms and find what you need.</strong>
        </div>
        <div className={ `col-xs-12 col-sm-5 col-md-3 text-center` }>
          <Button title="Search Forms"/>
        </div>
      </div>
    )
  }
}

SearchForms.propTypes = {
  createDocument: PropTypes.func
}

export default SearchForms
