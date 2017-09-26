import { LOGIN, LOGOUT } from '../actions';
export default function profile(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            if (!state) {
                return {};
            }
            state = JSON.parse(localStorage.getItem('usersObj'));

            if (!state) {
                return {};
            }

            let userJson = state.find((user) => (user.email == action.email && user.password == action.password));
            if (userJson) {
                return userJson;
            }
            //return blank user json..if username ans password is wrong
            return {}
        case LOGOUT:
            // empty userJson
            return {};
        default:
            return state;
    }
}