import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../actions';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Login extends Component {
    render() {               
        if(this.props.doneLogin){            
            this.props.history.push("/");
        }

        return (
            <div className='row'>
                    Email: <input name='email' ref="email"  type='email' />
                    Password: <input name ='email' ref="password" id='password' type='password' />
                    <Button     
                        bsStyle='primary'
                        onClick={() => this.props.doLogin(this.refs.email.value, this.refs.password.value)}                       
                    >Login</Button>
                    <Link to='/profiledetails'>Signup</Link>                 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        doneLogin: state.login.doneLogin,
        signup:state.signup
    }
}
export default connect(mapStateToProps, { doLogin })(Login);