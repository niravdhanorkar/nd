import grocery from './grocery_reducer';
import shoppingBag from './shoppingBag_reducer';
import pocketMoney from './spending_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    grocery,
    shoppingBag,
    pocketMoney
});

export default rootReducer;