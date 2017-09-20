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
import GoActivityDialog from './components/GoActivityDialog'
import SaveStepDialog from '../../components/InputDialog'
import ModalDialog from '../../components/ModalDialog'
import AddCard from '../Account/Billing/components/AddCard'
import ConfirmCheckout from './components/ConfirmCheckout'
import OrderConfirmed from './components/OrderConfirmed'

class Program extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showContact: false,
      showSaveStep: false,
      showGoActivity: false,
      showCheckout: false,
      checkoutStage: 'Card'
    }

    props.fetchProgram(props.params.name);
    if (props.current !== props.params.name) {
      if (props.showFinalNode) {
        props.hideFinalNode()
      }
    }
    props.setCurrentProgram(props.params.name);

    this.showContact = this.showContact.bind(this)
    this.closeContact = this.closeContact.bind(this)
    this.showSaveStep = this.showSaveStep.bind(this)
    this.closeSaveStep = this.closeSaveStep.bind(this)
    this.showGoActivity = this.showGoActivity.bind(this)
    this.closeGoActivity = this.closeGoActivity.bind(this)
    this.saveStep = this.saveStep.bind(this)
    this.goActivity = this.goActivity.bind(this)
    this.saveDoc = this.saveDoc.bind(this)
    this.toggleCheckout = this.toggleCheckout.bind(this)
    this.onCard = this.onCard.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
    this.onConfirmed = this.onConfirmed.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.name !== nextProps.params.name) {
      this.props.fetchProgram(nextProps.params.name)
      this.props.setCurrentProgram(nextProps.params.name)
    }

    if (this.props.activities !== nextProps.activities && nextProps.activities && nextProps.history.length === 0) {
      if (nextProps.activities.find(e => (e.program.name === this.props.program.name))) {
        this.showGoActivity()
      }
    }

    if (nextProps.showFinalNode !== this.props.showFinalNode && nextProps.showFinalNode) {
      if (nextProps.program.kind === 'Topic') {
        if (this.props.currentActivity) this.props.updateActivity(this.props.currentActivity, { status: 'Complete' })
      }
    }

    if (nextProps.payState !== this.props.payState) {
      if (nextProps.payState === 'PAY_SUCCESS') {
        this.setState({ checkoutStage: 'Confirmed' })
        console.log('working')
      }
    }
  }

  componentWillMount() {
    this.props.fetchUserProfile()
  }

  componentDidMount() {
    // this.props.dispatch(resetProgram());
    this.props.fetchActivities()
  }

  componentWillUnmount() {
    // this.props.hideFinalNode()
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

  showGoActivity() {
    this.setState({ showGoActivity: true });
  }

  closeGoActivity() {
    this.setState({ showGoActivity: false });
  };

  goActivity() {
    this.props.setSelectedPrograms([{
      label: this.props.program.description,
      value: this.props.program.name
    }])
    browserHistory.push('/account/activity');
  }

  saveStep(name) {
    if (this.props.activities.find(e => e.name === name)) {
      this.props.errorMessage({
        // uid: 'once-please', // you can specify your own uid if required
        title: 'Error...',
        message: 'There is already activity with that name. Please enter a different name.',
        position: 'tr',
      })
    } else {
      this.props.savePlace({
        name: name,
        program: {
          name: this.props.current,
          description: this.props.program.description,
          kind: this.props.program.kind
        },
        history: this.props.history,
        progress: this.props.progress,
        status: this.props.showFinalNode ? 'Complete' : 'Incomplete'
      })

      this.closeSaveStep()
    }
  }

  toForm(to) {
    this.props.hideFinalNode()
    if (to === 'Corp') {
      browserHistory.push('/legalforms/ca_professional_corporation');
    } else if (to === 'S-Corp') {
      browserHistory.push('/legalforms/ca_s_corporation');
    }
  }

  saveDoc(e) {
    if (this.props.currentActivity) {
      this.props.updateActivity(this.props.currentActivity, { history: this.props.history, progress: this.props.progress, status: 'Complete' })
    } else {
      this.showSaveStep()
    }
  }

  toggleCheckout() {
    this.setState({ showCheckout: !this.state.showCheckout, checkoutStage: 'Card' })
  }

  onCard(nonce, data, remember) {
    this.props.setCard({nonce, data, remember})

    if (remember) {
      this.props.addCard(this.props.user.customerId, nonce, { postal_code: data.billing_postal_code, country: 'US' })
    }
    this.setState({ checkoutStage: 'Confirm' })
  }

  onConfirm() {
    this.props.pay(this.props.card.nonce, 50 * 100)
  }

  onConfirmed(rate) {
    console.log(rate)
    this.toggleCheckout()
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
            <FinalForm data={ finalData } save={ this.saveDoc } checkout={ this.toggleCheckout } />
          }
        </div>

        <ContactDialog show={ this.state.showContact } close={ this.closeContact } />
        <SaveStepDialog buttonTitle="Save" title="Save Place" description="Enter the name"
          show={ this.state.showSaveStep } close={ this.closeSaveStep } save={ this.saveStep } />

        <GoActivityDialog show={ this.state.showGoActivity } close={ this.closeGoActivity } go={ this.goActivity } />
        <ModalDialog show={ this.state.showCheckout } close={ this.toggleCheckout }>
          { this.state.checkoutStage === 'Card' && <AddCard buttonTitle="Continue to checkout" showRemember={ true } submit={ this.onCard }/>}
          { this.state.checkoutStage === 'Confirm' && <ConfirmCheckout checkout={ this.onConfirm } form={ program.description } order="12345678" date={ (new Date()).toString() } amount={ 20 }/> }
          { this.state.checkoutStage === 'Confirmed' && <OrderConfirmed noThanks={ this.toggleCheckout } comment={ this.onConfirmed } /> }
        </ModalDialog>
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
