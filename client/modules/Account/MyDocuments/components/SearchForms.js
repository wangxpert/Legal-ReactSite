import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'

// Import Components
import Button from '../../../../components/Button/Button'
import { browserHistory } from 'react-router'

class SearchForms extends Component {

  render() {
    return (
      <div className={ `${ styles['create-new-container'] } row` } style={ this.props.style }>
        <div className="col-xs-12 col-md-4">
          <span className={ styles.h3 }><i className={ `fa fa-file-text-o ${ styles['block-icon'] }`}> </i>&nbsp;&nbsp; Create New Document</span>
        </div>
        <div className="col-xs-12 col-md-8 text-right">
          <span className={ styles.h4 }>Click here to search our forms and find what you need.</span>
          <Button title="Search Forms" onClick={ e => { browserHistory.push('/legalforms') } }/>
        </div>
      </div>
    )
  }
}

SearchForms.propTypes = {
  createDocument: PropTypes.func
}

export default SearchForms
