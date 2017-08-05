import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Program.css';

// Import Components
import SideBar from './components/SideBar/SideBar';
import InputBox from './components/InputBox/InputBox';

// Import Actions
import { toggleSideBar } from './ProgramActions';

class Program extends Component {

  constructor(props) {
    super(props);
  }

  toggleSide() {
    this.props.dispatch(toggleSideBar());
  }

  render() {
    var inputBox = null;
    if (!this.context.router.isActive('/', true)) {
      inputBox = (
        <InputBox name={ this.props.params.name }/>
      );
    }

    return (
      <div className={`${styles.program} wow fadeIn`}>
        <div className={styles['sidebar-container']}>
          <SideBar show={ this.props.state.showSideBar } toggle={ this.toggleSide.bind(this) } />
        </div>
        <div className={`${styles['inputbox-container']}`}>
          { inputBox }
        </div>
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
