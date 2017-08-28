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

class Program extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showContact: false
    }

    props.fetchProgram(props.params.name);
    props.setCurrentProgram(props.params.name);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.name !== nextProps.params.name) {
      this.props.fetchProgram(nextProps.params.name)
      this.props.setCurrentProgram(nextProps.params.name)
    }
  }

  showContact() {
    this.setState({ showContact: true });
  }

  closeContact() {
    this.setState({ showContact: false });
  };

  componentDidMount() {
    // this.props.dispatch(resetProgram());
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
          <SideBar show={ showSideBar } toggle={ this.props.toggleSideBar } showContact={ this.showContact.bind(this) } />
        </div>
        <div className={`${styles['inputbox-container']}`} style={{ paddingLeft: paddingLeft }}>
          { <InputBox program={ program } history={ history } progress={ progress } showContact={ this.showContact.bind(this) } show={ showFinalNode } /> }

          { (showFinalNode && (finalKind === 'Topic')) &&
            <FinalTopic title={ finalData.title } message={ finalData.message } calcTaxInfo={ finalData.calcTaxInfo } to={ finalData.to } toForm={ this.toForm.bind(this) } showContact={ this.showContact.bind(this) } />
          }
          { (showFinalNode && (finalKind === 'CalculateTax')) &&
            <FinalCalculateTax calcTaxInfo={ finalData.calcTaxInfo } showContact={ this.showContact.bind(this) } />
          }
          { (showFinalNode && (finalKind === 'Form')) &&
            <FinalForm data={ finalData } />
          }
        </div>

        <ContactDialog show={this.state.showContact} close={this.closeContact.bind(this)}/>
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
