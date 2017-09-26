//importing
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addProfileData } from '../actions';

class ProfileDetails extends Component {
    render() {

        if (this.props.signup.fname !== "" && this.props.signup.lname !== "" ) {
            this.props.history.push("/logindetails");
        }
        return (
            <div className='row'>
                <h2>Profile Details</h2>
                First Name: <input type='text' ref='fname' placeholder="Enter First Name"  />
                <br />
                Last Name: <input type='text' ref='lname' placeholder="Enter Last Name" />
                <br />
                <Button
                    bsStyle='primary'
                    onClick={() => this.props.addProfileData(this.refs.fname.value, this.refs.lname.value) }
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

export default connect(mapStateToProps, { addProfileData })(ProfileDetails);