import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalTopics.css';

// Import Components
import SearchBox from '../../components/SearchBox/SearchBox';

class LegalTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };

    this.category = [
      {
        title: 'Start-Ups',
        topics: [
          {
            title: 'Should I incorporate?',
            href: '/legaltopics/incorporate'
          },
          {
            title: 'Can I trademark?',
            href: '/legaltopics/trademark'
          },
          {
            title: 'Do I need to set up payroll?',
            href: '/legaltopics/payroll'
          },
          {
            title: "Do I need worker's compensation insurance?",
            href: ''
          }
        ]
      },
      {
        title: 'Real Estate',
        topics: [
          {
            title: 'Do I owe transfer tax? (CA only)',
            href: '/legaltopics/transfertax'
          },
          {
            title: 'Am I entitled to a refund of my security deposit?',
            href: '/'
          }
        ]
      }
    ];
  }

  onSearch(event) {
    this.setState({ keyword: event.target.value });
  }

  render() {
    const categories = this.category.map((category, index) => {
      const topics = category.topics
      .filter((topic) => {
        return topic.title.toLowerCase().includes(this.state.keyword.toLowerCase());
      })
      .map((topic, index) => {
        return (
          <a key={index} className={styles['item']} href={topic.href}>
            {topic.title}
          </a>
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
      <div className={`${styles.legaltopics} wow fadeIn`}>
        <div className={`${styles['search-box-container']}`}>
          <div className='container'>
            <SearchBox placeholder="Search Legal Topics" onChange={this.onSearch.bind(this)}/>
          </div>
        </div>
        <div className={styles['title-container']}>
          <div className={styles['main-title']}>
            Let&apos;s get started, please select a topic.
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

LegalTopics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LegalTopics);
