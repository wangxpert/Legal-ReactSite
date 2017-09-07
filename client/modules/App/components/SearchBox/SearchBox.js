import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import Autosuggest from 'react-autosuggest';

// Import Style
import styles from './SearchBox.css';
import programs from './SearchList';

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(escapedValue, 'i');

  return programs
    .map(section => {
      return {
        title: `${section.kind} : ${section.title}`,
        programs: section.programs.filter(program => regex.test(program.title))
      };
    })
    .filter(section => section.programs.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.title;
}

function renderSuggestion(suggestion) {
  return (
    <a href={suggestion.href}>{suggestion.title}</a>
  );
}

function renderSectionTitle(section) {
  return (
    <strong className={styles['sectionTitle']}>{section.title}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.programs;
}

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderInputComponent = inputProps => (
    <span className={styles.inputContainer}>
      <input {...inputProps} autoFocus/>
      <i className={`fa fa-search ${styles['icon']}`} aria-hidden="true"></i>
    </span>
  );

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Legal Maven',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        renderInputComponent={this.renderInputComponent}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
        theme={styles}
      />
    );
  }
}

export default SearchBox;
