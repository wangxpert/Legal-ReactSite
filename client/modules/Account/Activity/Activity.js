import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'

import Button from '../../../components/Button/Button'


import Item from './components/Item'

class Activity extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchActivities()
  }

  restoreActivity(activity) {
    this.props.restoreStep({
      name: activity.name,
      history: activity.history,
      progress: activity.progress
    })

    browserHistory.push(`/legal${activity.program.kind}s/${activity.program.name}`)
  }

  render() {
    var items;
    if (this.props.activities) {
      items = this.props.activities.map((e, index) => (
        <Item key={ index } name={ e.program.name } program={ e.program.description } date={ e.updated } onClick={ event => this.restoreActivity(e) } />
      ))
    }

    return (
      <div className={ `container wow fadeIn` }>
        <div className={ `${styles.container} row` }>
          <div className={ `${styles['container-title']} col-xs-12` }>
            My Activity
          </div>

          <div className={ `${styles['search-container']} col-xs-12` }>
            <div className={ styles.text }> Search Container. Will Put Search Element </div>
            <hr />
          </div>


          <div className={ `${styles['activity-container']} col-xs-12` }>
            { items }
          </div>

          {/* <div className={`${styles['activity-seemore']} col-xs-12`}>
            <div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
          </div> */}

        </div>
      </div>
    )
  }
}

export default Activity
