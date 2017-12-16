import React, { Component } from 'react';
import {connect} from 'react-redux';

class PocketMoney extends Component {
    render() {
        return (
            <h2> You have 
                <span className='label label-primary'> {this.props.pocketmoney}</span>
                  in your Pocket to spend in Grocery
             </h2>
        )
    }
}

function mapStateToProps(state) {
    return {
        pocketmoney: state.pocketmoney
    }
}
export default connect(mapStateToProps, null)(PocketMoney);


