import login from './login_reducer';
import signup from './signup_reducer';
import profile from './profile_reducer';
import { combineReducers } from 'redux';

//combine all reducere in rootReducer
const rootReducer = combineReducers({
    login,
    signup,
    profile
});

export default rootReducer;





