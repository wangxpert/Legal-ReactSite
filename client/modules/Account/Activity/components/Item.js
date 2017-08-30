import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Styles
import styles from '../styles.css'

class Item extends Component {

  render() {
    return (
      <div className={`${styles['activity']} col-xs-12`} onClick={ this.props.onClick }>
        <div className={`${styles['icon']} col-xs-1`}>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
        </div>

        <div className={`${styles['title']} col-md-3 col-xs-10`}>
          { this.props.name }
        </div>

        <div className={`${styles['text']} col-xs-push-1 col-xs-12 col-sm-push-0 col-sm-8 col-md-push-0 col-md-5 `}>
          { this.props.program }
        </div>

        <div className={`${styles['text']} col-xs-push-1 col-xs-11 col-sm-push-0 col-sm-3 col-md-push-0 col-md-3`}>
          { new Date(this.props.date).toDateString() }
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Item
