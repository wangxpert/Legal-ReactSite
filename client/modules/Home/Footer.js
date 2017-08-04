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
          <div className="col-sm-4 col-xs-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Legal Mavens
              </div>
              <div className={styles['service-text']}>
                Our Mavens are specialized attorneys who can answer your specific legal questions and concerns.
                <br /> Have a question? &nbsp;<a>Consult an expert now</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xs-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Transfer Tax Made Easy
              </div>
              <div className={styles['service-text']}>
              Conducting a deed or entity transfer? Figure out whether your transaction qualifies for an exemption, or how much tax you may owe.
              &nbsp;<a>Calculate now</a>.
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xs-12">
            <div className={styles['service-box']}>
              <div className={styles['service-icon']}>
                <i className="fa fa-building-o" aria-hidden="true"></i>
              </div>
              <div className={styles['service-title']}>
                Start-Ups
              </div>
              <div className={styles['service-text']}>
              Decide what type of entity is right for your business, obtain formation paperwork, and get answers to important legal questions relating to your business. &nbsp;<a>Get started now</a>.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
