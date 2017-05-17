import React, {Component} from 'react';
import   '../App.css';

class FriendListItem extends Component{

    constructor(props){
        super(props);        
    }

    render(){
        const {user, index} = this.props;  
        const {friends} = user;  
        return(
            <div className='inner-box' key={index}>
                <img height={80} width={80} src={user.thumbnail_image}  alt={user.title} />
                <div>
                    <span className='blue-font'> {user.title} </span>             
                    <FriendListInfo index={index} friendsTotal={friends} />
                </div>
            </div>
        )         
    }
}
function FriendListInfo(props){ 
    return  (
        <div className='gray-font' key={props.index}>
            {props.friendsTotal} Friends
        </div>
    )        
};

export default FriendListItem;
