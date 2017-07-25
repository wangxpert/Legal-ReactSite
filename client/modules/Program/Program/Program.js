import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row, ProgressBar } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

// Import Components

// Import Actions
import { addProgram, setCurrentProgram, fetchProgram } from './ProgramActions';

// Import Selectors
import { getCurrentProgram } from './ProgramReducer';

// Import Style
import styles from './Program.css';

class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirst: true,
      current: 1,
      index: 1,
      selectedAnswer: 0
    };

    this.history = [];

  }

  componentWillMount() {
    this.props.dispatch(fetchProgram(this.props.params.name));
    this.props.dispatch(setCurrentProgram(this.props.params.name));
  }

  componentWillUnmount() {
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.params !== nextProps.params) {
      this.props.dispatch(fetchProgram(nextProps.params.name));
      this.props.dispatch(setCurrentProgram(nextProps.params.name));
    }
    if (this.props.params !== nextProps.program) {
      this.history = [];
      var initIndex = this.getNodeIndex(nextProps.program.node, nextProps.program.start);
      this.setCurrent(nextProps.program, initIndex);
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
    var node = program.node[curIndex];

    if (node.type.toLowerCase() === 'action') {
      this.doAction(program, node);
      return;
    }

    if (node.type.toLowerCase() === 'question') {
      this.setState({ current: curIndex, selectedAnswer: 0 });
      this.history.push({
        index: this.state.index,
        current: curIndex,
        selectedAnswer: this.state.selectedAnswer
      });
      return;
    }

    if (node.type.toLowerCase() === 'result') {
      alert(node.result.description);
    }
  }

  doAction(program, action) {
    var next = '';
    switch (action.action.type) {
      case 'SET_INDEX':
        this.setState({index: action.action.value});
        next = action.action.next;
        break;
      case 'ADD_INDEX':
        this.setState({index: this.state.index + action.action.value});
        next = action.action.next;
        break;
      case 'GREATER_INDEX':
        if (this.state.index > action.action.value) {
          next = action.action.result[0];
        }
        else {
          next = action.action.result[1];
        }
        break;
      case 'SWITCH_INDEX':
        console.log('SWITCH_INDEX');
        console.log(this.state.index);

        let value = action.action.value;
        var i;
        for (i = 0; i < value.length; i++) {
          if (this.state.index <= value[i]) break;
        }
        next = action.action.result[i];
        break;
    }

    var curIndex = this.getNodeIndex(program.node, next);
    this.setCurrent(program, curIndex);
  }

  onNext() {
    if (!this.props.program)
      return;

    const question = this.props.program.node[this.state.current];
    const next = question.content.decision[this.state.selectedAnswer].next;
    console.log(next);
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
    this.setState({selectedAnswer: index});
    this.history[this.history.length - 1].selectedAnswer = index;
  }

  render() {
    var answerList = undefined;
    var question = undefined;
    if (this.props.program) {
      if (this.props.program.node[this.state.current].type === 'Question') {

        const content = this.props.program.node[this.state.current].content;

        question = content.question;
        answerList = content.decision.map((elt, i) => {
          return (
            <div key={i} className={`${styles.answer} ${this.state.selectedAnswer === i ? styles.active : ''} `} onClick={() => this.onSelect(i)}>
              { elt.answer }
            </div>
          );
        });
      }
    }

    return (
      <div>
        <div className={styles['page-title-container']}>
          <div className={styles.title}>
            Articles of Incorporation
          </div>
          <div className={styles.category}>
           Legal Topics &gt; Business
          </div>
        </div>
        <div className={styles.program}>
          <div className={styles.container}>
            <div className={styles['title-container']}>
              <div className={styles.title}>Program Name</div>
              <div className={styles.description}>State of California</div>
            </div>


            <div className={styles['main-container']}>
              <div className={styles.question}>
                <span>{`${this.history.length}. `}</span>
                <span>{ ReactHtmlParser(question) }</span>
              </div>
              <div className={styles.description}>
                Select all that apply
              </div>

              <div className={styles['answer-container']}>
                { answerList }
              </div>

              <div className={styles['button-group']}>

                <div className={`${styles.button}`} style={{float: 'left'}} onClick={this.onBack.bind(this)}>
                  Step Back
                </div>

                <div className={`${styles.button} ${styles.big}`} onClick={this.onNext.bind(this)}>
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
        </div>
      </div>
    );
  }
}


// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    program: getCurrentProgram(state)
  };
}

Program.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Program.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Program);
