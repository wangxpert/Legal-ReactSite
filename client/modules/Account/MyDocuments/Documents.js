import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Style
import styles from './styles.css'

// Import Components
import { browserHistory } from 'react-router'
import VirtualizedSelect from 'react-virtualized-select'
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import SearchForms from './components/SearchForms'

import Item from './components/Item'
import InputDialog from '../../../components/InputDialog'

import { form_list as Programs } from '../../Program/model'

class Activity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedPrograms: [],
      showInputDialog: false,
      activity: null,
      sortBy: 'Date'
    }

    this.options = Programs.map((e, index) => (
      { label: e.description, value: e.name }
    ))

    if (this.props.selectedPrograms)
      this.state.selectedPrograms = this.props.selectedPrograms.slice()

    this.toggleInputDialog = this.toggleInputDialog.bind(this)
    this.renameActivity = this.renameActivity.bind(this)
    this.onSort = this.onSort.bind(this)
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

  onSort(by) {
    this.setState({ sortBy: by })
  }

  sort(a, b) {
    if (this.state.sortBy === 'Date') return a.updated >= b.updated
    else return (a.name.toLowerCase()) >= (b.name.toLowerCase())
  }

  render() {
    const items = this.props.activities.sort(this.sort.bind(this)).map((e, index) => {
        if (e.program.kind !== 'Form')
          return null
        if (!this.state.selectedPrograms.length || this.state.selectedPrograms.find(option => ( option.value === e.program.name ))) {
          return <Item key={ index } name={ e.name } program={ e.program.description } kind={ e.program.kind } date={ e.updated } status={ e.status }
            onContinue={ event => this.restoreActivity(e) } onDelete={ event => this.deleteActivity(e) } onRename={ event => this.toggleInputDialog(e) } />
        }
      })


    return (
      <div className={ `container wow fadeIn` }>
        <SearchForms />
        <div className={ `${styles.container} row` }>
          <div className={ `${styles['tab-bar']} col-xs-12` }>
            <div className={ `${ styles.tab } ${ styles.active }` }>
              <i className={ `fa fa-folder-o ${ styles['tab-icon'] }` } aria-hidden="true"> </i> &nbsp;All Documents
            </div>
            <div className={ styles.tab }>
              <i className={ `fa fa-print ${ styles['tab-icon'] }` } aria-hidden="true"> </i> &nbsp;Purchased
            </div>
          </div>
          <div className={ `${styles['search-container']} col-xs-12` }>
            <div className="row">
              <div className="col-xs-12 col-sm-10">
                <h5> Program:  </h5>
                <VirtualizedSelect
                  options={ this.options }
                  multi={ true }
                  onChange={(selectedPrograms) => this.setState({ selectedPrograms })}
                  value={ this.state.selectedPrograms  }
                />
              </div>
              <div className="col-xs-12 col-sm-2">
                <h5> Sort by:  </h5>
                <ButtonGroup vertical block>
                  <DropdownButton bsStyle="info" title={ this.state.sortBy } pullRight id="split-button-pull-right" block onSelect={ this.onSort }>
                    <MenuItem eventKey="Name" >Name</MenuItem>
                    <MenuItem eventKey="Date">Date</MenuItem>
                  </DropdownButton>
                </ButtonGroup>
              </div>
            </div>
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
