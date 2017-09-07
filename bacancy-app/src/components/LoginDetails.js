//importing
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addLoginData } from '../actions';



class LoginDetails extends Component {
  render() {

    if (this.props.signup.email !== "" && this.props.signup.password !== "") {
      this.props.history.push("/imageupload");
    }

    return (
      <div className='row'>
        <h2>Login Details</h2>
        Email: <input type='text' ref='email' placeholder="Enter Email" />
        <br />
        Password: <input type='password' ref='password' placeholder="Enter Password" />
        <br />
        Repeat Password: <input type='password' ref='cpassword' placeholder="Repeat Password" />
        <br />
        &nbsp;
        <Button
          bsStyle='primary'
          onClick={() => this.props.addLoginData(this.refs.email.value, this.refs.password.value)}
        >Next &gt; &gt; </Button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    signup: state.signup
  }
}

export default connect(mapStateToProps, { addLoginData })(LoginDetails);

