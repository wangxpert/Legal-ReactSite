import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './styles.css';

// Import Components
import Button from '../../../../components/Button/Button';

class ContinueDocument extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${styles.container} row`}>
        <div className={`${styles['container-title']} col-xs-12`}>
          Continue Document
        </div>

        <div className={`${styles['activity-container']} col-xs-12`}>
          <div className={`${styles['icon']} col-xs-1`}>
            <i className="fa fa-briefcase" aria-hidden="true"></i>
          </div>

          <div className={`${styles['title']} col-sm-4 col-xs-10`}>
            Business Corporation
          </div>

          <div className={`${styles['text']} col-sm-3 col-xs-4`}>
            2017/5/5
          </div>

          <div className={`${styles['text']} pull-right`}>
            <a className={styles.link}>{"Let's continue >"}</a>
          </div>
        </div>

        <div className={`${styles['activity-container']} col-xs-12`}>
          <div className={`${styles['icon']} col-xs-1`}>
            <i className="fa fa-file" aria-hidden="true"></i>
          </div>

          <div className={`${styles['title']} col-sm-4 col-xs-10`}>
            Articles of Incorporation
          </div>

          <div className={`${styles['text']} col-sm-3 col-xs-4`}>
            2017/6/3
          </div>

          <div className={`${styles['text']} pull-right`}>
            <a className={styles.link}>{"Let's continue >"}</a>
          </div>
        </div>

          <div className={`${styles['activity-seemore']} col-xs-12`}>
            <div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
          </div>

      </div>
    );
  }
}

export default ContinueDocument;
