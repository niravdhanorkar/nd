import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroceryById } from '../actions';

class Stats extends Component {
    render() {
        console.log("Grocery= ", this.props);
        return (
            <div  className='stats-bg'>
                <h2> Stats of items</h2>
                <ul className="list-group">
                    <li className="list-group-item">Total Cost: ${this.props.stats.cost}</li>
                    <li className="list-group-item">Total Calory: {this.props.stats.calories} kcal</li>
                    <li className="list-group-item">Total Weight: {this.props.stats.weight} mg</li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('mapStateToProps - stats.js id', state);
    return {
        stats: state.stats
    }
}
export default connect(mapStateToProps, null)(Stats);

