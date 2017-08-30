import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';

// Import Style
import styles from './Program.css';

// Import Components
import SideBar from './components/SideBar/SideBar'
import InputBox from './components/InputBox'
import FinalForm from './components/FinalNode/Form/Form'
import FinalTopic from './components/FinalNode/Topic/Topic'
import FinalCalculateTax from './components/FinalNode/Topic/CalculateTax'
import ContactDialog from './components/ContactDialog'
import SaveStepDialog from './components/SaveStepDialog'

class Program extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showContact: false,
      showSaveStep: false
    }

    props.fetchProgram(props.params.name);
    props.setCurrentProgram(props.params.name);

    this.showContact = this.showContact.bind(this)
    this.closeContact = this.closeContact.bind(this)
    this.showSaveStep = this.showSaveStep.bind(this)
    this.closeSaveStep = this.closeSaveStep.bind(this)
    this.saveStep = this.saveStep.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.name !== nextProps.params.name) {
      this.props.fetchProgram(nextProps.params.name)
      this.props.setCurrentProgram(nextProps.params.name)
    }
  }

  componentDidMount() {
    // this.props.dispatch(resetProgram());
  }

  componentWillUnmount() {
    this.props.hideFinalNode()
  }

  showContact() {
    this.setState({ showContact: true });
  }

  closeContact() {
    this.setState({ showContact: false });
  };

  showSaveStep() {
    this.setState({ showSaveStep: true });
  }

  closeSaveStep() {
    this.setState({ showSaveStep: false });
  };

  saveStep(name) {
    alert('name')
  }

  toForm(to) {
    this.props.hideFinalNode()
    if (to === 'Corp') {
      browserHistory.push('/legalforms/ca_professional_corporation');
    } else if (to === 'S-Corp') {
      browserHistory.push('/legalforms/ca_s_corporation');
    }
  }

  render() {
    const { showSideBar, showFinalNode, finalKind, finalData, program, history, progress } = this.props;

    var paddingLeft = 12;
    var minWidth = 900;

    if (showSideBar) {
      paddingLeft += 325;
      minWidth += 325;
    }
    paddingLeft += 'rem';
    minWidth += 'rem';

    return (
      <div className={ `${styles.program} wow fadeIn` } style={{ minWidth: minWidth }}>
        <div className={styles['sidebar-container']}>
          <SideBar show={ showSideBar } toggle={ this.props.toggleSideBar } showContact={ this.showContact } />
        </div>
        <div className={`${styles['inputbox-container']}`} style={{ paddingLeft: paddingLeft }}>
          { <InputBox program={ program } history={ history } progress={ progress } showContact={ this.showContact } showStepSave={ this.showSaveStep } show={ showFinalNode } /> }

          { (showFinalNode && (finalKind === 'Topic')) &&
            <FinalTopic title={ finalData.title } message={ finalData.message } calcTaxInfo={ finalData.calcTaxInfo } to={ finalData.to } toForm={ this.toForm.bind(this) } showContact={ this.showContact } />
          }
          { (showFinalNode && (finalKind === 'CalculateTax')) &&
            <FinalCalculateTax calcTaxInfo={ finalData.calcTaxInfo } showContact={ this.showContact } />
          }
          { (showFinalNode && (finalKind === 'Form')) &&
            <FinalForm data={ finalData } />
          }
        </div>

        <ContactDialog show={ this.state.showContact } close={ this.closeContact } />
        <SaveStepDialog show={ this.state.showSaveStep } close={ this.closeSaveStep } save={ this.saveStep } />
      </div>
    );
  }
}

Program.propTypes = {
  resetPrograms: PropTypes.func.isRequired,
  fetchProgram: PropTypes.func.isRequired,
  setCurrentProgram: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool.isRequired
};

export default Program
