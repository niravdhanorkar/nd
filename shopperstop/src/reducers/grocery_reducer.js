import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import groceryItemsList from '../data/groceryItems.json';
import { addToBag } from './helper';

//for first time groceryItemsList load.
// after that function call will pass state as argument.
export default function grocery(state = groceryItemsList, action) {
    switch (action.type) {
        case ADD_GROCERY:
            let grocery = state.filter(item => item.id != action.id);
            return grocery;
        case REMOVE_GROCERY:
            grocery = [...state, addToBag(action.id)];
            return grocery;
        default:
            return state;
    }
}