//importing
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Profile extends Component {
    render() {  
        return (
            <div className='row'>
                <Link to="/">HOME</Link>
                <br/>

                <h2>User's profile</h2>

                Image: <img alt='image' src={this.props.profile.image} width="150" height="150" />
                <br />
                First Name: {this.props.profile.fname}
                <br />
                Last Name: {this.props.profile.lname}
                <br />
                email: {this.props.profile.email}
                <br />

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(Profile);