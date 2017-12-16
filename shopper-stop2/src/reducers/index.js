import grocery from './groceryReducer';
import bag from './bagReducer';
import stats from './statsReducer';
import pocketmoney from './pocketmoneyReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    grocery,
    bag,
    stats,
    pocketmoney
});

export default rootReducer;
