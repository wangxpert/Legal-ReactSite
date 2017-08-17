import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalForms.css';

// Import Components
import PageHeader from './components/PageHeader';

class LegalForms extends Component {
  constructor(props) {
    super(props);

    this.category = [
      {
        title: 'Business Corporation',
        topics: [
          {
            title: 'CA - Professional Corporation',
            href: '/legalforms/ca_professional_corporation'
          },
          {
            title: 'CA - S-Corporation',
            href: '/legalforms/ca_s_corporation'
          }
        ]
      }
    ];
  }

  render() {
    const categories = this.category.map((category, index) => {
      const topics = category.topics
      .map((topic, index) => {
        return (
          <Link key={index} className={styles['item']} to={topic.href}>
            {topic.title}
          </Link>
        );
      });

      if (topics.length)
        return (
          <div key={index} className={styles['category']}>
            <div className={styles['category-title']}>
                { category.title }
            </div>
            { topics }
          </div>
        )
      else
        return null;
    });

    return (
      <div className={`${styles.legalforms} wow fadeIn`}>
        <div className={ styles.background } />
        <PageHeader />
        <div className={`${styles['title-container']}`}>
          <div className={styles['main-title']}>
            Let&apos;s get started, please select a form.
          </div>
        </div>
        <div className={`${styles['main-container']} container`}>
          { categories }
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

LegalForms.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LegalForms);
