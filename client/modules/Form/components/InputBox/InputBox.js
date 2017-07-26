import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ReactHtmlParser from 'react-html-parser';
import CAFormArticlesOfIncorporation1 from './output/CAFormArticlesOfIncorporation1';

// Import Actions
import { addProgram, setCurrentProgram, fetchProgram } from '../../ProgramActions';

// Import Selectors
import { getCurrentProgram } from '../../ProgramReducer';

// Import Style
import styles from './InputBox.css';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirst: true,
      current: 1,
      index: 1,
      selectedAnswer: 0,
      initialInput: ''
    };

    this.store = {

    };

    this.history = [];

  }

  componentWillMount() {
    if (this.props.name) {
      this.props.dispatch(fetchProgram(this.props.name));
      this.props.dispatch(setCurrentProgram(this.props.name));
    }
  }

  componentWillUnmount() {
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name ) {
      this.props.dispatch(fetchProgram(nextProps.name));
      this.props.dispatch(setCurrentProgram(nextProps.name));
    }

    if (this.props.program !== nextProps.program) {
      if (nextProps.program) {
        this.history = [];
        var initIndex = this.getNodeIndex(nextProps.program.node, nextProps.program.start);
        this.setCurrent(nextProps.program, initIndex);
      }
    }
  }

  getNodeIndex(node, id) {
    for (let i = 0; i < node.length; i++) {
      if (node[i].id === id) {
        return i;
      }
    }
  }

  setCurrent(program, curIndex) {
    const node = program.node[curIndex];
    const kind = node.kind.toLowerCase();

    if (kind === 'input' || kind === 'single' || kind === 'yesno') {
      this.setState({ current: curIndex, selectedAnswer: 0, initialInput: '' });
      this.history.push({
        index: this.state.index,
        current: curIndex,
        selectedAnswer: this.state.selectedAnswer
      });
      return;
    }

    if (kind === 'form') {
      this.setState({ current: curIndex, selectedAnswer: 0, initialInput: '' });
      this.history.push({
        index: this.state.index,
        current: curIndex,
        selectedAnswer: this.state.selectedAnswer
      });
      return;
    }

    if (kind === 'goto') {
      var path = '/';
      if (node.content.kind === 'form')
        path += 'forms/';

      path += node.content.id;
      browserHistory.push(path);
    }
  }

  getNextId(node) {
    if (node.kind === 'Input') {
      return node.content.next;
    }

    if (node.kind === 'Single' || node.kind === 'YesNo') {
      var next = node.content.fields[this.state.selectedAnswer].next;
      if (!next) next = node.content.next;
      return next;
    }
  }

  setInput(node) {
    if (node.kind === 'Single') {
      if (node.content.store) {
        const field = node.content.fields[this.state.selectedAnswer];
        if (field.kind === 'select') {
          this.store[node.content.store] = field.value;
        }
      }
    }
  }

  onNext() {
    if (!this.props.program)
      return;

    const node = this.props.program.node[this.state.current];

    this.setInput(node);

    const next = this.getNextId(node);

    const nextIndex = this.getNodeIndex(this.props.program.node, next);
    this.setCurrent(this.props.program, nextIndex);
  }

  onBack() {
    if (this.props.program) {
      if (this.history.length === 1) return;
      this.history.pop();
      const state = this.history[this.history.length - 1];
      if (state) {
        this.setState({ current: state.current, selectedAnswer: state.selectedAnswer, index: state.index });
      }
    }
  }

  onSelect(index) {
    this.setState({ selectedAnswer: index });
    this.history[this.history.length - 1].selectedAnswer = index;
  }

  getDescription(kind) {
    switch (kind) {
      case 'Input':
        return 'Fill in the blank';

      case 'Single':
        return 'Please select one of the following choices.';

      case 'YesNo':
        return '';
        break;
    }
  }

  onInput(event, node) {
    this.setState({initialInput: event.target.value});
    if (node.content.store) {
      this.store[node.content.store] = event.target.value;
    }
  }

  createElement(node, field, index) {
    const kind = node.kind;
    if (kind === 'Single' || kind === 'YesNo' ) {
        return (
          <div key={index} className={`${styles.answer} ${this.state.selectedAnswer === index ? styles.active : ''} `} value={this.state.initialInput} onClick={() => this.onSelect(index)}>
            { field.label }
            { field.kind === 'number' ? <input type='number' className={styles.input} onChange={(event) => {this.onInput(event, node)}} /> : null  }
            <i className="fa fa-info-circle pull-right" aria-hidden="true" onClick={()=>{alert('info')}}></i>
          </div>
        );
    }

    if (kind === 'Input') {
      return (
        <input type={field.kind} key={index} className={`${styles.input}`} value={this.state.initialInput} onChange={(event) => {this.onInput(event, node)}} />
      );
    }
  }

  render() {
    var lstEle = null;
    var question = null;
    var title = null;
    var description = null;
    var node = null;
    if (this.props.program) {

      node = this.props.program.node[this.state.current];

      if (node.kind !== 'Form') {

        title = this.props.program.description;

        var reg=/\${(.*)}/g;

        question = `${node.content.question}`;
        var vName = reg.exec(question);
        if (vName) {
          question = question.replace(reg, this.store[vName[1]]);
        }
        description = this.getDescription(node.kind);

        lstEle = node.content.fields.map((elt, i) => {
          return this.createElement(node, elt, i);
        });
      }
    }

    if (node && node.kind === 'Form') {
      if (node.content.name === 'ca_form_articles_of_professional_incorporation_1')
      return (
        <div className={styles.inputbox}>
          <CAFormArticlesOfIncorporation1 input={this.store} />
        </div>
      )
    }
    else {
      return (
        <div className={styles.inputbox}>
          <div className={styles.title}>
            { title }
          </div>

          <div className={styles['main-container']}>
            <div className={styles['question']}>
              <span>{`${this.history.length}. `}</span>
              <span>{ ReactHtmlParser(question) }</span>
            </div>
            <div className={styles['description']}>
              { description }
            </div>

            <div className={styles['answer-container']}>
              { lstEle }
            </div>

            <div className={styles['button-group']}>

              <div className={`${styles.button}`} style={{ float: 'left' }} onClick={ this.onBack.bind(this) }>
                Step Back
              </div>

              <div className={`${styles.button} ${styles.big}`} onClick={ this.onNext.bind(this) }>
                Continue
              </div>

              <div className={`${styles.button}`} style={{float: 'right'}}>
                Save Place
              </div>

            </div>
            <div className={styles['help-container']}>
              <span className={styles['help_text']}>Hi there! Need some help answering a question or want to save and finish later?</span>

              <div className={`${styles.button} ${styles.help}`} style={{float: 'right'}}>
                Need Help
              </div>

            </div>
          </div>
        </div>
      );
    }
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    program: getCurrentProgram(state)
  };
}

InputBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(InputBox);
