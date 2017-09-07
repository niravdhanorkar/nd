import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { doLogout } from '../actions';
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    render() {
        if(!this.props.doneLogin){            
            this.props.history.push("/login");
        }
        return (
            <div className='row'>
                <h3> Welcome {this.props.fname}&nbsp;{this.props.lname}</h3>
                <Button
                    bsStyle='primary'
                    onClick={() => this.props.doLogout(false)}
                >LOGOUT</Button>
                <h1 > Home </h1>
                
                <Link to="/showprofile">Show Profile</Link>
            </div>
        );

    }
}
function mapStateToProps(state) {
    return {
        doneLogin: state.login.doneLogin,
        fname : state.profile.fname,
        lname : state.profile.lname

    }
}
export default connect(mapStateToProps, { doLogout })(Home);