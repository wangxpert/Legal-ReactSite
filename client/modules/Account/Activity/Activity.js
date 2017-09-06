import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'
import VirtualizedSelect from 'react-virtualized-select'

import Item from './components/Item'
import InputDialog from '../../../components/InputDialog'

import { program_list as Programs } from '../../Program/model'

class Activity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPrograms: [],
      showInputDialog: false,
      activity: null
    }

    this.options = Programs.map((e, index) => (
      { label: e.description, value: e.name }
    ))

    if (this.props.selectedPrograms)
      this.state.selectedPrograms = this.props.selectedPrograms.slice()

    this.toggleInputDialog = this.toggleInputDialog.bind(this)
    this.renameActivity = this.renameActivity.bind(this)
  }

  componentDidMount() {
    this.props.fetchActivities()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedPrograms != nextProps.selectedPrograms) {
      this.setState({ selectedPrograms: nextProps.selectedPrograms.slice() })
    }
  }

  toggleInputDialog(activity) {
    if (activity) {
      this.setState({ activity: activity })
    }
    this.setState({ showInputDialog: !this.state.showInputDialog })
  }

  renameActivity(name) {
    if (this.props.activities.find(e => e.name === name)) {
      this.props.errorMessage({
        // uid: 'once-please', // you can specify your own uid if required
        title: 'Error...',
        message: 'There is already activity with that name. Please enter a different name.',
        position: 'tr',
      })
    } else {
      this.props.updateActivity(this.state.activity._id, { name: name })
      this.toggleInputDialog()
    }
  }

  restoreActivity(activity) {
    this.props.restoreStep({
      name: activity.program.name,
      history: activity.history,
      progress: activity.progress,
      id: activity._id
    })

    browserHistory.push(`/legal${activity.program.kind}s/${activity.program.name}`)
  }

  deleteActivity(activity) {
    this.props.deleteActivity(activity._id)
  }

  render() {
    const items = this.props.activities.map((e, index) => {
        if (!this.state.selectedPrograms.length || this.state.selectedPrograms.find(option => ( option.value === e.program.name ))) {
          return <Item key={ index } name={ e.name } program={ e.program.description } kind={ e.program.kind } date={ e.updated } status={ e.status }
            onContinue={ event => this.restoreActivity(e) } onDelete={ event => this.deleteActivity(e) } onRename={ event => this.toggleInputDialog(e) } />
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

          <InputDialog buttonTitle='Rename' title='Rename Acitivity' description='Please enter new name :' close={ this.toggleInputDialog } show={ this.state.showInputDialog } save={ this.renameActivity } />


        </div>
      </div>
    )
  }
}

export default Activity
