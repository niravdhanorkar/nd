import React, { Component } from 'react';
import {connect} from 'react-redux';

class PocketMoney extends Component {
    render() {
        console.log('pocket money =', this.props.pocketMoney)
        return (
            <div className='row text-center'>
                <h2>You have <span className='label label-success'>$ {this.props.pocketMoney}</span> amount in your pocket to spend on Grocery!         </h2>
                <br />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        pocketMoney: state.pocketMoney
    }
}
export default connect(mapStateToProps, null)(PocketMoney);