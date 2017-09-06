import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from '../styles.css'

// Import Components
import Document from '../../../../components/Document'

class MyDouments extends Component {

  render() {
    return (
      <div className={ `${ styles.container } row` } style={ this.props.style } >
        <div className={ `${ styles['container-title'] } col-xs-12` }>
          My Documents
        </div>

        <div className={ `${ styles.content } col-xs-12` }>
          <Document empty={ true } icon="fa-plus" title="<br />Create New" style={{ width: '100%' }} />
        </div>
      </div>
    )
  }
}

MyDouments.propTypes = {
  createDocument: PropTypes.func
}

export default MyDouments
