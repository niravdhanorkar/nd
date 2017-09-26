import React, { Component } from 'react';

class ShowUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { user, handleDelete } = this.props;
        return <li key={user.id}>{user.name}<span onClick={handleDelete}>X</span></li>;        
    }
    handleDelete(){
        this.props.onDelete(this.props.user);
    }
}

export default ShowUser;