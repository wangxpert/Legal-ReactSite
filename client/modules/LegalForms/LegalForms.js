import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalForms.css';

// Import Components
import SearchBox from '../../components/SearchBox/SearchBox';

class LegalForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };

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
          <Link key={index} className={`${styles['item']} col-xs-12`} to={topic.href}>
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
        <div className={`${styles['search-box-container']}`}>
          <div className='container'>
            <SearchBox placeholder="Search Legal Forms" onChange={this.onSearch.bind(this)}/>
          </div>
        </div>
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
