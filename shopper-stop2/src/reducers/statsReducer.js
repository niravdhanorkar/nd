import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { getItemById } from './helpers';

export default function stats(state = { cost: 0, calories: 0, weight: 0 }, action) {
    switch (action.type) {
        case ADD_GROCERY:
            let statsObj = getItemById(action.id);
            return {
                cost: state.cost + statsObj.cost,
                calories: state.calories + statsObj.calories,
                weight: state.weight + statsObj.weight
            }
        case REMOVE_GROCERY:
            statsObj = getItemById(action.id);
            return {
                cost: state.cost - statsObj.cost,
                calories: state.calories - statsObj.calories,
                weight: state.weight - statsObj.weight
            }
        default:
            return state;
    }
}

