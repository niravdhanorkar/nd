import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import {addToBag} from './helper';
//first time blank state return..
export default function shoppingBag(state = [], action) {
    switch (action.type) {
        case ADD_GROCERY:
            let shoppingBag = [...state, addToBag(action.id)];
            return shoppingBag;
        case REMOVE_GROCERY:
            shoppingBag = state.filter((item) => item.id !==action.id );
            return shoppingBag;
        default:
            return state;
    }
}
