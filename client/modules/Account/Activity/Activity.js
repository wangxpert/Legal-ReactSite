import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'

import Button from '../../../components/Button/Button'
import VirtualizedSelect from 'react-virtualized-select'

import Item from './components/Item'
import { program_list as Programs } from '../../Program/model'

class Activity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPrograms: []
    }

    this.options = Programs.map((e, index) => (
      { label: e.description, value: e.name }
    ))

    if (this.props.selectedPrograms)
      this.state.selectedPrograms = this.props.selectedPrograms.slice()
  }

  componentDidMount() {
    this.props.fetchActivities()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedPrograms != nextProps.selectedPrograms) {
      this.setState({ selectedPrograms: nextProps.selectedPrograms.slice() })
    }
  }

  restoreActivity(activity) {
    this.props.restoreStep({
      name: activity.program.name,
      history: activity.history,
      progress: activity.progress
    })

    browserHistory.push(`/legal${activity.program.kind}s/${activity.program.name}`)
  }

  render() {
    const items = this.props.activities.map((e, index) => {

        if (!this.state.selectedPrograms.length || this.state.selectedPrograms.find(option => ( option.value === e.program.name ))) {
          return <Item key={ index } name={ e.name } program={ e.program.description } date={ e.updated } onClick={ event => this.restoreActivity(e) } />
        }
      })


    return (
      <div className={ `container wow fadeIn` }>
        <div className={ `${styles.container} row` }>
          <div className={ `${styles['container-title']} col-xs-12` }>
            My Activity
          </div>

          <div className={ `${styles['search-container']} col-xs-12` }>
            <div className={ styles.text }> Program:  </div>
            <VirtualizedSelect
              options={ this.options }
              multi={ true }
              onChange={(selectedPrograms) => this.setState({ selectedPrograms })}
              value={ this.state.selectedPrograms  }
            />
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
