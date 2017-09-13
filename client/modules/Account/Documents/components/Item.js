import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import Styles
import styles from '../styles.css'

class Item extends Component {

  render() {
    const iconColor = this.props.kind === 'Topic' ? '#fe4f0a' : '#02b2fb'

    return (
      <div className={`${styles['activity']} col-xs-12`}>
        <div className={ styles.body }>
          <div className={ styles.icon } style={{ background: iconColor }}>
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
          </div>
          <div className={ styles.info }>
            <div className={ styles.name } onClick={ this.props.onRename }>
              { this.props.name }
            </div>
            <div className={ styles.date }>
              Created: { new Date(this.props.date).toDateString() }
            </div>
          </div>
          <div className={ styles.action }>
            <i className="fa fa-trash-o" aria-hidden="true" onClick={ this.props.onDelete }></i>
          </div>
        </div>
        <div className={ styles.footer}>
          <div className={ styles.program }>
            { this.props.program }
          </div>
          <div className={ styles.status }>
            Status: <span style={{ fontWeight: '300' }}>{ this.props.status }</span>
          </div>

          {
            <div className={ styles.continue } onClick={ this.props.onContinue } style={{ visibility: this.props.status === 'Incomplete' ? 'visible' : 'hidden' }}>
              Continue &nbsp; &gt;
            </div>
          }
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onContinue: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired
}

export default Item
