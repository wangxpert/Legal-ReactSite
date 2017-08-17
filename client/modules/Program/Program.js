import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Program.css';

// Import Components
import SideBar from './components/SideBar/SideBar';
import InputBox from './components/InputBox/InputBox';
import FinalForm from './components/FinalNode/Form/Form';
import FinalTopic1 from './components/FinalNode/Topic/Normal';
import FinalTopic2 from './components/FinalNode/Topic/ToForm';
import FinalCalculateTax from './components/FinalNode/Topic/CalculateTax';
import ContactDialog from './components/ContactDialog';
import CAFormProfessionalIncorporate2 from './components/FinalNode/Document/CAFormProfessionalIncorporate2';
import CAFormProfessionalIncorporate1 from './components/FinalNode/Document/CAFormProfessionalIncorporate1';
import CAFormIncorporate2 from './components/FinalNode/Document/CAFormIncorporate2';
import CAFormIncorporate1 from './components/FinalNode/Document/CAFormIncorporate1';

// Import Actions
import { toggleSideBar, resetProgram } from './ProgramActions';

class Program extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showContact: false
    }
  }

  showContact() {
    this.setState({ showContact: true });
  }

  closeContact() {
    this.setState({ showContact: false });
  };

  componentDidMount() {
    this.props.dispatch(resetProgram());
  }

  toggleSide() {
    this.props.dispatch(toggleSideBar());
  }

  toForm(to) {
    this.props.dispatch(resetProgram());
    if (to === 'Corp') {
      browserHistory.push('/legalforms/ca_professional_corporation');
    } else if (to === 'S-Corp') {
      browserHistory.push('/legalforms/ca_s_corporation');
    }
  }

  render() {
    var paddingLeft = 12;
    var minWidth = 900;
    if ( this.props.state.showSideBar ) {
      paddingLeft += 325;
      minWidth += 325;
    }
    paddingLeft += 'rem';
    minWidth += 'rem';

    const { state } = this.props;

    return (
      <div className={`${styles.program} wow fadeIn`} style={{ minWidth: minWidth }}>
        <div className={styles['sidebar-container']}>
          <SideBar show={ this.props.state.showSideBar } toggle={ this.toggleSide.bind(this) } showContact={ this.showContact.bind(this) } />
        </div>
        <div className={`${styles['inputbox-container']}`} style={{ paddingLeft: paddingLeft }}>
          { !state.showFinalNode && <InputBox name={ this.props.params.name } showContact={ this.showContact.bind(this) } />}

          { (state.showFinalNode && (state.finalKind === 'Topic1')) &&
            <FinalTopic1 title={state.finalData.title} message={state.finalData.message} />
          }
          { (state.showFinalNode && (state.finalKind === 'Topic2')) &&
            <FinalTopic2 title={state.finalData.title} message={state.finalData.message} to={state.finalData.to} onClick={this.toForm.bind(this)} />
          }
          { (state.showFinalNode && (state.finalKind === 'CalculateTax')) &&
            <FinalCalculateTax county={state.finalData.county} taxRate={state.finalData.taxRate} />
          }
          { (state.showFinalNode && (state.finalKind === 'Form')) &&
            <FinalForm data={state.finalData} />
          }

          { (state.showFinalNode && (state.finalKind === 'ca_form_articles_of_professional_incorporation_1')) &&
            <CAFormProfessionalIncorporate1 data={state.finalData} />
          }
          { (state.showFinalNode && (state.finalKind === 'ca_form_articles_of_professional_incorporation_2')) &&
            <CAFormProfessionalIncorporate2 data={state.finalData} />
          }
          { (state.showFinalNode && (state.finalKind === 'ca_form_articles_of_incorporation_1')) &&
            <CAFormIncorporate1 data={state.finalData} />
          }
          { (state.showFinalNode && (state.finalKind === 'ca_form_articles_of_incorporation_2')) &&
            <CAFormIncorporate2 data={state.finalData} />
          }

        </div>

        <ContactDialog show={this.state.showContact} close={this.closeContact.bind(this)}/>
      </div>
    );
  }
}


// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    state: state.programs
  };
}

Program.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


Program.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(Program);
