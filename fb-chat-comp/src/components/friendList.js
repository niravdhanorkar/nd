import React, { Component } from 'react';
import data from '../json/data.json';
import FriendListItem from './friendListItem';

class FriendList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }   
    }
    
    componentWillMount(){
        this.setState({
            data
        });        
    }

    render(){
        return(
            <div className="box">
                    {
                        this.state.data.map( (user, index) => {
                          return <FriendListItem user={user} key={index} index={index} />
                        }) 
                    }               
            </div>        
        )
    }
}

export default FriendList;