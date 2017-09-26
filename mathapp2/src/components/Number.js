import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { incrementNumber, decrementNumber } from '../actions';

class Number extends Component {
    render() {
        // let num = 10;
        return (
            <div>
                <div className='row col-sm-offset-2'>
                    <div>{this.props.num}</div>
                </div>
                <div className='row col-sm-offset-2'>
                    <Button
                        bsStyle='primary'
                        onClick={() => this.props.incrementNumber(this.props.num)}
                    >Increase value</Button>
                    <Button
                        bsStyle='primary'
                        onClick={() => this.props.decrementNumber(this.props.num)}
                    >Decrement value</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps - Number.js', state);
    return {
        num: state.num
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ incrementNumber, decrementNumber }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Number);
export default connect(mapStateToProps, { incrementNumber, decrementNumber })(Number);
