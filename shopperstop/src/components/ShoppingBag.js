import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeGroceryById, addPocketMoneyById } from '../actions';

class ShoppingBag extends Component {
    displayShoppongBag() {
        if (this.props.shoppingBag.length > 0) {
            return (
                <ul className="list-group">
                    {
                        this.props.shoppingBag.map((item) => {
                            return <li key={item.id}
                                className="list-group-item"
                                onClick={() => {
                                    this.props.removeGroceryById(item.id);
                                    this.props.addPocketMoneyById(item.id);
                                    }
                                }
                            >
                                <b>{item.name}</b>
                                - <span className='label label-info'>$ {item.cost}</span>
                                -  <span className='label label-warning'>{item.calories} kcal </span>
                                -  <span className='label label-primary'>{item.weight}mg</span>
                            </li>
                        })
                    }
                </ul>
            )
        } else {
            return (
                <ul className="list-group">
                    <li className="list-group-item">Please select Items.</li>
                </ul>
            )
        }
    }
    render() {
        return (
            <div className='col-md-3 shopping-bag-bg'>
                <h2 className='text-center'> ShoppingBag Itmes </h2>
                {this.displayShoppongBag()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, { removeGroceryById, addPocketMoneyById })(ShoppingBag); 