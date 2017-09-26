import { INC_NUMBER, DEC_NUMBER } from '../actions'


export default function performAction(state = { num: 0 }, action) {
    switch (action.type) {
        case INC_NUMBER:
            console.log('Action Permormed from reducer');
            console.log(state, action);
            let num = state.num + 1;
            return { num };
        case DEC_NUMBER:
            console.log('Action Permormed from reducer');
            console.log(state, action);
            num = state.num - 1;
            return { num };
        default:
            return state;
    }
}