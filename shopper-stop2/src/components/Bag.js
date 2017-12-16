import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromBagById } from '../actions';

class Bag extends Component {
    bagContains = () => {
        if (this.props.bag.length > 0) {
            return this.props.bag.map((item) => {
                return <li
                    className="list-group-item"
                    key={item.id}
                    onClick={() => {
                        this.props.removeFromBagById(item.id);
                    }}
                >
                    {item.name} -
                                <span className='label label-default'>$ {item.cost}</span>-
                                <span className='label label-info'>{item.calories} kcal</span>-
                                <span className='label label-primary'>{item.weight} mg</span>
                </li>
            })
        } else {
            return <li
                className="list-group-item"
            >
                No items in bag.
        </li>
        }
    }
    render() {
        { console.log("Bag = ", this.props); }
        return (
            <div className='bag-bg'>
                <h2> Bag </h2>
                <ul className="list-group">
                    {
                        this.bagContains()
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps - bag.js id', state);
    return {
        bag: state.bag
    }
}
export default connect(mapStateToProps, { removeFromBagById })(Bag);