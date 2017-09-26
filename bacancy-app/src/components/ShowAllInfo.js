//importing
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveAllInfo, emptySignup } from '../actions';

class ShowAllInfo extends Component {
  render() {
      if (this.props.signup.profileCreated) {
          this.props.emptySignup(true);
          this.props.history.push("/login");
      }

      return (
        <div className='row'>
              <h2>Show all details</h2>
              Image: <img alt='profile image' src={this.props.signup.image} width="150" height="150" />
              <br/>
              First Name: {this.props.signup.fname}
              <br />
              Last Name: {this.props.signup.lname}
              <br />
              email: {this.props.signup.email}
              <br />

              <Button
                  bsStyle='primary'
                  onClick={() => this.props.saveAllInfo(true) }
              >Save and Next &gt;&gt; </Button>
          </div>
      )
  }
}
function mapStateToProps(state) {
  return {
      signup: state.signup
  }
}
export default connect(mapStateToProps, { saveAllInfo, emptySignup })(ShowAllInfo);