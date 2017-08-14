import React, { Component } from 'react';
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
    console.log(this.props.county);
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

export default CalculateTax;
