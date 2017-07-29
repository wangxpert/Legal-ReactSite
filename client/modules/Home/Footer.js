import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Home.css';

// Import Components

export default function(props) {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Legal Mavens
              </div>
              <div className={styles['service-text']}>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Transfer Tax Made Easy
              </div>
              <div className={styles['service-text']}>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-building-o" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Start-Ups
              </div>
              <div className={styles['service-text']}>
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
