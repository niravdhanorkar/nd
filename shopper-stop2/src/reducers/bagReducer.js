import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import { getItemById } from './helpers';

export default function bag(state = [], action) {
    switch (action.type) {
        case ADD_GROCERY:
            let bag = getItemById(action.id);
            return [...state, bag];
        case REMOVE_GROCERY:
            bag = state.filter( (item) =>   item.id != action.id );
            return bag;
        default:
            return state;
    }
}

