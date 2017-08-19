/*import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/Button/Button';

// Import styles
import styles from './styles.css';

const btnStyle = {
  backgroundColor: 'white',
  color: '#02b2fb',
  fontSize: '17rem',
  fontWeight: 400,
  margin: '0rem 10rem',
  padding: '7rem 18rem'
}

class CalculateTax extends Component {

  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      tax: 0
    }
  }

  onPrice(e) {
    const price = e.target.value;
    var tax = price;
    var taxRate = 0.0;

    if (this.props.county === 'San Francisco') {
      if (price > 100 && price <= 250000) {
        taxRate = 2.50;
      } else if (price > 250000 && price <= 1000000) {
        taxRate = 3.40;
      } else if (price > 1000000 && price <= 5000000) {
        taxRate = 3.75;
      } else if (price > 5000000 && price <= 10000000) {
        taxRate = 11.25;
      } else if (price > 10000000 && price <= 25000000) {
        taxRate = 13.75;
      } else if (price > 25000000) {
        taxRate = 15.00;
      }
    } else {
      taxRate = this.props.taxRate ? this.props.taxRate : 0;
    }
    tax = Math.ceil(tax / 500) * taxRate;
    this.setState({ price, tax });
  }

  render() {
    return (
      <div className={ `${styles.container} wow fadeIn`}>
        <h1 className={ styles.title }>
          Calculation
        </h1>

        <div className={ styles['input-container'] }>
          Purchase Price :
          <input type="number" className={`${styles.input}`} name="price" min="0.00" value={ this.state.price } placeholder="Enter Purchase Price" onChange={this.onPrice.bind(this)} />
          <br />
          Calcuated Tax:
          <input type="text" className={`${styles.input}`} placeholder="" value={ this.state.tax } readOnly/>
        </div>


        <div className={ styles.footer }>
          <span className={ styles['text'] }>Was this helpful?</span>

          <div className={ styles['btn-container'] }>
            <Button title="Yes" style={ btnStyle } />
            <Button title="Need Help" style={ btnStyle } />
          </div>
        </div>
      </div>
    );
  }
}

CalculateTax.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default CalculateTax;*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import reactHtmlParser from 'react-html-parser';

import Button from '../../../../../components/Button/Button';
import Document from '../../../../../components/Document';
import TopicDialog from './Dialog';

// Import Actions
import { hideFinalNode, setFinalNode } from '../../../ProgramActions';

// Import styles
import styles from './styles.css';

const btnStyle = {
  backgroundColor: 'white',
  color: '#02b2fb',
  fontSize: '17rem',
  fontWeight: 400,
  margin: '0rem 10rem',
  padding: '7rem 18rem'
}

class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      price: 0,
      countyTax: 0,
      cityTax: 0,
    }
  }

  onCloseDialog() {
    this.setState({ showDialog: false });
  }

  onShowDialog() {
    this.setState({ showDialog: true });
  }

  onBack() {
    this.props.back();
  }

  calcCountyTax(price) {
    var taxRate = 0.0;
    const {county, city, countyTaxRate} = this.props.calcTaxInfo;

    if (county === 'San Francisco') {
      if (price > 100 && price <= 250000) {
        taxRate = 2.50;
      } else if (price > 250000 && price <= 1000000) {
        taxRate = 3.40;
      } else if (price > 1000000 && price <= 5000000) {
        taxRate = 3.75;
      } else if (price > 5000000 && price <= 10000000) {
        taxRate = 11.25;
      } else if (price > 10000000 && price <= 25000000) {
        taxRate = 13.75;
      } else if (price > 25000000) {
        taxRate = 15.00;
      }
    } else {
      taxRate = countyTaxRate ? countyTaxRate : 0;
    }
    return Math.ceil(price / 500) * taxRate;
  }

  calcCityTax(price) {
    var taxRate = this.props.calcTaxInfo.cityTaxRate ? this.props.calcTaxInfo.cityTaxRate : 0;
    return Math.ceil(price / 500) * taxRate;
  }

  onPrice(e) {
    const price = e.target.value;

    this.setState({
      price,
      countyTax: this.calcCountyTax(price),
      cityTax: this.calcCityTax(price)
    });
  }

  render() {
    const { title, message, to, toForm } = this.props;
    var toTitle = '';
    var toDescription = '';

    if (to === 'Corp') {
      toTitle = 'Articles of Professional Incorporation';
      toDescription = "Let's begin the professional incorporation process.";
    } else if (to === 'S-Corp') {
      toTitle = 'Articles of Incorporation';
      toDescription = "Let's begin the incorporation process.";
    }

    return (
      <div className={ `${styles.container} wow fadeIn`}>
        <h1 className={ styles.title }>
          { 'Tax Calculation' }
        </h1>

        <div className={ styles['input-container'] }>
          Purchase Price :
          <input type="number" className={`${styles.input}`} name="price" min="0.00" value={ this.state.price } placeholder="Enter Purchase Price" onChange={this.onPrice.bind(this)} />
          <br />
          County Tax :
          <input type="text" className={`${styles.input}`} placeholder="" value={ this.state.countyTax } readOnly/>
          City Tax :
          <input type="text" className={`${styles.input}`} placeholder="" value={ this.state.cityTax } readOnly/>
          Total Tax :
          <input type="text" className={`${styles.input}`} placeholder="" value={ this.state.countyTax + this.state.cityTax } readOnly/>
        </div>

        <div className={ styles.footer }>
          <Button title="Back" style={ btnStyle } onClick={ this.onBack.bind(this) } />

          <div className={ styles['btn-container'] }>
            <span className={ styles['text'] }>Was this helpful? &nbsp;&nbsp;&nbsp;&nbsp; </span>
            <Button title="Yes" style={ btnStyle } onClick={ this.onShowDialog.bind(this) } />
            <Button title="Need Help" style={ btnStyle } />
          </div>
        </div>
        <TopicDialog show={ this.state.showDialog } close={ this.onCloseDialog.bind(this) }/>
      </div>
    );
  }
}

Topic.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  to: PropTypes.string,
  toForm: PropTypes.func
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    back: () => dispatch(hideFinalNode()),
    setFinalNode: (kind, data) => dispatch(setFinalNode(kind, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
