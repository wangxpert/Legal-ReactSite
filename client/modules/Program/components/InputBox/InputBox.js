import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ReactHtmlParser from 'react-html-parser';
import CAFormArticlesOfIncorporation1 from './output/CAFormArticlesOfIncorporation1';
import CAFormArticlesOfIncorporation2 from './output/CAFormArticlesOfIncorporation2';
import NoteDialog from './NoteDialog';
import County from './datasource/county';
import City from './datasource/city';
import county_exemption from './datasource/county_exemption';
import city_exemption from './datasource/city_exemption';
// Import Actions
import { addProgram, setCurrentProgram, fetchProgram } from '../../ProgramActions';

// Import Selectors
import { getCurrentProgram } from '../../ProgramReducer';

// Import Style
import styles from './InputBox.css';

import check_img from './green_check.png';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 1,
      singleChoice: -1,
      multiChoice: [],
      showNote: false,
      noteTitle: '',
      noteContent: '',
      store: {}
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

  getNextId(node) {
    if (node.kind === 'Input' || node.kind === 'Multi') {
      return node.content.next;
    }

    if (node.kind === 'Single' || node.kind === 'YesNo') {
      var next = node.content.fields[this.state.singleChoice].next;
      if (!next) next = node.content.next;
      return next;
    }
  }

  doAction(program, node) {
    const store = this.state.store;
    if (node.content.kind === 'CHECK_COUNTY_EXEMPTION') {
      var i;
      for (i = 2; i < county_exemption.length; i++) {
        const county = county_exemption[i][0].split(';')[1];
        if (county === store['county']) {
          break;
        }
      }

      var next = 1;
      for (let j = 1; j < store['county_exemption'].length; j++ ) {
        if (store['county_exemption'][j]) {
          if (county_exemption[i][j]) {
            next = 0;
            break;
          }
        }
      }

      const nextIndex = this.getNodeIndex(program.node, node.content.next[next]);
      this.setCurrent(program.node, nextIndex);
    } else if (node.content.kind === 'CHECK_CITY_EXEMPTION') {
      var next = 1;
      if (store['city']) {
        var i;
        for (i = 2; i < city_exemption.length; i++) {
          const region = city_exemption[i][0].split(';');
          const county = region[1];
          const city = region[2];

          if (county === store['county'] && city === store['city']) {
            break;
          }
        }


        for (let j = 1; j < store['city_exemption'].length; j++ ) {
          if (store['city_exemption'][j]) {
            if (city_exemption[i][j]) {
              next = 0;
              break;
            }
          }
        }
      }

      const nextIndex = this.getNodeIndex(program.node, node.content.next[next]);
      this.setCurrent(program, nextIndex);
    }

    var next = '';
    switch (node.content.kind) {
      case 'SET_VALUE':
        store[node.content.store] = node.content.value;
        this.setState({store});
        next = node.content.next;
        break;
      case 'ADD_VALUE':
        store[node.content.store] += node.content.value;
        this.setState({store});
        next = node.content.next;
        break;
      case 'SWITCH_VALUE':
        let value = node.content.value;
        var i;
        for (i = 0; i < value.length; i++) {
          if (store[node.content.store] <= value[i]) break;
        }
        next = node.content.next[i];
        break;
    }

    if (next) {
      if (program) {
        var nextIndex = this.getNodeIndex(program.node, next);
        this.setCurrent(program, nextIndex);
      }
    }
  }

  setCurrent(program, curIndex) {
    const node = program.node[curIndex];
    const kind = node.kind.toLowerCase();

    if (kind === 'input' || kind === 'single' || kind === 'yesno' || kind === 'multi') {
      this.setState({ current: curIndex, singleChoice: -1, multiChoice: [], initialInput: '' });
      this.history.push({
        current: curIndex,
        singleChoice: this.state.singleChoice,
        multiChoice: this.state.multiChoice,
        store: {...this.state.store}
      });
      return;
    }

    if (kind === 'form') {
      this.setState({ current: curIndex, singleChoice: -1, multiChoice: [], initialInput: '' });
      this.history.push({
        index: this.state.index,
        current: curIndex,
        singleChoice: this.state.singleChoice,
        store: this.state.store
      });
      return;
    }

    if (kind === 'goto') {
      var path = '/';
      if (node.content.kind === 'form')
        path += 'legalforms/';

      path += node.content.id;
      browserHistory.push(path);
    }

    if (kind === 'action') {
      this.doAction(program, node);
    }

    if (kind === 'display' || kind === 'result') {
      alert(node.content.message);
    }
  }

  setInput(node) {
    if (node.kind === 'Single') {
      if (node.content.store) {
        const field = node.content.fields[this.state.singleChoice];
        if (field.kind === 'choice') {
          const store = this.state.store;
          store[node.content.store] = field.value;
          this.setState({store: store});
        }
      }
    } else if (node.kind === 'Multi') {
      if (node.content.store) {
        const store = this.state.store;
        store[node.content.store] = this.state.multiChoice;
        this.setState({store: store});
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
        this.setState({ current: state.current, singleChoice: state.singleChoice, multiChoice: state.multiChoice, store: state.store });
      }
    }
  }

  onSingleSelect(index) {
    this.setState({ singleChoice: index });
    this.history[this.history.length - 1].singleChoice = index;
  }

  onMultiSelect(index, node) {
    const multiChoice = this.state.multiChoice;
    multiChoice[index] = !multiChoice[index];
    this.setState({ multiChoice });
    this.history[this.history.length - 1].multiChoice[index] = multiChoice[index];
  }

  getDescription(kind) {
    switch (kind) {
      case 'Input':
        return '';

      case 'Single':
        return '';

      case 'YesNo':
        return '';

      case 'Multi':
        return 'Please check any that apply.';
    }
  }

  onInput(event, node, field) {
    var storeName = field.store;
    if (!storeName) storeName = node.content.store;
    if (storeName) {
      const store = this.state.store;
      store[storeName] = event.target.value;
      this.setState({store: store});
    }
  }

  onSelectChange(event, field) {
    const store = this.state.store;
    if (field.store === 'county') {
      store['city'] = undefined;
    }
    store[field.store] = event.target.value;
    this.setState({store});
  }


  buildField(node, field, index) {
    const kind = node.kind;
    const check_url = this.state.singleChoice === index ? `url(${check_img})` : '';

    if (kind === 'Single' || kind === 'YesNo' ) {
        if (field.kind === 'number') {
          if (this.state.store[node.content.store] === undefined) {
            this.state.store[node.content.store] = '';
          }
        }

        return (
          <div key={index} className={`${styles.answer} ${this.state.singleChoice === index ? styles.active : ''} `} onClick={() => this.onSingleSelect(index)} style={{ backgroundImage: check_url }}>
            { field.label }
            { field.kind === 'number' ? <input type='number' className={styles.input} value={this.state.store[node.content.store]} onChange={(event) => {this.onInput(event, node, field)}} /> : null  }
            { field.note && <i className="fa fa-info-circle" aria-hidden="true" onClick={()=>{alert('info')}}></i>}
          </div>
        );
    }

    if (kind === 'Input') {
      if (field.kind === 'select') {
        var datasource = null;
        const store = this.state.store;

        if (field.datasource === 'county') {
          if (!store['county']) store['county'] = County[0].name;
          datasource = County.map((elt, i) => {
            return (<option key={i} value={elt.name}>{elt.name}</option>)
          });
        } else if (field.datasource === 'city') {
          const city = City.filter(elt => (elt.county === store['county']));

          if (!store['city']) store['city'] = city.length ? city[0].city: '';
          datasource = city.map((elt, i) => {
            return (<option key={i} value={elt.city}>{elt.city}</option>)
          });
        }

        return (
          <select key={index} className={styles.input} value={store[field.store]} onChange={event => this.onSelectChange(event, field)}>
            { datasource }
          </select>
        );
      }
      else {
        if (this.state.store[field.store] === undefined) {
          this.state.store[field.store] = '';
        }
        return (
          <input type={field.kind} key={index} className={`${styles.input}`} value={this.state.store[field.store]} onChange={(event) => {this.onInput(event, node, field)}} placeholder={field.placeholder} />
        );
      }
    }

    if (kind === 'Multi') {
      if (field.datasource === 'county_exemption_list') {
        return county_exemption[0].map( (elt, i) => {
          if (i > 0)
          return (
            <div key={i} className={`${styles.answer} ${this.state.multiChoice[i] ? styles.active : ''}`} onClick={() => this.onMultiSelect(i)}>
              { elt }
              { <i className="fa fa-info-circle" aria-hidden="true" onClick={e => this.openNote(e, 'Note', county_exemption[1][i])} />}
            </div>
          );
        });
      } else if (field.datasource === 'city_exemption_list') {
        return city_exemption[0].map( (elt, i) => {
          if (i > 0)
          return (
            <div key={i} className={`${styles.answer} ${this.state.multiChoice[i] ? styles.active : ''}`} onClick={() => this.onMultiSelect(i)}>
              { elt }
              { <i className="fa fa-info-circle" aria-hidden="true"  onClick={e => this.openNote(e, 'Note', city_exemption[1][i])} />}
            </div>
          );
        });
      }
    }
  }

  closeNote() {
    this.setState({ showNote: false });
  };

  openNote(e, title, content) {
    e.stopPropagation();
    this.setState({ noteTitle: title, noteContent: content, showNote: true });
  };

  render() {
    var lstEle = null;
    var question = null;
    var title = null;
    var description = null;
    var node = null;
    var eleNote = null;
    var note = { title: '', content: '' };
    if (this.props.program) {

      node = this.props.program.node[this.state.current];

      if (node.kind !== 'Form') {

        title = this.props.program.description;

        var reg=/\${(.*)}/g;

        question = `${node.content.question}`;
        var vName = reg.exec(question);
        if (vName) {
          question = question.replace(reg, this.state.store[vName[1]]);
        }
        description = this.getDescription(node.kind);

        if (node.content.note) {
          eleNote = <i className="fa fa-info-circle pull-right" aria-hidden="true" onClick={(e) => this.openNote(e, node.content.note.title, node.content.note.content)}></i>;
        }

        lstEle = node.content.fields.map((elt, i) => {
          return this.buildField(node, elt, i);
        });
      }
    }

    if (node && node.kind === 'Form') {
      if (node.content.name === 'ca_form_articles_of_professional_incorporation_1')
        return (
          <div className={styles.inputbox}>
            <CAFormArticlesOfIncorporation1 input={this.state.store} />
          </div>
        )

      if (node.content.name === 'ca_form_articles_of_professional_incorporation_2')
        return (
          <div className={styles.inputbox}>
            <CAFormArticlesOfIncorporation2 input={this.state.store} />
          </div>
        )
    }
    else {
      return (
        <div className={`${styles.inputbox}`}>
          <div className={styles.title}>
            { title }
          </div>

          <div className={`${styles['main-container']}`}>
            <div className={styles['question']}>
              <span>{`${this.history.length}. `}</span>
              <span>{ ReactHtmlParser(question) }</span>
              { eleNote }
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

          <NoteDialog show={this.state.showNote} close={this.closeNote.bind(this)} title={this.state.noteTitle} content={this.state.noteContent} />
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
