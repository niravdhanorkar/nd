import { LOGIN, LOGOUT } from '../actions';
//export default function login(state = {doneLogin:false}, action) {
export default function login(state = JSON.parse(localStorage.getItem('usersObj')), action) {
    switch (action.type) {
        case LOGIN:
            let doneLogin = false;

            state = JSON.parse(localStorage.getItem('usersObj'));
            if (!state) {
                return { doneLogin: doneLogin };
            }

            let isExistingUser = state.find((user) => (user.email == action.email && user.password == action.password));
            if (isExistingUser) {
                doneLogin = true;
            }
            return { doneLogin: doneLogin };
        case LOGOUT:
            return { doneLogin: doneLogin };
        default:
            //place because first time localstorage is null and Null value returning gives error
            if (state) {
                return state;
            }
            return { doneLogin: false };
    }
}