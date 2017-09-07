import { INC_NUMBER, DEC_NUMBER } from '../actions';

function performAction(state = { num: 0 }, action) {
    switch (action.type) {
        case INC_NUMBER:
            console.log('actions: incrment number - in reducer');
            let num = state.num + 1;
            return { num };
        case DEC_NUMBER:
            console.log('actions: decrement number - in reducer');
            num = state.num - 1;
            return { num };
        default:
            return state;
    }
}
export default performAction;