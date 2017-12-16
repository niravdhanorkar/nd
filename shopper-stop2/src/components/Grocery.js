import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroceryById } from '../actions';

class Grocery extends Component {
    render() {
        { console.log("Grocery= ", this.props); }
        return (
            <div  className='grocery-bg'>
                <h2> Grocery items</h2>
                <ul className="list-group">
                    {
                        this.props.grocery.map((item) => {
                            return <li
                                className="list-group-item"
                                onClick={() => {
                                    this.props.addGroceryById(item.id);
                                }}
                                key={item.id}
                            >
                                {item.name} -
                                <span className='label label-default'>$ {item.cost}</span>-
                                <span className='label label-info'>{item.calories} kcal</span>-
                                <span className='label label-primary'>{item.weight} mg</span>                                
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps - grocery.js id', state);
    return {
        grocery: state.grocery
    }
}
export default connect(mapStateToProps, { addGroceryById })(Grocery);

