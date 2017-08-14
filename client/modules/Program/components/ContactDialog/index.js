import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

// Import styles
import styles from './styles.css';

// Import Components

// Import Actions

// Import Assets

class ContactDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      message: ''
    }
  }

  componentDidMount() {

  }

  onChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert('onSubmit');
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header bsClass={styles['modal-header']} closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body bsClass={styles['modal-body']}>
          <div className="container-fluid">
            <div className="" >
              <form className="form" onSubmit={ this.onSubmit.bind(this) }>
                  <div className="form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Your Email address :</label>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                        <input name="email" placeholder="Email Address" className="form-control" type="text" required
                          value={ this.state.email } onChange={ this.onChange.bind(this) } />
                      </div>
                      <br/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Your Phone Number :</label>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                        <input name="phone" placeholder="(000)000-000000" className="form-control" type="text" required
                          value={ this.state.phone } onChange={ this.onChange.bind(this) } />
                      </div>
                      <br/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12 inputGroupContainer">
                      <label htmlFor="email">Message :</label>
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                        <textarea className="form-control" name="message" placeholder="Message" rows="4" cols="50" required
                          value={ this.state.message } onChange={ this.onChange.bind(this) } >
                        </textarea>
                      </div>
                      <br/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-info pull-right">Send <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer bsClass={styles['modal-footer']}>
        </Modal.Footer>
      </Modal>
    );
  }
}

ContactDialog.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {

  };
}

export default connect(mapStateToProps)(ContactDialog);
