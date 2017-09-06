import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'

import NewDocument from './components/NewDocument'
import SearchForms from './components/SearchForms'
import MyDocuments from './components/MyDocuments'
/*import MyDocuments from './components/MyDocuments'
import ContinueDocument from './components/ContinueDocument'
import NewDocument from './components/NewDocument'
import NeedHelp from './components/NeedHelp'*/

class Documents extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchDocs()
  }

  onViewAll() {
    alert('View All')
  }

  onAsk() {
    alert('On Ask')
  }

  onNewDocument() {
    browserHistory.push('/legalforms')
  }

  render() {
    return (
      <div className={ `container wow fadeIn` }>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <NewDocument style={{ width: '302rem' }}/>

            <MyDocuments style={{ padding: '20rem 30rem' }}/>

          </div>
          <div className="col-xs-12">
            <SearchForms style={{ padding: '20rem 30rem' }}/>
          </div>

        </div>
      </div>
    )
  }
}

export default Documents
