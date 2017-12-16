import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { getItemById } from './helpers';

export default function pocketmoney(state = 50, action) {
    switch (action.type) {
        case ADD_GROCERY:
            let statsObj = getItemById(action.id);
            return state - statsObj.cost;
        case REMOVE_GROCERY:
            statsObj = getItemById(action.id);
            return state + statsObj.cost;
        default:
            return state;
    }
}

